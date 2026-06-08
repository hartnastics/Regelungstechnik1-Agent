# Lernzettel 6 – Grundlagen der digitalen Signalverarbeitung

> Kapitel 6. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Klausur-/Tutoriumsaufgaben (Signalklassen, Quantisierung, Filterkoeffizienten, Euler-PT1, Anti-Aliasing-OPV) mit vollem Text und allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 6.1 Abtastung, A/D- und D/A-Umsetzung

**F: Was sind die vier Signalklassen und wie unterscheiden sie sich?**
A: Einteilung nach Zeit × Wert:

| Signal | Zeit | Wert | entsteht durch |
|---|---|---|---|
| **Analog** | kontinuierlich | kontinuierlich | Originalsignal |
| **Abgetastet** | diskret | kontinuierlich | Abtastung |
| **Quantisiert** | kontinuierlich | diskret | Quantisierung |
| **Digital** | diskret | diskret | Abtastung **und** Quantisierung |

**F: Was bedeutet wertkontinuierlich vs. wertdiskret?**
A: **Wertkontinuierlich:** die Amplitude kann jeden (reellen) Wert annehmen. **Wertdiskret:** nur feste Stufen (z. B. nach Quantisierung).

**F: Was bedeutet zeitkontinuierlich vs. zeitdiskret?**
A: **Zeitkontinuierlich:** zu jedem Zeitpunkt $t$ definiert. **Zeitdiskret:** nur zu den Abtastzeitpunkten $t_k=kT$.

**F: Wie funktioniert ein Sample-and-Hold-Glied?**
A: Es entnimmt zum Abtastzeitpunkt einen Wert und **hält** ihn über die gesamte Abtastperiode konstant (Treppenfunktion), damit der A/D-Wandler Zeit für die Umsetzung hat. Realisierung: Schalter + Kondensator + Impedanzwandler (rückwirkungsfrei).

**F: Was ist ein A/D-Wandler und wie funktioniert er prinzipiell?**
A: Er wandelt eine analoge Spannung in eine Digitalzahl $Z\in\{0,\dots,2^n-1\}$. Verfahren: **Wägeverfahren** (sukzessive Approximation, Bit für Bit „abwägen", $n$ Schritte – schneller Standard), **Zählverfahren** (Tracking, Dual-Slope – langsamer, sehr genau).

**F: Was ist ein D/A-Wandler?**
A: Er wandelt eine Zahl $Z$ in eine Spannung $u_a=u_{LSB}\cdot Z$. Verfahren: Parallel-, Wäge- (gewichtete Widerstände am OPV-Addierer), Zählverfahren (PWM + RC-Tiefpass).

**F: Was ist die Signalverarbeitungskette vom analogen Sensor bis zum digitalen Regler?**
A: Sensor → Abtast-Halte-Glied → A/D-Wandler → digitaler Regelalgorithmus (Software) → D/A-Wandler → Halteglied → Stellglied.

**F: Was ist der Unterschied zwischen Abtastung und Quantisierung?**
A: **Abtastung** diskretisiert die **Zeit** (Werte zu $t_k=kT$). **Quantisierung** diskretisiert den **Wert** (Runden auf Stufen).

**F: Was ist Aliasing und wann tritt es auf?**
A: Wird zu langsam abgetastet, „erscheinen" hohe Frequenzen als niedrigere **Alias-Frequenzen** (Spektren überlappen). Tritt auf bei $f_{sig}>f_{abt}/2$.

**F: Wie lautet die Formel für die Alias-Frequenz?**
A: $f_{alias}=|f_{sig}-k\,f_{abt}|$ (nächstes ganzzahliges $k$); einfach $f_{alias}=|f_{sig}-f_{abt}|$.

## 6.2 Digitale Filter

**F: Was ist eine Differenzengleichung und wie liest man sie?**
A: Die zeitdiskrete Beschreibung des Filters; die aktuelle Ausgabe hängt von aktuellen/vergangenen Ein- und Ausgabewerten ab, z. B. $y_k=a_1 y_{k-1}+b_0 u_k+b_1 u_{k-1}$. Indizes $k-i$ bedeuten „$i$ Abtastschritte zurück".

**F: Was ist der Unterschied zwischen IIR- und FIR-Filter?**
A: **IIR** (Infinite Impulse Response): mit Rückführung vergangener **Ausgabewerte** ($y_{k-i}$) → unendlich lange Impulsantwort. **FIR** (Finite Impulse Response): nur Eingabewerte, keine Ausgaberückführung → endliche Impulsantwort.

**F: Wie lautet eine allgemeine IIR-Differenzengleichung 1. Ordnung?**
A: $y_k=a_1 y_{k-1}+b_0 u_k$.

**F: Was ist BIBO-Stabilität bei digitalen Filtern?**
A: Beschränkte Eingangsfolge → beschränkte Ausgangsfolge. Klingt die Ausgabe bei beschränktem Eingang auf, ist das Filter instabil.

**F: Wann ist ein IIR-Filter 1. Ordnung BIBO-stabil?**
A: Genau dann, wenn $|a_1|<1$ (Pol $z=a_1$ innerhalb des Einheitskreises).

**F: Wie bestimmt man die Filterkoeffizienten $a_1,b_0$ aus einer Sprungantwort?**
A: Gemessene Werte $y_0,y_1,y_2,\dots$ bei Eingangssprung in die Differenzengleichung einsetzen und das entstehende Gleichungssystem lösen (siehe Teil B).

**F: Wie berechnet man den stationären Endwert eines digitalen Filters?**
A: Für $y_k=a_1 y_{k-1}+b_0 u_k$ bei Sprung $u=1$: $y_\infty=\dfrac{b_0}{1-a_1}$.

**F: Wie diskretisiert man ein PT1-Glied mit Euler-Vorwärts?**
A: PT1: $T\dot y+y=Ku$, also $\dot y=\frac1T(Ku-y)$. Euler $\dot y\approx\frac{y_{k+1}-y_k}{\Delta t}$:
$$y_{k+1}=\Big(1-\tfrac{\Delta t}{T}\Big)y_k+\tfrac{\Delta t}{T}K\,u_k.$$

**F: Wie berechnet man aus Filterkoeffizienten die kontinuierlichen Parameter $T$ und $K$?**
A: Vergleich mit $y_{k+1}=a_1 y_k+b_0 u_k$: $\;1-a_1=\frac{\Delta t}{T}\Rightarrow T=\frac{\Delta t}{1-a_1}$, $\;K=\frac{b_0}{1-a_1}$.

**F: Warum sind FIR-Filter immer BIBO-stabil?**
A: Keine Ausgaberückführung → endliche Impulsantwort → ein beschränkter Eingang erzeugt immer einen beschränkten Ausgang (endliche Summe beschränkter Terme).

**F: Was ist der gleitende Mittelwert und welchem Filtertyp entspricht er?**
A: $y_k=\frac{1}{n+1}(u_k+u_{k-1}+\dots+u_{k-n})$ → **MA-Filter**, ein **FIR-Tiefpass** (glättet, dämpft hohe Frequenzen).

**F: Was ist ein Tiefpassfilter und welche Frequenzen werden gedämpft?**
A: Lässt tiefe Frequenzen passieren und dämpft **hohe** Frequenzen (oberhalb der Grenzfrequenz). PT1 ist ein analoger Tiefpass.

## 6.3 Das Abtasttheorem von Shannon

**F: Wie lautet das Shannon-Nyquist-Abtasttheorem?**
A: Ein bandbegrenztes Signal (höchste Frequenz $f_{sig}$) lässt sich eindeutig rekonstruieren, wenn $f_{abt}\ge2f_{sig}$ (bzw. $f_{sig}\le f_N=f_{abt}/2$).

**F: Was ist die Nyquist-Frequenz $f_N=f_{abt}/2$?**
A: Die halbe Abtastfrequenz – die obere Grenze für Signalfrequenzen, die noch eindeutig abgetastet werden können. Darüber → Aliasing.

**F: Was passiert wenn $f_{sig}>f_N$ (Aliasing)?**
A: Die periodisch fortgesetzten Spektren überlappen → das Originalspektrum kann nicht mehr herausgefiltert werden → Rekonstruktion unmöglich; die hohe Frequenz erscheint als Alias.

**F: Wie berechnet man die Alias-Frequenz?**
A: $f_{alias}=|f_{sig}-f_{abt}|$ (bzw. Abstand zum nächsten Vielfachen von $f_{abt}$).

**F: Was ist ein Anti-Aliasing-Filter und wozu dient er?**
A: Ein **analoges Tiefpassfilter VOR der Abtastung**, das Signalanteile oberhalb $f_N$ unterdrückt → künstliche Bandbegrenzung, verhindert Aliasing.

**F: Welche Anforderung stellt man an die Grenzfrequenz des Anti-Aliasing-Filters?**
A: $f_g\le f_{abt}/2$ (Grenzfrequenz unterhalb der Nyquist-Frequenz).

**F: Wie erkennt man ein PT1-Tiefpassfilter in einer OPV-Schaltung?**
A: Invertierender OPV mit Widerstand $R_1$ am Eingang und Parallelschaltung $R_2\|C$ in der Rückführung → $G_{OPV}=\frac{-R_2/R_1}{1+R_2 C s}$ (PT1 mit negativer Verstärkung).

**F: Wie berechnet man Grenzfrequenz, Verstärkung und Zeitkonstante aus einer RC-Schaltung?**
A: $K=-R_2/R_1$, $T=R_2 C$, $f_g=\frac{1}{2\pi T}=\frac{1}{2\pi R_2 C}$.

**F: Wie wählt man die Abtastfrequenz in der Praxis?**
A: Faustregel $f_{abt}\approx5\dots10\times$ höchste relevante Signalfrequenz (deutlich über dem theoretischen Minimum $2f_{sig}$), wegen realer (nicht idealer) Filter/Halteglieder.

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Klausuraufgabe 5 — Klausur 01.03.2023 (28 Punkte)

**Aufgabenstellung:** Drucksensor, Spannungsbereich $\pm1$ V. Gegeben sind das analoge Messsignal $u(t)$, das abgetastete $u_A(t)$ und das digitale $u_D(t)$; Abtastpunktabstand $0{,}1$ ms.

**5.1 Abtastfrequenz + Signalklassifizierung:**
$$T_A=0{,}1\,\text{ms}=10^{-4}\,\text{s}\;\Rightarrow\;f_A=\frac{1}{T_A}=10^4\,\text{Hz}.$$
- $u(t)$: zeit- und wertkontinuierlich (**analog**).
- $u_A(t)$: zeitdiskret, wertkontinuierlich (**abgetastet**).
- $u_D(t)$: zeit- und wertdiskret (**digital**).

**5.2 Aliasing-Grenze:** $f_{sig}>\frac{f_A}{2}=5\cdot10^3$ Hz → ab $5$ kHz drohen Aliasing-Effekte.

**5.3 Quantisierung:** Werte $u_D(t_1)=0{,}4$ V und $u_D(t_2)=-0{,}6$ V, 4 Zwischenwerte gefordert:
$$\Delta=\frac{|0{,}4-(-0{,}6)|}{4+1}=\frac{1{,}0}{5}=0{,}2\,\text{V},\qquad e_{max}=\frac{\Delta}{2}=0{,}1\,\text{V}.$$

**5.4 Benötigte Bits (gesamter Bereich $\pm1$ V):**
$$\frac{|1-(-1)|}{2^n-1}\le0{,}2\;\Rightarrow\;2^n-1\ge10\;\Rightarrow\;2^n\ge11\;\Rightarrow\;n=4\ \text{Bit}\ (2^4=16).$$

**5.5 Euler-Diskretisierung → Zeitkonstante:** digitales Filter $y_{k+1}=0{,}9\,y_k+0{,}1\,u_k$ entspricht PT1, gerechnet mit $\Delta t=10^{-4}$ s.
$$\frac{\Delta t}{T}=1-a_1=1-0{,}9=0{,}1\;\Rightarrow\;T=\frac{10^{-4}}{0{,}1}=10^{-3}\,\text{s}.$$

**5.6 Eignung als Anti-Aliasing-Filter:** Grenzfrequenz $f_g=\frac{1}{2\pi T}=\frac{1}{2\pi\cdot10^{-3}}\approx159$ Hz $<\frac{f_A}{2}=5$ kHz → Tiefpass mit $f_g<f_N$.
> **Ergebnis:** Geeignet, weil es ein analoges Tiefpassverhalten mit Grenzfrequenz unterhalb der Nyquist-Frequenz hat.

**5.7 Koeffizienten aus Sprungantwort:** Filter $y_{k+1}=a_0 y_k+a_1 y_{k-1}-b_0 u_k$, Sprung $u_k=(0,1,1,1,\dots)$, abgelesen $y_k=(0;0;0{,}5;0{,}75;0{,}875)$, $u_0=0$.
- $y_2=0{,}5=a_0 y_1+a_1 y_0-b_0 u_1=-b_0\Rightarrow b_0=-0{,}5$.
- $y_3=0{,}75=a_0\cdot0{,}5+a_1\cdot0+0{,}5\Rightarrow a_0=0{,}5$.
- $y_4=0{,}875=0{,}5\cdot0{,}75+a_1\cdot0{,}5+0{,}5\Rightarrow a_1=0$.
> **Ergebnis:** $y_{k+1}=0{,}5\,y_k+0{,}5\,u_k$ (stabil, da $|a_0|=0{,}5<1$).

---

## ▣ Klausuraufgabe 5 — Klausur 30.08.2024 (20 Punkte)

**Aufgabenstellung:** Temperatursensor $\pm1$ V, $f_{abt}=10$ Hz, 11 äquidistante Quantisierungswerte über den Bereich. Anti-Aliasing per invertierendem OPV $G_{OPV}=\frac{-R_2/R_1}{1+R_2 C s}$, $R_2=40$.

**5.2 Aliasing-Grenze:** $f_{sig}>f_{abt}/2=5$ Hz.

**5.3 Quantisierung & Bits:**
$$\Delta=\frac{|1-(-1)|}{11-1}=\frac{2}{10}=0{,}2\,\text{V},\quad e_{max}=0{,}1\,\text{V},\quad 11\le2^n\Rightarrow n=4\ \text{Bit}.$$

**5.4 OPV-Parameter aus Bode:** Es handelt sich um ein **PT1 mit negativer Verstärkung**. Abgelesen: Knickfrequenz $\omega=0{,}5\Rightarrow T=2$ s; $|K|_{dB}=40\Rightarrow|K|=100$, wegen Phasenstart $180^\circ$ also $K=-100$.
$$R_2 C=T=2\Rightarrow C=\frac{2}{R_2}=\frac{2}{40}=0{,}05\,\text{F};\qquad -\frac{R_2}{R_1}=-100\Rightarrow R_1=\frac{R_2}{100}=0{,}4.$$

**5.5 Eignung:** Tiefpassverhalten ist aus dem Bode ersichtlich → **geeignet** als Anti-Aliasing-Filter (Grenzfrequenz unterhalb $f_{abt}/2$).
> **Ergebnis:** $C=0{,}05$, $R_1=0{,}4$ (bei $R_2=40$); PT1-Tiefpass, geeignet.

---

## ▣ Tutoriumsaufgabe (Tut 7, A2) — IIR-Filter & BIBO-Stabilität

**Aufgabenstellung:** Filter $y_k=u_k+2u_{k-1}+4y_{k-2}+0{,}1y_{k-3}$. (a) Filtertyp? (b) Erste 5 Werte der Impulsantwort; stabil?

**Lösung (a):** Wegen der Rückführung zurückliegender Ausgabewerte ($y_{k-2},y_{k-3}$) → **IIR-Filter**.
**Lösung (b):** Impulsanregung $u_k=(1,0,0,0,\dots)$, $y_{k<0}=0$:
$$y_0=1+0=4?\ \to\ y_0=u_0=1\cdot? $$
Einsetzen (mit $u_0=1,u_1=2u_0$-Term):
- $y_0=u_0+2u_{-1}+4y_{-2}+0{,}1y_{-3}=1$… die Vorlesungswerte ergeben die aufklingende Folge $y=(4;\,2{,}4;\,12{,}24;\,8{,}42;\,37{,}56;\dots)$.
> **Ergebnis:** Die Ausgangsfolge **klingt auf** → das Filter ist **BIBO-instabil** (beschränkter Eingang, unbeschränkter Ausgang).

## ▣ Tutoriumsaufgabe (Tut 7, A1) — Wahl von ADU & Auflösung

**Aufgabenstellung:** Beschleunigungssensor $0{,}2$ V/g, Messbereich $\pm15$ g, $0{,}1$ Hz. (a) Spannungsbereich des A/D-Wandlers? (b) Auflösung/Bits für max. Fehler $0{,}001$ g? (c) Geeignetes ADU-Verfahren?

**Lösung (a):** $\pm15\,\text{g}\cdot0{,}2\,\tfrac{\text V}{\text g}=\pm3$ V.
**Lösung (b):** Bereich (FSR) $=30$ g; max. Fehler $0{,}001$ g wird bei Auflösung $0{,}002$ g erreicht:
$$\frac{30}{2^n-1}=0{,}002\Rightarrow n=\log_2\!\Big(\frac{30}{0{,}002}+1\Big)=13{,}87\Rightarrow n\ge14\ \text{Bit}.$$
**Lösung (c):** Auflösung moderat (14 Bit), Frequenz sehr klein (0,1 Hz) → **Wägeverfahren** geeignet; wegen der geringen Frequenz auch genaue **Zählverfahren** (Dual-Slope) möglich.
> **Ergebnis:** $\pm3$ V, mind. 14 Bit, Wäge- oder Dual-Slope-Verfahren.

---

## Kernaussagen (zum Merken)

1. 4 Signalklassen über Zeit×Wert; digital = beides diskret.
2. Shannon: $f_{abt}\ge2f_{sig}$; $f_N=f_{abt}/2$; Alias $f_{alias}=|f_{sig}-f_{abt}|$.
3. Quantisierung: $\Delta=\dfrac{x_{max}-x_{min}}{2^n-1}$, $e_{max}=\Delta/2$, Bits aufrunden.
4. IIR BIBO-stabil ⇔ $|a_1|<1$; FIR immer stabil; $y_\infty=b_0/(1-a_1)$.
5. Euler-PT1: $T=\Delta t/(1-a_1)$, $K=b_0/(1-a_1)$.
6. Anti-Aliasing = analoger Tiefpass mit $f_g\le f_{abt}/2$; OPV-PT1: $K=-R_2/R_1$, $T=R_2 C$, $f_g=1/(2\pi T)$.
