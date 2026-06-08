# Lernzettel 4 – Synthese (Entwurf) von Regelungen

> Kapitel 4. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Klausur-/Tutoriumsaufgaben (Kessler, PI aus Bode, DC-Motor) mit vollem Text und allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 4.1 Aufgabenstellung und Anforderungen

**F: Was sind die typischen Anforderungen an einen Regelkreis?**
A: (1) **Stabilität**, (2) **stationäre Genauigkeit** ($e_\infty=0$ oder klein), (3) **Dämpfung** (Abstand zur Stabilitätsgrenze: $\varphi_r,A_r$), (4) **Schnelligkeit** (nicht zu langsam), (5) **Realisierbarkeit** (Stellglied kann $u$ erzeugen; Reglerdifferenzordnung $\ge0$).

**F: Was bedeutet „Führungsverhalten" vs. „Störverhalten"?**
A: **Führungsverhalten** = Reaktion auf Sollwertänderungen $w$ (gutes Folgen, $F_W$). **Störverhalten** = Reaktion auf Störungen $z$ (schnelles Ausregeln, $F_Z$). Beide getrennt bewertbar.

**F: Was ist der Unterschied zwischen stationären und dynamischen Anforderungen?**
A: **Stationär** betrifft den Endzustand nach dem Einschwingen (bleibende Abweichung, Endwert). **Dynamisch** betrifft den Verlauf während des Einschwingens (Überschwingen, Zeiten).

**F: Was ist Anregelzeit, Ausregelzeit, Überschwingen, stationäre Genauigkeit?**
A: **Anregelzeit** = Zeit bis $y$ den Sollwert erstmals (näherungsweise) erreicht. **Ausregelzeit** = Zeit bis $y$ dauerhaft in einem Toleranzband (z. B. $\pm2\%$) bleibt. **Überschwingen** = maximale prozentuale Überhöhung über den Endwert. **Stationäre Genauigkeit** = verbleibende Abweichung $e_\infty$.

**F: Was bedeutet Robustheit eines Regelkreises?**
A: Unempfindlichkeit gegenüber Modellunsicherheiten und Parameterschwankungen. Ausreichende Stabilitätsreserven ($\varphi_r,A_r$) sorgen für Robustheit.

---

## 4.2 Stationäres Verhalten

**F: Was ist der Endwertsatz der Laplace-Transformation und wann gilt er?**
A: $\lim_{t\to\infty}y(t)=\lim_{s\to0}s\,Y(s)$. Gilt nur, wenn der Grenzwert existiert (System **stabil**).

**F: Wie berechnet man den stationären Endwert der Regelgröße nach einem Sprung?**
A: Für $Y(s)=G(s)\frac{w_0}{s}$: $\;y_\infty=\lim_{s\to0}s\,G(s)\frac{w_0}{s}=G(0)\,w_0$. $G(0)$ = stationäre Verstärkung.

**F: Was ist die stationäre Regelabweichung $e_\infty$ und wie berechnet man sie?**
A: $e_\infty=\lim_{s\to0}s\,E(s)=\lim_{s\to0}\dfrac{s\,W(s)}{1+F_o(s)}\overset{W=w_0/s}{=}\dfrac{w_0}{1+F_o(0)}.$

**F: Wann ist $e_\infty=0$?**
A: Genau dann, wenn $F_o(0)=\infty$, also der **offene Kreis einen Integrator** (I-Anteil) enthält.

**F: Was ist der Systemtyp (Typ 0, 1, 2) und was bedeutet er?**
A: Anzahl der Integratoren in $F_o$. **Typ 0:** bleibende Abweichung bei Sprung. **Typ 1:** $e_\infty=0$ bei Sprung, konstanter Fehler bei Rampe. **Typ 2:** $e_\infty=0$ auch bei Rampe.

**F: Welche Reglerstruktur garantiert $e_\infty=0$ bei Sprungeingang?**
A: Ein Regler mit **I-Anteil** (PI oder PID).

**F: Wie wirkt ein I-Anteil auf die stationäre Genauigkeit?**
A: Der Integrator integriert den Fehler so lange auf, bis $e=0$ – erzwingt also stationäre Genauigkeit.

---

## 4.3 Grundsätzliche Struktur des Reglers

**F: Was sind die grundlegenden Regleranteile (P, I, D)?**
A: **P** (proportional zu $e$), **I** (proportional zum Integral von $e$), **D** (proportional zur Ableitung von $e$).

**F: Was bewirkt der P-Anteil?**
A: Sofortige, proportionale Reaktion → schnell, einfache Verstärkung; lässt aber eine **bleibende Regelabweichung** zu.

**F: Was bewirkt der I-Anteil?**
A: Aufintegration des Fehlers → erzwingt **stationäre Genauigkeit**, senkt aber die Phase (langsamer/schwingfreudiger).

**F: Was bewirkt der D-Anteil?**
A: Reaktion auf die **Fehleränderung** → **Phasenvoreilung**, mehr Dämpfung/Schnelligkeit; verstärkt jedoch Rauschen.

**F: Wie kombinieren sich P, I, D zu PI, PD und PID?**
A: **PI** = P+I (Genauigkeit), **PD** = P+D (Dämpfung), **PID** = P+I+D (beides).

---

## 4.4 Realisierung von Reglern

**F: ÜF eines P-Reglers? Wann einsetzen?**
A: $G_R=K_R$. Einsatz bei einfachen Strecken, wenn bleibende Abweichung tolerierbar.

**F: ÜF eines I-Reglers?**
A: $G_R=\frac{K_I}{s}=\frac{1}{T_I s}$.

**F: ÜF eines PI-Reglers? Was bedeuten $K_R$ und $T_R$?**
A: $G_R=K_R\big(1+\frac{1}{T_R s}\big)=K_R\frac{1+T_R s}{T_R s}$. $K_R$ = Reglerverstärkung, $T_R$ = Nachstellzeit (Knickfrequenz $1/T_R$).

**F: Wie sieht das Bode-Diagramm eines PI-Reglers aus?**
A: Tiefe Frequenzen $-20$ dB/Dek (I), Knick bei $\omega=1/T_R$, danach konstant (P); Phase steigt von $-90^\circ$ auf $0^\circ$.

**F: ÜF eines PD-Reglers (mit Verzögerung $T_N$)?**
A: realer PD: $G_R=K_R\frac{1+T_D s}{1+T_N s}$, $T_N\ll T_D$. Der ideale $K_R(1+T_D s)$ ist nicht realisierbar.

**F: Wie sieht das Bode-Diagramm eines PD-Reglers aus?**
A: $+20$ dB/Dek-Anhebung zwischen $1/T_D$ und $1/T_N$, positive (anhebende) Phase (Lead).

**F: ÜF eines PID-Reglers?**
A: ideal additiv $G_R=K_R\big(1+\frac{1}{T_R s}+T_D s\big)$; multiplikativ $K_R\frac{(1+T_{R1}s)(1+T_{R2}s)}{T_{R1}s}$.

**F: Vor- und Nachteile des D-Anteils?**
A: **Vorteil:** Phasenvoreilung → mehr Phasenreserve/Dämpfung. **Nachteil:** verstärkt hochfrequentes **Rauschen**; idealer D nicht realisierbar.

**F: Wie erkennt man den Reglertyp aus dem Bode-Diagramm?**
A: **PI:** Anfangssteigung $-20$ dB/Dek, Knick bei $1/T_R$, Phasenstart $-90^\circ$. **PD:** Steigung $+20$ dB/Dek bis Knickfrequenz, positive Phase.

**F: Wie liest man $K_R$ und $T_R$ aus dem Bode eines PI-Reglers ab?**
A: $T_R$ aus der Knickfrequenz $\omega_R=1/T_R$ (Phase $-45^\circ$). $K_R$ aus dem konstanten Hochfrequenz-Niveau: $K_R=10^{(\text{dB})/20}$.

---

## 4.5 Methoden zur Reglerparameter-Festlegung

**F: Was ist das Betragsoptimum und welches Ziel verfolgt es?**
A: Der Betrag der **Führungsübertragungsfunktion** $|F_W(j\omega)|$ soll über einen möglichst breiten Frequenzbereich $\approx1$ bleiben (flacher Verlauf) → gutes Führungsverhalten.

**F: Was ist das vereinfachte Betragsoptimum nach Kessler?**
A: Ein Rezept für PI/PID an PT1-Reihenstrecken: größte Zeitkonstante per Reglernullstelle kompensieren, Rest als PT2 nähern, Verstärkung über gewünschte Dämpfung festlegen.

**F: Warum wird $T_R=T_1$ (größte Zeitkonstante) gewählt?**
A: Damit der Reglerzähler $(1+T_R s)$ den **langsamsten Streckenpol** kürzt (Polkompensation) → der offene Kreis wird auf eine einfache Form ($\frac{V}{s(1+T_\Sigma s)}$) gebracht.

**F: Was ist die Summenzeitkonstante $T_\Sigma$ und wie berechnet man sie?**
A: Die Summe der **kleinen, nicht kompensierten** Zeitkonstanten: $T_\Sigma=T_2+T_3+\dots$

**F: Wie lautet die Kessler-Formel für $K_R$ bei $D=1/\sqrt2$?**
A: $V=\dfrac{1}{4D^2 T_\Sigma}$; für eine PT1-Strecke mit Verstärkung $K_S$: $\boxed{K_R=\dfrac{T_1}{2K_S T_\Sigma}}$ (bei $D=1/\sqrt2$).

**F: Was bedeutet $D=1/\sqrt2$ für das Überschwingen?**
A: Ca. **4,3 %** Überschwingen – flachster Betragsgang („Oszillographendämpfung"), guter Kompromiss aus Schnelligkeit und Überschwingen.

**F: Was bedeutet $D=1$?**
A: Aperiodischer Grenzfall – **kein** Überschwingen, dafür langsamer.

**F: Unterschied $D=1$ vs. $D=1/\sqrt2$ in der Sprungantwort?**
A: $D=1/\sqrt2$ schwingt einmal leicht über und ist schneller; $D=1$ kriecht ohne Überschwingen an den Endwert.

**F: Voraussetzungen für Kessler?**
A: Strecke als Reihe von PT1-Gliedern (oder PT1 + kleine Zeitkonstanten) mit dominanter $T_1$ und kleiner Summenzeitkonstante $T_\Sigma\ll T_1$.

---

## 4.6 Anwendungsbeispiel: Drehzahlregelung DC-Motor

**F: Welche physikalischen Gleichungen beschreiben den Gleichstrommotor?**
A: Elektrisch: $u_A=R_a i_A+L_a\dot i_A+c\varphi\,\omega$ (Gegen-EMK $c\varphi\omega$). Mechanisch: $J\dot\omega=M_i-M_L$ mit $M_i=c\varphi\,i_A$.

**F: Was ist $T_a=L_a/R_a$, was $T_m$?**
A: $T_a$ = **elektrische** Zeitkonstante (klein, schnell), $T_m=J/b$ = **mechanische** Zeitkonstante (groß, langsam).

**F: ÜF des Motors (Spannung → Drehzahl)?**
A: $\frac{\omega(s)}{u_A(s)}=\frac{K_S}{(1+T_a s)(1+T_m s)}$ – zwei PT1 in Reihe.

**F: Wie wird ein PI-Regler für diese Strecke nach Kessler ausgelegt?**
A: $T_R=T_m$ (größte Zeitkonstante kompensieren), $T_\Sigma=T_a$ (+ Messglied-Zeitkonstante), $K_R$ nach Kessler-Formel mit $D=1/\sqrt2$ (bzw. $0{,}9$).

**F: Unterschied Strom- und Drehzahlregelung?**
A: **Stromregelung (innen):** regelt schnell Strom/Moment. **Drehzahlregelung (außen):** regelt die langsamere Drehzahl → typische **Kaskadenstruktur** (Lernzettel 5).

---

## 4.7 Maßnahmen zur gezielten Formung des Frequenzgangs

**F: Was bedeutet „Frequenzgangformung" und welches Ziel?**
A: Betrags-/Phasenkennlinie in einem Frequenzband gezielt anheben/absenken, um $\omega_D$ und $\varphi_r$ (Schnelligkeit/Dämpfung) einzustellen.

**F: Wie verändert ein PI-Regler den Frequenzgang?**
A: Hebt tiefe Frequenzen an (I-Anteil → stationäre Genauigkeit), senkt dort aber die Phase.

**F: Wie verändert ein PD-Regler den Frequenzgang?**
A: Hebt mittlere/hohe Frequenzen an ($+20$ dB/Dek) und **hebt die Phase** (Lead) → mehr Phasenreserve.

**F: Was ist Phasenhebung und wie erzielt man sie?**
A: Anheben der Phase in einem Band durch ein **Lead-Glied** $\frac{1+T_1 s}{1+T_2 s}$ ($T_1>T_2$); Maximum bei $\omega=1/\sqrt{T_1T_2}$.

**F: Wie beeinflusst man gezielt Durchtrittsfrequenz und Phasenreserve?**
A: $K_R$ verschiebt $\omega_D$ (Betrag heben/senken); ein Lead-Glied an $\omega_D$ hebt $\varphi_r$.

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Tutoriumsaufgabe (Tut 5, A1) — PI nach vereinfachtem Betragsoptimum (Roboterarm)

**Aufgabenstellung:** Winkelregelung eines Robotergelenks. Offener Kreis aus Regler $G_R$, Motor und Gelenk:
$$G_{Mot}=\frac{70}{3s+25},\quad G_R=K_R\frac{T_R s+1}{s}\ (\text{PI}),\quad G_{Rob}=\frac{9000}{4{,}41s^2+420s+10000}.$$
Lege $K_R,T_R$ so aus, dass sich näherungsweise Oszillographendämpfung ($D=1/\sqrt2$) einstellt.

**Schritt 1 – offenen Kreis bilden und normieren:**
$$F_o=K_R\frac{T_R s+1}{s}\cdot\frac{2{,}8}{0{,}12s+1}\cdot\frac{0{,}9}{(0{,}021s+1)^2}=2{,}52\,K_R\frac{T_R s+1}{s\,(0{,}12s+1)(0{,}021s+1)^2}.$$
**Schritt 2 – Polkompensation (größte Zeitkonstante):** $T_R=0{,}12$ → kürzt $(0{,}12s+1)$:
$$F_o=2{,}52\,K_R\frac{1}{s\,(0{,}021s+1)^2}.$$
**Schritt 3 – Summenzeitkonstante:** $T_\Sigma=0{,}021+0{,}021=0{,}042$ → $F_o\approx\dfrac{2{,}52K_R}{s(0{,}042s+1)}$.
**Schritt 4 – geschlossener Kreis mit PT2 vergleichen:**
$$F_W=\frac{2{,}52K_R}{0{,}042s^2+s+2{,}52K_R}=\frac{1}{T^2s^2+2DTs+1},\quad T^2=\frac{0{,}042}{2{,}52K_R},\ 2DT=\frac{1}{2{,}52K_R}.$$
Auflösen für $D=\tfrac1{\sqrt2}$: $\;4D^2\cdot2{,}52K_R=\dfrac{1}{0{,}042}\Rightarrow K_R=\dfrac{1}{0{,}42336\cdot D^2}=\dfrac{1}{0{,}42336\cdot0{,}5}=4{,}72.$
> **Ergebnis:** $T_R=0{,}12$, $K_R=4{,}72$, also $G_R(s)=4{,}72\,\dfrac{0{,}12s+1}{s}$. Geschlossener Kreis ≈ PT2 mit $D=1/\sqrt2$ → ~4,3 % Überschwingen.

---

## ▣ Tutoriumsaufgabe (Tut 5, A2) — PI nach Kessler (allgemeine Strecke)

**Aufgabenstellung:** $G_S=\dfrac{5}{(s+10)(0{,}1s^2+2{,}5s+10)}$. PI-Regler so auslegen, dass $D=1/\sqrt2$.

**Schritt 1 – Strecke in PT1 zerlegen:** $0{,}1s^2+2{,}5s+10=0{,}1(s+5)(s+20)$, also
$$G_S=\frac{5}{(s+10)\cdot0{,}1(s+5)(s+20)}=\frac{0{,}05}{(0{,}1s+1)(0{,}2s+1)(0{,}05s+1)}.$$
Zeitkonstanten $T_1=0{,}2>T_2=0{,}1>T_3=0{,}05$.
**Schritt 2 – Polkompensation:** $T_R=T_1=0{,}2$.
**Schritt 3 – offener Kreis + Summenzeitkonstante:** $F_o=\dfrac{0{,}05K_R}{s(0{,}1s+1)(0{,}05s+1)}$, $T_\Sigma=0{,}1+0{,}05=0{,}15$.
**Schritt 4 – PT2-Vergleich:** $T^2=\dfrac{0{,}15}{0{,}05K_R}$, $2DT=\dfrac{1}{0{,}05K_R}$ → $4D^2\cdot\dfrac{0{,}15}{0{,}05K_R}=\dfrac{1}{(0{,}05K_R)^2}$ → $K_R=\dfrac{100}{3D^2}=\dfrac{200}{3}\approx66{,}7$.
> **Ergebnis:** $G_R(s)=66{,}7\,\dfrac{1+0{,}2s}{s}$.

---

## ▣ Klausuraufgabe (Klausur 01.03.2023, A1, Teil) — PI-Regler aus Bode ablesen

**Aufgabenstellung:** Geregelter Roboterarm, $G_{St}=\frac{1}{0{,}1+0{,}01s}$, $G_S=\frac{0{,}12}{0{,}02(s+1)s+2}$. Der Frequenzgang des Reglers $G_R(j\omega)$ ist im Bode-Diagramm gegeben (gestrichelt). Bestimme $G_R(s)$.

**Schritt 1 – Reglertyp:** Anfangssteigung $-20$ dB/Dek und Phasenstart $-90^\circ$ → **PI-Regler**: $G_R=K_R\frac{1+T_R j\omega}{j\omega}$.
**Schritt 2 – $T_R$ aus Knickfrequenz:** Knick (Phase $-45^\circ$) bei $\omega_R=1$ rad/s → $T_R=1/\omega_R=1$.
**Schritt 3 – $K_R$ aus dem Hochfrequenzniveau:** für $\omega\to\infty$ ist $|G_R|\to K_R$; abgelesen $20$ dB → $K_R=10^{20/20}=10$.
> **Ergebnis:** $G_R(s)=10\,\dfrac{1+s}{s}$.

---

## ▣ Anwendungsbeispiel — DC-Motor-Drehzahlregelung nach Kessler

**Aufgabenstellung:** Motor (vereinfachte Strecke) $\frac{\omega}{u_A}=\frac{7{,}26}{(1+0{,}00505s)(1+0{,}5249s)}$, Messglied $G_M=\frac{1}{1+0{,}055s}$. PI-Regler nach Kessler.

**Schritt 1 – Polkompensation:** größte Zeitkonstante $T_m=0{,}5249$ → $T_R=0{,}53$.
**Schritt 2 – Summenzeitkonstante:** kleine Konstanten $T_a=0{,}00505$ und $T_M=0{,}055$ → $T_\Sigma\approx0{,}055$ (dominiert vom Messglied).
**Schritt 3 – Verstärkung:** $K_R=\dfrac{T_m}{2K_S T_\Sigma\,(2D^2)}$-artig nach Kessler; mit $D=0{,}71$ ergibt sich (Vorlesungswert) $K_R\approx1{,}14$.
> **Ergebnis:** $G_R(s)=K_R\frac{1+T_R s}{T_R s}$ mit $T_R=0{,}53$, $K_R\approx1{,}14$ ($D=0{,}71$). Das Störverhalten (Lastmomentsprung) wird gegenüber dem ungeregelten Motor erheblich verbessert; ein PID dämpft den Einbruch noch stärker.

---

## Kernaussagen (zum Merken)

1. $e_\infty=\dfrac{w_0}{1+F_o(0)}$ – Null nur mit Integrator im offenen Kreis (I-Anteil).
2. Kessler: $T_R=T_1$ (Polkompensation), $K_R=\dfrac{T_1}{2K_S T_\Sigma}$ für $D=1/\sqrt2$.
3. $D=1/\sqrt2$: ~4,3 % Überschwingen; $D=1$: kein Überschwingen.
4. PI-Bode: Knick bei $1/T_R$ ($K_R$ aus HF-Niveau); PD hebt Phase (Lead), idealer D nicht realisierbar.
5. DC-Motor = zwei PT1 ($T_a$ klein, $T_m$ groß) → Kessler/Kaskade.
