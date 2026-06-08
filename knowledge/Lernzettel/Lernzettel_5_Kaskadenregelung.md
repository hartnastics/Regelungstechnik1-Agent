# Lernzettel 5 – Kaskadenregelung und Störgrößenaufschaltung

> Kapitel 5. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Klausur-/Tutoriumsaufgaben (DC-Motor-Kaskade, Abstandsregelung, Störgrößenaufschaltung) mit vollem Text und allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 5a) Kaskadenregelung

**F: Was ist die Grundidee der Kaskadenregelung?**
A: Eine **innere Größe** der Strecke wird mit einem zusätzlichen Messglied erfasst und in einer **unterlagerten (inneren) Schleife** möglichst schnell eingeregelt. Darüber liegt der **äußere** Kreis für die eigentliche Regelgröße.

**F: Wann ist eine Kaskadenregelung sinnvoll (Voraussetzungen)?**
A: Wenn (1) eine **messbare innere Größe** existiert, (2) sich die Strecke in einen **schnellen** Teil $G_{S1}$ und einen **langsamen** Teil $G_{S2}$ teilen lässt, (3) eine **Störung zwischen** beiden Teilen eingreift (wird vom Innenkreis schnell ausgeregelt) und (4) **Zeitskalentrennung** vorliegt (Innenkreis deutlich schneller).

**F: Was sind Innenkreis und Außenkreis und welche Aufgabe haben sie?**
A: **Innenkreis** ($G_{R1}$, meist P): regelt die schnelle innere Größe, soll sehr schnell sein (Genauigkeit zweitrangig). **Außenkreis** ($G_{R2}$, meist PI nach Kessler): regelt die eigentliche Regelgröße, sorgt für stationäre Genauigkeit.

**F: Warum muss der Innenkreis schneller sein als der Außenkreis?**
A: Der Außenkreis „sieht" den geschlossenen Innenkreis als Teilstrecke. Nur wenn dieser deutlich schneller ist, wirkt er quasi verzögerungsfrei (PT1 mit kleiner Zeitkonstante) → saubere Zeitskalentrennung, getrennter Entwurf möglich.

**F: Wie wird der Innenregler (P) ausgelegt: $T_W=T_0/n$?**
A: Man fordert, dass der geschlossene Innenkreis $n$-mal schneller als der offene ist, d. h. die Zeitkonstante sinkt von $T_0$ auf $T_W=T_0/n$.

**F: Wie lautet die Herleitung $T_W=T_0/n$ aus dem geschlossenen Innenkreis?**
A: Innere PT1-Strecke $G_{S1}=\frac{K_{S1}}{1+T_0 s}$, P-Regler $K_{R,i}$. Geschlossener Kreis:
$$F_{W,i}=\frac{K_{R,i}K_{S1}}{1+T_0 s+K_{R,i}K_{S1}}=\frac{K_w}{1+\underbrace{\tfrac{T_0}{1+K_{R,i}K_{S1}}}_{T_W}s}.$$
Forderung $T_W=T_0/n$ ⇒ $1+K_{R,i}K_{S1}=n$.

**F: Wie berechnet man $K_{R,i}$ für $n$-fache Beschleunigung?**
A: Aus $1+K_{R,i}K_{S1}=n$: $\;K_{R,i}=\dfrac{n-1}{K_{S1}}\approx\dfrac{n}{K_{S1}}.$

**F: Wie wird der geschlossene Innenkreis als PT1-Näherung für den Außenkreis verwendet?**
A: $F_{W,i}\approx\dfrac{K_w}{1+T_W s}$ wird als schnelle PT1-Teilstrecke in den Außenkreis eingesetzt.

**F: Wie wird der Außenregler (PI nach Kessler) ausgelegt?**
A: Auf die Gesamtstrecke (Innenkreis-PT1 · langsamer Teil): $T_R=T_1$ (größte Zeitkonstante kompensieren), $K_R=\dfrac{T_1}{2K_S T_\Sigma}$ ($D=1/\sqrt2$), mit $T_\Sigma=T_W+$ parasitäre Konstanten.

**F: Was ist die Gesamtstrecke für den Außenkreis?**
A: Das Produkt aus dem genäherten geschlossenen Innenkreis $\frac{K_w}{1+T_W s}$ und dem langsamen Streckenteil $G_{S2}$.

**F: Welche Vorteile hat die Kaskade gegenüber einfacher Regelung?**
A: Schnelles Ausregeln innerer Störungen (bevor sie den langsamen Teil erreichen), bessere Dynamik, getrennter (einfacher) Entwurf, direkte Beherrschung innerer Begrenzungen (z. B. Stromgrenze).

**F: Was bedeutet es, wenn eine innere Störgröße schnell ausgeregelt werden soll?**
A: Die Störung greift zwischen $G_{S1}$ und $G_{S2}$ an; der schnelle Innenkreis fängt sie ab, bevor sie sich auf die Regelgröße auswirkt.

**F: Wie erkennt man in einem Blockschaltbild eine Kaskadenstruktur?**
A: Zwei ineinander geschachtelte Rückführschleifen mit **zwei** Messgliedern; der Ausgang des äußeren Reglers ist der **Sollwert** des inneren.

**F: Was passiert, wenn die Zeitskalentrennung nicht erfüllt ist?**
A: Innen- und Außenkreis beeinflussen sich gegenseitig; die PT1-Näherung des Innenkreises wird ungültig, der Außenentwurf ungenau, die Schwingneigung steigt.

## 5b) Störgrößenaufschaltung

**F: Was ist die Grundidee der Störgrößenaufschaltung?**
A: Die **gemessene/geschätzte Störgröße** wird über ein Korrekturglied $G_K(s)$ direkt auf die Stellgröße aufgeschaltet, um ihre Wirkung zu kompensieren, **bevor** der Regler reagieren muss (Vorsteuerung der Störung).

**F: Welche Voraussetzung muss die Störgröße erfüllen?**
A: Sie muss **bekannt** sein – also messbar oder schätzbar.

**F: Wie wird das ideale Kompensationsglied $G_{K,SD}=-G_Z/G_{S1}$ hergeleitet?**
A: Aus der Kompensationsbedingung „Beitrag der Störung am Eingang der nachfolgenden Strecke = 0": $G_{S1}G_K + G_Z=0$ (bzgl. des Störpfads) ⇒ $G_K=-\dfrac{G_Z}{G_{S1}}$. Das Korrekturglied bildet also die **inverse** Übertragung vom Stelleingriff zur Störstelle mit umgekehrtem Vorzeichen.

**F: Warum genau diese Formel – was soll kompensiert werden?**
A: Es soll genau der Anteil, den die Störung über $G_Z$ einbringt, durch einen gleich großen, entgegengesetzten Anteil über den Stellpfad $G_{S1}$ aufgehoben werden → Summe am Eingriffsknoten null.

**F: Wie prüft man, ob $G_{K,SD}$ realisierbar ist?**
A: Über die Gradbedingung des entstehenden Korrekturglieds.

**F: Was ist die Bedingung für Realisierbarkeit?**
A: $\deg(\text{Zähler})\le\deg(\text{Nenner})$ (Differenzordnung $\ge0$). Enthält $G_{K,SD}$ eine Streckeninversion mit Zählergrad > Nennergrad → idealer Differenzierer → **nicht** realisierbar.

**F: Was macht man, wenn die ideale Kompensation nicht realisierbar ist?**
A: **Stationäre** Kompensation (nur den statischen Wert $G_K(0)$) oder Approximation mit schnellem PT1/DT1 (Gradausgleich $G_K\cdot\frac{1}{1+Ts}$, $T$ klein).

**F: Was ist stationäre Kompensation und wie berechnet man $G_{K,SD}(0)$?**
A: Man verwendet nur den konstanten Wert $G_{K,SD}(0)=-\dfrac{G_Z(0)}{G_{S1}(0)}$; dann gilt $F_Z(0)=0$ (Störung wirkt sich **stationär** nicht mehr aus, dynamisch bleibt ein Rest).

**F: Wie unterscheiden sich die Sprungantworten bei idealer, stationärer und keiner Kompensation?**
A: **Ideal:** $y(t)=0$ – Störung wirkt gar nicht. **Stationär:** kurzer Ausschlag, dann Rückkehr zu 0. **Keine:** größter Ausschlag, langsame Rückkehr (nur über den Regler).

**F: Vorteil der Kombination Kaskade + Störgrößenaufschaltung?**
A: Die Kaskade regelt schnell aus, die Aufschaltung kompensiert die **bekannte** Störung direkt → bestes Störverhalten (z. B. Reibmoment-Kompensation in der Antriebstechnik).

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Tutoriumsaufgabe (Tut 6, A1) — DC-Motor: Momenten-/Positionskaskade

**Aufgabenstellung:** Gleichstrommotor, Blockschaltbild gegeben, Parameter $R=8,\ L=16,\ c\varphi=0{,}5,\ J=2\cdot10^{-5},\ d=0{,}002$. Positionsregelung in Kaskade: Innenkreis Momentenregelung (P-Regler $G_1=K_P$), Außenkreis Positionsregelung (PI). Gegen-EMK wird kompensiert. (b) Lege den inneren P-Regler so aus, dass der geschlossene Innenkreis **doppelt so schnell** wie der offene ist. (d) Wie lautet die ideale Störgrößenaufschaltung, ist sie realisierbar?

**Lösung (b):** Innere (elektrische) Strecke nach Gegen-EMK-Kompensation: $\frac{i_A}{u_i}=\frac{1}{Ls+R}$, Moment $M=c\varphi\,i_A$. Offener Momentenkreis:
$$F_{o,M}=K_P\frac{c\varphi}{Ls+R}=\frac{K_P c\varphi}{R}\cdot\frac{1}{\tfrac{L}{R}s+1},\qquad T_{o,M}=\frac{L}{R}.$$
Geschlossener Innenkreis:
$$F_{w,M}=\frac{K_P c\varphi}{K_P c\varphi+R}\cdot\frac{1}{\underbrace{\tfrac{L}{K_P c\varphi+R}}_{T_{w,M}}s+1}.$$
Forderung $T_{w,M}=\tfrac12 T_{o,M}$:
$$\frac{L}{K_P c\varphi+R}=\frac{L}{2R}\;\Rightarrow\;K_P c\varphi=R\;\Rightarrow\;K_P=\frac{R}{c\varphi}=\frac{8}{0{,}5}=16.$$
> **Ergebnis (b):** $K_P=16$.

**Lösung (d):** Lastmoment $M_L$ greift am Momentenknoten an; die ideale Aufschaltung auf die Spannung ist die Inverse des Pfades Spannung→Moment:
$$G_{K,\text{ideal}}=\frac{Ls+R}{c\varphi}.$$
Zählergrad 1 > Nennergrad 0 → idealer Differenzierer.
> **Ergebnis (d):** **nicht realisierbar**. Realisierbar wäre die stationäre Variante $G_K(0)=\frac{R}{c\varphi}=16$ oder eine PT1-Approximation.

---

## ▣ Klausuraufgabe (Klausur 26.03.2018 / Tut 6, A2) — Abstandsregelung Fahrzeug

**Aufgabenstellung:** Abstandshalteregelung in Kaskade. Längsdynamik des Fahrzeugs: Antriebskraft $F\xrightarrow{1/m}$ ..., Widerstand $F_W=c_W v$, Abstand $d=\int(v_z-v)\,dt$. Innere Regelgröße: Geschwindigkeit $v$ (P-Regler $K_1$); äußere: Abstand $d$ (P-Regler $K_2$). Parameter $m=1000,\ c_W=10$. (b) Lege $K_1$ so aus, dass der Geschwindigkeitskreis die Zeitkonstante $T_{w,1}=1$ hat. (c) Wertebereich von $K_2$ für Stabilität. (g) realisierbare Störgrößenaufschaltung der Vorausfahrer-Geschwindigkeit.

**Lösung (b):** Innere Strecke $\frac{v}{F}=\frac{1}{ms+c_W}$, offener Geschwindigkeitskreis $F_{o,1}=\frac{K_1}{ms+c_W}$, geschlossen:
$$F_{w,1}=\frac{K_1}{ms+c_W+K_1},\qquad T_{w,1}=\frac{m}{c_W+K_1}.$$
Forderung $T_{w,1}=1$: $\;\frac{m}{c_W+K_1}=1\Rightarrow K_1=m-c_W=1000-10=990.$
> **Ergebnis (b):** $K_1=990$.

**Lösung (c):** Mit dem genäherten Innenkreis ($K_1=990$, $c_W+K_1=1000$, $m=1000$) und dem Integrator $\frac1s$ für den Abstand:
$$F_{o,2}=K_2\cdot(-F_{w,1})\cdot\frac1s=K_2\cdot\frac{-990}{1000s+1000}\cdot\frac1s=\frac{-0{,}99K_2}{s(s+1)}.$$
Geschlossener Abstandskreis: $F_{w,2}=\dfrac{-0{,}99K_2}{s^2+s-0{,}99K_2}$. Notwendiges (hier hinreichendes, $n=2$) Kriterium: alle Koeffizienten gleiches Vorzeichen ⇒ $a_2=-0{,}99K_2>0\Rightarrow K_2<0$.
> **Ergebnis (c):** Stabil für $K_2<0$ (Vorzeichen durch die Richtungsdefinition; Betrag bestimmt Dämpfung). Für kollisionsfreies Verhalten wählt man **starke Dämpfung** ($D\ge1$).

**Lösung (g) – Störgrößenaufschaltung:** Ideale Aufschaltung der Störgeschwindigkeit $v_z$ (vor $G_{R,1}$):
$$G_{K,\text{ideal}}=\Big(\tfrac{K_1}{ms+c_W+K_1}\Big)^{-1}=\frac{ms+c_W+K_1}{K_1}\quad(\text{Zählergrad}>\text{Nennergrad}\Rightarrow\text{nicht realisierbar}).$$
Realisierbar: stationär $G_{K,0}=G_{K,\text{ideal}}(0)=\dfrac{c_W+K_1}{K_1}=\dfrac{1000}{990}$.
> **Ergebnis (g):** Die stationäre Aufschaltung $G_K=\frac{1000}{990}$ sorgt für $F_Z(0)=0$ (Störung wirkt stationär nicht mehr); die ideale würde im gesamten Frequenzband kompensieren, ist aber nicht realisierbar.

---

## ▣ Tutoriumsaufgabe (Tut 5, A3) — Ideale Störgrößenaufschaltung & Realisierbarkeit

**Aufgabenstellung:** Stellglied $G_{St}=\dfrac{150}{s+50}$. (b) Ergänze eine Störgrößenaufschaltung $G_K$. (c) Störübertragungsfunktion bei idealer Aufschaltung; ist $G_{K,\text{ideal}}$ realisierbar?

**Lösung (b):** Ideale Aufschaltung = Inverse des Stellglieds:
$$G_{K,\text{ideal}}=G_{St}^{-1}=\frac{s+50}{150}.$$
**Lösung (c):** Mit idealer Aufschaltung kürzt sich der Störbeitrag vollständig:
$$F_Z(s)=\frac{-G_S\big(1+G_R G_{St}G_S - G_{K,\text{ideal}}G_{St}G_S\big)}{1+G_R G_{St}G_S}\Big|_{G_K=G_{St}^{-1}} = 0.$$
Aber $G_{K,\text{ideal}}=\frac{s+50}{150}$ hat Zählergrad 1 > Nennergrad 0 → **idealer Differenzierer**.
> **Ergebnis:** Die ideale Aufschaltung erreicht $F_Z(s)=0$ (vollständige Kompensation), ist aber **nicht realisierbar**. Praktisch: stationäre Aufschaltung $G_K(0)=\frac{50}{150}=\frac13$ oder PT1-Approximation.

---

## Kernaussagen (zum Merken)

1. Kaskade: Entwurf **von innen nach außen**; Innenkreis schnell (P), Außenkreis genau (PI/Kessler).
2. Innen-P: $K_{R,i}=\dfrac{n-1}{K_{S1}}\approx\dfrac{n}{K_{S1}}$ für $n$-fache Beschleunigung ($T_W=T_0/n$).
3. Geschlossener Innenkreis → PT1-Näherung als Teilstrecke für den Außenkreis.
4. Störgrößenaufschaltung: $G_{K,\text{ideal}}=-\dfrac{G_Z}{G_{S1}}$; oft nicht realisierbar → **stationäre** Kompensation $G_K(0)$.
5. Sprungantwort Störsprung: ideal = 0, stationär = Ausschlag mit Rückkehr, keine = großer langsamer Ausschlag.
