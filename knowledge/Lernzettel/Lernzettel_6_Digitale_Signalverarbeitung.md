# Lernzettel 6 – Grundlagen der digitalen Signalverarbeitung

> Kapitel 6: Abtastung, A/D- und D/A-Umsetzung, digitale Filter (IIR/FIR, BIBO), Shannon-Abtasttheorem, Aliasing, Anti-Aliasing-Filter. **Klausuraufgabe 5 (20–28 P).**

---

## 6.1 Abtastung, A/D- und D/A-Umsetzung

### Die vier Signalklassen
Klassifizierung nach **Zeit** (kontinuierlich/diskret) und **Wert** (kontinuierlich/diskret):

| Signal | Zeit | Wert | entsteht durch |
|---|---|---|---|
| **Analog** | kontinuierlich | kontinuierlich | (Originalsignal) |
| **Abgetastet** | **diskret** | kontinuierlich | Abtastung |
| **Quantisiert** | kontinuierlich | **diskret** | Quantisierung |
| **Digital** | **diskret** | **diskret** | Abtastung **+** Quantisierung |

- **wertkontinuierlich:** beliebige (reelle) Amplitudenwerte. **wertdiskret:** nur feste Stufen.
- **zeitkontinuierlich:** zu jedem $t$ definiert. **zeitdiskret:** nur zu Abtastzeitpunkten $t_k=kT$.

### Sample-and-Hold-Glied
Hält den Abtastwert über die gesamte Abtastperiode konstant (Treppenfunktion), damit der A/D-Wandler Zeit für die Umsetzung hat. Realisierung: Schalter + Kondensator + Impedanzwandler (rückwirkungsfrei).

### A/D-Wandler (ADU)
Wandelt eine analoge Spannung in eine Digitalzahl $Z\in\{0,\dots,2^n-1\}$. Verfahren:
- **Wägeverfahren (sukzessive Approximation):** Bit für Bit vom höchsten an „abwägen", $n$ Schritte – schneller Standard.
- **Zählverfahren** (Tracking, **Dual-Slope**): langsamer, aber sehr genau (Dual-Slope unabhängig von $R,C,T$).

### D/A-Wandler (DAU)
Wandelt Zahl $Z$ in Spannung $u_a=u_{LSB}\cdot Z$. Verfahren: Parallel-, Wäge- (gewichtete Widerstände am OPV-Addierer), Zählverfahren (PWM + RC-Tiefpass).

### Signalverarbeitungskette
$$\text{Sensor}\to\text{Abtast-Halte-Glied}\to\text{ADU}\to\underbrace{\text{digitaler Regelalgorithmus}}_{\text{Software}}\to\text{DAU}\to\text{Halteglied}\to\text{Stellglied}$$

### Abtastung vs. Quantisierung
- **Abtastung:** Diskretisierung der **Zeit** (Werte zu $t_k=kT$ entnehmen). → wertkontinuierlich bleibt.
- **Quantisierung:** Diskretisierung des **Werts** (Runden auf Stufen). → zeitkontinuierlich bleibt.

### Aliasing (Vorschau auf 6.3)
Wird zu langsam abgetastet, „erscheinen" hohe Frequenzen als niedrige **Alias-Frequenzen**. Tritt auf, wenn $f_{sig}>f_{abt}/2$.
$$f_{alias}=|f_{sig}-k\cdot f_{abt}|\quad(\text{nächstes }k),\qquad\text{einfach: }f_{alias}=|f_{sig}-f_{abt}|.$$

---

## 6.2 Digitale Filter

### Differenzengleichung
Beschreibt das Filter im Zeitdiskreten; die aktuelle Ausgabe hängt von aktuellen/vergangenen Ein- und Ausgabewerten ab, z. B.:
$$y_k=a_1 y_{k-1}+b_0 u_k+b_1 u_{k-1}+\dots$$

### IIR vs. FIR
- **IIR** (Infinite Impulse Response): hat **Rückführung** vergangener **Ausgabewerte** ($y_{k-i}$) → unendlich lange Impulsantwort. Beispiel: zeitdiskretes PT1.
- **FIR** (Finite Impulse Response): **keine** Ausgaberückführung, nur Eingabewerte → endliche Impulsantwort. Beispiel: gleitender Mittelwert (Moving Average).

### Allgemeine IIR 1. Ordnung
$$y_k=a_1 y_{k-1}+b_0 u_k$$

### BIBO-Stabilität (digital)
Beschränkter Eingang → beschränkter Ausgang. Für IIR 1. Ordnung:
$$\boxed{|a_1|<1 \iff \text{BIBO-stabil}}$$
(Pol $z=a_1$ muss **innerhalb** des Einheitskreises liegen.) Für $|a_1|\ge1$ klingt die Ausgangsfolge auf → instabil.

### Filterkoeffizienten aus Sprungantwort bestimmen
Aus gemessenen Werten $y_0,y_1,y_2,\dots$ bei Eingangssprung $u_k=1$ ein Gleichungssystem aufstellen und lösen (siehe Beispiel unten).

### Stationärer Endwert
Für $y_k=a_1y_{k-1}+b_0u_k$ bei Sprung $u=1$:
$$y_\infty=\frac{b_0}{1-a_1}.$$

### Euler-Diskretisierung eines PT1
PT1 kontinuierlich: $T\dot y+y=Ku$, also $\dot y=\tfrac1T(Ku-y)$. Euler-Vorwärts $\dot y\approx\tfrac{y_{k+1}-y_k}{\Delta t}$:
$$y_{k+1}=\Big(1-\tfrac{\Delta t}{T}\Big)y_k+\tfrac{\Delta t}{T}K\,u_k.$$
Vergleich mit $y_{k+1}=a_1y_k+b_0u_k$ → Rückrechnung:
$$\frac{\Delta t}{T}=1-a_1\;\Rightarrow\;\boxed{T=\frac{\Delta t}{1-a_1}},\qquad K=\frac{b_0}{1-a_1}.$$

### FIR immer stabil?
Ja: keine Ausgaberückführung → die Impulsantwort hat endliche Länge → ein beschränkter Eingang erzeugt immer einen beschränkten Ausgang.

### Gleitender Mittelwert
$y_k=\tfrac1{n+1}(u_k+u_{k-1}+\dots+u_{k-n})$ → MA-Filter, ein **FIR-Tiefpass** (glättet/dämpft hohe Frequenzen).

### ▶ Klausurbeispiel (Klausur 01.03.2023, A5): Koeffizienten + Euler
Digitales Filter $y_{k+1}=0{,}9 y_k+0{,}1 u_k$ entspricht einem PT1; gerechnet mit $\Delta t=10^{-4}$ s.
$$\frac{\Delta t}{T}=1-a_1=0{,}1\;\Rightarrow\;T=\frac{10^{-4}}{0{,}1}=10^{-3}\,\text{s}.$$
> **Ergebnis:** $T=1$ ms, Knickfrequenz $f=\tfrac{1}{2\pi T}\approx159$ Hz < $f_{abt}/2$ → als Anti-Aliasing-Tiefpass geeignet.

### ▶ Tutoriumsbeispiel (Tut 7, A2): BIBO-Instabilität
$y_k=u_k+2u_{k-1}+4y_{k-2}+0{,}1y_{k-3}$, Impulsanregung $u=(1,0,0,\dots)$ → $y=(4;2{,}4;12{,}24;8{,}42;37{,}56;\dots)$ → **aufklingend** → **BIBO-instabil**.

### ▶ Sprungantwort-Koeffizienten (Klausur 01.03.2023)
Form $y_{k+1}=a_0y_k+a_1y_{k-1}-b_0u_k$, Sprung $u_k=(0,1,1,\dots)$, abgelesen $y_k=(0;0;0{,}5;0{,}75;0{,}875)$:
- $y_2=0{,}5=-b_0u_1\Rightarrow b_0=-0{,}5$.
- $y_3=0{,}75=a_0\cdot0{,}5+0{,}5\Rightarrow a_0=0{,}5$.
- $y_4=0{,}875=0{,}5\cdot0{,}75+a_1\cdot0+0{,}5\Rightarrow a_1=0$.
> **Ergebnis:** $y_{k+1}=0{,}5y_k+0{,}5u_k$.

---

## 6.3 Das Abtasttheorem von Shannon

### Shannon-Nyquist-Abtasttheorem
Ein bandbegrenztes Signal (höchste Frequenz $f_{sig}$) lässt sich **eindeutig** aus seinen Abtastwerten rekonstruieren, wenn
$$\boxed{f_{abt}\ge 2\,f_{sig}}\quad\text{bzw.}\quad f_{sig}\le f_N=\frac{f_{abt}}{2}.$$

### Nyquist-Frequenz
$$f_N=\frac{f_{abt}}{2}.$$
Signalanteile **oberhalb** $f_N$ verursachen **Aliasing**.

### Was passiert bei $f_{sig}>f_N$?
Die periodisch fortgesetzten Spektren überlappen → das Originalspektrum kann nicht mehr herausgefiltert werden → Rekonstruktion unmöglich; hohe Frequenz erscheint als **Alias**:
$$f_{alias}=|f_{sig}-f_{abt}|.$$

### Anti-Aliasing-Filter
Analoges **Tiefpassfilter VOR der Abtastung**, das Frequenzen oberhalb $f_N$ unterdrückt → künstliche Bandbegrenzung. Anforderung: Grenzfrequenz $f_g\le f_{abt}/2$.

### PT1-Tiefpass in einer OPV-Schaltung
Invertierender OPV-Tiefpass:
$$G_{OPV}(s)=\frac{U_a}{U_e}=\frac{-R_2/R_1}{1+R_2 C\,s}$$
→ PT1 (mit negativer Verstärkung). Parameter ablesen: $K=-R_2/R_1$, $T=R_2 C$, Grenzfrequenz
$$f_g=\frac{1}{2\pi T}=\frac{1}{2\pi R_2 C}.$$

### Abtastfrequenz in der Praxis
Faustregel: $f_{abt}\approx 5\dots10\times$ höchste relevante Signalfrequenz (deutlich über dem theoretischen Minimum $2f_{sig}$), für saubere Rekonstruktion mit realen (nicht idealen) Filtern/Haltegliedern.

### ▶ Klausurbeispiel (Klausur 01.03.2023, A5): Quantisierung & Aliasing
Sensor $\pm1$ V, $f_{abt}=10^4$ Hz ($T_A=10^{-4}$ s).
- **Aliasing** ab $f_{sig}>f_{abt}/2=5\cdot10^3$ Hz.
- Quantisierung mit 4 Zwischenwerten zwischen $0{,}4$ V und $-0{,}6$ V: $\Delta=\dfrac{|0{,}4-(-0{,}6)|}{4+1}=0{,}2$ V, max. Fehler $\Delta/2=0{,}1$ V.
- Bits für $\pm1$ V mit $\Delta=0{,}2$: $\dfrac{2}{0{,}2}=10\le2^n-1\Rightarrow 2^n\ge11\Rightarrow n=4$ Bit.

### ▶ Klausurbeispiel (Klausur 30.08.2024, A5): Quantisierung & Anti-Aliasing-OPV
Sensor $\pm1$ V, 11 äquidistante Werte → $\Delta=\dfrac{2}{10}=0{,}2$ V, max. Fehler $0{,}1$ V, Bits $11\le2^n-1\Rightarrow n=4$.
OPV-Tiefpass mit $\omega=0{,}5\Rightarrow T=2$, $|K|_{dB}=40\Rightarrow|K|=100$ → $R_2C=T=2$, $-R_2/R_1=-100\Rightarrow R_1=R_2/100$. Tiefpassverhalten → als Anti-Aliasing-Filter geeignet.

---

## Kernaussagen (zum Merken)

1. 4 Signalklassen über Zeit×Wert (kontinuierlich/diskret); digital = beides diskret.
2. Shannon: $f_{abt}\ge2f_{sig}$; Nyquist-Frequenz $f_N=f_{abt}/2$; Alias $f_{alias}=|f_{sig}-f_{abt}|$.
3. Quantisierung: $\Delta=\dfrac{x_{max}-x_{min}}{2^n-1}$, $e_{max}=\Delta/2$, Bits aufrunden.
4. IIR (mit Ausgaberückführung) BIBO-stabil ⇔ $|a_1|<1$; FIR immer stabil.
5. Euler-PT1: $T=\Delta t/(1-a_1)$, $K=b_0/(1-a_1)$, $y_\infty=b_0/(1-a_1)$.
6. Anti-Aliasing = analoger Tiefpass mit $f_g\le f_{abt}/2$; OPV-PT1: $K=-R_2/R_1$, $T=R_2C$, $f_g=1/(2\pi T)$.
