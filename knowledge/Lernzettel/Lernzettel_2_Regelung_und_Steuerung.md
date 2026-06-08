# Lernzettel 2 – Regelung und Steuerung

> Kapitel 2: Einfaches Beispiel einer Antriebsregelung und der Entwurf von Vorsteuerungen (2-Freiheitsgrade-Struktur).

---

## 2.2 Einfaches Beispiel: Antriebsregelung

### Aufbau einer einfachen Antriebsregelung
Eine Masse $m$ soll möglichst schnell von $x=0$ in eine Endposition $x_e$ gebracht werden (mit $v=0$ am Ende). Modell der Strecke (doppelte Integration):
$$F \;\xrightarrow{\;1/m\;}\; a \;\xrightarrow{\;1/s\;}\; v \;\xrightarrow{\;1/s\;}\; x$$
Das heißt: Kraft → Beschleunigung ($a=F/m$) → Geschwindigkeit (Integration) → Position (Integration). Die Strecke ist ein **doppelter Integrator** $G_S(s)=\dfrac{1}{m\,s^2}$.

### Regelgröße / Störgröße bei Drehzahl- bzw. Positionsregelung
- **Regelgröße:** Position $x$ (bzw. Drehzahl $\omega$ beim Motor).
- **Stellgröße:** Kraft $F$ (bzw. Ankerspannung / Moment).
- **Störgröße:** Reibung, Lastmoment $M_L$ – wirkt der Bewegung entgegen.

### Übertragungsfunktion einer Antriebsstrecke (Motormodell)
Der fremderregte Gleichstrommotor (Kap. 4.6) hat als Strecke „Spannung → Drehzahl" näherungsweise:
$$G_S(s)=\frac{\omega(s)}{u_A(s)}=\frac{K_S}{(1+T_a s)(1+T_m s)}$$
mit **elektrischer Zeitkonstante** $T_a=L_a/R_a$ (klein) und **mechanischer Zeitkonstante** $T_m$ (groß). Häufig dominiert $T_m$, sodass man als PT1 nähert.

### Warum reicht Steuerung oft nicht?
Die Vorsteuerung berechnet $F^*(t)$ aus dem **angenommenen** Modell (z. B. $\hat m=1$). Weicht die reale Masse ab ($m=0{,}8$), berechnet die Steuerung eine **zu große** Kraft → die Masse **schießt über** die Endposition hinaus. Ohne Rückführung wird dieser Fehler nie korrigiert.

### Wirkung eines Lastsprungs ohne Regelung
Ein plötzlicher Lastmomentsprung $M_L$ verändert die Drehzahl dauerhaft (neuer stationärer Wert), da keine Korrektur erfolgt. Mit Regelung (PI/PID) wird der Drehzahleinbruch ausgeregelt und $y$ kehrt zum Sollwert zurück.

---

## 2.3 Entwurf von Vorsteuerungen

### Was ist eine Vorsteuerung und wozu?
Eine **Vorsteuerung** berechnet aus dem Sollwert (bzw. der Referenztrajektorie) direkt einen passenden Stellgrößenverlauf $u^*(t)$ – **ohne** Rückführung. Ziel: gutes **Führungsverhalten** (schnelles, exaktes Folgen der Solltrajektorie), ohne den Regler stark beanspruchen zu müssen.

### Vorsteuerung vs. Rückkopplung
- **Vorsteuerung (Steuerung, „feedforward"):** wirkt **vorausschauend** aus dem bekannten Sollverlauf; reagiert **nicht** auf Störungen/Fehler.
- **Rückkopplung (Regelung, „feedback"):** wirkt **reagierend** auf die gemessene Abweichung; gleicht Störungen/Fehler aus.

### Berechnung aus dem invertierten Streckenmodell
Soll $y^*(t)$ einem Referenzverlauf folgen, muss die Vorsteuerung die **inverse Strecke** abbilden:
$$F_u(s)=\frac{1}{G(s)},\qquad y^*=G\,u^* \;\Rightarrow\; u^*=G^{-1}y^*$$
**Regel 2 (dynamische Korrespondenz):** $F_y(s)=G(s)\,F_u(s)$. Für nur **stationäre** Korrespondenz genügt $F_y=G(0)\,F_u$ mit konstanten Vorsteuerungen.

### 2-Freiheitsgrade-Regelung (2-FHG)
Kombination aus Vorsteuerung **und** Regelung:
$$u(t)=\underbrace{F^*(t)}_{\text{Steuerungsanteil (Vorsteuerung)}}+\underbrace{F_R(t)}_{\text{Regelungsanteil (Regler }G_R)}$$
**Vorteil:** Die Vorsteuerung erledigt das schnelle Sollwertfolgen, der Regler korrigiert nur die **Abweichungen** durch Modellfehler/Störungen. Beide Freiheitsgrade (Führung und Störung) lassen sich getrennt optimieren.

### Was, wenn das Streckenmodell ungenau ist?
Dann ist $u^*$ falsch berechnet → bleibender Fehler im reinen Steuerungsbetrieb. In der 2-FHG-Struktur fängt der **Regler** diesen Fehler auf (siehe Beispiel: trotz 20 % falscher Masse wird die Endposition durch die Rückführung exakt erreicht).

### Wann sinnvoll, wann nicht?
- **Sinnvoll:** genaues Modell vorhanden, schnelle/präzise Sollwertfolge gewünscht.
- **Weniger sinnvoll:** Modell sehr ungenau oder dominante unbekannte Störungen → dann trägt die Vorsteuerung wenig bei, die Regelung muss die Arbeit machen.

### Realisierbarkeit & Stabilität der Vorsteuerung (Regeln aus der Vorlesung)
- **Regel 1 (Realisierbarkeit):** $G_R, F_u, F_y$ müssen **realisierbar** sein, d. h. **Differenzordnung $\ge 0$** (Zählergrad $\le$ Nennergrad). Die direkte Inverse $1/G$ einer PT1/PT2-Strecke enthält D-Glieder und ist **nicht** realisierbar → man fügt zusätzliche Pole hinzu.
- **Regel 3 (Stellgrößenbegrenzung):** $u_{\min}\le u(t)\le u_{\max}$, oft auch $\dot u$ begrenzt.
- **Regel 4 (Stabilität):** Vorsteuerblöcke $F_u, F_y$ müssen **stabil** sein (keine Pole auf/rechts der $j$-Achse).

### Differenzordnung und Realisierbarkeit (Grundbegriff)
Für $G(s)=\dfrac{Z(s)}{N(s)}$ mit $\deg Z=m,\ \deg N=n$:
$$\text{Differenzordnung } \delta = n-m,\qquad \text{realisierbar} \iff m\le n \iff \delta\ge 0$$
- PT1: $\delta=1$, PT2: $\delta=2$.
- Höhere $\delta$ → glatteres Ausgangssignal: ist $u(t)$ $k$-mal stetig differenzierbar, so ist $y(t)$ $(k+\delta)$-mal stetig differenzierbar.

### Führungs- vs. Störgrößenvorsteuerung
- **Führungsvorsteuerung:** berechnet $u^*$ aus dem **Sollwert** → verbessert Führungsverhalten.
- **Störgrößenvorsteuerung (= Störgrößenaufschaltung):** berechnet einen Korrekturterm aus der **gemessenen Störung** → kompensiert die Störung, bevor sie sich auswirkt (ausführlich in Lernzettel 5).

---

## Tutoriumsbeispiel (Tut 1, A2) – zeitoptimale Antriebssteuerung

**Aufgabe:** Masse $m=1$ von $x=0$ nach $x_e=10$, Kraft asymmetrisch begrenzt $-4\le F\le 1$, $v$ unbegrenzt. Zeitoptimaler Kraftverlauf.

- **Schritt 1 (Beschleunigen, $0\le t\le T_u$):** $a_1=F_{max}/m=1$, also $v_1=t$, $x_1=\tfrac12 t^2$.
- **Schritt 2 (Bremsen, $T_u\le t\le T_e$):** $a_2=F_{min}/m=-4$, $v_2=-4t+5T_u$. Bedingung $v_2(T_e)=0 \Rightarrow T_e=\tfrac54 T_u$.
- **Schritt 3 (Endposition):** Einsetzen $x(T_e)=x_e=10$ liefert $\tfrac{10}{16}T_u^2=10 \Rightarrow T_u^2=16 \Rightarrow T_u=4$.

> **Ergebnis:** $T_u=4\,$s, $T_e=\tfrac54\cdot4=5\,$s, maximale Geschwindigkeit $v(T_u)=4$. Ändert sich die reale Masse, stimmen die berechneten Verläufe nicht mehr → eine **Regelung** wäre nötig.

---

## Kernaussagen (zum Merken)

1. Vorsteuerung = vorausschauend aus dem Sollwert (Inverse der Strecke), Rückkopplung = reagierend auf $e$.
2. 2-FHG-Struktur: $u = F^* + F_R$ → Führung und Störung getrennt optimierbar.
3. Realisierbar nur bei Differenzordnung $\delta=n-m\ge0$.
4. Bei Modellfehler/Störung ist die reine Steuerung unzureichend – der Regelanteil rettet die Genauigkeit.
