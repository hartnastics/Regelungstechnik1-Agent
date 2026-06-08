# Lernzettel 7 – Beschreibung dynamischer Systeme im Zustandsraum

> Kapitel 7: Vergleich der Methoden, allgemeine Zustandsgleichungen, Modalform, Stabilität im Zustandsraum, Zusammenhang ÜF ↔ Zustandsdarstellung. **Grundlage für Klausuraufgabe 4 (35 P).**

---

## 7.1 Beispiele und Vergleich der Methoden

### Vorteil der Zustandsraummethode
- Arbeitet **direkt im Zeitbereich** mit einem System von DGLs **1. Ordnung** (statt einer DGL $n$-ter Ordnung).
- Behandelt **Anfangswerte** natürlich, erfasst den **inneren Zustand**.
- Gilt für **lineare/nichtlineare, zeitvariante/-invariante** Systeme und **Mehrgrößensysteme**.

### Übertragungsfunktion vs. Zustandsraum
- **Übertragungsfunktion** nur für **lineare, zeitinvariante** Eingrößensysteme (und Mehrgrößen mit Matrizen); **nicht** für nichtlineare/zeitvariante Systeme.
- **Zustandsraum** auch für nichtlineare/zeitvariante/Mehrgrößensysteme; **nicht** für Totzeitsysteme (keine gewöhnliche DGL).

### Was ist ein Zustand?
Die **minimale Information** über die Vergangenheit, die zusammen mit dem zukünftigen Eingang den zukünftigen Verlauf eindeutig festlegt. Physikalisch: die in den **Energiespeichern** gespeicherten Größen.

### Anzahl Zustandsgrößen
$$\boxed{n=\text{Anzahl der (unabhängigen) Energiespeicher}}$$
- Mechanik: jede **Masse** (kinetische Energie → Geschwindigkeit) und jede **Feder** (potentielle Energie → Auslenkung).
- Elektrik: jeder **Kondensator** (→ Spannung) und jede **Spule** (→ Strom).

---

## 7.2 Allgemeine Form der Zustandsgleichungen

### Zustandsraumdarstellung (LZI-Eingrößensystem)
$$\boxed{\dot{\mathbf x}(t)=A\,\mathbf x(t)+\mathbf b\,u(t)},\qquad \boxed{y(t)=\mathbf c^{\mathsf T}\mathbf x(t)+d\,u(t)}$$
- $\mathbf x\in\mathbb R^{n}$: **Zustandsvektor**; $A\in\mathbb R^{n\times n}$: **Dynamikmatrix** (innere Kopplung); $\mathbf b\in\mathbb R^{n\times1}$: **Eingangsvektor**; $\mathbf c^{\mathsf T}\in\mathbb R^{1\times n}$: **Ausgangsvektor**; $d$: **Durchgriff**.

### Bedeutung der Matrizen
- $A$ beschreibt, wie die Zustände sich gegenseitig und sich selbst beeinflussen (Eigendynamik).
- $\mathbf b$ wie der Eingang auf die Zustände wirkt.
- $\mathbf c^{\mathsf T}$ wie sich der Ausgang aus den Zuständen zusammensetzt.
- $d$: direkter Durchgriff Eingang→Ausgang; **$d=0$**, wenn Zähler- < Nennergrad (Normalfall).

### Wahl der Zustandsgrößen
- **Mechanik (Masse-Feder-Dämpfer):** Lage $x$ und Geschwindigkeit $\dot x$ jeder Masse.
- **Elektrik (R,L,C):** Spulenstrom $i_L$ und Kondensatorspannung $u_C$.

### Herleitung aus der DGL (Schritt für Schritt)
1. DGL aufstellen (Freischnitt/Kirchhoff).
2. Nach **höchster Ableitung** auflösen.
3. Zustände definieren ($x_1=$ Größe, $x_2=\dot x_1$, …).
4. $\dot x_i$ durch die Zustände und $u$ ausdrücken.
5. In Matrixform $A,\mathbf b,\mathbf c^{\mathsf T}$ schreiben.

### Beispiele der Ordnung
- **1. Ordnung (PT1):** $\dot x=-\tfrac1T x+\tfrac KT u$, $y=x$ → $A=-1/T$, $b=K/T$, $c=1$.
- **2. Ordnung (Masse-Feder-Dämpfer):** $x_1=x,\ x_2=\dot x$:
$$\begin{pmatrix}\dot x_1\\\dot x_2\end{pmatrix}=\begin{pmatrix}0&1\\-\tfrac{c}{m}&-\tfrac{d}{m}\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}+\begin{pmatrix}0\\\tfrac1m\end{pmatrix}F,\quad y=\begin{pmatrix}1&0\end{pmatrix}\mathbf x.$$

### Korrektheit prüfen
Dimensionen ($A:n\times n$, $b:n\times1$, $c^{\mathsf T}:1\times n$); Rücktransformation in die DGL bzw. Vergleich der ÜF $c^{\mathsf T}(sI-A)^{-1}b$ mit der bekannten ÜF.

### ▶ Tutoriumsbeispiel (Tut 8, A3): elektromechanisches System
Masse mit Feder/Dämpfer, angetrieben von Linearaktor $F=k_M i$, induzierte Spannung $U_i=k_M\dot x_M$. Zustände $\mathbf x=(x_M,\dot x_M, i)^{\mathsf T}$ (2 mech. + 1 elektr. Energiespeicher):
$$\dot{\mathbf x}=\begin{pmatrix}0&1&0\\-\tfrac{c}{m}&-\tfrac{d}{m}&\tfrac{k_M}{m}\\0&-\tfrac{k_M}{L}&-\tfrac{R}{L}\end{pmatrix}\mathbf x+\begin{pmatrix}0\\0\\\tfrac1L\end{pmatrix}U_0,\quad y=\begin{pmatrix}1&0&0\end{pmatrix}\mathbf x.$$

---

## 7.3 Die Diagonalform (Modalform)

### Was & wozu
Transformation auf eine **Diagonalmatrix** $\Lambda$ → die Zustandsgleichungen sind **entkoppelt** (jede Gleichung 1. Ordnung für sich) → direkt lösbar, Stabilität sofort ablesbar.

### Eigenwerte berechnen
$$\det(\lambda I-A)=0.$$
Für $2\times2$: $\lambda^2-\operatorname{tr}(A)\,\lambda+\det(A)=0$.

### Eigenvektoren
Zu jedem $\lambda_i$: $(\lambda_i I-A)\,\mathbf v_i=\mathbf 0$ lösen (eine Komponente frei wählen).

### Modalmatrix
$$V=[\,\mathbf v_1\ \mathbf v_2\ \cdots\ \mathbf v_n\,]\quad(\text{spaltenweise Eigenvektoren}).$$

### Transformation $\mathbf x=V\boldsymbol\eta$
$$\dot{\boldsymbol\eta}=\underbrace{V^{-1}AV}_{\Lambda=\operatorname{diag}(\lambda_i)}\boldsymbol\eta+\underbrace{V^{-1}\mathbf b}_{\tilde{\mathbf b}}u,\qquad y=\underbrace{\mathbf c^{\mathsf T}V}_{\tilde{\mathbf c}^{\mathsf T}}\boldsymbol\eta.$$

### Entkopplung
$\Lambda$ ist diagonal → $\dot\eta_i=\lambda_i\eta_i+\tilde b_i u$ – jede Modalgleichung unabhängig. Lösung $\eta_i(t)=e^{\lambda_i t}\eta_i(0)+\int e^{\lambda_i(t-\tau)}\tilde b_i u\,d\tau$.

### $V^{-1}$ für $2\times2$
$$V=\begin{pmatrix}a&b\\c&d\end{pmatrix}\Rightarrow V^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$

### ▶ Tutoriumsbeispiel (Tut 8, A3e): Diagonalform
$A=\begin{pmatrix}5&-1\\50&-10\end{pmatrix}$, $\mathbf b=\binom{0}{-5}$, $\mathbf c^{\mathsf T}=(1\ 2)$.
- Eigenwerte: $\lambda^2+5\lambda=0\Rightarrow\lambda_1=0,\ \lambda_2=-5$.
- Eigenvektoren: $\mathbf v_1=\binom{1}{5},\ \mathbf v_2=\binom{1}{10}$.
- $V=\begin{pmatrix}1&1\\5&10\end{pmatrix}$, $V^{-1}=\tfrac15\begin{pmatrix}10&-1\\-5&1\end{pmatrix}$, $\Lambda=\begin{pmatrix}0&0\\0&-5\end{pmatrix}$.
- $\tilde{\mathbf b}=V^{-1}\mathbf b=\binom{1}{-1}$, $\tilde{\mathbf c}^{\mathsf T}=\mathbf c^{\mathsf T}V=(11\ 21)$.

---

## 7.4 Stabilität im Zustandsraum

### Stabilitätsbedingung (Lyapunov, LZI)
$$\boxed{\text{stabil}\iff \operatorname{Re}(\lambda_i)<0\ \text{für alle Eigenwerte }\lambda_i\text{ von }A.}$$
Aus Lyapunov-Stabilität folgt auch BIBO-Stabilität.

### Eigenwerttypen ↔ Zeitverhalten
| Eigenwert | Sprung-/Eigenverhalten |
|---|---|
| **reell negativ** ($\lambda<0$) | aperiodisch stabil (exponentiell abklingend) |
| **komplex, Re$<0$** | gedämpfte Schwingung |
| **rein imaginär** ($\lambda=\pm j\omega$) | ungedämpfte Dauerschwingung (Grenzstabilität) |
| **reell positiv / Re$>0$** | aufklingend instabil |

### Eigenfrequenz & Dämpfung
Für ein komplexes Paar $\lambda=-\sigma\pm j\omega_d$: $\;\omega_0=\sqrt{\sigma^2+\omega_d^2}$, Dämpfung $D=\sigma/\omega_0=\cos\vartheta$ (Winkel zur negativen reellen Achse). Re-Teil = Schnelligkeit, Verhältnis Im/Re = Schwingneigung.

### Schwingfähigkeit
Imaginärteil $\neq0$ → schwingfähig; rein reelle Eigenwerte → nicht schwingfähig.

### ▶ Tutoriumsbeispiel (Tut 8, A2)
$A=\begin{pmatrix}0&-4/3&4\\5&-8&-4\\0&0&-20\end{pmatrix}$ → $\det(\lambda I-A)=(\lambda+20)(\lambda^2+8\lambda+20)=0$ → $\lambda_1=-20,\ \lambda_{2,3}=-4\pm2j$. Alle Re$<0$ → **stabil**, komplexes Paar → **schwingfähig**.

---

## 7.5 Zusammenhang Übertragungsfunktion ↔ Zustandsdarstellung

### ÜF aus Zustandsdarstellung
$$\boxed{G(s)=\mathbf c^{\mathsf T}(sI-A)^{-1}\mathbf b + d}$$
Herleitung: Laplace von $\dot{\mathbf x}=A\mathbf x+\mathbf b u$ (Anfangswerte 0): $s\mathbf X=A\mathbf X+\mathbf b U\Rightarrow \mathbf X=(sI-A)^{-1}\mathbf b\,U$, dann $Y=\mathbf c^{\mathsf T}\mathbf X+dU$.

### Warum äquivalent?
$(sI-A)^{-1}=\dfrac{\operatorname{adj}(sI-A)}{\det(sI-A)}$ – der Nenner ist $\det(sI-A)$, das **charakteristische Polynom**.

### Pole ↔ Eigenwerte
Die **Pole** von $G(s)$ sind die Nullstellen von $\det(sI-A)=0$, also die **Eigenwerte** von $A$ – sofern keine Kürzung auftritt.

### Pol-Nullstellen-Kürzung
Kürzt sich ein Faktor zwischen Zähler und Nenner, **erscheint ein Eigenwert nicht** als Pol der ÜF. Dieser Mode ist dann **nicht steuerbar** ($\tilde b_i=0$) oder **nicht beobachtbar** ($\tilde c_i=0$) – die ÜF „sieht" ihn nicht, im Zustandsraum ist er aber vorhanden.

---

## Kernaussagen (zum Merken)

1. $n=$ Anzahl Energiespeicher; Zustände = Speichergrößen (Lage/Geschw., $u_C$/$i_L$).
2. $\dot{\mathbf x}=A\mathbf x+\mathbf b u,\ y=\mathbf c^{\mathsf T}\mathbf x+du$.
3. Stabil ⇔ alle Eigenwerte von $A$ haben Re$<0$; Imaginärteil → schwingfähig.
4. Modalform: $\Lambda=V^{-1}AV$, $\tilde b=V^{-1}b$, $\tilde c^{\mathsf T}=c^{\mathsf T}V$ → entkoppelt.
5. $G(s)=c^{\mathsf T}(sI-A)^{-1}b+d$; Pole = Eigenwerte (außer bei Kürzung).
