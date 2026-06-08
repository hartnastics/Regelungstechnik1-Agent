/* =====================================================
   Regelungstechnik 1 – gemeinsame Mathe- & Plot-Engine
   (verifiziert: Wurzelfinder, Bode, Sprungantwort, Ortskurve)
   ===================================================== */

/* ---- Tab-Umschaltung ---- */
window.RT_RENDER = {};            // pro Seite gefüllt: { tabId: renderFn }
function showTab(id){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  var el=document.getElementById('tab-'+id); if(el) el.classList.add('active');
  if(typeof event!=='undefined'&&event.target) event.target.classList.add('active');
  var f=window.RT_RENDER[id]; if(f) setTimeout(f,60);
}

/* ---- Grundfunktionen ---- */
var log10=function(x){return Math.log(x)/Math.LN10;};
function logspace(a,b,n){var r=[];for(var i=0;i<n;i++)r.push(Math.pow(10,a+(b-a)*i/(n-1)));return r;}
function linspace(a,b,n){var r=[];for(var i=0;i<n;i++)r.push(a+(b-a)*i/(n-1));return r;}

/* ---- Polynome (höchster Grad zuerst) ---- */
function polymul(a,b){var r=new Array(a.length+b.length-1).fill(0);for(var i=0;i<a.length;i++)for(var j=0;j<b.length;j++)r[i+j]+=a[i]*b[j];return r;}
function polyadd(a,b){var n=Math.max(a.length,b.length),r=new Array(n).fill(0);for(var i=0;i<a.length;i++)r[n-a.length+i]+=a[i];for(var j=0;j<b.length;j++)r[n-b.length+j]+=b[j];return r;}

/* ---- Wurzeln eines reellen Polynoms (Durand-Kerner) ---- */
function polyRoots(c0){
  var c=c0.slice(); while(c.length>1&&Math.abs(c[0])<1e-12)c.shift();
  var n=c.length-1; if(n<1)return [];
  var a=c.map(function(v){return v/c[0];});
  function ev(re,im){var sr=a[0],si=0;for(var k=1;k<a.length;k++){var nr=sr*re-si*im+a[k],ni=sr*im+si*re;sr=nr;si=ni;}return [sr,si];}
  var R=[];for(var i=0;i<n;i++){var an=2*Math.PI*i/n+0.4;R.push([0.7*Math.cos(an)+0.05,0.7*Math.sin(an)]);}
  for(var it=0;it<300;it++){var md=0;
    for(var i2=0;i2<n;i2++){var f=ev(R[i2][0],R[i2][1]);var dr=1,di=0;
      for(var j=0;j<n;j++){if(j===i2)continue;var er=R[i2][0]-R[j][0],ei=R[i2][1]-R[j][1];var nr=dr*er-di*ei,ni=dr*ei+di*er;dr=nr;di=ni;}
      var dn=dr*dr+di*di||1e-12;var qr=(f[0]*dr+f[1]*di)/dn,qi=(f[1]*dr-f[0]*di)/dn;R[i2][0]-=qr;R[i2][1]-=qi;md=Math.max(md,Math.abs(qr)+Math.abs(qi));}
    if(md<1e-11)break;}
  return R.map(function(r){return {re:r[0],im:Math.abs(r[1])<1e-6?0:r[1]};});
}

/* ---- Nulldurchgang / Schnittpunkt (für Bode-Reserven) ---- */
function crossing(X,Y,t){
  for(var i=0;i<X.length-1;i++){
    if((Y[i]-t)*(Y[i+1]-t)<=0 && Y[i]!==Y[i+1]){
      var fr=(t-Y[i])/(Y[i+1]-Y[i]);
      return Math.pow(10,log10(X[i])+fr*(log10(X[i+1])-log10(X[i])));
    }
  }
  return null;
}

/* ---- Frequenzgang eines Grundglieds (Bode) ---- */
function gliedResp(type,K,T,D,w){
  var wt=w*T,m,ph,as;
  if(type==='PT1'){m=K/Math.sqrt(1+wt*wt);ph=-Math.atan(wt)*180/Math.PI;as=(w<1/T)?20*log10(K):20*log10(K)-20*log10(wt);}
  else if(type==='PT2'){var w0=1/T,x=w/w0,d=Math.sqrt((1-x*x)*(1-x*x)+(2*D*x)*(2*D*x));m=K/d;ph=-Math.atan2(2*D*x,1-x*x)*180/Math.PI;as=(w<w0)?20*log10(K):20*log10(K)-40*log10(w/w0);}
  else if(type==='I'){m=K/w;ph=-90;as=20*log10(m);}
  else if(type==='IPT1'){m=K/(w*Math.sqrt(1+wt*wt));ph=-90-Math.atan(wt)*180/Math.PI;as=20*log10(K)-20*log10(w)-((w>1/T)?20*log10(wt):0);}
  else if(type==='D'){m=K*w;ph=90;as=20*log10(m);}
  return {magdB:20*log10(m),phDeg:ph,as:as};
}

/* ---- Sprungantwort einer ÜF num/den (RK4, Regelungsnormalform) ---- */
function stepResponse(num,den,tEnd,dt){
  var d0=den[0];den=den.map(function(v){return v/d0;});num=num.map(function(v){return v/d0;});
  var n=den.length-1;var nm=num.slice();while(nm.length<n)nm.unshift(0);if(nm.length>n)nm=nm.slice(nm.length-n);
  var al=[],be=[];for(var k=0;k<n;k++)al[k]=den[n-k];for(var j=0;j<n;j++)be[j]=nm[n-1-j];
  function dv(x){var d=new Array(n).fill(0);for(var i=0;i<n-1;i++)d[i]=x[i+1];var s=1;for(var k2=0;k2<n;k2++)s-=al[k2]*x[k2];d[n-1]=s;return d;}
  var x=new Array(n).fill(0),ly=0,ts=[],ys=[];
  for(var t=0;t<=tEnd+1e-9;t+=dt){var y=0;for(var j2=0;j2<n;j2++)y+=be[j2]*x[j2];ly=y;ts.push(t);ys.push(y);
    var k1=dv(x),x2=x.map(function(v,i){return v+dt/2*k1[i];}),k2=dv(x2),x3=x.map(function(v,i){return v+dt/2*k2[i];}),k3=dv(x3),x4=x.map(function(v,i){return v+dt*k3[i];}),k4=dv(x4);
    x=x.map(function(v,i){return v+dt/6*(k1[i]+2*k2[i]+2*k3[i]+k4[i]);});}
  return {t:ts,y:ys,last:ly};
}

/* ---- Plotly-Hilfen ---- */
var FONT={family:'Inter,sans-serif',size:12};
function bodeLayout(){return {grid:{rows:2,columns:1,pattern:'independent'},
  xaxis:{type:'log',gridcolor:'#eef2f7',domain:[0,1]},
  yaxis:{title:'Betrag [dB]',gridcolor:'#eef2f7',domain:[0.56,1]},
  xaxis2:{type:'log',title:'ω [rad/s]',gridcolor:'#eef2f7',domain:[0,1]},
  yaxis2:{title:'Phase [°]',gridcolor:'#eef2f7',domain:[0,0.44],dtick:45},
  margin:{l:60,r:20,t:18,b:46},plot_bgcolor:'#fafafa',paper_bgcolor:'white',font:FONT,legend:{orientation:'h',y:1.08}};}
function plotLayout(xt,yt){return {xaxis:{title:xt,gridcolor:'#eef2f7'},yaxis:{title:yt,gridcolor:'#eef2f7'},margin:{l:58,r:20,t:30,b:48},plot_bgcolor:'#fafafa',paper_bgcolor:'white',font:FONT};}
function setVerdict(el,ok,txt){el.textContent=txt;el.style.background=ok?'#ecfdf5':'#fef2f2';el.style.color=ok?'#166534':'#991b1b';el.style.border='1px solid '+(ok?'#6ee7b7':'#fca5a5');}
var ACCENT=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#4f46e5';

/* ---- responsives Resize ---- */
window.addEventListener('resize',function(){
  document.querySelectorAll('.plot').forEach(function(el){ if(el.offsetParent!==null && window.Plotly) Plotly.Plots.resize(el); });
});
