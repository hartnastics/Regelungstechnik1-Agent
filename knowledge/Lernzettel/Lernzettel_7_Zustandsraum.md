# Lernzettel 7 – Beschreibung dynamischer Systeme im Zustandsraum

> Kapitel 7. **Teil A:** jede Fragestellung einzeln beantwortet. **Teil B:** komplette Tutoriums-/Klausuraufgaben (DGL → Zustandsraum, Eigenwerte/Eigenvektoren, Modalform, ÜF) mit vollem Text und allen Schritten.

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 7.1 Beispiele und Vergleich der Methoden

**F: Was ist der Vorteil der Zustandsraummethode gegenüber Übertragungsfunktionen?**
A: Sie arbeitet direkt im Zeitbereich mit einem System von DGLs **1. Ordnung**, erfasst den **inneren Zustand** und die **Anfangswerte** natürlich und gilt auch für **nichtlineare, zeitvariante** sowie **Mehrgrößensysteme**.

**F: Für welche Systeme kann man Übertragungsfunktionen verwenden, für welche nicht?**
A: ÜF nur für **lineare, zeitinvariante** Systeme (Eingrößen; Mehrgrößen mit Matrizen). **Nicht** für nichtlineare oder zeitvariante Systeme.

**F: Welche Systeme erfordern zwingend den Zustandsraum?**
A: Nichtlineare und zeitvariante Systeme sowie Mehrgrößensysteme, bei denen der innere Zustand wichtig ist. (Totzeitsysteme lassen sich allerdings nicht durch gewöhnliche DGLs im Zustandsraum erfassen.)

**F: Was ist ein Zustand in einem dynamischen System?**
A: Die minimale Information über die Vergangenheit, die zusammen mit dem zukünftigen Eingang den zukünftigen Verlauf eindeutig festlegt – physikalisch die in den **Energiespeichern** gespeicherten Größen.

**F: Wie viele Zustandsgrößen braucht ein mechanisches System mit $n$ Energiespeichern?**
A: Genau $n$ – eine Zustandsgröße pro (unabhängigem) Energiespeicher.

## 7.2 Allgemeine Form der Zustandsgleichungen

**F: Wie lautet die allgemeine Zustandsraumdarstellung?**
A: $\dot{\mathbf x}=A\mathbf x+\mathbf b\,u,\qquad y=\mathbf c^{\mathsf T}\mathbf x+d\,u$ (LZI-Eingrößensystem).

**F: Was bedeuten die Matrizen $A,\mathbf b,\mathbf c^{\mathsf T}$ physikalisch?**
A: $A$ (Dynamikmatrix) = Eigendynamik/Kopplung der Zustände; $\mathbf b$ (Eingangsvektor) = Wirkung des Eingangs auf die Zustände; $\mathbf c^{\mathsf T}$ (Ausgangsvektor) = Zusammensetzung des Ausgangs aus den Zuständen; $d$ = Durchgriff.

**F: Wie wählt man die Zustandsgrößen für ein mechanisches System?**
A: Lage $x$ und Geschwindigkeit $\dot x$ jeder Masse (potentielle Energie ↔ Feder-Auslenkung, kinetische Energie ↔ Masse-Geschwindigkeit).

**F: Wie wählt man die Zustandsgrößen für ein elektrisches System?**
A: Kondensatorspannung $u_C$ und Spulenstrom $i_L$ (die Energieträger der Speicher).

**F: Wie leitet man aus der DGL die Zustandsraumdarstellung her (Schritt für Schritt)?**
A: (1) DGL aufstellen (Freischnitt/Kirchhoff). (2) nach höchster Ableitung auflösen. (3) Zustände definieren ($x_1$=Größe, $x_2=\dot x_1$, …). (4) $\dot x_i$ durch Zustände und $u$ ausdrücken. (5) in Matrixform $A,\mathbf b,\mathbf c^{\mathsf T}$ schreiben.

**F: Was ist der Durchgangsterm $d$ und wann ist er null?**
A: Der direkte Durchgriff Eingang→Ausgang. $d=0$, wenn der Zählergrad der ÜF kleiner als der Nennergrad ist (Normalfall).

**F: Wie überprüft man, ob die Zustandsraumdarstellung korrekt ist?**
A: Dimensionen prüfen ($A:n\times n$, $\mathbf b:n\times1$, $\mathbf c^{\mathsf T}:1\times n$) und die ÜF $\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b+d$ mit der bekannten ÜF vergleichen.

**F: Zustandsraumdarstellung 1. Ordnung? 2. Ordnung?**
A: **1. Ordnung (PT1):** $\dot x=-\frac1T x+\frac KT u,\ y=x$. **2. Ordnung (Masse-Feder-Dämpfer)** mit $x_1=x,x_2=\dot x$:
$$\begin{pmatrix}\dot x_1\\\dot x_2\end{pmatrix}=\begin{pmatrix}0&1\\-\frac cm&-\frac dm\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}+\begin{pmatrix}0\\\frac1m\end{pmatrix}F,\quad y=(1\ 0)\mathbf x.$$

## 7.3 Die Diagonalform (Modalform)

**F: Was ist die Modalform und warum ist sie nützlich?**
A: Transformation auf eine **Diagonalmatrix** $\Lambda$ → die Zustandsgleichungen sind **entkoppelt** (je eine DGL 1. Ordnung) → direkt lösbar, Stabilität/Steuerbarkeit/Beobachtbarkeit sofort ablesbar.

**F: Wie berechnet man die Eigenwerte einer Matrix $A$?**
A: $\det(\lambda I-A)=0$; für $2\times2$: $\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=0$.

**F: Wie berechnet man den Eigenvektor zu einem Eigenwert?**
A: $(\lambda_i I-A)\mathbf v_i=\mathbf 0$ lösen (eine Komponente frei wählen, Rest daraus bestimmen).

**F: Was ist die Modalmatrix $V$ und wie wird sie aufgebaut?**
A: $V=[\mathbf v_1\ \mathbf v_2\ \cdots\ \mathbf v_n]$ – spaltenweise die Eigenvektoren.

**F: Wie transformiert man in die Diagonalform $\dot{\boldsymbol\eta}=\Lambda\boldsymbol\eta+\tilde{\mathbf b}u$?**
A: Mit $\mathbf x=V\boldsymbol\eta$: $\Lambda=V^{-1}AV=\operatorname{diag}(\lambda_i)$, $\tilde{\mathbf b}=V^{-1}\mathbf b$, $\tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V$.

**F: Was bedeutet, dass die Diagonalform entkoppelt ist?**
A: $\dot\eta_i=\lambda_i\eta_i+\tilde b_i u$ – jede Modalgleichung ist unabhängig von den anderen, einzeln lösbar.

**F: Wie berechnet man $V^{-1}$ für eine $2\times2$-Matrix?**
A: $V=\begin{pmatrix}a&b\\c&d\end{pmatrix}\Rightarrow V^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

**F: Wie berechnet man $\tilde{\mathbf b}=V^{-1}\mathbf b$ und $\tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V$?**
A: Matrix-Vektor-Produkte: $\tilde{\mathbf b}$ aus $V^{-1}$ mal $\mathbf b$, $\tilde{\mathbf c}^{\mathsf T}$ aus $\mathbf c^{\mathsf T}$ mal $V$ (siehe Teil B, vollständig gerechnet).

**F: Was sind die transformierten Parameter in der Modalform?**
A: Die Eigenwerte $\lambda_i$ (Diagonale von $\Lambda$), die Einträge $\tilde b_i$ (Steuerbarkeit der Mode) und $\tilde c_i$ (Beobachtbarkeit der Mode).

## 7.4 Stabilität im Zustandsraum

**F: Welche Stabilitätsbedingung gilt im Zustandsraum?**
A: Das System ist genau dann stabil, wenn **alle Eigenwerte $\lambda_i$ von $A$** negativen Realteil haben (Lyapunov).

**F: Was bedeutet asymptotische Stabilität bezüglich der Eigenwerte?**
A: $\mathrm{Re}(\lambda_i)<0$ für alle $i$ → die Eigenbewegung $\sim e^{\lambda_i t}$ klingt ab.

**F: Welche Eigenwerttypen gibt es und welches Zeitverhalten erzeugen sie?**
A: siehe folgende vier Fälle.

**F: Reell negativ – welche Sprungantwort?**
A: Aperiodisch stabil, exponentiell abklingend (kein Überschwingen).

**F: Komplex mit negativem Realteil – welche Sprungantwort?**
A: Gedämpfte Schwingung (Einhüllende $e^{-\sigma t}$).

**F: Rein imaginär – welche Sprungantwort?**
A: Ungedämpfte Dauerschwingung (Grenzstabilität).

**F: Reell positiv – welche Sprungantwort?**
A: Aufklingend, instabil (exponentielles Wachstum).

**F: Wie hängen $\omega_0$ und $D$ mit den Eigenwerten zusammen?**
A: Für ein komplexes Paar $\lambda=-\sigma\pm j\omega_d$: $\omega_0=\sqrt{\sigma^2+\omega_d^2}$, Dämpfung $D=\sigma/\omega_0=\cos\vartheta$ ($\vartheta$ = Winkel zur negativen reellen Achse).

**F: Was ist Grenzstabilität im Zustandsraum?**
A: Mindestens ein Eigenwert auf der imaginären Achse ($\mathrm{Re}=0$), alle übrigen links → weder ab- noch aufklingend (Dauerschwingung/konstanter Term).

## 7.5 Zusammenhang Übertragungsfunktion ↔ Zustandsdarstellung

**F: Wie berechnet man die ÜF aus der Zustandsraumdarstellung?**
A: $G(s)=\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b+d$.

**F: Warum ist $G(s)=\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b$ äquivalent zur ÜF?**
A: Laplace von $\dot{\mathbf x}=A\mathbf x+\mathbf b u$ (Anfangswerte 0): $s\mathbf X=A\mathbf X+\mathbf b U\Rightarrow\mathbf X=(sI-A)^{-1}\mathbf b\,U$, dann $Y=\mathbf c^{\mathsf T}\mathbf X+dU$ → $Y/U=\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b+d$.

**F: Was sind die Pole der ÜF in Bezug auf die Eigenwerte von $A$?**
A: $(sI-A)^{-1}=\frac{\operatorname{adj}(sI-A)}{\det(sI-A)}$ – der Nenner ist $\det(sI-A)$, das charakteristische Polynom. Die Pole sind also die **Eigenwerte** von $A$.

**F: Wann haben Eigenwerte und Pole unterschiedliche Werte (Kürzung)?**
A: Wenn sich ein Faktor zwischen Zähler und Nenner kürzt – dann erscheint ein Eigenwert **nicht** als Pol der ÜF.

**F: Was bedeutet es, wenn ein Eigenwert in der ÜF nicht erscheint?**
A: Die zugehörige Mode ist **nicht steuerbar** ($\tilde b_i=0$) oder **nicht beobachtbar** ($\tilde c_i=0$) – im Zustandsraum existiert sie, die ÜF „sieht" sie aber nicht.

---
---

# TEIL B – Komplette Aufgaben mit vollständiger Lösung

## ▣ Tutoriumsaufgabe (Tut 8, A1) — Drei-Massen-Schwinger (Viertelfahrzeug)

**Aufgabenstellung:** Drei Massen $m_1,m_2,m_3$, Federn $c_1,c_2,c_R$, Dämpfer $d_1$. Eingang Fußpunktanregung $u=z_R$, Ausgang $y=z_3-z_1$. (a) Anzahl Zustandsgrößen? (b) Zustandsvektor? (c) Dimensionen? (d) Zustandsraumdarstellung.

**Lösung (a):** 6 Energiespeicher (3 Massen + 3 Federn) → **$n=6$** Zustandsgrößen.
**Lösung (b):** $\mathbf x=(z_1,\dot z_1,z_2,\dot z_2,z_3,\dot z_3)^{\mathsf T}$ (Lage + Geschwindigkeit jeder Masse).
**Lösung (c):** $A\in\mathbb R^{6\times6},\ \mathbf b\in\mathbb R^{6\times1},\ \mathbf c^{\mathsf T}\in\mathbb R^{1\times6}$.
**Lösung (d):** Newton je Masse:
$$m_1\ddot z_1=c_2(z_2-z_1)+c_1(z_3-z_1)+d_1(\dot z_3-\dot z_1)+c_R(z_R-z_1),$$
$$m_2\ddot z_2=c_2(z_1-z_2),\qquad m_3\ddot z_3=c_1(z_1-z_3)+d_1(\dot z_1-\dot z_3).$$
Nach höchster Ableitung auflösen und in Matrixform; der Eingang $z_R$ wirkt nur über $\frac{c_R}{m_1}$ in der $\dot z_1$-Zeile:
$$\mathbf b=(0,\tfrac{c_R}{m_1},0,0,0,0)^{\mathsf T},\qquad \mathbf c^{\mathsf T}=(-1\ 0\ 0\ 0\ 1\ 0)\ \ (y=z_3-z_1).$$
> **Ergebnis:** 6 Zustände; $\mathbf b$ und $\mathbf c^{\mathsf T}$ wie oben.

## ▣ Tutoriumsaufgabe (Tut 8, A3a–c) — Elektromechanisches System + Modalform

**Aufgabenstellung:** Masse-Feder-Dämpfer, angetrieben von Linearaktor $F=k_M i$; induzierte Spannung $U_i=k_M\dot x_M$; Stromkreis $R,L$, Eingang $U_0$, Ausgang $x_M$.

**Lösung (a) – Zustände:** 2 mech. Speicher (Masse, Feder) + 1 elektr. (Spule) → $\mathbf x=(x_M,\dot x_M,i)^{\mathsf T}$, $A\in\mathbb R^{3\times3}$.
**Lösung (b) – Gleichungen:**
- Mechanik: $m\ddot x_M=-c x_M-d\dot x_M+k_M i\Rightarrow\ddot x_M=-\frac cm x_M-\frac dm\dot x_M+\frac{k_M}{m}i$.
- Elektrik (Maschenregel): $Ri+L\dot i+k_M\dot x_M=U_0\Rightarrow\dot i=-\frac RL i-\frac{k_M}{L}\dot x_M+\frac1L U_0$.
$$\dot{\mathbf x}=\begin{pmatrix}0&1&0\\-\frac cm&-\frac dm&\frac{k_M}{m}\\0&-\frac{k_M}{L}&-\frac RL\end{pmatrix}\mathbf x+\begin{pmatrix}0\\0\\\frac1L\end{pmatrix}U_0,\quad y=(1\ 0\ 0)\mathbf x.$$

**Lösung (c) – Eigenwerte/Eigenvektoren/Stabilität eines Beispielsystems** $A=\begin{pmatrix}5&-1\\50&-10\end{pmatrix}$:
$$\det(\lambda I-A)=(\lambda-5)(\lambda+10)+50=\lambda^2+5\lambda=\lambda(\lambda+5)=0\Rightarrow\lambda_1=0,\ \lambda_2=-5.$$
Eigenvektoren: $\lambda_1=0$: $-5v_{11}+v_{12}=0\Rightarrow\mathbf v_1=\binom{1}{5}$. $\lambda_2=-5$: $-10v_{21}+v_{22}=0\Rightarrow\mathbf v_2=\binom{1}{10}$.
> **Ergebnis:** Ein Eigenwert bei $0$ → **instabil** (grenzstabil); reelle Eigenwerte → **nicht schwingfähig**.

**Lösung (e) – Diagonalform:** $V=\begin{pmatrix}1&1\\5&10\end{pmatrix}$, $V^{-1}=\frac{1}{5}\begin{pmatrix}10&-1\\-5&1\end{pmatrix}$, $\Lambda=\begin{pmatrix}0&0\\0&-5\end{pmatrix}$. Mit $\mathbf b=\binom{0}{-5}$, $\mathbf c^{\mathsf T}=(1\ 2)$:
$$\tilde{\mathbf b}=V^{-1}\mathbf b=\tfrac15\binom{5}{-5}=\binom{1}{-1},\qquad \tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V=(11\ 21).$$

## ▣ Tutoriumsaufgabe (Tut 8, A2) — Eigenwerte & Stabilität (3×3)

**Aufgabenstellung:** $A=\begin{pmatrix}0&-\frac43&4\\5&-8&-4\\0&0&-20\end{pmatrix}$. Eigenwerte, Stabilität, Schwingfähigkeit?

**Lösung:** Entwicklung (dritte Zeile hat nur $-20$):
$$\det(\lambda I-A)=(\lambda+20)\,(\lambda^2+8\lambda+20)=0.$$
$\lambda_1=-20$; $\lambda_{2,3}=-4\pm\sqrt{16-20}=-4\pm2j$.
> **Ergebnis:** Alle Realteile $<0$ → **stabil**; komplexes Paar $-4\pm2j$ → **schwingfähig**.

---

## Kernaussagen (zum Merken)

1. $n=$ Anzahl Energiespeicher; Zustände = Speichergrößen (Lage/Geschw., $u_C$/$i_L$).
2. $\dot{\mathbf x}=A\mathbf x+\mathbf b u,\ y=\mathbf c^{\mathsf T}\mathbf x+du$.
3. Stabil ⇔ alle Eigenwerte von $A$ haben $\mathrm{Re}<0$; Imaginärteil → schwingfähig.
4. Modalform: $\Lambda=V^{-1}AV$, $\tilde{\mathbf b}=V^{-1}\mathbf b$, $\tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V$ → entkoppelt.
5. $G(s)=\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b+d$; Pole = Eigenwerte (außer bei Kürzung → nicht steuer-/beobachtbar).
