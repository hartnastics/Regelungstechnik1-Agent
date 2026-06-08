# Lernzettel 8 – Regelung im Zustandsraum

> Kapitel 8: Struktur der Zustandsregelung, Reglerentwurf durch Eigenwertvorgabe (Polplatzierung), Vorfilter. **Abschluss von Klausuraufgabe 4 (35 P).**

---

## 8.1 Allgemeine Struktur einer Zustandsregelung

### Was ist ein Zustandsregler?
Statt nur den Ausgang $y$ zurückzuführen, wird der **gesamte Zustandsvektor** $\mathbf x$ gemessen (oder geschätzt) und gewichtet zurückgeführt. Dadurch lässt sich die **gesamte Eigendynamik** (alle Eigenwerte) gezielt einstellen.

### Regelgesetz
$$\boxed{u(t)=-\mathbf r^{\mathsf T}\mathbf x(t)+f\,w(t)}=-(r_1 x_1+\dots+r_n x_n)+f w$$
- $\mathbf r^{\mathsf T}=(r_1,\dots,r_n)$: **Rückführvektor** (Zustandsregler) → bestimmt die **Dynamik** (Eigenwerte, Schnelligkeit, Dämpfung).
- $f$: **Vorfilter** (skalar) → stellt die **stationäre Genauigkeit** sicher ($F_W(0)=1$).

### Geschlossener Kreis
Einsetzen in $\dot{\mathbf x}=A\mathbf x+\mathbf b u$:
$$\dot{\mathbf x}=A\mathbf x+\mathbf b(-\mathbf r^{\mathsf T}\mathbf x+fw)=\underbrace{(A-\mathbf b\,\mathbf r^{\mathsf T})}_{A_R}\mathbf x+\mathbf b f w.$$
$$\boxed{A_R=A-\mathbf b\,\mathbf r^{\mathsf T}}$$
Die Eigenwerte von $A_R$ sind die **neuen** Pole des geregelten Systems.

### Ausgangs- vs. Zustandsrückführung
- **Ausgangsrückführung:** nur $y$ zurück (1 Größe) → begrenzte Beeinflussung.
- **Zustandsrückführung:** **alle** Zustände zurück → bei Steuerbarkeit **beliebige** Polplatzierung möglich.

### Warum alle Zustände kennen?
$u=-\mathbf r^{\mathsf T}\mathbf x$ braucht **alle** $x_i$. Sind nicht alle messbar, muss ein **Beobachter** sie schätzen (Inhalt RT2). **Kein** klassischer Soll-Istwert-Vergleich – stattdessen Zustandsrückführung + Vorfilter.

### Aufgabenteilung
- $\mathbf r^{\mathsf T}$ → Dynamik (Stabilität, Schnelligkeit, Dämpfung).
- $f$ → stationärer Wert ($y\to w$).

---

## 8.2 Reglerentwurf durch Eigenwertvorgabe (Polplatzierung)

### Idee
Man **gibt die gewünschten Eigenwerte** $\lambda_1^*,\dots,\lambda_n^*$ des geschlossenen Kreises vor (aus gewünschter Dämpfung $D$ und Eigenfrequenz $\omega_0$) und wählt $\mathbf r^{\mathsf T}$ so, dass $A_R=A-\mathbf b\mathbf r^{\mathsf T}$ genau diese Eigenwerte hat.

### Wunscheigenwerte wählen
Aus Anforderungen: Realteil $\leftrightarrow$ Schnelligkeit, Winkel $\leftrightarrow$ Dämpfung ($D=\cos\vartheta$). Typisch komplexes Paar $\lambda^*=-D\omega_0\pm j\omega_0\sqrt{1-D^2}$. Praktisch begrenzt durch Stellgröße (zu weit links → riesige Stellgröße).

### Wunschpolynom
$$p^*(s)=\prod_{i}(s-\lambda_i^*)=s^n+p_{n-1}s^{n-1}+\dots+p_1 s+p_0.$$
Beispiel $n=2$: $(s-\lambda_1^*)(s-\lambda_2^*)=s^2+p_1 s+p_0$.

### Charakteristisches Polynom des geregelten Systems
$$\det(sI-A_R)=\det\!\big(sI-A+\mathbf b\,\mathbf r^{\mathsf T}\big)=s^n+a_{n-1}(\mathbf r)\,s^{n-1}+\dots+a_0(\mathbf r).$$
Die Koeffizienten $a_i$ hängen **linear** von $r_1,\dots,r_n$ ab.

### Koeffizientenvergleich → $\mathbf r^{\mathsf T}$
$$a_i(\mathbf r)\overset{!}{=}p_i\quad (i=0,\dots,n-1)\ \Rightarrow\ n\ \text{Gleichungen für}\ r_1,\dots,r_n.$$

### Voraussetzung
**Vollständige Steuerbarkeit** des Systems → dann ist beliebige Polplatzierung möglich.

### Warum Vorfilter $f$ nötig?
$\mathbf r^{\mathsf T}$ verändert die Eigenwerte, aber auch die **stationäre Verstärkung**. Ohne $f$ ist i. A. $F_W(0)\neq1$ → bleibende Regelabweichung. $f$ korrigiert den stationären Endwert auf $w$.

### Vorfilter-Formel
Aus $F_W(0)=\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b\,f\overset{!}{=}1$:
$$\boxed{f=\big[\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b\big]^{-1}=-\big[\mathbf c^{\mathsf T}A_R^{-1}\mathbf b\big]^{-1}}$$

### $A_R^{-1}$ für $2\times2$
$$A_R=\begin{pmatrix}a&b\\c&d\end{pmatrix}\Rightarrow A_R^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$

### Kontrolle
$F_W(0)=1$ nachrechnen ($\mathbf c^{\mathsf T}(-A_R)^{-1}\mathbf b\,f=1$). Falsches $\mathbf r^{\mathsf T}$ → Eigenwerte von $A_R$ liegen nicht auf den Wunschwerten (mit $\det(sI-A_R)$ prüfen).

### ▶ Tutoriumsbeispiel (Tut 8, A3d): Zustandsregler
$A=\begin{pmatrix}5&-1\\50&-10\end{pmatrix}$, $\mathbf b=\binom{0}{-5}$. Wunsch: Doppeleigenwert $\lambda_{1,2}=-5$ → $p^*(s)=s^2+10s+25$.
$$A_R=A-\mathbf b\mathbf r^{\mathsf T}=\begin{pmatrix}5&-1\\50+5r_1&-10+5r_2\end{pmatrix},\quad\det(sI-A_R)=s^2+(5-5r_2)s+(25r_2+5r_1).$$
Koeffizientenvergleich: $5-5r_2=10\Rightarrow r_2=-1$; $25r_2+5r_1=25\Rightarrow r_1=10$.
> **Ergebnis:** $\mathbf r^{\mathsf T}=(10,\ -1)$.

### ▶ Klausurbeispiel (Klausur 05.09.2022, A4): Regler + Vorfilter
$A=\begin{pmatrix}-4&2\\2&-1\end{pmatrix}$, $\mathbf b=\binom{1}{2}$, $\mathbf c^{\mathsf T}=(4\ 1)$. Wunsch $\lambda_1=-3,\lambda_2=-5$ → $p^*=s^2+8s+15$.
- $\det(sI-A+\mathbf b\mathbf r^{\mathsf T})=s^2+(5+r_1+2r_2)s+(5r_1+10r_2)$.
- $5+r_1+2r_2=8$ und $5r_1+10r_2=15$ → eine Lösung: $\mathbf r^{\mathsf T}=(1,\ 1)$.
- Vorfilter: $A_R=A-\mathbf b\mathbf r^{\mathsf T}=\begin{pmatrix}-5&1\\0&-3\end{pmatrix}$, $A_R^{-1}=\begin{pmatrix}-1/5&-1/15\\0&-1/3\end{pmatrix}$,
$$f=\big[\mathbf c^{\mathsf T}(-A_R^{-1})\mathbf b\big]^{-1}=\Big[(4\ 1)\tfrac{1}{15}\textstyle\binom{12}{9}\Big]^{-1}=0{,}5.$$
> **Ergebnis:** $\mathbf r^{\mathsf T}=(1,1)$, $f=0{,}5$ → geschlossener Kreis hat Eigenwerte $-3,-5$ und ist stationär genau.

### ▶ Beispiel Diagonalform (Tut 8, A3f)
Im diagonalen System ($\Lambda=\operatorname{diag}(0,-5)$, $\tilde b=\binom{1}{-1}$) ergibt der Koeffizientenvergleich für Doppeleigenwert $-5$: $\mathbf r^{\mathsf T}=(5,\ 0)$ ($r_2$ beliebig wegen $\tilde b_2$-Struktur).

---

## Kernaussagen (zum Merken)

1. Regelgesetz $u=-\mathbf r^{\mathsf T}\mathbf x+fw$; $A_R=A-\mathbf b\mathbf r^{\mathsf T}$ trägt die neuen Eigenwerte.
2. Entwurf: Wunschpolynom $p^*(s)=\prod(s-\lambda_i^*)$ ↔ $\det(sI-A_R)$ per **Koeffizientenvergleich** → $\mathbf r^{\mathsf T}$.
3. Beliebige Polplatzierung nur bei **vollständiger Steuerbarkeit**.
4. Vorfilter $f=-[\mathbf c^{\mathsf T}A_R^{-1}\mathbf b]^{-1}$ sichert $F_W(0)=1$ (stationäre Genauigkeit).
5. Kein Soll-Istwert-Vergleich; alle Zustände müssen bekannt sein (sonst Beobachter, RT2).
