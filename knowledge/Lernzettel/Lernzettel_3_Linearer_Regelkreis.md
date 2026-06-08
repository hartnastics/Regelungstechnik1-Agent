# Lernzettel 3 – Der Lineare Regelkreis

> Kapitel 3: Struktur & Gleichungen, Stabilität, Hurwitz-Kriterium, spezielles und allgemeines Nyquist-Kriterium, Bode-Diagramm, Stabilitätsreserven, Totzeit. **Kernkapitel für Klausuraufgabe 1 (30 P).**

---

## 3.1 Allgemeine Struktur und Gleichungen

### Struktur des linearen Regelkreises (Standardregelkreis)
$$w \to \big[\text{Vergleich } e=w-y\big] \to G_R(s) \xrightarrow{u} G_S(s) \to y \;(\text{Rückführung Faktor 1})$$
Merkmale Standardregelkreis: **freier Rückwärtszweig (Faktor 1)** und **Störeingriff am Streckenausgang**.

### Offener Kreis $F_o(s)$
Produkt aller Glieder im aufgetrennten Kreis:
$$F_o(s)=G_R(s)\,G_S(s)=\frac{Z_o(s)}{N_o(s)}$$

### Herleitung der Führungsübertragungsfunktion $F_W(s)$ — Schritt für Schritt
1. Grundgleichungen ($z=0$): $\;e=w-y,\quad y=F_o\,e$
2. Einsetzen: $\;y=F_o(w-y)=F_o w - F_o y$
3. Sortieren: $\;y(1+F_o)=F_o w$
4. Auflösen:
$$\boxed{F_W(s)=\frac{Y}{W}\bigg|_{z=0}=\frac{F_o}{1+F_o}=\frac{Z_o}{N_o+Z_o}}$$

### Herleitung der Störübertragungsfunktion $F_Z(s)$
Mit $w=0$, Störung additiv am Ausgang: $y=z+F_o e$, $e=-y$ → $y(1+F_o)=z$:
$$\boxed{F_Z(s)=\frac{Y}{Z}\bigg|_{w=0}=\frac{1}{1+F_o}=\frac{N_o}{N_o+Z_o}}$$
Greift die Störung **innerhalb** der Strecke ein (Streckenteil $G_{S2}$ dahinter), allgemein:
$$F_Z=\frac{-G_{S2}}{1+G_R G_{S1} G_{S2}}$$

### Bedeutung $F_W(0)=1$
$F_W(0)=1$ bedeutet **stationäre Genauigkeit**: Auf einen konstanten Sollwert $w_0$ folgt $y\to w_0$, also **keine bleibende Regelabweichung** ($e_\infty=0$). Das ist genau dann erfüllt, wenn $F_o$ einen Integrator enthält.

### Messglied $G_M(s)\neq1$ im Rückführzweig
Dann ist der Rückwärtszweig nicht mehr 1. Man verschiebt $G_M$ über die Vergleichsstelle und führt eine **virtuelle Führungsgröße** $\tilde w=G_M w$ ein. Es gilt dann:
$$F_W=\frac{1}{G_M}\cdot\frac{F_o}{1+F_o},\qquad F_o=G_M G_R G_S$$

### Nicht-Standard-Blockschaltbilder
Innere Schleifen zuerst zusammenfassen (geschlossener Innenkreis als ein Block), Messglieder/Störeingriffe durch **Strukturbildumformung** verschieben, bis Standardform erreicht ist. Erst dann $F_o, F_W, F_Z$ ablesen.

### Zentrale Bedeutung von $1+F_o(s)$
$F_W$ und $F_Z$ haben **denselben Nenner** $N_o+Z_o=N_o(1+F_o)$. Die Nullstellen von $1+F_o(s)=0$ sind die **Pole des geschlossenen Kreises** → die **charakteristische Gleichung**. Stabilität wird **immer** an ihr geprüft.

### Numerisches Beispiel
$G_R=K_R=2$, $G_S=\dfrac{1}{1+s}$ → $F_o=\dfrac{2}{1+s}$:
$$F_W=\frac{2/(1+s)}{1+2/(1+s)}=\frac{2}{(1+s)+2}=\frac{2}{s+3}$$
$F_W(0)=\tfrac23\approx0{,}67$ → **33 % bleibende Abweichung** (kein I-Anteil). Zeitkonstante von $1$ s auf $\tfrac13$ s gesunken → schneller.

---

## 3.2 Stabilität von Regelkreisen

- **BIBO-Stabilität** (Bounded Input → Bounded Output): Auf jede **beschränkte** Eingangsgröße antwortet das System mit einer **beschränkten** Ausgangsgröße.
- **Asymptotische Stabilität:** Die Sprungantwort strebt für $t\to\infty$ einem **endlichen Grenzwert** zu (klingt nicht auf, schwingt nicht ungedämpft).
- **Pol-Kriterium:** Ein rationales System ist **genau dann stabil**, wenn **alle Pole** der Übertragungsfunktion **negativen Realteil** haben (links der $j$-Achse).
  - Pol **rechts** der $j$-Achse → Term $e^{+\sigma t}$ → aufklingend instabil.
  - Pol **auf** der $j$-Achse → **Grenzstabilität** (ungedämpfte Schwingung / konstanter Term).
- **Regelkreis stabil** ⇔ sowohl Führungs- als auch Störverhalten stabil (gleicher Nenner → eine Prüfung genügt).
- **Warum nicht nur den offenen Kreis betrachten?** Der offene Kreis darf instabil sein (Pol rechts), der **geschlossene** kann durch Rückführung trotzdem stabil werden. Maßgeblich sind die Pole von $1+F_o=0$, nicht die von $F_o$.

---

## 3.3 Das Hurwitz-Kriterium

### Charakteristisches Polynom
Aus $1+F_o(s)=0$ bzw. dem Nenner von $F_W$:
$$N(s)=N_o(s)+Z_o(s)=a_0 s^n + a_1 s^{n-1}+\dots+a_{n-1}s+a_n$$

### Notwendige Bedingung
**Alle** Koeffizienten $a_i$ müssen vorhanden und **gleiches Vorzeichen** haben. Fehlt einer oder wechselt das Vorzeichen → **sofort instabil**. (Für $n\le2$ ist diese Bedingung sogar **hinreichend**.)

### Hurwitz-Matrix (Aufbauprinzip)
Spaltenweise mit absteigenden Koeffizienten füllen, Rest mit Nullen. „Nordwestliche" Unterdeterminanten $H_1,\dots,H_n$ müssen **alle $>0$** sein.

**n = 2:** $\;N=a_0s^2+a_1s+a_2$ → $H_1=a_1>0,\ H_2=a_1a_2>0$ ⇒ alle $a_i>0$.

**n = 3:** $\;N=a_0s^3+a_1s^2+a_2s+a_3$
$$H=\begin{pmatrix}a_1&a_3&0\\a_0&a_2&0\\0&a_1&a_3\end{pmatrix},\quad H_1=a_1,\ H_2=a_1a_2-a_0a_3,\ H_3=a_3H_2$$
Kernbedingung (bei $a_i>0$): $\;\boxed{a_1a_2>a_0a_3}$.

### Warum reicht „alle Koeffizienten positiv" für $n\ge3$ nicht?
Positive Koeffizienten sind **notwendig**, aber nicht **hinreichend**: Ein System kann trotz aller positiven $a_i$ ein konjugiert komplexes Polpaar in der rechten Halbebene haben. Erst $H_2>0$ (für $n=3$) schließt das aus.

### Anwendbarkeit
Nur für **rationale** Übertragungsfunktionen. **Nicht** bei Totzeit ($e^{-T_t s}$ ist transzendent) und nicht bei gemessenem (formelmäßig unbekanntem) Frequenzgang → dann Nyquist.

### Stabilitätsgrenze
Wird ein $H_i=0$ (typisch $H_{n-1}=0$), liegt ein Polpaar exakt auf der $j$-Achse → **Dauerschwingung**.

### ▶ Klausurbeispiel P-Regler (Tut 2, A1): $K_R$-Bereich
$G_R=K_R$, $G_S=\dfrac{0{,}1}{(s^2+4s+3)(s+1)}$.
- **Schritt 1:** $N=(s^2+4s+3)(s+1)+0{,}1K_R=s^3+5s^2+7s+(3+0{,}1K_R)$.
- **Schritt 2:** $a_0=1,a_1=5,a_2=7,a_3=3+0{,}1K_R$.
- **Schritt 3:** $H_2=a_1a_2-a_0a_3=35-(3+0{,}1K_R)=32-0{,}1K_R>0 \Rightarrow K_R<320$.
- **Schritt 4:** $a_3>0 \Rightarrow K_R>-30$.

> **Ergebnis:** stabil für $-30<K_R<320$, praktisch $0<K_R<320$.

### ▶ Klausurbeispiel PD-Regler, zwei Parameter (Klausur 05.09.2022, A1)
$F_o=\dfrac{20(K_R+K_D s)}{(0{,}25s+1)(2s+1)(2s-1)}$.
- $(2s+1)(2s-1)=4s^2-1$; $(0{,}25s+1)(4s^2-1)=s^3+4s^2-0{,}25s-1$.
- $N=s^3+4s^2+(20K_D-0{,}25)s+(20K_R-1)$.
- Notwendig: $K_R>\tfrac1{20}$, $K_D>\tfrac1{80}$.
- $H_2=4(20K_D-0{,}25)-(20K_R-1)=80K_D-20K_R>0 \Rightarrow K_D>\tfrac{K_R}{4}$.

> **Ergebnis:** stabil für $K_R>\tfrac1{20}$ **und** $K_D>\tfrac{K_R}{4}$. Der D-Anteil stabilisiert die Strecke mit dem Pol bei $s=+0{,}5$.

### ▶ Tutoriumsbeispiel $n=4$ (Tut 2, A2)
$N(s)=s^4+8s^3+19s^2+14s+8$, $a_i=(1,8,19,14,8)$.
$H_1=8>0$; $H_2=8\cdot19-1\cdot14=138>0$; $H_3=a_1a_2a_3-a_1^2a_4-a_0a_3^2=2128-512-196=1420>0$; $H_4=a_4H_3=11360>0$ → **stabil**.

---

## 3.4 Das spezielle Nyquist-Kriterium

### Ortskurve
Graphische Darstellung von $F_o(j\omega)$ in der komplexen Ebene für $\omega:0\to\infty$. Konstruktion: für ausgewählte $\omega$ Real- und Imaginärteil (oder Betrag und Phase) berechnen und eintragen.

### Kritischer Punkt $(-1,j0)$
Entspricht der Bedingung $F_o(j\omega_k)=-1$, also $1+F_o=0$ mit $s=j\omega_k$ → Pol auf der $j$-Achse = Stabilitätsgrenze.

### Spezielles Nyquist-Kriterium (Voraussetzungen + Aussage)
**Voraussetzungen:** $F_o$ rational (ggf. mit Totzeit), Zählergrad < Nennergrad, alle Pole links der $j$-Achse **mit Ausnahme** eines ein- oder zweifachen Pols bei $s=0$, Kreisverstärkung $V>0$.
**Aussage:** Der geschlossene Kreis ist **genau dann stabil**, wenn die Ortskurve $F_o(j\omega)$ den Punkt $-1$ **weder umschließt noch durchdringt** – wenn sie ihn **„links liegen lässt"**.

### „Einschließen" geometrisch
Läuft man auf der Ortskurve in Richtung wachsender $\omega$, muss der Punkt $-1$ **links** der Kurve liegen → stabil. Liegt er rechts / wird umschlungen → instabil.

### Warum auch bei Totzeit?
Das Nyquist-Kriterium braucht nur den **Frequenzgang** $F_o(j\omega)$ (aus Formel **oder Messung**). Eine Totzeit ändert nur die Phase ($e^{-j\omega T_t}$) – die Ortskurve lässt sich trotzdem zeichnen. Hurwitz braucht ein rationales Polynom und versagt hier.

### Ortskurve bei steigendem $K_R$
$K_R$ **streckt** die Ortskurve radial (Multiplikation mit Konstante). Bei einem stabilen System wandert der Schnittpunkt mit der negativen reellen Achse näher an $-1$; ab einem kritischen $K_R$ wird $-1$ überschritten → instabil.

### ▶ Tutoriumsbeispiel (Tut 3, A2)
$F_o=\dfrac{K}{5(s+2)^n}$, Ortskurve stößt unter $-180^\circ$ in den Ursprung → $n=2$ (doppeltes PT1). Aus $F_o(0)=5$: $\tfrac{K}{5\cdot4}=5\Rightarrow K=100$. Alle Pole bei $s=-2$ (links) → spezielles Kriterium anwendbar; $-1$ wird links liegen gelassen → **stabil**, und zwar für **jedes** $K>0$ (Streckung ändert die Einschließung nicht).

---

## 3.5 Stabilitätsprüfung im Bode-Diagramm

### Aufbau
Zwei Diagramme über **logarithmischer** Frequenzachse: Betrag $|F_o|$ in **dB** ($20\log_{10}|F_o|$) oben, **Phase** in Grad unten.

### Durchtrittsfrequenz $\omega_D$
Frequenz, bei der $|F_o(j\omega_D)|=1\;\hat=\;0$ dB (Betragskennlinie schneidet 0-dB-Linie).

### Phasenschnittfrequenz / kritische Frequenz $\omega_k$
Frequenz, bei der $\angle F_o(j\omega_k)=-180^\circ$ (Phasenkennlinie schneidet $-180^\circ$-Linie).

### Zusammenhang mit Ortskurve
0-dB-Linie ↔ Einheitskreis der Ortskurve; $-180^\circ$-Linie ↔ negative reelle Achse. Punkt $-1$ ↔ ($0$ dB **und** $-180^\circ$ gleichzeitig).

### Stabilitätsbeurteilung (fallender Phasenverlauf)
$$|F_o(j\omega_k)|<1\;(0\text{ dB}) \iff \text{stabil}, \qquad \omega_D<\omega_k \iff \text{stabil}.$$
Bei $\omega_D<\omega_k$ ist die Phase bei der Durchtrittsfrequenz noch oberhalb von $-180^\circ$ → Phasenreserve positiv.

### Asymptotischen Betragsverlauf zeichnen
1. $F_o$ in **Zeitkonstantenform** (jeder Faktor $1+sT_i$, $K$ ausklammern).
2. Bei tiefer Frequenz Start mit $20\log_{10}K$ (bzw. Anfangssteigung $-20\cdot(\text{Anzahl I-Glieder})$ dB/Dek).
3. An jeder **Nenner**-Knickfrequenz $\omega_i=1/T_i$ Steigung um $-20$ (PT1) bzw. $-40$ (PT2) dB/Dek **verringern**; an **Zähler**-Knick um $+20$ dB/Dek erhöhen.

### Steigungen
- **PT1** nach Knickfrequenz: $-20$ dB/Dek. Knickfrequenz $\omega_E=1/T$.
- **I-Glied**: $-20$ dB/Dek über alle Frequenzen (durch $0$ dB bei $\omega=K$).
- **PT2**: $-40$ dB/Dek ab $\omega_0$.

### Addition mehrerer Glieder
Da sich Frequenzgänge **multiplizieren**, **addieren** sich Beträge (in dB) und Phasen:
$$|F_o|_{\text{dB}}=\textstyle\sum_i |G_i|_{\text{dB}},\qquad \angle F_o=\textstyle\sum_i \angle G_i.$$

### ▶ Klausurbeispiel: $F_o$ aus Bode ablesen (Klausur 25.08.2023, A1 / Tut 5)
Gegeben $F_o=\dfrac{1000(10+2s)}{(s^2+52s+100)(s^2+11s+10)}$.
- Normieren: $\dfrac{10(0{,}2s+1)}{(0{,}5s+1)(0{,}02s+1)(s+1)(0{,}1s+1)}$.
- Grundverstärkung $K=10\;\hat=\;20$ dB. Knicke: $\omega=1,2,5(\text{Zähler}),10,50$.

> **Ergebnis:** Pole $-2,-50,-1,-10$, Nullstelle $-5$.

---

## 3.6 Stabilitätsreserven

### Phasenreserve
$$\boxed{\varphi_r=180^\circ+\angle F_o(j\omega_D)}\quad(\omega_D:\ |F_o|=0\text{ dB})$$

### Amplitudenreserve
$$\boxed{A_{r,\text{dB}}=-\,|F_o(j\omega_k)|_{\text{dB}}}\quad(\omega_k:\ \angle F_o=-180^\circ)$$
Linear: $A_r=\dfrac{1}{|F_o(j\omega_k)|}$.

### Ablesen aus dem Bode-Diagramm
1. **$\varphi_r$:** $\omega_D$ im Betragsdiagramm bei 0 dB suchen → senkrecht ins Phasendiagramm → Phase ablesen → $180^\circ+\angle$.
2. **$A_r$:** $\omega_k$ im Phasendiagramm bei $-180^\circ$ suchen → senkrecht ins Betragsdiagramm → dB-Abstand zur 0-dB-Linie.

### Bedeutung
- $\varphi_r=0^\circ$: Stabilitätsgrenze. $\varphi_r=90^\circ$: sehr gut gedämpft.
- **Faustregel:** $\varphi_r\approx30^\circ\dots60^\circ$, $A_r\approx2\dots7$ ($6\dots17$ dB).
- **Dämpfung:** größere $\varphi_r$ → stärker gedämpft, weniger Überschwingen.
- **$K_R$ erhöhen:** hebt die Betragskennlinie → $\omega_D$ steigt → $\varphi_r$ **sinkt** (näher an Grenze).
- **I-Glied in Strecke:** senkt die Phase um konstante $90^\circ$ → reduziert die Phasenreserve.

### ▶ Klausurbeispiel Reserven (25.08.2023, A1)
Bei $\omega_D=5$: $\angle F_o=-135^\circ\Rightarrow\varphi_r=45^\circ$. Bei $\omega_k=20$: $|F_o|=-20$ dB $\Rightarrow A_r=20$ dB. Beide positiv und im Faustregelbereich → **stabil, gut gedämpft**.

---

## 3.7 Das allgemeine Nyquist-Kriterium

### Wann statt des speziellen?
Wenn der offene Kreis **Pole rechts** der $j$-Achse hat ($r_o>0$) oder mehr als zwei Pole auf der $j$-Achse – dann ist das **spezielle** Kriterium nicht anwendbar.

### Formulierung
$r_o$ = Anzahl Pole von $F_o$ **rechts** der $j$-Achse, $a_o$ = Anzahl Pole **auf** der $j$-Achse. Der geschlossene Kreis ist **genau dann stabil**, wenn die Winkeländerung $W$ des Fahrstrahls vom Punkt $-1$ zum laufenden Ortskurvenpunkt ($\omega:0\to\infty$) gleich
$$\boxed{W=r_o\cdot\pi+a_o\cdot\frac{\pi}{2}}$$
ist (Gegenuhrzeigersinn positiv).

### Umschlingungszahl $W$ zählen
Den Fahrstrahl von $-1$ zum laufenden Punkt verfolgen und seine gesamte Winkeländerung von $\omega=0$ bis $\infty$ aufsummieren. Soll-$W$ aus Formel; stimmt das tatsächliche $W$ damit überein → stabil.

### Pole auf der $j$-Achse (Indentation)
Bei Polen in $s=0$ umgeht man diese mit einem kleinen Halbkreis (Indentation); der Term $a_o\cdot\pi/2$ trägt dem Rechnung.

### Stabilisierung instabiler offener Kreise
Auch ein offener Kreis mit Polen rechts der $j$-Achse kann durch Rückführung **stabil** werden – genau dann, wenn die Ortskurve $-1$ exakt $r_o$-mal im Gegenuhrzeigersinn umschlingt.

### ▶ Tutoriumsbeispiel (Tut 3, A3)
$F_{o,1}=\dfrac{7}{s(s+7)}$: 1 Pol auf der $j$-Achse → $r_o=0,a_o=1$, Soll $W=\tfrac\pi2=90^\circ$. Ortskurve liefert $90^\circ$ → **stabil**.
$F_{o,2}=\dfrac{s+17}{2(s+1)(s-1)^2}$: 2 Pole rechts → $r_o=2$, Soll $W=2\pi=360^\circ$; tatsächlich $0^\circ$ → **instabil**.

---

## 3.8 Totzeitglieder

### Definition & Beispiele
Ein Totzeitglied verschiebt das Signal um $T_t$: $\;y(t)=u(t-T_t)$. Physikalisch: Transport (Förderband, Schüttgut), Rohrleitungen (Dusche), Diffusion, Kommunikationsnetzwerke. Totzeit $T_t=l/v$.

### Übertragungsfunktion
$$\boxed{G_{Tt}(s)=e^{-T_t s}}$$
**transzendent** (nicht rational), keine Pole/Nullstellen.

### Betrag & Phase
$$|e^{-j\omega T_t}|=1,\qquad \angle e^{-j\omega T_t}=-\omega T_t\ \text{(rad)}=-\omega T_t\cdot\frac{180^\circ}{\pi}.$$
- **Betrag konstant = 1**, weil $|e^{-j\varphi}|=1$ für jeden reellen Winkel. Eine reine Verschiebung ändert die Amplitude nicht.
- **Phase sinkt linear** mit $\omega$ → bei hohen Frequenzen sehr starke Absenkung. Ortskurve: Kreis mit Radius 1, unendlich oft im Uhrzeigersinn durchlaufen.

### Warum destabilisierend?
Die zusätzliche Phasenabsenkung verringert die Phasenreserve. Der Betrag bleibt gleich (also auch $\omega_D$), aber die Phase bei $\omega_D$ rutscht Richtung $-180^\circ$.

### Phasenabsenkung berechnen
$$\Delta\varphi(\omega)=\omega\,T_t\cdot\frac{180^\circ}{\pi}.$$

### Hurwitz nicht anwendbar
$e^{-T_t s}$ ist kein Polynom → kein endliches charakteristisches Polynom → Hurwitz versagt. Nyquist/Bode funktionieren weiter.

### Maximale Totzeit aus der Phasenreserve
Instabil, sobald die Totzeit die ganze Phasenreserve bei $\omega_D$ aufzehrt:
$$\boxed{T_{t,\max}=\frac{\varphi_r\,[\text{rad}]}{\omega_D}}$$

### ▶ Klausurbeispiel (25.08.2023, A1 Forts.)
$\omega_D=5$, $\varphi_r=45^\circ$, Totzeit $T_t=0{,}15$ s: $\Delta\varphi=5\cdot0{,}15=0{,}75$ rad $\approx43^\circ$. Neue Phase $-135^\circ-43^\circ\approx-180^\circ$ → $\varphi_r\to0$ → **instabil**.

### ▶ Tutoriumsbeispiel (Tut 4, A4)
$F_o=\dfrac{10}{100s^3+125s^2+26s+1}$, $\omega_D\approx0{,}277$, $\varphi_r\approx30{,}5^\circ=0{,}532$ rad → $T_{t,\max}=\dfrac{0{,}532}{0{,}277}\approx1{,}92$ s.

---

## Kernaussagen (zum Merken)

1. $F_W=\dfrac{F_o}{1+F_o}$, $F_Z=\dfrac{1}{1+F_o}$ – gleicher Nenner = charakteristische Gleichung $1+F_o=0$.
2. Stabil ⇔ alle Pole des **geschlossenen** Kreises links der $j$-Achse.
3. Hurwitz (rational): notwendig alle $a_i>0$; für $n=3$ zusätzlich $a_1a_2>a_0a_3$.
4. Spezielles Nyquist: $-1$ links liegen lassen. Allgemein: $W=r_o\pi+a_o\pi/2$.
5. Reserven: $\varphi_r=180^\circ+\angle F_o(j\omega_D)$, $A_{r,\text{dB}}=-|F_o(j\omega_k)|_{\text{dB}}$.
6. Totzeit: Betrag gleich, Phase $-\omega T_t$ → destabilisierend; $T_{t,\max}=\varphi_r/\omega_D$.
