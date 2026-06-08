# Lernzettel 5 – Kaskadenregelung und Störgrößenaufschaltung

> Kapitel 5: Strukturmaßnahmen. Kaskadenregelung (Innen-/Außenkreis, Entwurf von innen nach außen) und Störgrößenaufschaltung (ideales Kompensationsglied, Realisierbarkeit). **Klausuraufgabe 3 (33 P).**

---

## 5a) Kaskadenregelung

### Grundidee
Eine **innere Größe** der Strecke wird mit einem **zusätzlichen Messglied** erfasst und in einer **unterlagerten (inneren) Schleife** möglichst schnell eingeregelt. Darüber liegt der **äußere** Regelkreis für die eigentliche Regelgröße.

### Wann sinnvoll? (Voraussetzungen)
- Eine **messbare innere Größe** existiert (z. B. Strom/Moment beim Motor, Differenzdruck beim Zylinder).
- Die Strecke lässt sich in einen **schnellen** Teil $G_{S1}$ und einen **langsamen** Teil $G_{S2}$ aufteilen.
- Eine **Störung greift zwischen** beiden Teilen ein → wird vom Innenkreis schnell ausgeregelt, bevor sie den langsamen Teil erreicht.
- **Zeitskalentrennung:** Innenkreis deutlich schneller als Außenkreis.

### Innenkreis und Außenkreis
- **Innenkreis ($G_{R1}$, meist P-Regler):** regelt die schnelle innere Größe, soll **sehr schnell** sein, **Genauigkeit zweitrangig** (der Außenkreis korrigiert).
- **Außenkreis ($G_{R2}$, meist PI nach Kessler):** regelt die eigentliche Regelgröße, sorgt für **stationäre Genauigkeit**.

### Warum Innenkreis schneller?
Der Außenkreis „sieht" den geschlossenen Innenkreis als Teilstrecke. Nur wenn dieser deutlich schneller ist, wirkt er für den Außenkreis quasi verzögerungsfrei (PT1 mit kleiner Zeitkonstante) → saubere Zeitskalentrennung.

### Entwurf „von innen nach außen"
1. Innenregler $G_{R1}$ auslegen.
2. Geschlossenen Innenkreis zu **einem Übertragungsglied** (PT1-Näherung) zusammenfassen.
3. Außenregler $G_{R2}$ auf die Gesamtstrecke (Innenkreis + langsamer Teil) auslegen.

### Innenregler (P) – Auslegung $T_W=T_0/n$
Innere Strecke als PT1: $G_{S1}=\dfrac{K_{S1}}{1+T_0 s}$, P-Regler $G_{R1}=K_{R,i}$.
Geschlossener Innenkreis:
$$F_{W,i}=\frac{K_{R,i}K_{S1}}{1+T_0 s+K_{R,i}K_{S1}}=\frac{K_{w}}{1+\underbrace{\frac{T_0}{1+K_{R,i}K_{S1}}}_{T_W}s}$$
Soll der Innenkreis **$n$-mal schneller** sein ($T_W=T_0/n$):
$$\frac{T_0}{1+K_{R,i}K_{S1}}=\frac{T_0}{n}\;\Rightarrow\; 1+K_{R,i}K_{S1}=n\;\Rightarrow\;\boxed{K_{R,i}=\frac{n-1}{K_{S1}}\approx\frac{n}{K_{S1}}}$$

### Innenkreis als PT1-Näherung
Der geschlossene Innenkreis $F_{W,i}\approx\dfrac{K_w}{1+T_W s}$ wird als **schnelle PT1-Teilstrecke** in den Außenkreis eingesetzt.

### Außenregler (PI nach Kessler)
Gesamtstrecke Außenkreis = (Innenkreis-PT1) · (langsamer Teil $G_{S2}$). Dann Kessler:
$$T_R=T_1\ (\text{größte Zeitkonstante}),\qquad K_R=\frac{T_1}{2K_S T_\Sigma}\ (D=\tfrac1{\sqrt2}),$$
mit $T_\Sigma=T_W+\text{(parasitäre Zeitkonstanten)}$.

### Vorteile gegenüber einfacher Regelung
- **Störungen** zwischen $G_{S1}$ und $G_{S2}$ werden **schnell** vom Innenkreis ausgeregelt → kaum Auswirkung auf $y$.
- Bessere Dynamik, einfachere Auslegung (jeder Kreis separat).
- Innere Nichtlinearitäten/Begrenzungen (z. B. Stromgrenze) direkt beherrschbar.

### Kaskade im Blockschaltbild erkennen
Zwei ineinander geschachtelte Rückführschleifen mit **zwei** Messgliedern; der Ausgang des äußeren Reglers ist der **Sollwert** des inneren.

### Wenn Zeitskalentrennung **nicht** erfüllt
Innen- und Außenkreis beeinflussen sich gegenseitig → die PT1-Näherung des Innenkreises ist ungültig, der Außenentwurf wird ungenau, Schwingneigung steigt.

### ▶ Tutoriumsbeispiel (Tut 6, A1): DC-Motor Momenten-/Positionskaskade
Motor: $R=8,L=16,c\varphi=0{,}5,J=2\cdot10^{-5},d=0{,}002$. Innen: Momentenregelung (P), außen: Positionsregelung (PI). Gegen-EMK wird kompensiert.
Innenkreis (elektrisch): $F_{o,M}=K_P\dfrac{c\varphi}{Ls+R}$, $T_{o,M}=L/R$.
Soll **doppelt so schnell** ($T_{W,M}=\tfrac12 T_{o,M}$):
$$\frac{L}{K_P c\varphi+R}=\frac{L}{2R}\Rightarrow K_P c\varphi=R\Rightarrow K_P=\frac{R}{c\varphi}=\frac{8}{0{,}5}=16.$$
> **Ergebnis:** $K_P=16$.

### ▶ Klausurbeispiel (Tut 6, A2 / Klausur): Abstandsregelung Fahrzeug
Innen Geschwindigkeit $v$ (P-Regler $K_1$), außen Abstand $d$ (P-Regler $K_2$). Strecke $\tfrac1{ms+c_W}$, $m=1000,c_W=10$.
Innen, Zeitkonstante $T_{W,1}=1$: $\dfrac{m}{c_W+K_1}=1\Rightarrow K_1=m-c_W=990$.
> **Ergebnis:** $K_1=990$. (Außenkreis-Stabilität dann mit Hurwitz/Notwendigkeitskriterium prüfen.)

---

## 5b) Störgrößenaufschaltung

### Grundidee
Die **gemessene (oder geschätzte) Störgröße** wird über ein **Korrekturglied $G_K(s)$** direkt auf die Stellgröße aufgeschaltet, um ihre Wirkung zu kompensieren, **bevor** der Regler reagieren muss (Vorsteuerung der Störung).

### Voraussetzung
Die Störgröße muss **bekannt** sein – also messbar oder schätzbar.

### Ideales Kompensationsglied – Herleitung
Greift die Störung $z$ zwischen Stellglied/erstem Streckenteil $G_{S1}$ und der weiteren Strecke an, soll ihr Beitrag am Streckeneingang exakt aufgehoben werden. Die Kompensationsbedingung lautet:
$$G_{S1}(s)\,G_{St}(s)\,G_K(s)+ (\text{Störpfad})=0 \;\Rightarrow\; \boxed{G_{K,\text{ideal}}(s)=-\frac{G_Z(s)}{G_{S1}(s)}}$$
(bzw. $-1/G_{St}$, je nach Eingriffsort). **Idee:** das Korrekturglied bildet die **inverse** Übertragung vom Stelleingriff zur Störstelle, mit umgekehrtem Vorzeichen → die Störwirkung wird am Eingang der nachfolgenden Strecke zu Null.

### Realisierbarkeit prüfen
$$\text{realisierbar} \iff \deg(\text{Zähler})\le\deg(\text{Nenner})\ \text{von }G_K.$$
Da $G_{K,\text{ideal}}=-G_Z/G_{S1}$ oft eine **Inversion** der Strecke enthält → Zählergrad > Nennergrad → **idealer Differenzierer** → **nicht realisierbar**.

### Wenn ideal nicht realisierbar
- **Stationäre Kompensation:** nur den statischen Wert verwenden:
$$G_{K,\text{stat}}=G_{K,\text{ideal}}(0)=-\frac{G_Z(0)}{G_{S1}(0)}\ (\text{Konstante}).$$
Kompensiert die Störung **stationär** ($F_Z(0)=0$), aber nicht dynamisch.
- **Approximation mit schnellem PT1/DT1:** Zähler-/Nennergrad ausgleichen ($G_K\cdot\frac{1}{1+T s}$, $T$ klein).

### Sprungantworten im Vergleich (Störsprung)
- **Ideal:** $y(t)=0$ – die Störung wirkt sich **gar nicht** aus.
- **Stationär:** kurzer Ausschlag, dann Rückkehr zu 0 (dynamischer Rest bleibt).
- **Keine Kompensation:** größter Ausschlag, langsame Rückkehr (nur über den Regler).

### Kombination Kaskade + Störgrößenaufschaltung
Die Kaskade regelt schnell aus, die Aufschaltung kompensiert die **bekannte** Störung direkt → bestes Störverhalten (Antriebstechnik: z. B. Reibmoment-Kompensation).

### ▶ Tutoriumsbeispiel (Tut 5, A3): ideale Aufschaltung & Realisierbarkeit
$G_{St}=\dfrac{150}{s+50}$. Ideale Aufschaltung vor dem Stellglied:
$$G_{K,\text{ideal}}=G_{St}^{-1}=\frac{s+50}{150}.$$
Zählergrad 1 > Nennergrad 0 → **idealer Differenzierer → nicht realisierbar**. Störübertragungsfunktion mit idealer Aufschaltung: $F_Z(s)=0$.

### ▶ Klausurbeispiel (Tut 6, A2 f/g): realisierbare Korrektur
Ideal $G_{K,\text{ideal}}=\dfrac{ms+c_W+K_1}{K_1}$ (Zählergrad 1 > 0) → nicht realisierbar. **Realisierbar:** stationär
$$G_{K,0}=G_{K,\text{ideal}}(0)=\frac{c_W+K_1}{K_1}=\frac{1000}{990}.$$
> **Ergebnis:** Die stationäre Aufschaltung sorgt für $F_Z(0)=0$ (Störung wirkt sich **stationär** nicht mehr aus), die ideale würde sie im gesamten Frequenzband kompensieren.

---

## Kernaussagen (zum Merken)

1. Kaskade: Entwurf **von innen nach außen**; Innenkreis schnell (P), Außenkreis genau (PI/Kessler).
2. Innenregler P: $K_{R,i}=\dfrac{n-1}{K_{S1}}\approx\dfrac{n}{K_{S1}}$ für $n$-fache Beschleunigung ($T_W=T_0/n$).
3. Geschlossener Innenkreis → PT1-Näherung als Teilstrecke für den Außenkreis.
4. Störgrößenaufschaltung: $G_{K,\text{ideal}}=-\dfrac{G_Z}{G_{S1}}$; oft nicht realisierbar → **stationäre** Kompensation $G_K(0)$.
5. Sprungantwort Störsprung: ideal = 0, stationär = Ausschlag mit Rückkehr, keine = großer langsamer Ausschlag.
