# Lernzettel 3 – Der Lineare Regelkreis

> Kapitel 3. Aufbau in zwei Teilen:
> **Teil A – Fragestellungen:** Jede Frage aus der CLAUDE.md wird einzeln und vollständig beantwortet.
> **Teil B – Komplette Klausur- & Tutoriumsaufgaben:** vollständiger Aufgabentext + jeder Rechenschritt + Ergebnis + Interpretation.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 3.1 Allgemeine Struktur und Gleichungen

**F: Wie lautet die allgemeine Struktur des linearen Regelkreises in Blockschaltbild-Form?**
A: Sollwert $w$ läuft in eine Vergleichsstelle, die die Regeldifferenz $e=w-y$ bildet. $e$ geht in den Regler $G_R(s)$, dessen Ausgang die Stellgröße $u$ ist. $u$ wirkt auf die Strecke $G_S(s)$, deren Ausgang die Regelgröße $y$ ist. $y$ wird über den Rückwärtszweig (im Standardregelkreis mit Faktor 1) zur Vergleichsstelle zurückgeführt. Kette: $w \to [\,e=w-y\,] \to G_R \xrightarrow{u} G_S \to y \to$ (zurück).

**F: Wie wird die Schleifenübertragungsfunktion $F_o(s)$ aus dem Blockschaltbild bestimmt?**
A: $F_o$ ist das Produkt aller Übertragungsglieder im aufgetrennten Kreis (Regler · Strecke · ggf. Stell-/Messglied):
$$F_o(s)=G_R(s)\,G_S(s)=\frac{Z_o(s)}{N_o(s)}.$$

**F: Wie leitet man $F_W(s)$ her? Welche Schritte sind nötig?**
A: In vier Schritten (mit $z=0$):
1. Grundgleichungen: $e=w-y$ und $y=F_o\,e$.
2. Einsetzen: $y=F_o(w-y)=F_o w-F_o y$.
3. Sortieren: $y(1+F_o)=F_o w$.
4. Auflösen: $\;F_W(s)=\dfrac{Y}{W}\big|_{z=0}=\dfrac{F_o}{1+F_o}=\dfrac{Z_o}{N_o+Z_o}.$

**F: Wie leitet man $F_Z(s)$ her?**
A: Mit $w=0$, Störung additiv am Streckenausgang: $y=z+F_o\,e$ und $e=-y$. Einsetzen: $y=z-F_o y\Rightarrow y(1+F_o)=z$, also
$$F_Z(s)=\frac{Y}{Z}\Big|_{w=0}=\frac{1}{1+F_o}=\frac{N_o}{N_o+Z_o}.$$
Greift die Störung **innerhalb** der Strecke ein (Streckenteil $G_{S2}$ liegt dahinter), allgemein $F_Z=\dfrac{-G_{S2}}{1+G_R G_{S1}G_{S2}}$.

**F: Was bedeutet es, wenn $F_W(0)=1$ gilt?**
A: Stationäre Genauigkeit: auf einen konstanten Sollwert $w_0$ folgt $y\to w_0$, die bleibende Regelabweichung ist $e_\infty=0$. Tritt genau dann auf, wenn $F_o$ einen Integrator (Pol bei $s=0$) besitzt, denn dann ist $F_o(0)=\infty$ und $F_W(0)=\frac{\infty}{1+\infty}=1$.

**F: Wie verändert sich $F_W(s)$ wenn ein Messglied $G_M(s)\neq1$ im Rückführzweig liegt?**
A: Der Rückwärtszweig ist nicht mehr 1. Man verschiebt $G_M$ über die Vergleichsstelle (virtuelle Führungsgröße $\tilde w=G_M w$). Mit $F_o=G_M G_R G_S$ gilt
$$F_W=\frac{1}{G_M}\cdot\frac{F_o}{1+F_o}.$$
Der Faktor $1/G_M$ rechnet die virtuelle Größe wieder auf die echte Führungsgröße zurück.

**F: Wie geht man bei Nicht-Standard-Blockschaltbildern vor (innere Schleifen, Vorwärtszweige)?**
A: Schrittweise umformen: (1) innere Schleifen zuerst zu einem Ersatzblock zusammenfassen ($\frac{G}{1\pm GH}$), (2) Messglieder/Störeingriffe durch Strukturbildumformung verschieben (Störeingriff hinter die Streckendynamik, $G_M$ nach vorne), (3) bis die Standardform erreicht ist, (4) erst dann $F_o,F_W,F_Z$ ablesen.

**F: Was ist der Zusammenhang $F_W=F_o/(1+F_o)$?**
A: Das ist die Kernformel des einschleifigen Regelkreises (siehe Herleitung oben): Vorwärtszweig geteilt durch „1 + Schleifenverstärkung".

**F: Warum hat der Nenner $1+F_o(s)$ so eine zentrale Bedeutung?**
A: $F_W$ und $F_Z$ haben **denselben** Nenner $N_o+Z_o=N_o\,(1+F_o)$. Die Nullstellen von $1+F_o(s)=0$ sind die **Pole des geschlossenen Kreises** – die charakteristische Gleichung. Die gesamte Stabilität hängt nur an ihr.

---

## 3.2 Stabilität von Regelkreisen

**F: Was bedeutet „Stabilität" im BIBO-Sinne?**
A: Bounded Input → Bounded Output: Auf jede betragsmäßig beschränkte Eingangsgröße ($|u(t)|<M_1$) antwortet das System mit einer beschränkten Ausgangsgröße ($|y(t)|<M_2$) für alle $t$.

**F: Was bedeutet asymptotische Stabilität?**
A: Die Eigenbewegung klingt ab: ohne Eingang strebt der Zustand für $t\to\infty$ gegen 0; die Sprungantwort strebt einem endlichen Grenzwert zu.

**F: Wie hängt Stabilität mit den Polen zusammen?**
A: Ein rationales System ist genau dann stabil, wenn **alle Pole** der Übertragungsfunktion negativen Realteil haben (links der $j$-Achse). Jeder Pol $s_i$ erzeugt einen Term $\sim e^{s_i t}$; nur bei $\mathrm{Re}(s_i)<0$ klingt er ab.

**F: Warum sind Pole in der rechten $s$-Halbebene problematisch?**
A: $\mathrm{Re}(s_i)>0$ ⇒ Term $e^{+\sigma t}$ wächst unbeschränkt ⇒ aufklingend instabil.

**F: Was sind die Pole des geschlossenen Kreises und wie berechnet man sie?**
A: Die Nullstellen der charakteristischen Gleichung $1+F_o(s)=0$ bzw. $N_o(s)+Z_o(s)=0$. Man setzt den Nenner von $F_W$ gleich null und bestimmt die Wurzeln.

**F: Was bedeutet Grenzstabilität?**
A: Mindestens ein Pol liegt **auf** der $j$-Achse (Realteil 0), alle anderen links. Folge: ungedämpfte Dauerschwingung (Polpaar $\pm j\omega$) oder konstanter Term (Pol bei 0). Weder abklingend noch aufklingend.

**F: Warum reicht es nicht, nur die Pole des offenen Kreises zu betrachten?**
A: Der offene Kreis darf instabil sein (Pol rechts) und der **geschlossene** trotzdem stabil – durch die Rückführung verschieben sich die Pole. Maßgeblich sind die Pole von $1+F_o=0$, nicht die von $F_o$.

---

## 3.3 Das Hurwitz-Kriterium

**F: Was ist das charakteristische Polynom und woher kommt es?**
A: Es ist der Nenner von $F_W$ (bzw. $F_Z$): $N(s)=N_o(s)+Z_o(s)=a_0s^n+a_1s^{n-1}+\dots+a_{n-1}s+a_n$, hervorgegangen aus $1+F_o(s)=0$.

**F: Wie lautet die notwendige Bedingung des Hurwitz-Kriteriums?**
A: Alle Koeffizienten $a_i$ müssen vorhanden und vom **gleichen Vorzeichen** (üblich: alle $>0$) sein. Ist eine verletzt → sofort instabil.

**F: Wie baut man die Hurwitz-Matrix für $n=3$ auf?**
A: Spaltenweise mit absteigenden Koeffizienten, Rest mit Nullen:
$$H=\begin{pmatrix}a_1&a_3&0\\a_0&a_2&0\\0&a_1&a_3\end{pmatrix}.$$

**F: Wie lauten die Hurwitz-Bedingungen für $n=2$ und $n=3$?**
A: $n=2$ ($a_0s^2+a_1s+a_2$): $H_1=a_1>0$, $H_2=a_1a_2>0$ ⇒ alle $a_i>0$.
$n=3$: $H_1=a_1>0$, $H_2=a_1a_2-a_0a_3>0$, $H_3=a_3H_2>0$. Kernbedingung: $a_1a_2>a_0a_3$ (bei $a_i>0$).

**F: Warum ist „alle Koeffizienten positiv" für $n\ge3$ allein nicht hinreichend?**
A: Positive Koeffizienten sind nur notwendig. Ein System kann trotz aller $a_i>0$ ein konjugiert komplexes Polpaar in der rechten Halbebene haben. Erst die zusätzliche Bedingung $H_2>0$ (für $n=3$) schließt das aus.

**F: Wann ist Hurwitz anwendbar, wann nicht?**
A: Nur für **rationale** Übertragungsfunktionen. **Nicht** bei Totzeit ($e^{-T_t s}$ transzendent) und nicht bei gemessenem (formelmäßig unbekanntem) Frequenzgang → dort Nyquist.

**F: Wie bestimmt man mit Hurwitz den Wertebereich von $K_R$?**
A: Charakteristisches Polynom in Abhängigkeit von $K_R$ aufstellen, die Hurwitz-Bedingungen als Ungleichungen in $K_R$ formulieren und den gemeinsamen Lösungsbereich bilden (siehe Teil B, vollständig durchgerechnet).

**F: Was passiert an der Stabilitätsgrenze ($H_i=0$)?**
A: Typisch wird $H_{n-1}=0$: ein Polpaar liegt exakt auf der $j$-Achse → Dauerschwingung mit der kritischen Frequenz.

---

## 3.4 Das spezielle Nyquist-Kriterium

**F: Was ist eine Ortskurve und wie wird sie konstruiert?**
A: Die graphische Darstellung von $F_o(j\omega)$ in der komplexen Ebene, wenn $\omega$ von 0 bis $\infty$ läuft. Konstruktion: für ausgewählte $\omega$ Real- und Imaginärteil (oder Betrag und Phase) berechnen und als Punkte eintragen, dann verbinden.

**F: Was bedeutet der kritische Punkt $(-1,j0)$?**
A: $F_o(j\omega)=-1$ entspricht $1+F_o=0$ bei $s=j\omega$, also einem Pol des geschlossenen Kreises auf der $j$-Achse = Stabilitätsgrenze.

**F: Wie lautet das spezielle Nyquist-Kriterium (Voraussetzungen + Aussage)?**
A: **Voraussetzungen:** $F_o$ rational (ggf. mit Totzeit), Zählergrad < Nennergrad, Zähler/Nenner ohne gemeinsame Nullstellen, Kreisverstärkung $V>0$, alle Pole links der $j$-Achse **mit Ausnahme** höchstens eines ein- oder zweifachen Pols bei $s=0$. **Aussage:** Der geschlossene Kreis ist genau dann stabil, wenn die Ortskurve den Punkt $-1$ **weder umschließt noch durchdringt** (ihn „links liegen lässt").

**F: Was bedeutet „Einschließen" geometrisch?**
A: Geht man auf der Ortskurve in Richtung wachsender $\omega$, liegt $-1$ bei einem stabilen System **links** der Kurve. Wird $-1$ umschlungen oder durchstoßen → instabil.

**F: Wie prüft man anhand der Ortskurve, ob $(-1,0)$ eingeschlossen wird?**
A: Schnittpunkt der Ortskurve mit der negativen reellen Achse bestimmen. Liegt er **rechts** von $-1$ (also zwischen 0 und $-1$) → $-1$ wird links liegen gelassen → stabil. Liegt er **links** von $-1$ → instabil.

**F: Welche Voraussetzung muss der offene Kreis für das spezielle Kriterium erfüllen?**
A: Er darf **keine** Pole rechts der $j$-Achse haben (höchstens ein-/zweifacher Pol bei $s=0$ erlaubt). Sonst → allgemeines Nyquist.

**F: Warum ist Nyquist auch bei Totzeit anwendbar (Hurwitz nicht)?**
A: Nyquist nutzt nur den Frequenzgang $F_o(j\omega)$, der sich aus Formel **oder Messung** zeichnen lässt; die Totzeit dreht nur die Phase. Hurwitz braucht ein endliches Polynom, das es bei $e^{-T_t s}$ nicht gibt.

**F: Wie verändert sich die Ortskurve, wenn $K_R$ erhöht wird?**
A: $K_R$ **streckt** die Ortskurve radial (Multiplikation mit Konstante), die Form bleibt gleich. Der Schnittpunkt mit der negativen reellen Achse wandert nach links; ab einem kritischen $K_R$ wird $-1$ überschritten → instabil.

---

## 3.5 Stabilitätsprüfung im Bode-Diagramm

**F: Wie ist das Bode-Diagramm aufgebaut?**
A: Zwei Diagramme über **logarithmischer** Frequenzachse: oben der Betrag in dB ($20\log_{10}|F_o|$), unten die Phase in Grad.

**F: Was ist die Durchtrittsfrequenz $\omega_D$ und wie findet man sie?**
A: Die Frequenz, bei der $|F_o(j\omega_D)|=1\;\hat=\;0$ dB. Man liest sie als Schnittpunkt der Betragskennlinie mit der 0-dB-Linie ab.

**F: Was ist die Phasenschnittfrequenz $\omega_k$ und wie findet man sie?**
A: Die Frequenz, bei der $\angle F_o(j\omega_k)=-180^\circ$. Schnittpunkt der Phasenkennlinie mit der $-180^\circ$-Linie.

**F: Wie hängt das Bode-Diagramm mit der Ortskurve zusammen?**
A: 0-dB-Linie ↔ Einheitskreis der Ortskurve; $-180^\circ$-Linie ↔ negative reelle Achse; der kritische Punkt $-1$ ↔ (0 dB **und** $-180^\circ$ gleichzeitig).

**F: Wie beurteilt man aus dem Bode-Diagramm die Stabilität?**
A: Bei fallendem Phasenverlauf gilt: ist bei $\omega_k$ der Betrag $<0$ dB (bzw. $\omega_D<\omega_k$), so ist der geschlossene Kreis stabil; sonst instabil.

**F: Was bedeutet $\omega_D<\omega_k$?**
A: Bei der Durchtrittsfrequenz liegt die Phase noch oberhalb von $-180^\circ$ → positive Phasenreserve → stabil.

**F: Wie zeichnet man den asymptotischen Betragsverlauf?**
A: (1) $F_o$ in Zeitkonstantenform (Faktoren $1+sT_i$, $K$ ausklammern). (2) Bei tiefer Frequenz mit $20\log_{10}K$ starten (bzw. Anfangssteigung $-20\cdot$(Anzahl I-Glieder) dB/Dek). (3) An jeder Nenner-Knickfrequenz $\omega_i=1/T_i$ die Steigung um $-20$ (PT1) bzw. $-40$ (PT2) dB/Dek verringern, an Zähler-Knicken um $+20$ erhöhen.

**F: Welche Steigung hat ein PT1 nach der Knickfrequenz? Ein I-Glied?**
A: PT1: $-20$ dB/Dek nach $\omega=1/T$. I-Glied: $-20$ dB/Dek über alle Frequenzen (durch 0 dB bei $\omega=K$).

**F: Wie berechnet man die Knickfrequenz eines PT1?**
A: $\omega_E=1/T$ (Kehrwert der Zeitkonstante).

**F: Wie addieren sich Beträge (dB) und Phasen mehrerer Glieder?**
A: Weil sich die Frequenzgänge multiplizieren, addieren sich die dB-Beträge und die Phasen: $|F_o|_{\text{dB}}=\sum_i|G_i|_{\text{dB}}$, $\angle F_o=\sum_i\angle G_i$.

---

## 3.6 Stabilitätsreserven

**F: Was ist die Phasenreserve $\varphi_r$ und wie berechnet man sie?**
A: Der Phasenabstand zur $-180^\circ$-Linie bei der Durchtrittsfrequenz: $\varphi_r=180^\circ+\angle F_o(j\omega_D)$.

**F: Was ist die Amplitudenreserve $A_r$ und wie berechnet man sie?**
A: Der Betragsabstand zur 0-dB-Linie bei der kritischen Frequenz: $A_{r,\text{dB}}=-\,|F_o(j\omega_k)|_{\text{dB}}$, linear $A_r=1/|F_o(j\omega_k)|$.

**F: Wie liest man $\varphi_r$ und $A_r$ aus dem Bode-Diagramm ab?**
A: $\varphi_r$: $\omega_D$ (Betrag = 0 dB) im Phasendiagramm aufsuchen, Phase ablesen, $180^\circ$ addieren. $A_r$: $\omega_k$ (Phase = $-180^\circ$) im Betragsdiagramm aufsuchen, dB-Wert ablesen, Vorzeichen umdrehen.

**F: Was bedeutet $\varphi_r=0^\circ$? Von $90^\circ$?**
A: $0^\circ$ → Stabilitätsgrenze (Dauerschwingung). $90^\circ$ → sehr gut gedämpft, kaum Überschwingen.

**F: Welche Mindestwerte werden typischerweise gefordert?**
A: Faustregel: $\varphi_r\approx30^\circ\dots60^\circ$ und $A_r\approx2\dots7$ (entspricht $6\dots17$ dB).

**F: Wie hängen Phasenreserve und Dämpfung zusammen?**
A: Größere $\varphi_r$ → stärkere Dämpfung des geschlossenen Kreises → weniger Überschwingen (Faustnäherung $D\approx\varphi_r/100^\circ$).

**F: Was passiert mit $\varphi_r$ wenn $K_R$ erhöht wird?**
A: $K_R$ hebt die Betragskennlinie → $\omega_D$ verschiebt sich nach rechts (zu höheren Frequenzen) → dort ist die Phase kleiner → $\varphi_r$ **sinkt**.

**F: Wie verändert ein I-Glied in der Strecke die Phasenreserve?**
A: Ein I-Glied senkt die Phase um konstante $90^\circ$ über alle Frequenzen → die Phasenreserve wird kleiner.

---

## 3.7 Das allgemeine Nyquist-Kriterium

**F: Wann muss das allgemeine statt des speziellen Kriteriums verwendet werden?**
A: Wenn der offene Kreis Pole **rechts** der $j$-Achse hat ($r_o>0$) oder mehr als einen ein-/zweifachen Pol auf der $j$-Achse → die Voraussetzungen des speziellen Kriteriums sind verletzt.

**F: Wie lautet das allgemeine Nyquist-Kriterium mathematisch?**
A: Mit $r_o$ = Zahl der Pole von $F_o$ rechts der $j$-Achse und $a_o$ = Zahl der Pole auf der $j$-Achse ist der geschlossene Kreis genau dann stabil, wenn die Winkeländerung $W$ des Fahrstrahls vom Punkt $-1$ zum laufenden Ortskurvenpunkt ($\omega:0\to\infty$) gleich
$$W=r_o\cdot\pi+a_o\cdot\tfrac{\pi}{2}$$
ist (Gegenuhrzeigersinn positiv).

**F: Was ist die Umschlingungszahl $W$ und wie zählt man sie?**
A: Die gesamte Winkeländerung des Fahrstrahls von $-1$ zum laufenden Punkt der Ortskurve, summiert von $\omega=0$ bis $\infty$. Man verfolgt, wie sich der Winkel dieses Strahls dreht (jede volle Umdrehung = $2\pi$).

**F: Wie geht man bei Polen auf der $j$-Achse vor (Indentation)?**
A: Man umgeht den Pol mit einem kleinen Halbkreis rechts daneben; dieser Beitrag wird durch den Term $a_o\cdot\pi/2$ in der Soll-Winkeländerung erfasst.

**F: Was bedeutet es, wenn ein instabiler offener Kreis stabilisiert wird?**
A: Auch mit Polen rechts der $j$-Achse ($r_o>0$) kann der geschlossene Kreis stabil sein – nämlich genau dann, wenn die Ortskurve $-1$ exakt $r_o$-mal im Gegenuhrzeigersinn umschlingt.

**F: Wie wendet man das Kriterium auf ein Beispiel an?**
A: Siehe Teil B (Tut 3, A3) – Pole zählen, Soll-$W$ berechnen, tatsächliches $W$ aus der Ortskurve ablesen, vergleichen.

---

## 3.8 Totzeitglieder

**F: Was ist ein Totzeitglied und welche Systeme haben Totzeit?**
A: Ein Glied, das das Signal unverändert um $T_t$ verzögert: $y(t)=u(t-T_t)$. Physikalisch: Transportvorgänge (Förderband, Schüttgut), Rohrleitungen (Dusche), Diffusion, Kommunikation über Netzwerke. $T_t=l/v$.

**F: Wie lautet die Übertragungsfunktion?**
A: $G_{Tt}(s)=e^{-T_t s}$ – transzendent (nicht rational), ohne Pole/Nullstellen.

**F: Wie verhalten sich Betrag und Phase im Frequenzbereich?**
A: $|e^{-j\omega T_t}|=1$ (konstant), $\angle e^{-j\omega T_t}=-\omega T_t$ (in rad), also linear fallend mit $\omega$.

**F: Warum bleibt der Betrag konstant und nur die Phase ändert sich?**
A: $e^{-j\omega T_t}$ hat den Betrag 1 für jeden reellen Exponenten – eine reine Zeitverschiebung ändert die Amplitude eines Sinus nicht, nur seine Phasenlage.

**F: Warum ist Totzeit destabilisierend?**
A: Sie senkt die Phase zusätzlich ab, ohne den Betrag zu ändern. Dadurch sinkt bei der Durchtrittsfrequenz die Phasenreserve, bis sie 0 wird → Instabilität.

**F: Wie berechnet man die Phasenabsenkung durch Totzeit?**
A: $\Delta\varphi(\omega)=\omega\,T_t$ (rad) $=\omega\,T_t\cdot\frac{180^\circ}{\pi}$ (Grad).

**F: Warum ist Hurwitz bei Totzeit nicht anwendbar?**
A: $e^{-T_t s}$ ist kein Polynom → es gibt kein endliches charakteristisches Polynom → die Determinanten lassen sich nicht bilden. Stattdessen Nyquist/Bode.

**F: Wie bestimmt man die maximale Totzeit $T_{t,\max}$ aus der Phasenreserve?**
A: Die Totzeit darf höchstens die ganze Phasenreserve bei $\omega_D$ aufzehren:
$$\varphi_r=\omega_D\,T_{t,\max}\;\Rightarrow\;T_{t,\max}=\frac{\varphi_r\,[\text{rad}]}{\omega_D}.$$

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Klausuraufgabe 1 — Klausur 30.08.2024 (30 Punkte)

**Aufgabenstellung:** Ein technisches System besteht aus Regler $G_R(s)$, Stellglied $G_{St}(s)$, Regelstrecke $G_S(s)$ und Messglied $G_M(s)$. Die Störung $z$ greift zwischen Stellglied und Strecke an, $G_M$ liegt im Rückwärtszweig. $G_R$ ist ein P-Regler mit Verstärkung $K_R$. Gegeben:
$$G_{St}(s)=\frac{3}{s+4},\qquad G_S(s)=\frac{4}{6(s-1)},\qquad G_M(s)=\frac{3}{s+2}.$$

### 1.1 In Standardform umformen und $F_o(s)$ angeben
**Schritt 1 – Merkmale des Standardregelkreises:** freier Rückwärtszweig (Faktor 1) und Störeingriff hinter der Streckendynamik. Dazu wird $G_M$ über die Summationsstelle nach vorne verschoben (virtuelle Führungsgröße $\tilde w=G_M w$) und der Störeingriff hinter $G_S$ verlegt (virtuelle Störung $\tilde z$).
**Schritt 2 – offener Kreis (Produkt aller Glieder im Schleifenzug):**
$$F_o=G_M\,G_R\,G_S\,G_{St}=\frac{3}{s+2}\cdot K_R\cdot\frac{4}{6(s-1)}\cdot\frac{3}{s+4}=\frac{36K_R}{6\,(s+2)(s-1)(s+4)}.$$
$$\boxed{F_o(s)=\frac{6K_R}{(s+2)(s-1)(s+4)}}$$

### 1.2 Stabilität des offenen Kreises
Pole von $F_o$: $s_1=-2,\ s_2=+1,\ s_3=-4$.
> **Ergebnis:** Der Pol $s_2=+1$ liegt **rechts** der $j$-Achse → der **offene** Regelkreis ist **instabil**.
**Interpretation:** Die Strecke selbst „läuft weg"; erst die Rückführung kann sie stabilisieren (siehe 1.4).

### 1.3 Führungs- und Störübertragungsfunktion
Mit $Z_o=6K_R$, $N_o=(s+2)(s-1)(s+4)$ und $G_M=\frac{3}{s+2}$:
$$F_W=\frac{1}{G_M}\cdot\frac{F_o}{1+F_o}=\frac{s+2}{3}\cdot\frac{6K_R}{N_o+6K_R}=\boxed{\frac{2K_R(s+2)}{(s+2)(s-1)(s+4)+6K_R}}$$
$$F_Z=\frac{-G_S\,N_o}{N_o+Z_o}=\boxed{\frac{-4(s+2)(s+4)}{6\big[(s+2)(s-1)(s+4)+6K_R\big]}}$$
Beide haben denselben Nenner $N_o+Z_o$.

### 1.4 Wertebereich von $K_R$ für Stabilität (Hurwitz)
**Schritt 1 – Nenner ausmultiplizieren:** $(s+2)(s+4)=s^2+6s+8$; mal $(s-1)$: $s^3+5s^2+2s-8$. Mit $+6K_R$:
$$N(s)=s^3+5s^2+2s+(6K_R-8),\qquad a_0=1,\,a_1=5,\,a_2=2,\,a_3=6K_R-8.$$
**Schritt 2 – notwendige Bedingung:** $a_3=6K_R-8>0\Rightarrow K_R>\tfrac{8}{6}=\tfrac43\approx1{,}33$.
**Schritt 3 – Hurwitz $H_2$:** $H_2=a_1a_2-a_0a_3=5\cdot2-(6K_R-8)=18-6K_R>0\Rightarrow K_R<3$.
> **Ergebnis:** Stabil für $\boxed{\tfrac43<K_R<3}$.
**Interpretation:** Die instabile Strecke wird nur in einem **begrenzten** Verstärkungsfenster stabilisiert; bei $K_R=3$ liegt ein Polpaar auf der $j$-Achse (Dauerschwingung bei $\omega=\sqrt2$).

### 1.5 Bode-Diagramm für $K_R=2$ und Reserven
Normiert: $F_o=\dfrac{0{,}75K_R}{(0{,}5s+1)(s-1)(0{,}25s+1)}$. Für $K_R=2$ Verstärkung $1{,}5$. Asymptotischer Betrag: Start $20\log_{10}(0{,}75K_R)$, Knicke bei $\omega=2,\,1,\,4$ rad/s mit je $-20$ dB/Dek. Aus dem Diagramm liest man für $K_R=2$ ab: Phasenreserve $\varphi_r\approx5^\circ$, Amplitudenreserve $A_r\approx3{,}5$ dB.
> **Ergebnis:** $K_R=2$ liegt im Stabilitätsfenster, aber knapp ($\varphi_r$ sehr klein → schwach gedämpft, starkes Überschwingen).

### 1.6 Zusätzliche Totzeit $T_t=1$ s (bei $K_R=2$)
Betrag unverändert, Phase zusätzlich $-\omega T_t$. Schnittpunkt mit 0 dB bei $\omega\approx0{,}9$ rad/s, dort vorher $\angle F_o\approx-175^\circ$:
$$\angle F_o^*(j0{,}9)=-175^\circ-0{,}9\cdot1\,\text{rad}=-175^\circ-51{,}6^\circ=-226{,}6^\circ.$$
> **Ergebnis:** Die Phase liegt am 0-dB-Punkt unter $-180^\circ$ → $\varphi_r<0$ → der geschlossene Kreis wird **instabil**. Totzeit wirkt destabilisierend.

---

## ▣ Klausuraufgabe 1 — Klausur 25.08.2023 (30 Punkte)

**Aufgabenstellung:** Offener Regelkreis
$$F_o(s)=\frac{1000\,(10+2s)}{(s^2+52s+100)(s^2+11s+10)}.$$

### 1.1 Eckfrequenzen + asymptotischer Amplitudengang
**Schritt 1 – faktorisieren:** $s^2+11s+10=(s+1)(s+10)$, $s^2+52s+100=(s+2)(s+50)$, $10+2s=10(1+0{,}2s)$.
**Schritt 2 – normieren (Zeitkonstantenform):**
$$F_o=\frac{1000\cdot10(1+0{,}2s)}{2\cdot50\cdot10\cdot(0{,}5s+1)(0{,}02s+1)(s+1)(0{,}1s+1)}=\frac{10\,(0{,}2s+1)}{(0{,}5s+1)(0{,}02s+1)(s+1)(0{,}1s+1)}.$$
**Schritt 3 – ablesen:** Grundverstärkung $K=10\;\hat=\;20$ dB. Eckfrequenzen: Zähler $\omega_Z=1/0{,}2=5$; Nenner $\omega=2,\,50,\,1,\,10$ rad/s.
**Verlauf:** Start 20 dB; Knicke (sortiert): $\omega{=}1\,(-20)$, $\omega{=}2\,(-40)$, $\omega{=}5$ Zähler $(\to-20)$, $\omega{=}10\,(-40)$, $\omega{=}50\,(-60$ dB/Dek$)$.

### 1.2 Führungs- und Störübertragungsfunktion
$$F_W=\frac{Z_o}{Z_o+N_o}=\frac{1000(10+2s)}{1000(10+2s)+(s^2+52s+100)(s^2+11s+10)},$$
$$F_Z=\frac{N_o}{Z_o+N_o}=\frac{(s^2+52s+100)(s^2+11s+10)}{1000(10+2s)+(s^2+52s+100)(s^2+11s+10)}.$$

### 1.3 Ausgangssignal $y(t)$ bei $e(t)=3\sin(20t+\tfrac\pi4)$
**Prinzip:** Bei sinusförmiger Anregung ist $y(t)=|F_o(j\omega)|\cdot\hat e\cdot\sin(\omega t+\varphi_0+\angle F_o(j\omega))$.
**Ablesen bei $\omega=20$ rad/s:** $|F_o(j20)|_{\text{dB}}=-20$ dB $\Rightarrow |F_o|=10^{-20/20}=0{,}1$; $\angle F_o(j20)=-180^\circ=-\pi$.
**Einsetzen:**
$$y(t)=0{,}1\cdot3\cdot\sin\!\Big(20t+\tfrac\pi4-\pi\Big)=\boxed{0{,}3\,\sin\!\Big(20t-\tfrac34\pi\Big)}.$$

### 1.4 Amplituden- und Phasenreserve
$\omega_D$ (Betrag = 0 dB) $=5$ rad/s, dort $\angle F_o=-135^\circ$ → $\varphi_r=180^\circ-135^\circ=\boxed{45^\circ}$.
$\omega_k$ (Phase = $-180^\circ$) $=20$ rad/s, dort $|F_o|=-20$ dB → $A_r=\boxed{20\text{ dB}}$.
> **Ergebnis:** Beide positiv und im Faustregelbereich → geschlossener Kreis **stabil, gut gedämpft**.

### 1.5 Zusätzliche Totzeit $T_t=0{,}15$ s
Betrag unverändert, Phase $-\omega T_t$. Bei $\omega_D=5$: $\Delta\varphi=5\cdot0{,}15=0{,}75\,\text{rad}\approx43^\circ$ (≈45° lt. Tabelle). Neue Phase $-135^\circ-43^\circ\approx-180^\circ$.
> **Ergebnis:** $\varphi_r\to0$ → der Kreis liegt an der **Stabilitätsgrenze / wird instabil**. Schon $0{,}15$ s Totzeit kippen den gut gedämpften Kreis.

---

## ▣ Tutoriumsaufgabe (Tut 2, A1) — Hurwitz mit P-Regler

**Aufgabenstellung:** $G_R=K_R$, $G_S(s)=\dfrac{0{,}1}{(s^2+4s+3)(s+1)}$. Für welchen Bereich von $K_R$ ist der geschlossene Kreis stabil?

**Schritt 1 – charakteristisches Polynom:** $N=N_o+Z_o=(s^2+4s+3)(s+1)+0{,}1K_R$. Ausmultiplizieren: $(s^2+4s+3)(s+1)=s^3+5s^2+7s+3$, also $N=s^3+5s^2+7s+(3+0{,}1K_R)$.
**Schritt 2 – Koeffizienten:** $a_0=1,\ a_1=5,\ a_2=7,\ a_3=3+0{,}1K_R$.
**Schritt 3 – $H_2>0$:** $a_1a_2-a_0a_3=35-(3+0{,}1K_R)=32-0{,}1K_R>0\Rightarrow K_R<320$.
**Schritt 4 – $a_3>0$:** $3+0{,}1K_R>0\Rightarrow K_R>-30$.
> **Ergebnis:** Stabil für $-30<K_R<320$, praktisch $0<K_R<320$.

## ▣ Tutoriumsaufgabe (Tut 2, A5) — Hurwitz mit PI-Regler

**Aufgabenstellung:** $G_S=\dfrac{0{,}1}{4s^2+5s+1}$, PI-Regler $G_R=\dfrac{K_R(s+1)}{s}$. Führungsübertragungsfunktion:
$$F_W=\frac{0{,}1K_R(s+1)}{4s^3+5s^2+(0{,}1K_R+1)s+0{,}1K_R}.$$
**Schritt 1 – Koeffizienten:** $a_0=4,\ a_1=5,\ a_2=0{,}1K_R+1,\ a_3=0{,}1K_R$.
**Schritt 2 – notwendig:** $a_3>0\Rightarrow K_R>0$; $a_2>0\Rightarrow K_R>-10$.
**Schritt 3 – $H_2$:** $5(0{,}1K_R+1)-4(0{,}1K_R)=0{,}1K_R+5>0$ → stets erfüllt.
**Schritt 4 – Polkontrolle für $K_R=10$:** $4s^3+5s^2+2s+1=0$, raten $s_1=-1$, Division → $4s^2+s+1=0\Rightarrow s_{2,3}=-\tfrac18\pm j\tfrac{\sqrt{15}}{8}$ (alle Re < 0).
> **Ergebnis:** Stabil für $K_R>0$; der I-Anteil sichert zusätzlich stationäre Genauigkeit.

## ▣ Tutoriumsaufgabe (Tut 2, A2) — Hurwitz $n=4$

**Aufgabenstellung:** Stabilität von $G(s)=\dfrac{17}{s^4+8s^3+19s^2+14s+8}$.
$a_0=1,a_1=8,a_2=19,a_3=14,a_4=8$.
$H_1=8>0$; $H_2=8\cdot19-1\cdot14=138>0$; $H_3=a_1a_2a_3-a_1^2a_4-a_0a_3^2=2128-512-196=1420>0$; $H_4=a_4H_3=8\cdot1420=11360>0$.
> **Ergebnis:** Alle $H_i>0$ → **stabil**.

---

## ▣ Tutoriumsaufgabe (Tut 3, A3) — Allgemeines Nyquist-Kriterium

**Aufgabenstellung:** Drei offene Regelkreise, Stabilität des geschlossenen Kreises per Nyquist beurteilen.

**1) $F_{o,1}=\dfrac{7}{s^2+7s}=\dfrac{7}{s(s+7)}$:** ein Pol bei $s=0$ (auf $j$-Achse), keiner rechts → $r_o=0,\ a_o=1$. Soll-$W=r_o\pi+a_o\tfrac\pi2=\tfrac\pi2\;\hat=\;90^\circ$. Ortskurve liefert $90^\circ$.
> **Ergebnis:** geschlossener Kreis **stabil** (alternativ speziell: $-1$ wird links liegen gelassen).

**2) $F_{o,2}=\dfrac{s+17}{2(s+1)(s-1)^2}$:** zwei Pole bei $s=+1$ (rechts) → $r_o=2,\ a_o=0$. Soll-$W=2\pi=360^\circ$; tatsächlich $0^\circ$.
> **Ergebnis:** **instabil** (Soll ≠ Ist).

**3) $F_{o,3}=\dfrac{200s+100}{s(s^2-6s+34)}$:** $s^2-6s+34=0\Rightarrow s=3\pm5j$ (2 Pole rechts) + ein Pol bei 0 → $r_o=2,\ a_o=1$. Soll-$W=2\pi+\tfrac\pi2=2{,}5\pi=450^\circ$; tatsächlich $90^\circ$.
> **Ergebnis:** **instabil**.

---

## ▣ Tutoriumsaufgabe (Tut 4, A3) — Reserven + maximale Totzeit

**Aufgabenstellung:** Langsame Strecke $G_S=\dfrac{0{,}05(s+1)(s+2)}{(s+20)^2(s+0{,}05)^2(s+0{,}1)}$, P-Regler $K_R$. (a) $K_R$ für $\varphi_r=60^\circ$, dann $A_r$? (b) Maximale Totzeit $T_t$?

**(a)** Im Bode-Diagramm von $G_S(j\omega)$ liegt die Phase $-180^\circ+\varphi_r=-120^\circ$ bei $\omega=0{,}055$ rad/s. Dort ist $|G_S|=-8{,}06$ dB → man hebt um $K_{R,\text{dB}}=8{,}06$ dB an: $K_R=10^{8{,}06/20}=2{,}53$. Amplitudenreserve: $A_{r,\text{dB}}=22{,}1-8{,}06=14{,}04$ dB $\Rightarrow A_r=5{,}04$.
> **Ergebnis (a):** $K_R=2{,}53$, $A_r\approx5{,}04$ ($14$ dB).

**(b)** Maximale Totzeit bei $\omega_D=0{,}055$ rad/s und $\varphi_r=60^\circ$:
$$T_{t,\max}=\frac{\varphi_r\,[\text{rad}]}{\omega_D}=\frac{60^\circ\cdot\pi/180^\circ}{0{,}055}\approx19{,}0\,\text{s}.$$
> **Ergebnis (b):** $T_{t}\le19$ s, sonst instabil.

---

## Kernaussagen (zum Merken)

1. $F_W=\dfrac{F_o}{1+F_o}$, $F_Z=\dfrac{1}{1+F_o}$ – gleicher Nenner = charakteristische Gleichung $1+F_o=0$.
2. Stabil ⇔ alle Pole des **geschlossenen** Kreises links der $j$-Achse.
3. Hurwitz (rational): notwendig alle $a_i>0$; für $n=3$ zusätzlich $a_1a_2>a_0a_3$.
4. Spezielles Nyquist: $-1$ links liegen lassen. Allgemein: $W=r_o\pi+a_o\pi/2$.
5. Reserven: $\varphi_r=180^\circ+\angle F_o(j\omega_D)$, $A_{r,\text{dB}}=-|F_o(j\omega_k)|_{\text{dB}}$.
6. Totzeit: Betrag gleich, Phase $-\omega T_t$ → destabilisierend; $T_{t,\max}=\varphi_r/\omega_D$.
