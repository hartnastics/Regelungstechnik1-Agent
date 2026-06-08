# Lernzettel 2 – Regelung und Steuerung

> Kapitel 2. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Beispiele (zeitoptimale Steuerung, 2-Freiheitsgrade, Realisierbarkeit) mit allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 2.2 Einfaches Beispiel: Antriebsregelung

**F: Wie ist der Regelkreis einer einfachen Antriebsregelung aufgebaut?**
A: Eine Masse $m$ soll von $x=0$ in eine Endposition $x_e$ gebracht werden. Die Strecke ist eine doppelte Integration: Kraft $F\xrightarrow{1/m}$ Beschleunigung $a\xrightarrow{1/s}$ Geschwindigkeit $v\xrightarrow{1/s}$ Position $x$, also $G_S(s)=\frac{1}{m\,s^2}$. Ein Regler vergleicht Soll- und Istposition und stellt die Kraft.

**F: Was ist die Regelgröße, was die Störgröße bei einer Drehzahlregelung?**
A: **Regelgröße:** Drehzahl $\omega$ (bzw. Position $x$). **Stellgröße:** Ankerspannung/Moment (bzw. Kraft $F$). **Störgröße:** Lastmoment $M_L$ bzw. Reibung – wirkt der Bewegung entgegen.

**F: Welche Übertragungsfunktion hat eine einfache Antriebsstrecke (Motormodell)?**
A: Der fremderregte Gleichstrommotor (Spannung → Drehzahl) ist näherungsweise eine Reihe zweier PT1-Glieder:
$$G_S(s)=\frac{\omega(s)}{u_A(s)}=\frac{K_S}{(1+T_a s)(1+T_m s)},$$
mit elektrischer Zeitkonstante $T_a=L_a/R_a$ (klein) und mechanischer $T_m$ (groß). Dominiert $T_m$, nähert man als PT1.

**F: Warum reicht bei einer Antriebsregelung eine Steuerung oft nicht aus?**
A: Die Vorsteuerung berechnet den Kraftverlauf aus dem **angenommenen** Modell. Weicht z. B. die reale Masse ab ($m=0{,}8$ statt $\hat m=1$), berechnet sie eine zu große Kraft → die Masse schießt über die Endposition hinaus. Ohne Rückführung wird dieser Fehler nie korrigiert.

**F: Wie beeinflusst ein Lastsprung (Störung) das Systemverhalten ohne Regelung?**
A: Ohne Regelung verschiebt ein Lastmomentsprung den stationären Wert der Drehzahl dauerhaft (kein Ausgleich). Mit Regelung (PI/PID) wird der Einbruch ausgeregelt und $y$ kehrt zum Sollwert zurück.

---

## 2.3 Entwurf von Vorsteuerungen

**F: Was ist eine Vorsteuerung und wozu wird sie eingesetzt?**
A: Eine Vorsteuerung berechnet aus dem Sollwert (bzw. der Referenztrajektorie) direkt einen passenden Stellgrößenverlauf $u^*(t)$ – ohne Rückführung. Ziel: gutes **Führungsverhalten** (schnelles, exaktes Folgen der Solltrajektorie).

**F: Wie unterscheidet sich eine Vorsteuerung von einer Rückkopplung?**
A: Die **Vorsteuerung** wirkt vorausschauend aus dem bekannten Sollverlauf und reagiert **nicht** auf Störungen/Fehler. Die **Rückkopplung** wirkt reagierend auf die gemessene Abweichung $e$ und gleicht Störungen/Fehler aus.

**F: Wie wird eine Vorsteuerung aus dem invertierten Streckenmodell berechnet?**
A: Soll $y^*=G\,u^*$ einem Referenzverlauf folgen, braucht man die **inverse Strecke**: $u^*=G^{-1}y^*$, also $F_u(s)=1/G(s)$. Dynamische Korrespondenz: $F_y(s)=G(s)F_u(s)$; für nur stationäre Korrespondenz genügt $F_y=G(0)F_u$ (konstante Vorsteuerung).

**F: Was ist der Vorteil einer Kombination aus Vorsteuerung und Regelung?**
A: In der **2-Freiheitsgrade-Struktur** $u=F^*+F_R$ erledigt die Vorsteuerung das schnelle Sollwertfolgen, der Regler korrigiert nur die Abweichungen durch Modellfehler/Störungen. Führung und Störung lassen sich getrennt optimieren.

**F: Was passiert, wenn das Streckenmodell der Vorsteuerung ungenau ist?**
A: $u^*$ ist falsch berechnet → im reinen Steuerungsbetrieb bleibt ein Fehler. In der 2-FHG-Struktur fängt der **Regler** diesen Fehler auf (Beispiel: trotz 20 % falscher Masse wird die Endposition durch die Rückführung exakt erreicht).

**F: Wann ist eine Vorsteuerung sinnvoll, wann nicht?**
A: **Sinnvoll** bei genauem Modell und gewünschter schneller/präziser Sollwertfolge. **Wenig sinnvoll** bei sehr ungenauem Modell oder dominanten unbekannten Störungen – dann trägt sie wenig bei, die Regelung muss die Arbeit machen.

**F: Was ist der Unterschied zwischen Führungs- und Störgrößenvorsteuerung?**
A: Die **Führungsvorsteuerung** berechnet $u^*$ aus dem **Sollwert** (verbessert Führungsverhalten). Die **Störgrößenvorsteuerung** (= Störgrößenaufschaltung) berechnet einen Korrekturterm aus der **gemessenen Störung** (kompensiert die Störung, bevor sie wirkt; ausführlich in Lernzettel 5).

**(Zusatzbegriffe: Differenzordnung & Realisierbarkeit)**
Für $G(s)=\frac{Z(s)}{N(s)}$ mit $\deg Z=m,\ \deg N=n$: Differenzordnung $\delta=n-m$; **realisierbar** ⇔ $m\le n$ ⇔ $\delta\ge0$. PT1: $\delta=1$, PT2: $\delta=2$. Höhere $\delta$ → glatteres Ausgangssignal. Die direkte Inverse einer PT1/PT2-Strecke ($\delta<0$) ist **nicht** realisierbar (enthält ideale D-Glieder); man fügt zusätzliche Pole hinzu.

---
---

# TEIL B – Komplette Beispiele

## ▣ Tutoriumsaufgabe (Tut 1, A2) — Zeitoptimale Antriebssteuerung

**Aufgabenstellung:** Masse $m=1$ soll von $x=0$ nach $x_e=10$ (mit $v=0$ am Ende). Kraft asymmetrisch begrenzt: $-4\le F\le1$, Geschwindigkeit unbegrenzt. Gesucht: zeitoptimaler Kraftverlauf $F(t)$ sowie Umschalt- und Endzeitpunkt $T_u, T_e$ und die maximale Geschwindigkeit.

**Schritt 1 – Abschnitt I (Beschleunigen, $0\le t\le T_u$):** maximale Kraft $F=F_{max}=1$.
$$a_1=\frac{F_{max}}{m}=1,\quad v_1(t)=t,\quad x_1(t)=\tfrac12 t^2.$$
Am Umschaltpunkt: $v_1(T_u)=T_u$, $x_1(T_u)=\tfrac12 T_u^2$.

**Schritt 2 – Abschnitt II (Bremsen, $T_u\le t\le T_e$):** minimale Kraft $F=F_{min}=-4$.
$$a_2=\frac{F_{min}}{m}=-4,\quad v_2(t)=-4(t-T_u)+T_u=-4t+5T_u.$$
Bedingung $v_2(T_e)=0$: $\;-4T_e+5T_u=0\Rightarrow T_e=\tfrac54 T_u$.

**Schritt 3 – Position aufintegrieren und Endbedingung einsetzen:**
$$x(t)=-2t^2+5T_u t-\tfrac52 T_u^2,\qquad x(T_e)=x\!\left(\tfrac54 T_u\right)=\tfrac{10}{16}T_u^2.$$
Mit $x(T_e)=10$: $\;\tfrac{10}{16}T_u^2=10\Rightarrow T_u^2=16\Rightarrow T_u=4$.

> **Ergebnis:** $T_u=4\,$s, $T_e=\tfrac54\cdot4=5\,$s, maximale Geschwindigkeit $v_{max}=v(T_u)=4$.
**Interpretation:** Zeitoptimal heißt „Bang-Bang": erst voll beschleunigen, dann voll bremsen. Weicht die reale Masse vom angenommenen Wert ab, stimmen die Verläufe nicht mehr → eine **Regelung** wäre nötig (2-FHG).

---

## ▣ Vorlesungsbeispiel — Steuerung vs. 2-Freiheitsgrade-Regelung

**Aufgabenstellung:** Masse soll nach $x_e=20$ gefahren werden, Vorsteuerung mit angenommener Masse $\hat m=1$. Was passiert, wenn die reale Masse $m=0{,}8$ beträgt — (a) mit reiner Steuerung, (b) mit zusätzlicher Regelung?

**Lösung (a) – reine Steuerung:** Die Vorsteuerung berechnet $F^*(t)$ für $\hat m=1$. Bei $m=0{,}8$ erzeugt dieselbe Kraft eine **größere** Beschleunigung → die Masse **schießt über** $x_e=20$ hinaus. Bleibender Fehler, keine Korrektur.

**Lösung (b) – 2-FHG (Vorsteuerung + Regler):** Stellgröße $u=F^*(t)+F_R(t)$ mit $F_R$ aus einem Regler $G_R(s)=\frac{2(1+s)}{0{,}01(s+10)^2}$ (PID-artig). Die laufende Positionsmessung liefert $e=x^*-x$; der Regler korrigiert die zu große Kraft.
> **Ergebnis:** Trotz 20 % falscher Masse wird die Endposition $x_e=20$ **exakt** erreicht. Fazit: Bei ungenauem Modell ist die Regelung unverzichtbar.

---

## ▣ Beispiel — Realisierbarkeit / Differenzordnung

**Aufgabenstellung:** Sind die folgenden Vorsteuerblöcke realisierbar? (a) Inverse eines PT1 $G=\frac{1}{1+Ts}$, (b) Inverse eines PT2.

**Lösung:**
- (a) $G^{-1}=1+Ts$ → Zählergrad $m=1$, Nennergrad $n=0$ → $\delta=n-m=-1<0$ → **nicht realisierbar** (idealer D-Anteil).
- (b) $G^{-1}=1+2D\tfrac{s}{\omega_0}+\tfrac{s^2}{\omega_0^2}$ → $\delta=-2$ → **nicht realisierbar** (doppelter D-Anteil).
> **Ergebnis:** Reine Streckeninversen sind nicht realisierbar. Abhilfe: zusätzliche Pole einfügen, z. B. $F_u=\frac{1+Ts}{(1+T_p s)^k}$ mit kleinen $T_p$, sodass $\delta\ge0$.

**Verständnisfragen (Richtig/Falsch):**
- „Eine Reihenschaltung aus zwei PT1-Gliedern kann schwingen." — **Falsch** (zwei reelle Pole → kein Überschwingen/keine Schwingung).
- „Ein PT1-Glied ist durch $T\dot y+y=Ku$ mit $K,T>0$ definiert." — **Richtig.**

---

## Kernaussagen (zum Merken)

1. Vorsteuerung = vorausschauend aus dem Sollwert (Inverse der Strecke); Rückkopplung = reagierend auf $e$.
2. 2-FHG-Struktur $u=F^*+F_R$ → Führung und Störung getrennt optimierbar.
3. Realisierbar nur bei Differenzordnung $\delta=n-m\ge0$; reine Streckeninverse ist es nicht.
4. Bei Modellfehler/Störung ist die reine Steuerung unzureichend – der Regelanteil sichert die Genauigkeit.
5. DC-Motor = zwei PT1 ($T_a$ klein, $T_m$ groß).
