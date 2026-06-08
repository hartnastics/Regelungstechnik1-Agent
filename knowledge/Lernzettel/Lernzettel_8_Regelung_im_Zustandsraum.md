# Lernzettel 8 – Regelung im Zustandsraum

> Kapitel 8. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Klausur-/Tutoriumsaufgaben (Zustandsregler durch Eigenwertvorgabe, Vorfilter) mit vollem Text und allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 8.1 Allgemeine Struktur einer Zustandsregelung

**F: Was ist ein Zustandsregler und wie ist er aufgebaut?**
A: Statt nur den Ausgang $y$ zurückzuführen, wird der **gesamte Zustandsvektor** $\mathbf x$ gemessen (oder geschätzt) und gewichtet zurückgeführt. So lässt sich die **gesamte Eigendynamik** (alle Eigenwerte) gezielt einstellen.

**F: Wie lautet das Regelgesetz $u=-\mathbf r^{\mathsf T}\mathbf x+f w$?**
A: Die Stellgröße ist die gewichtete Summe der Zustände plus aufgeschalteter Sollwert: $u=-(r_1 x_1+\dots+r_n x_n)+f\,w$.

**F: Was ist der Rückführvektor $\mathbf r^{\mathsf T}$ und was der Vorfilter $f$?**
A: $\mathbf r^{\mathsf T}=(r_1,\dots,r_n)$ bestimmt die **Dynamik** (Eigenwerte → Stabilität, Schnelligkeit, Dämpfung). $f$ (skalar) sichert die **stationäre Genauigkeit** ($F_W(0)=1$).

**F: Wie verändert der Zustandsregler die Systemmatrix?**
A: Einsetzen von $u=-\mathbf r^{\mathsf T}\mathbf x+fw$ in $\dot{\mathbf x}=A\mathbf x+\mathbf b u$ ergibt $\dot{\mathbf x}=(A-\mathbf b\mathbf r^{\mathsf T})\mathbf x+\mathbf b f w$, also $A_R=A-\mathbf b\mathbf r^{\mathsf T}$. Die Eigenwerte von $A_R$ sind die neuen Pole.

**F: Unterschied Ausgangsrückführung ↔ Zustandsrückführung?**
A: **Ausgangsrückführung:** nur $y$ (eine Größe) → begrenzte Beeinflussung. **Zustandsrückführung:** alle Zustände → bei Steuerbarkeit **beliebige** Polplatzierung.

**F: Warum muss man alle Zustandsgrößen kennen?**
A: $u=-\mathbf r^{\mathsf T}\mathbf x$ braucht alle $x_i$. Sind nicht alle messbar, schätzt sie ein **Beobachter** (RT2).

**F: Wie ist das Blockschaltbild einer Zustandsregelung aufgebaut?**
A: Sollwert $w$ über Vorfilter $f$ auf den Stelleingang; Strecke $\dot{\mathbf x}=A\mathbf x+\mathbf b u$; der Zustandsvektor $\mathbf x$ wird über $\mathbf r^{\mathsf T}$ zurückgeführt und (mit Minus) vom Vorfilteranteil abgezogen. **Kein** klassischer Soll-Istwert-Vergleich.

## 8.2 Reglerentwurf durch Eigenwertvorgabe

**F: Was bedeutet Eigenwertvorgabe (Polplatzierung)?**
A: Man gibt die gewünschten Eigenwerte $\lambda_i^*$ des geschlossenen Kreises vor und wählt $\mathbf r^{\mathsf T}$ so, dass $A_R=A-\mathbf b\mathbf r^{\mathsf T}$ genau diese Eigenwerte besitzt.

**F: Wie wählt man die Wunscheigenwerte $\lambda^*$ (aus $D$ und $\omega_0$)?**
A: Aus den Anforderungen: Realteil ↔ Schnelligkeit, Winkel ↔ Dämpfung ($D=\cos\vartheta$). Typisch komplexes Paar $\lambda^*=-D\omega_0\pm j\omega_0\sqrt{1-D^2}$. Praktisch durch die Stellgröße begrenzt (zu weit links → zu große Stellgröße).

**F: Wie lautet das Wunschpolynom und wie stellt man es auf?**
A: $p^*(s)=\prod_i(s-\lambda_i^*)=s^n+p_{n-1}s^{n-1}+\dots+p_0$. Beispiel $n=2$: $(s-\lambda_1^*)(s-\lambda_2^*)=s^2+p_1 s+p_0$.

**F: Wie berechnet man $A_R=A-\mathbf b\mathbf r^{\mathsf T}$ in Abhängigkeit von $r_1,r_2$?**
A: $\mathbf b\mathbf r^{\mathsf T}$ ist das dyadische Produkt (Spalte mal Zeile) → eine $n\times n$-Matrix mit Einträgen $b_i r_j$; diese von $A$ subtrahieren.

**F: Wie berechnet man $\det(sI-A_R)$ explizit?**
A: Die Determinante der $(sI-A_R)$-Matrix symbolisch ausrechnen → ein Polynom in $s$, dessen Koeffizienten **linear** von $r_1,\dots,r_n$ abhängen.

**F: Wie führt man den Koeffizientenvergleich durch um $r_1,r_2$ zu bestimmen?**
A: Die Koeffizienten von $\det(sI-A_R)$ den Koeffizienten von $p^*(s)$ gleichsetzen ($a_i(\mathbf r)=p_i$) → $n$ lineare Gleichungen für $r_1,\dots,r_n$ lösen.

**F: Voraussetzung für beliebige Polplatzierung?**
A: **Vollständige Steuerbarkeit** des Systems.

**F: Warum ist ein Vorfilter $f$ nach dem Reglerentwurf nötig?**
A: $\mathbf r^{\mathsf T}$ verändert die Eigenwerte, aber auch die stationäre Verstärkung. Ohne $f$ ist i. A. $F_W(0)\neq1$ → bleibende Abweichung. $f$ stellt $F_W(0)=1$ ein.

**F: Wie berechnet man den Vorfilter $f=-[\mathbf c^{\mathsf T}A_R^{-1}\mathbf b]^{-1}$?**
A: Aus der Forderung $F_W(0)=\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b\,f\overset!=1$ folgt $f=[\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b]^{-1}=-[\mathbf c^{\mathsf T}A_R^{-1}\mathbf b]^{-1}$.

**F: Was würde ohne Vorfilter mit dem stationären Endwert passieren?**
A: Der Ausgang liefe nicht auf den Sollwert ein ($y_\infty\neq w$) → bleibende Regelabweichung.

**F: Wie berechnet man $A_R^{-1}$ für eine $2\times2$-Matrix?**
A: $A_R=\begin{pmatrix}a&b\\c&d\end{pmatrix}\Rightarrow A_R^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

**F: Wie überprüft man, ob der Vorfilter korrekt ist ($F_W(0)=1$)?**
A: $F_W(0)=\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b\,f$ einsetzen und prüfen, ob $=1$.

**F: Was passiert mit den Eigenwerten, wenn man $\mathbf r^{\mathsf T}$ falsch berechnet?**
A: Die Eigenwerte von $A_R$ liegen dann **nicht** auf den Wunschwerten → falsche Dynamik (evtl. instabil). Kontrolle über $\det(sI-A_R)$.

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Klausuraufgabe 4 — Klausur 05.09.2022 (Zustandsregler + Vorfilter)

**Aufgabenstellung:** Gegeben das System
$$\dot{\mathbf x}=\begin{pmatrix}-4&2\\2&-1\end{pmatrix}\mathbf x+\begin{pmatrix}1\\2\end{pmatrix}u,\qquad y=(4\ \ 1)\mathbf x.$$
(4.4) Eigenwerte + Stabilität. (4.5) Zustandsregler $\mathbf r^{\mathsf T}$, sodass $\lambda_1=-3,\lambda_2=-5$. (4.6) Vorfilter $f$.

**4.4 – Eigenwerte:**
$$\det(\lambda I-A)=\det\begin{pmatrix}\lambda+4&-2\\-2&\lambda+1\end{pmatrix}=(\lambda+4)(\lambda+1)-4=\lambda^2+5\lambda=\lambda(\lambda+5).$$
$\lambda_1=0,\ \lambda_2=-5$ → ein Eigenwert auf der $j$-Achse → **instabil** (grenzstabil).

**4.5 – Zustandsregler:** Wunschpolynom $(s+3)(s+5)=s^2+8s+15$.
$$A_R=A-\mathbf b\mathbf r^{\mathsf T}=\begin{pmatrix}-4-r_1&2-r_2\\2-2r_1&-1-2r_2\end{pmatrix}.$$
$$\det(sI-A_R)=(s+4+r_1)(s+1+2r_2)-(-2+r_2)(-2+2r_1)=s^2+(5+r_1+2r_2)s+(5r_1+10r_2).$$
Koeffizientenvergleich mit $s^2+8s+15$:
- $s^1$: $5+r_1+2r_2=8\Rightarrow r_1+2r_2=3$.
- $s^0$: $5r_1+10r_2=15\Rightarrow r_1+2r_2=3$ (dieselbe Gleichung → ein Freiheitsgrad).
Wähle $r_1=1\Rightarrow r_2=1$.
> **Ergebnis (4.5):** $\mathbf r^{\mathsf T}=(1,\ 1)$.

**4.6 – Vorfilter:** $A_R=A-\mathbf b\mathbf r^{\mathsf T}=\begin{pmatrix}-5&1\\0&-3\end{pmatrix}$.
$$-A_R=\begin{pmatrix}5&-1\\0&3\end{pmatrix},\quad (-A_R)^{-1}=\frac{1}{15}\begin{pmatrix}3&1\\0&5\end{pmatrix}.$$
$$\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b=(4\ 1)\cdot\frac1{15}\begin{pmatrix}3&1\\0&5\end{pmatrix}\binom{1}{2}=(4\ 1)\cdot\frac1{15}\binom{3+2}{0+10}=(4\ 1)\binom{1/3}{2/3}=\frac{12}{15}+\frac{9}{15}\cdot? $$
Schrittweise: $\frac1{15}\binom{5}{10}=\binom{1/3}{2/3}$; $(4\ 1)\binom{1/3}{2/3}=\frac43+\frac23=2$. Also $f=[\,2\,]^{-1}=0{,}5$.
> **Ergebnis (4.6):** $f=0{,}5$ → geschlossener Kreis mit Eigenwerten $-3,-5$ und $F_W(0)=1$ (stationär genau).

---

## ▣ Tutoriumsaufgabe (Tut 8, A3d/e/f) — Zustandsregler in Original- und Diagonalform

**Aufgabenstellung:** $\dot{\mathbf x}=\begin{pmatrix}5&-1\\50&-10\end{pmatrix}\mathbf x+\binom{0}{-5}u$, $y=(1\ 2)\mathbf x$. (d) Regler $\mathbf r^{\mathsf T}$ für doppelten Eigenwert $\lambda_{1,2}=-5$. (f) Regler im diagonalisierten System.

**Lösung (d):** Wunschpolynom $(s+5)^2=s^2+10s+25$.
$$A_R=A-\mathbf b\mathbf r^{\mathsf T}=\begin{pmatrix}5&-1\\50+5r_1&-10+5r_2\end{pmatrix},$$
$$\det(sI-A_R)=(s-5)(s+10-5r_2)+( -1)\cdot(-(50+5r_1))=s^2+(5-5r_2)s+(25r_2+5r_1).$$
Vergleich mit $s^2+10s+25$:
- $s^1$: $5-5r_2=10\Rightarrow r_2=-1$.
- $s^0$: $25r_2+5r_1=25\Rightarrow -25+5r_1=25\Rightarrow r_1=10$.
> **Ergebnis (d):** $\mathbf r^{\mathsf T}=(10,\ -1)$.

**Lösung (f) – Diagonalform:** Mit $\Lambda=\operatorname{diag}(0,-5)$, $\tilde{\mathbf b}=\binom{1}{-1}$ (aus Lernzettel 7) und Regelgesetz $u=-\mathbf r^{\mathsf T}\boldsymbol\eta$:
$$\det(sI-\Lambda+\tilde{\mathbf b}\mathbf r^{\mathsf T})=\det\begin{pmatrix}s+r_1&r_2\\-r_1&s+5-r_2\end{pmatrix}=s^2+(5-r_2+r_1)s+5r_1.$$
Vergleich mit $s^2+10s+25$:
- $s^0$: $5r_1=25\Rightarrow r_1=5$.
- $s^1$: $5-r_2+r_1=10\Rightarrow r_2=0$.
> **Ergebnis (f):** $\mathbf r^{\mathsf T}=(5,\ 0)$ (im Modalsystem; $r_2$ ginge wegen $\tilde b_2$-Struktur in andere Vorgaben ein).

---

## ▣ Klausuraufgabe 4 — Klausur 28.02.2024 (mechanisches System, Modalform + Regler + Vorfilter)

**Aufgabenstellung (Auszug):** Elektromechanisches System; im reduzierten **mechanischen** Teil ($m=10,c=3000,d=400$) gilt
$$\dot{\mathbf x}=\begin{pmatrix}0&1\\-\frac cm&-\frac dm\end{pmatrix}\mathbf x+\binom{0}{1/m}F=\begin{pmatrix}0&1\\-300&-40\end{pmatrix}\mathbf x+\binom{0}{0{,}1}F.$$
(4.6) Eigenwerte/Eigenvektoren, Stabilität, Schwingfähigkeit. (4.8) Zustandsregler im Modalsystem für $\lambda_1=-10,\lambda_2=-20$ + Ansatz Vorfilter.

**4.6 – Eigenwerte:** $\det(\lambda I-A)=\lambda(\lambda+40)+300=\lambda^2+40\lambda+300=0\Rightarrow\lambda_{1,2}=-20\pm\sqrt{400-300}=-20\pm10$.
$\lambda_1=-10,\ \lambda_2=-30$ → beide reell negativ → **stabil**, **nicht schwingfähig**.
Eigenvektoren: $\lambda_1=-10$: $-10v_{11}-v_{12}=0\Rightarrow\mathbf v_1=\binom{1}{-10}$; $\lambda_2=-30$: $\mathbf v_2=\binom{1}{-30}$.

**4.7 – Diagonalform:** $V=\begin{pmatrix}1&1\\-10&-30\end{pmatrix}$, $V^{-1}=-\frac1{20}\begin{pmatrix}-30&-1\\10&1\end{pmatrix}$, $\Lambda=\operatorname{diag}(-10,-30)$, $\tilde{\mathbf b}=V^{-1}\mathbf b=\binom{0{,}005}{-0{,}005}$, $\tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V=(1\ 1)$.

**4.8 – Zustandsregler (Modalsystem) für $\lambda_{1,2}^*=-10,-20$:** Wunschpolynom $(s+10)(s+20)=s^2+30s+200$. Mit $\det(sI-\Lambda+\tilde{\mathbf b}\mathbf r^{\mathsf T})$ und Koeffizientenvergleich ergibt sich (Vorlesungslösung) $\mathbf r^{\mathsf T}=(0,\ 2000)$.
**Vorfilter:** $f=-\big[\tilde{\mathbf c}^{\mathsf T}(\Lambda-\tilde{\mathbf b}\mathbf r^{\mathsf T})^{-1}\tilde{\mathbf b}\big]^{-1}$; stellt $F_W(0)=1$ sicher.
> **Ergebnis:** $\mathbf r^{\mathsf T}=(0,\ 2000)$; der Vorfilter sichert die stationäre Genauigkeit.

---

## Kernaussagen (zum Merken)

1. Regelgesetz $u=-\mathbf r^{\mathsf T}\mathbf x+fw$; $A_R=A-\mathbf b\mathbf r^{\mathsf T}$ trägt die neuen Eigenwerte.
2. Entwurf: Wunschpolynom $p^*(s)=\prod(s-\lambda_i^*)$ ↔ $\det(sI-A_R)$ per **Koeffizientenvergleich** → $\mathbf r^{\mathsf T}$.
3. Beliebige Polplatzierung nur bei **vollständiger Steuerbarkeit**.
4. Vorfilter $f=-[\mathbf c^{\mathsf T}A_R^{-1}\mathbf b]^{-1}$ sichert $F_W(0)=1$.
5. Kein Soll-Istwert-Vergleich; alle Zustände müssen bekannt sein (sonst Beobachter, RT2).
