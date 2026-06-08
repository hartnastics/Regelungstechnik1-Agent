# Lernzettel 4 – Synthese (Entwurf) von Regelungen

> Kapitel 4: Anforderungen, stationäres Verhalten (Endwertsatz), Reglerstruktur P/I/D, Realisierung P/PI/PD/PID, Reglerparameter nach Kessler (Betragsoptimum), DC-Motor, Frequenzgangformung.

---

## 4.1 Aufgabenstellung und Anforderungen

### Typische Anforderungen an den Regelkreis
1. **Stabilität** – der geschlossene Kreis muss stabil sein (Grundvoraussetzung).
2. **Stationäre Genauigkeit** – bleibende Regelabweichung $e_\infty=0$ (oder unter Schranke).
3. **Dämpfung** – genügend Abstand zur Stabilitätsgrenze ($\varphi_r$, $A_r$).
4. **Schnelligkeit** – Regelkreis nicht zu langsam.
5. **Realisierbarkeit** – Stellglied muss $u(t)$ erzeugen können (Begrenzung, Bandbreite); Regler-Differenzordnung $\ge0$.

### Führungs- vs. Störverhalten
- **Führungsverhalten:** Reaktion auf Sollwertänderungen $w$ (gutes Folgen).
- **Störverhalten:** Reaktion auf Störungen $z$ (schnelles Ausregeln). Beide getrennt bewertbar (unterschiedliche Übertragungsfunktionen $F_W$, $F_Z$).

### Stationär vs. dynamisch
- **Stationär:** Endzustand nach Einschwingen (bleibende Abweichung, Endwert).
- **Dynamisch:** Verlauf während des Einschwingens (Überschwingen, Zeiten).

### Kenngrößen der Sprungantwort
- **Anregelzeit:** Zeit bis die Regelgröße den Sollwert erstmals (näherungsweise) erreicht.
- **Ausregelzeit:** Zeit bis $y$ dauerhaft in einem Toleranzband (z. B. $\pm2\%$) bleibt.
- **Überschwingen:** maximale prozentuale Überhöhung über den Endwert.
- **Stationäre Genauigkeit:** verbleibende Abweichung $e_\infty$.

### Robustheit
Unempfindlichkeit gegenüber Modellunsicherheiten und Parameterschwankungen – ausreichende Stabilitätsreserven sorgen für Robustheit.

---

## 4.2 Stationäres Verhalten

### Endwertsatz
$$\boxed{\lim_{t\to\infty}y(t)=\lim_{s\to0}s\,Y(s)}$$
Gilt **nur**, wenn der Grenzwert existiert (System **stabil**).

### Stationärer Endwert nach Sprung
Für $G(s)$ ohne I-Glied und Sprung $W(s)=\tfrac{w_0}{s}$:
$$y_\infty=\lim_{s\to0}s\,G(s)\frac{w_0}{s}=G(0)\,w_0.$$
$G(0)$ = stationäre Verstärkung (Wert der ÜF bei $s=0$).

### Stationäre Regelabweichung
$$e_\infty=\lim_{s\to0}s\,E(s)=\lim_{s\to0}\frac{s\,W(s)}{1+F_o(s)}\overset{W=w_0/s}{=}\frac{w_0}{1+F_o(0)}.$$

### Wann $e_\infty=0$?
Genau dann, wenn $F_o(0)=\infty$, also wenn **der offene Kreis einen Integrator** (Pol bei $s=0$) enthält.

### Systemtyp
- **Typ 0** (kein I-Anteil): endliche $F_o(0)=K_o$ → bleibende Abweichung $\frac{w_0}{1+K_o}$.
- **Typ 1** (ein I-Anteil): $e_\infty=0$ bei Sprung, konstanter Fehler bei Rampe.
- **Typ 2** (zwei I-Anteile): $e_\infty=0$ auch bei Rampe.

### Reglerstruktur für $e_\infty=0$
Ein **I-Anteil** im Regler (PI/PID) garantiert bei Sprungeingang $e_\infty=0$. Der Integrator integriert den Fehler so lange auf, bis $e=0$.

### Bedingung für stationären Zustand eines Integrators
Da $\dot y=0$ im stationären Zustand, muss die **Eingangsgröße des Integrators Null** werden: $\lim_{t\to\infty}w(t)=0$ am I-Glied-Eingang.

---

## 4.3 Grundsätzliche Struktur des Reglers

| Anteil | Wirkung |
|---|---|
| **P** | proportional zu $e$ → schnelle Reaktion, **Verstärkung**, aber bleibender Fehler |
| **I** | integriert $e$ auf → **stationäre Genauigkeit** (treibt $e\to0$), aber langsamer/Phasenverlust |
| **D** | proportional zu $\dot e$ → reagiert auf **Fehleränderung**, **Phasenvoreilung**, mehr Dämpfung/Schnelligkeit, aber rauschempfindlich |

Kombinationen: **PI** (P+I), **PD** (P+D), **PID** (P+I+D).

---

## 4.4 Realisierung von Reglern

### P-Regler
$$G_R(s)=K_R$$
Einsatz: einfache Strecken, wenn bleibende Abweichung tolerierbar. Bode: konstanter Betrag $20\log K_R$, Phase $0^\circ$.

### I-Regler
$$G_R(s)=\frac{K_I}{s}=\frac{1}{T_I s}$$
Bode: $-20$ dB/Dek, Phase $-90^\circ$.

### PI-Regler
$$G_R(s)=K_R\left(1+\frac{1}{T_R s}\right)=K_R\frac{1+T_R s}{T_R s}$$
- $K_R$ = Reglerverstärkung, $T_R$ = Nachstellzeit.
- **Bode:** tiefe Frequenzen $-20$ dB/Dek (I), Knick bei $\omega=1/T_R$, dann konstant (P); Phase $-90^\circ\to0^\circ$.

### PD-Regler (real, mit Verzögerung $T_N$)
$$G_R(s)=K_R\frac{1+T_D s}{1+T_N s},\quad T_N\ll T_D$$
**Bode:** $+20$ dB/Dek-Anhebung zwischen $1/T_D$ und $1/T_N$, Phasenanhebung (Lead). Der **ideale** PD $K_R(1+T_D s)$ ist **nicht realisierbar** (Zählergrad > Nennergrad).

### PID-Regler
$$G_R(s)=K_R\left(1+\frac{1}{T_R s}+T_D s\right)\quad\text{(ideal, additiv)}$$
oder multiplikativ $K_R\frac{(1+T_{R1}s)(1+T_{R2}s)}{T_{R1}s}$. Vereint stationäre Genauigkeit (I) und Dämpfung/Schnelligkeit (D).

### Vor-/Nachteile des D-Anteils
- **Vorteil:** Phasenvoreilung → erhöht Phasenreserve, schnellere/besser gedämpfte Antwort.
- **Nachteil:** verstärkt **hochfrequentes Rauschen** (Betrag steigt mit $\omega$); idealer D nicht realisierbar → realer PD nötig.

### Reglertyp aus Bode erkennen
- **PI:** Anfangssteigung $-20$ dB/Dek, Knick bei $\omega=1/T_R$, Phase startet $-90^\circ$.
- **PD:** Steigung $+20$ dB/Dek bis zur Knickfrequenz, Phase positiv.
- **$K_R$ ablesen:** Betrag im P-Bereich (konstantes Niveau) in linear umrechnen $K_R=10^{(\text{dB})/20}$.

### ▶ Beispiel (Klausur 01.03.2023, A1): PI aus Bode ablesen
Knickfrequenz $\omega_R=1$ rad/s (Phase $-45^\circ$) → $T_R=1$. Hochfrequentes Niveau $20$ dB → $K_R=10$. ⇒ $G_R(s)=10\dfrac{1+s}{s}$.

---

## 4.5 Methoden zur Reglerparameter-Festlegung (Kessler / Betragsoptimum)

### Betragsoptimum – Ziel
Der Frequenzgang des **geschlossenen** Führungskreises $|F_W(j\omega)|$ soll über einen möglichst breiten Bereich **$\approx1$** bleiben (flacher Betragsverlauf) → gutes Führungsverhalten.

### Vereinfachtes Verfahren nach Kessler
Strecke aus mehreren PT1: $G_S=\dfrac{K_S}{(1+T_1s)(1+T_2s)\cdots}$ mit $T_1>T_2>\dots$
1. **Polkompensation:** Reglernachstellzeit = **größte** Streckenzeitkonstante: $\;T_R=T_1$. Damit kürzt der Reglerzähler $(1+T_Rs)$ den langsamsten Pol.
2. **PT2-Näherung des offenen Kreises:** Restliche kleine Zeitkonstanten zur **Summenzeitkonstante** zusammenfassen $\;T_\Sigma=T_2+T_3+\dots$
$$F_o\approx\frac{V}{s\,(1+T_\Sigma s)},\qquad V=\text{Kreisverstärkung}.$$
3. Geschlossener Kreis ≈ PT2:
$$F_W\approx\frac{1}{\frac{T_\Sigma}{V}s^2+\frac1V s+1}=\frac{1}{T^2s^2+2DTs+1}$$
Vergleich liefert $\;T=\sqrt{T_\Sigma/V}$ und $\;2DT=1/V$, daraus:
$$\boxed{V=\frac{1}{4D^2 T_\Sigma}}\qquad\text{bzw. für eine PT1-Strecke }\ \boxed{K_R=\frac{T_1}{2K_S T_\Sigma}}\ (D=\tfrac1{\sqrt2}).$$

### Bedeutung jeder Größe
- $T_1$: größte Streckenzeitkonstante (wird kompensiert).
- $K_S$: stationäre Streckenverstärkung.
- $T_\Sigma$: Summe der kleinen (nicht kompensierten) Zeitkonstanten.
- $D$: gewünschte Dämpfung des geschlossenen Kreises.

### Dämpfungswerte
- **$D=1/\sqrt2\approx0{,}707$** („Oszillographendämpfung"/Betragsoptimum): ca. **4,3 %** Überschwingen, flachster Betragsgang – guter Kompromiss.
- **$D=1$** (aperiodischer Grenzfall): **kein** Überschwingen, dafür langsamer.
- **Unterschied in der Sprungantwort:** $D=1/\sqrt2$ schwingt einmal leicht über und ist schneller; $D=1$ kriecht ohne Überschwingen heran.

### Voraussetzungen Kessler
Strecke als Reihe von PT1-Gliedern (oder PT1 + kleine Zeitkonstanten) mit dominanter $T_1$; eine kleine „Summenzeitkonstante" $T_\Sigma\ll T_1$.

### ▶ Tutoriumsbeispiel (Tut 5, A2): PI nach Kessler
$G_S=\dfrac{5}{(s+10)(0{,}1s^2+2{,}5s+10)}=\dfrac{0{,}05}{(0{,}1s+1)(0{,}2s+1)(0{,}05s+1)}$, Zeitkonstanten $T_1=0{,}2>T_2=0{,}1>T_3=0{,}05$.
- **Polkompensation:** $T_R=T_1=0{,}2$.
- Offener Kreis: $F_o=\dfrac{0{,}05K_R}{s(0{,}1s+1)(0{,}05s+1)}$, $T_\Sigma=0{,}1+0{,}05=0{,}15$.
- $F_W\approx\dfrac{1}{T^2s^2+2DTs+1}$ mit $T^2=\dfrac{0{,}15}{0{,}05K_R}$, $2DT=\dfrac{1}{0{,}05K_R}$.
- Auflösen für $D=1/\sqrt2$: $K_R=\dfrac{100}{3D^2}=\dfrac{200}{3}\approx66{,}7$.

> **Ergebnis:** $G_R(s)=66{,}7\cdot\dfrac{1+0{,}2s}{s}$. Geschlossener Kreis hat näherungsweise $D=1/\sqrt2$ → ~4,3 % Überschwingen.

---

## 4.6 Anwendungsbeispiel: Drehzahlregelung Gleichstrommotor

### Physikalische Gleichungen
- **Elektrisch:** $u_A=R_a i_A+L_a\dot i_A+c\varphi\,\omega$ (Ankerkreis, $c\varphi\omega$ = Gegen-EMK).
- **Mechanisch:** $J\dot\omega=M_i-M_L$, mit $M_i=c\varphi\,i_A$.

### Zeitkonstanten
- **Elektrisch:** $T_a=L_a/R_a$ (klein, schnell).
- **Mechanisch:** $T_m=J/b$ (groß, langsam).

### Übertragungsfunktion (Spannung → Drehzahl)
$$\frac{\omega(s)}{u_A(s)}=\frac{K_S}{(1+T_a s)(1+T_m s)}$$
(zwei PT1 in Reihe). Mit den Vorlesungswerten z. B. $\approx\dfrac{7{,}26}{(1+0{,}005s)(1+0{,}525s)}$.

### PI-Auslegung nach Kessler
$T_R=T_m$ (größte Zeitkonstante kompensieren), $T_\Sigma=T_a$ (+ Messglied-Zeitkonstante), $K_R$ nach Kessler-Formel mit $D=1/\sqrt2$ bzw. $D=0{,}9$.

### Strom- vs. Drehzahlregelung
- **Stromregelung (innen):** regelt schnell den Ankerstrom/das Moment – schneller Innenkreis.
- **Drehzahlregelung (außen):** regelt die langsamere Drehzahl. → typische **Kaskadenstruktur** (siehe Lernzettel 5).

---

## 4.7 Maßnahmen zur gezielten Formung des Frequenzgangs

### Frequenzgangformung – Ziel
Betrags-/Phasenkennlinie in einem Frequenzband gezielt anheben/absenken, um $\omega_D$ und $\varphi_r$ (und damit Schnelligkeit/Dämpfung) einzustellen.

- **PI-Regler:** hebt tiefe Frequenzen an (I-Anteil → stationäre Genauigkeit), senkt aber dort die Phase.
- **PD-/Lead-Glied:** hebt die **Phase** in einem Band an (Phasenhebung) → erhöht $\varphi_r$.
- **Lag-Glied:** senkt die Phase, dämpft hohe Frequenzen.
- **Notch-/Kerbfilter:** schmalbandige Betragsabsenkung (Resonanztilgung).

### Phasenhebung (Lead)
Ein Lead-Glied $G(s)=\dfrac{1+T_1 s}{1+T_2 s}$ mit $T_1>T_2$ erzeugt eine positive Phase (Maximum bei $\omega=1/\sqrt{T_1T_2}$) → man platziert sie um $\omega_D$, um die Phasenreserve zu erhöhen.

### Durchtrittsfrequenz & Phasenreserve gezielt beeinflussen
$K_R$ verschiebt $\omega_D$ (Betrag heben/senken); ein Lead-Glied an $\omega_D$ hebt $\varphi_r$.

---

## Kernaussagen (zum Merken)

1. $e_\infty=\dfrac{w_0}{1+F_o(0)}$ – Null nur mit Integrator im offenen Kreis (I-Anteil).
2. Kessler: $T_R=T_1$ (Polkompensation), $K_R=\dfrac{T_1}{2K_S T_\Sigma}$ für $D=1/\sqrt2$.
3. $D=1/\sqrt2$: ~4,3 % Überschwingen; $D=1$: kein Überschwingen.
4. PI-Bode: Knick bei $1/T_R$; PD hebt Phase (Lead), idealer D nicht realisierbar.
5. DC-Motor = zwei PT1 ($T_a$ klein, $T_m$ groß) → Kessler/Kaskade.
