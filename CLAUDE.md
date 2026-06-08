# Regelungstechnik 1 – Lernportal (Uni Paderborn, Prof. Trächtler)

## Kontext und Ziel

Dieser Agent unterstützt Studierende der Regelungstechnik 1 (Universität Paderborn, Prof. Dr.-Ing. Ansgar Trächtler) bei der Klausurvorbereitung. Das Ziel ist eine **professionelle, vollständige Lernwebsite** – vergleichbar mit einem guten Lehrbuch, aber interaktiv und visuell hochwertig.

**Sprache:** Alle Inhalte, Erklärungen, Kommentare und Beschriftungen immer auf **Deutsch**.

---

## Knowledge-Ordner

```
knowledge/
├── Vorlesungen/       → Vorlesungsfolien Kap. 1–8 (PyPDF2: from PyPDF2 import PdfReader)
├── Klausuraufgaben/   → Echte Aufgaben nach Typ (Aufgabe1–5, Fragen)
├── Tutorien/          → Aufgaben mit Lösungen
├── Übungen/           → Aufgaben ohne Lösungen
└── Fragen aus Tut/    → Richtig/Falsch-Fragen
```

> **Hinweis:** `knowledge/Vorlesungen/Kapitel1_Einführung/Kap1_Regelungstechnik.pdf` ist beschädigt.

---

## Lernzettel – Fragestellungen die beantwortet werden müssen

Bezogen auf jedes Kapitel: Jedes Kapitel bekommt einen Lernzettel.

### Lernzettel 1: Einführung

#### 1.1 Begriff der Regelung und grundsätzlicher Aufbau

- Was ist der Unterschied zwischen einer Regelung und einer Steuerung?
- Wann reicht eine Steuerung aus, wann ist eine Regelung notwendig?
- Was ist die Regelgröße, was ist die Führungsgröße, was ist die Stellgröße?
- Was ist eine Störgröße und wo greift sie in den Regelkreis ein?
- Was ist der Regelfehler und wie wird er berechnet?
- Was versteht man unter dem „geschlossenen Wirkungskreis"?
- Welche Grundbestandteile hat jeder Regelkreis?
- Was ist der Unterschied zwischen Regler und Strecke?
- Warum braucht eine Regelung zwingend eine Messung der Regelgröße?
- Was passiert im Regelkreis wenn eine Störung auftritt?

#### 1.2 Beispiele von Regelungen

- Wie funktioniert die Drehzahlregelung einer Dampfmaschine (Fliehkraftregler)?
- Welche Größe wird beim Segway geregelt und warum ist das System ohne Regelung instabil?
- Was wird bei einem Kfz-Tempomat geregelt und was sind typische Störgrößen?
- Was ist das Regelziel bei einer Füllstandsregelung?
- Wie funktioniert eine Schüttgutregelung und welche Besonderheiten hat sie?
- Welche Gemeinsamkeit haben alle genannten Beispiele bezüglich des Regelkreis-Aufbaus?

---

### Lernzettel 2: Regelung und Steuerung

#### 2.2 Einfaches Beispiel: Antriebsregelung

- Wie ist der Regelkreis einer einfachen Antriebsregelung aufgebaut?
- Was ist die Regelgröße, was ist die Störgröße bei einer Drehzahlregelung?
- Welche Übertragungsfunktion hat eine einfache Antriebsstrecke (Motormodell)?
- Warum reicht bei einer Antriebsregelung eine Steuerung oft nicht aus?
- Wie beeinflusst ein Lastsprung (Störung) das Systemverhalten ohne Regelung?

#### 2.3 Entwurf von Vorsteuerungen

- Was ist eine Vorsteuerung und wozu wird sie eingesetzt?
- Wie unterscheidet sich eine Vorsteuerung von einer Rückkopplung?
- Wie wird eine Vorsteuerung aus dem invertierten Streckenmodell berechnet?
- Was ist der Vorteil einer Kombination aus Vorsteuerung und Regelung?
- Was passiert, wenn das Streckenmodell der Vorsteuerung ungenau ist?
- Wann ist eine Vorsteuerung sinnvoll, wann nicht?
- Was ist der Unterschied zwischen Führungsvorsteuerung und Störgrößenvorsteuerung?

---

### Lernzettel 3: Der Lineare Regelkreis

#### 3.1 Allgemeine Struktur und Gleichungen

- Wie lautet die allgemeine Struktur des linearen Regelkreises in Blockschaltbild-Form?
- Wie wird die Schleifenübertragungsfunktion F_o(s) aus dem Blockschaltbild bestimmt?
- Wie leitet man F_W(s) (Führungsübertragungsfunktion) her? Welche Schritte sind nötig?
- Wie leitet man F_Z(s) (Störübertragungsfunktion) her?
- Was bedeutet es, wenn F_W(0) = 1 gilt?
- Wie verändert sich F_W(s) wenn ein Messglied G_M(s) ≠ 1 im Rückführzweig liegt?
- Wie geht man bei Nicht-Standard-Blockschaltbildern vor (innere Schleifen, Vorwärtszweige)?
- Was ist der Zusammenhang zwischen F_W und F_o: F_W = F_o / (1 + F_o)?
- Warum hat der Nenner 1 + F_o(s) so eine zentrale Bedeutung?

#### 3.2 Stabilität von Regelkreisen

- Was bedeutet „Stabilität" eines Regelkreises im BIBO-Sinne?
- Was bedeutet asymptotische Stabilität?
- Wie hängt die Stabilität mit den Polen der Übertragungsfunktion zusammen?
- Warum sind Pole in der rechten s-Halbebene problematisch?
- Was sind die Pole des geschlossenen Regelkreises und wie berechnet man sie?
- Was bedeutet Grenzstabilität (Pole auf der imaginären Achse)?
- Warum reicht es nicht, nur die Pole des offenen Kreises zu betrachten?

#### 3.3 Das Hurwitz-Kriterium

- Was ist das charakteristische Polynom und woher kommt es?
- Wie lautet die notwendige Bedingung des Hurwitz-Kriteriums?
- Wie baut man die Hurwitz-Matrix für ein Polynom 3. Ordnung auf?
- Wie lauten die Hurwitz-Bedingungen für n = 2, n = 3?
- Warum ist „alle Koeffizienten positiv" für n ≥ 3 allein nicht hinreichend?
- Wann ist das Hurwitz-Kriterium anwendbar und wann nicht?
- Wie bestimmt man mit Hurwitz den Wertebereich von K_R für Stabilität?
- Was passiert an der Stabilitätsgrenze (ein H_i = 0)?

#### 3.4 Das spezielle Nyquist-Kriterium

- Was ist eine Ortskurve und wie wird sie konstruiert?
- Was bedeutet der kritische Punkt (-1, j0) in der Ortskurve?
- Wie lautet das spezielle Nyquist-Kriterium (Voraussetzungen + Aussage)?
- Was bedeutet „Einschließen" des kritischen Punktes geometrisch?
- Wie prüft man anhand der Ortskurve ob der Punkt (-1,0) eingeschlossen wird?
- Welche Voraussetzung muss der offene Regelkreis erfüllen damit das spezielle Kriterium gilt?
- Warum ist das Nyquist-Kriterium auch bei Totzeit anwendbar (Hurwitz nicht)?
- Wie verändert sich die Ortskurve wenn K_R erhöht wird?

#### 3.5 Stabilitätsprüfung im Bode-Diagramm

- Wie ist das Bode-Diagramm aufgebaut (Betrag + Phase, logarithmische Achsen)?
- Was ist die Durchtrittsfrequenz ω_D und wie findet man sie?
- Was ist die Phasenschnittfrequenz ω_k und wie findet man sie?
- Wie hängt das Bode-Diagramm mit der Ortskurve zusammen?
- Wie kann man aus dem Bode-Diagramm Stabilität beurteilen?
- Was bedeutet es wenn ω_D < ω_k gilt (stabiles System)?
- Wie zeichnet man den asymptotischen Betragsverlauf?
- Welche Steigung hat ein PT1-Glied nach der Knickfrequenz? Ein I-Glied?
- Wie berechnet man die Knickfrequenz eines PT1-Glieds?
- Wie addieren sich Beträge (in dB) und Phasen mehrerer Glieder?

#### 3.6 Stabilitätsreserven (Phasen- und Amplitudenreserve)

- Was ist die Phasenreserve φ_r und wie wird sie berechnet?
- Was ist die Amplitudenreserve A_r und wie wird sie berechnet?
- Wie liest man φ_r und A_r aus dem Bode-Diagramm ab?
- Was bedeutet eine Phasenreserve von 0°? Von 90°?
- Welche Mindestwerte werden für φ_r und A_r typischerweise gefordert?
- Wie hängen Phasenreserve und Dämpfung des geschlossenen Kreises zusammen?
- Was passiert mit φ_r wenn K_R erhöht wird?
- Wie verändert ein I-Glied in der Strecke die Phasenreserve?

#### 3.7 Das allgemeine Nyquist-Kriterium

- Wann muss das allgemeine (statt des speziellen) Nyquist-Kriterium verwendet werden?
- Wie lautet das allgemeine Nyquist-Kriterium mathematisch?
- Was ist die Umschlingungszahl W und wie zählt man sie?
- Wie geht man vor wenn der offene Kreis Pole auf der imaginären Achse hat (Indentation)?
- Was bedeutet es wenn ein instabiler offener Kreis durch Rückkopplung stabilisiert wird?
- Wie kann man das allgemeine Kriterium auf ein konkretes Beispiel anwenden?

#### 3.8 Totzeitglieder

- Was ist ein Totzeitglied und welche physikalischen Systeme haben Totzeit?
- Wie lautet die Übertragungsfunktion des Totzeitglieds G_{Tt}(s) = e^{-T_t s}?
- Wie verhält sich Betrag und Phase des Totzeitglieds im Frequenzbereich?
- Warum bleibt der Betrag bei Totzeit konstant und nur die Phase ändert sich?
- Warum ist Totzeit destabilisierend?
- Wie berechnet man die durch Totzeit verursachte Phasenabsenkung?
- Warum ist das Hurwitz-Kriterium bei Systemen mit Totzeit nicht anwendbar?
- Wie bestimmt man die maximale zulässige Totzeit T_{t,max} aus der Phasenreserve?

---

### Lernzettel 4: Synthese (Entwurf) von Regelungen

#### 4.1 Aufgabenstellung und Anforderungen

- Was sind die typischen Anforderungen an einen Regelkreis?
- Was bedeutet „Führungsverhalten" vs. „Störverhalten"?
- Was ist der Unterschied zwischen stationären und dynamischen Anforderungen?
- Was ist Anregelzeit, Ausregelzeit, Überschwingen, stationäre Genauigkeit?
- Was bedeutet Robustheit eines Regelkreises?

#### 4.2 Stationäres Verhalten

- Was ist der Endwertsatz der Laplace-Transformation und wann gilt er?
- Wie berechnet man den stationären Endwert der Regelgröße nach einem Sprung?
- Was ist die stationäre Regelabweichung e_∞ und wie berechnet man sie?
- Wann ist e_∞ = 0 (keine bleibende Regelabweichung)?
- Was ist der Systemtyp (Typ 0, Typ 1, Typ 2) und was bedeutet er?
- Welche Reglerstruktur ist nötig um e_∞ = 0 bei einem Sprungeingang zu garantieren?
- Wie wirkt ein I-Anteil auf die stationäre Genauigkeit?

#### 4.3 Grundsätzliche Struktur des Reglers

- Was sind die grundlegenden Regleranteile (P, I, D)?
- Was bewirkt der P-Anteil im Regelkreis (Verstärkung, stationärer Fehler)?
- Was bewirkt der I-Anteil (Aufintegration des Fehlers, stationäre Genauigkeit)?
- Was bewirkt der D-Anteil (Reaktion auf Fehleränderung, Phasenvoreilung)?
- Wie kombinieren sich P, I, D zu PI, PD und PID-Reglern?

#### 4.4 Realisierung von Reglern

- Wie lautet die Übertragungsfunktion eines P-Reglers? Wann setzt man ihn ein?
- Wie lautet die Übertragungsfunktion eines I-Reglers?
- Wie lautet die Übertragungsfunktion eines PI-Reglers? Was bedeuten K_R und T_R?
- Wie sieht das Bode-Diagramm eines PI-Reglers aus (Knickfrequenz, Steigung)?
- Wie lautet die Übertragungsfunktion eines PD-Reglers (mit Verzögerungsterm T_N)?
- Wie sieht das Bode-Diagramm eines PD-Reglers aus?
- Wie lautet die Übertragungsfunktion eines PID-Reglers?
- Was sind Vor- und Nachteile des D-Anteils (Rauschempfindlichkeit)?
- Wie erkennt man den Reglertyp aus dem Bode-Diagramm?
- Wie liest man K_R und T_R aus dem Bode-Diagramm eines PI-Reglers ab?

#### 4.5 Methoden zur Reglerparameter-Festlegung

- Was ist das Betragsoptimum und welches Ziel verfolgt es?
- Was ist das vereinfachte Betragsoptimum nach Kessler?
- Warum wird T_R = T_1 (größte Zeitkonstante) gewählt?
- Was ist die Summenzeitkonstante T_Σ und wie berechnet man sie?
- Wie lautet die Kessler-Formel für K_R bei D = 1/√2?
- Was bedeutet Dämpfung D = 1/√2 für das Überschwingen (ca. 4,3%)?
- Was bedeutet D = 1 (aperiodisch optimaler Fall)?
- Was ist der Unterschied zwischen D = 1 und D = 1/√2 in der Sprungantwort?
- Was sind die Voraussetzungen für die Anwendung des Kessler-Verfahrens?

#### 4.6 Anwendungsbeispiel: Drehzahlregelung DC-Motor

- Welche physikalischen Gleichungen beschreiben den Gleichstrommotor?
- Was ist die elektrische Zeitkonstante T_a = L_a/R_a und was die mechanische T_m = J/b?
- Wie lautet die Übertragungsfunktion des Motors (Spannung → Drehzahl)?
- Wie wird ein PI-Regler für diese Strecke nach Kessler ausgelegt?
- Was ist der Unterschied zwischen Strom- und Drehzahlregelung?

#### 4.7 Maßnahmen zur gezielten Formung des Frequenzgangs

- Was bedeutet „Frequenzgangformung" und welches Ziel verfolgt man damit?
- Wie verändert ein PI-Regler den Frequenzgang des offenen Kreises?
- Wie verändert ein PD-Regler den Frequenzgang?
- Was ist Phasenhebung und wie erzielt man sie?
- Wie beeinflusst man gezielt Durchtrittsfrequenz und Phasenreserve?

---

### Lernzettel 5: Kaskadenregelung und Störgrößenaufschaltung

#### 5a) Kaskadenregelung

- Was ist die Grundidee der Kaskadenregelung?
- Wann ist eine Kaskadenregelung sinnvoll (welche Voraussetzungen müssen erfüllt sein)?
- Was sind Innenkreis und Außenkreis und welche Aufgabe haben sie jeweils?
- Warum muss der Innenkreis schneller sein als der Außenkreis?
- Wie wird der Innenregler (P-Regler) ausgelegt: T_W = T_0/n?
- Wie lautet die Herleitung T_W = T_0/n aus dem geschlossenen Innenkreis?
- Wie berechnet man K_{R,i} für n-fache Beschleunigung?
- Wie wird der geschlossene Innenkreis als PT1-Näherung für den Außenkreis verwendet?
- Wie wird der Außenregler (PI nach Kessler) ausgelegt?
- Was ist die Gesamtstrecke für den Außenkreis?
- Welche Vorteile hat die Kaskadenregelung gegenüber einer einfachen Regelung?
- Was bedeutet es wenn eine innere Störgröße schnell ausgeregelt werden soll?
- Wie erkennt man in einem Blockschaltbild eine Kaskadenstruktur?
- Was passiert wenn die Zeitskalentrennung nicht erfüllt ist?

#### 5b) Störgrößenaufschaltung

- Was ist die Grundidee der Störgrößenaufschaltung?
- Welche Voraussetzung muss die Störgröße erfüllen damit Aufschaltung möglich ist?
- Wie wird das ideale Kompensationsglied G_{K,SD}(s) = -G_Z(s)/G_{S1}(s) hergeleitet?
- Warum genau diese Formel – was soll kompensiert werden?
- Wie prüft man ob G_{K,SD} physikalisch realisierbar ist?
- Was ist die Bedingung für Realisierbarkeit (Zählergrad ≤ Nennergrad)?
- Was macht man wenn die ideale Kompensation nicht realisierbar ist?
- Was ist stationäre Kompensation und wie berechnet man G_{K,SD}(0)?
- Wie unterscheiden sich die Sprungantworten bei idealer, stationärer und keiner Kompensation?
- Was ist der Vorteil der Kombination aus Kaskade und Störgrößenaufschaltung?

---

### Lernzettel 6: Grundlagen der digitalen Regelung

#### 6.1 Abtastung, A/D- und D/A-Umsetzung

- Was sind die vier Signalklassen und wie unterscheiden sie sich?
- Was bedeutet wertkontinuierlich vs. wertdiskret?
- Was bedeutet zeitkontinuierlich vs. zeitdiskret?
- Wie funktioniert ein Sample-and-Hold-Glied?
- Was ist ein A/D-Wandler und wie funktioniert er prinzipiell?
- Was ist ein D/A-Wandler?
- Was ist die Signalverarbeitungskette vom analogen Sensor bis zum digitalen Regler?
- Was ist der Unterschied zwischen Abtastung und Quantisierung?
- Was ist Aliasing und wann tritt es auf?
- Wie lautet die Formel für die Alias-Frequenz?

#### 6.2 Digitale Filter

- Was ist eine Differenzengleichung und wie liest man sie?
- Was ist der Unterschied zwischen IIR- und FIR-Filter?
- Wie lautet eine allgemeine IIR-Differenzengleichung erster Ordnung?
- Was ist BIBO-Stabilität bei digitalen Filtern?
- Wann ist ein IIR-Filter erster Ordnung BIBO-stabil?
- Wie bestimmt man die Filterkoeffizienten a_1, b_0 aus einer Sprungantwort?
- Wie berechnet man den stationären Endwert eines digitalen Filters?
- Wie diskretisiert man ein PT1-Glied mit der Euler-Vorwärts-Methode?
- Wie berechnet man aus Filterkoeffizienten die kontinuierlichen Parameter T und K?
- Warum sind FIR-Filter immer BIBO-stabil?
- Was ist der gleitende Mittelwert und welchem Filtertyp entspricht er?
- Was ist ein Tiefpassfilter und welche Frequenzen werden gedämpft?

#### 6.3 Das Abtasttheorem von Shannon

- Wie lautet das Shannon-Nyquist-Abtasttheorem?
- Was ist die Nyquist-Frequenz f_N = f_{abt}/2?
- Was passiert wenn f_{sig} > f_N (Aliasing)?
- Wie berechnet man die Alias-Frequenz f_{alias} = |f_{sig} - f_{abt}|?
- Was ist ein Anti-Aliasing-Filter und wozu dient er?
- Welche Anforderung stellt man an die Grenzfrequenz des Anti-Aliasing-Filters?
- Wie erkennt man ein PT1-Tiefpassfilter in einer OPV-Schaltung?
- Wie berechnet man Grenzfrequenz, Verstärkung und Zeitkonstante aus einer RC-Schaltung?
- Wie wählt man die Abtastfrequenz in der Praxis (Faustregel: 5–10× höchste Signalfrequenz)?

---

### Lernzettel 7: Beschreibung dynamischer Systeme im Zustandsraum

#### 7.1 Beispiele und Vergleich der Methoden

- Was ist der Vorteil der Zustandsraummethode gegenüber Übertragungsfunktionen?
- Für welche Systeme kann man Übertragungsfunktionen verwenden, für welche nicht?
- Welche Systeme erfordern zwingend den Zustandsraum?
- Was ist ein Zustand in einem dynamischen System?
- Wie viele Zustandsgrößen braucht ein mechanisches System mit n Energiespeichern?

#### 7.2 Allgemeine Form der Zustandsgleichungen

- Wie lautet die allgemeine Zustandsraumdarstellung ẋ = Ax + bu, y = c^T x?
- Was bedeuten die Matrizen A, b, c^T physikalisch?
- Wie wählt man die Zustandsgrößen für ein mechanisches System (Masse, Feder, Dämpfer)?
- Wie wählt man die Zustandsgrößen für ein elektrisches System (R, L, C)?
- Wie leitet man aus der DGL die Zustandsraumdarstellung her (Schritt für Schritt)?
- Was ist der Durchgangsterm d und wann ist er null?
- Wie überprüft man ob die Zustandsraumdarstellung korrekt ist?
- Wie lautet die Zustandsraumdarstellung für ein System 1. Ordnung? Für 2. Ordnung?

#### 7.3 Die Diagonalform (Modalform)

- Was ist die Modalform und warum ist sie nützlich?
- Wie berechnet man die Eigenwerte einer Matrix A?
- Wie berechnet man den Eigenvektor zu einem Eigenwert?
- Was ist die Modalmatrix V und wie wird sie aufgebaut?
- Wie transformiert man das System in die Diagonalform: η̇ = Λη + b̃u?
- Was bedeutet es dass die Diagonalform entkoppelt ist?
- Wie berechnet man V^{-1} für eine 2×2-Matrix?
- Wie berechnet man b̃ = V^{-1}b und c̃^T = c^TV?
- Was sind die transformierten Parameter in der Modalform?

#### 7.4 Stabilität im Zustandsraum

- Welche Stabilitätsbedingung gilt im Zustandsraum (Eigenwerte)?
- Was bedeutet asymptotische Stabilität in Bezug auf die Eigenwerte von A?
- Welche Eigenwerttypen gibt es und welches Zeitverhalten erzeugen sie?
- Reell negativ: welche Sprungantwort?
- Komplex mit negativem Realteil: welche Sprungantwort?
- Rein imaginär: welche Sprungantwort?
- Reell positiv: welche Sprungantwort?
- Wie hängt die Eigenfrequenz ω_0 und Dämpfung D mit den Eigenwerten zusammen?
- Was ist Grenzstabilität im Zustandsraum?

#### 7.5 Zusammenhang Übertragungsfunktion und Zustandsdarstellung

- Wie berechnet man die Übertragungsfunktion aus der Zustandsraumdarstellung?
- Warum ist G(s) = c^T(sI-A)^{-1}b äquivalent zur Übertragungsfunktion?
- Was sind die Pole der Übertragungsfunktion in Bezug auf die Eigenwerte von A?
- Wann haben Eigenwerte und Pole unterschiedliche Werte (Pol-Nullstellen-Kürzung)?
- Was bedeutet es wenn ein Eigenwert in der ÜF nicht erscheint (unbeobachtbar/unsteuerbar)?

---

### Lernzettel 8: Regelung im Zustandsraum

#### 8.1 Allgemeine Struktur einer Zustandsregelung

- Was ist ein Zustandsregler und wie ist er aufgebaut?
- Wie lautet das Regelgesetz u = -r^Tx + fw?
- Was ist der Rückführvektor r^T und was der Vorfilter f?
- Wie verändert der Zustandsregler die Systemmatrix (A_R = A - br^T)?
- Was ist der Unterschied zwischen Ausgangsrückführung und Zustandsrückführung?
- Warum muss man alle Zustandsgrößen kennen (messen oder beobachten)?
- Wie ist ein Blockschaltbild einer Zustandsregelung aufgebaut?

#### 8.2 Reglerentwurf durch Eigenwertvorgabe

- Was bedeutet Eigenwertvorgabe (Polplatzierung)?
- Wie wählt man die Wunscheigenwerte λ* (aus D und ω_0)?
- Wie lautet das Wunschpolynom und wie stellt man es auf?
- Wie berechnet man A_R = A - br^T in Abhängigkeit von r_1, r_2?
- Wie berechnet man det(sI - A_R) explizit?
- Wie führt man den Koeffizientenvergleich durch um r_1, r_2 zu bestimmen?
- Was ist die Voraussetzung für beliebige Polplatzierung (vollständige Steuerbarkeit)?
- Warum ist ein Vorfilter f nach dem Reglerentwurf nötig?
- Wie berechnet man den Vorfilter f = -[c^T A_R^{-1} b]^{-1}?
- Was würde ohne Vorfilter mit dem stationären Endwert passieren?
- Wie berechnet man A_R^{-1} für eine 2×2-Matrix?
- Wie überprüft man ob der Vorfilter korrekt berechnet wurde (F_W(0) = 1)?
- Was passiert mit den Eigenwerten wenn man r^T falsch berechnet?

---

## Wie müssen diese Fragestellungen beantwortet werden

Alles was man in `knowledge/` findet darf man benutzen um diese Fragen zu beantworten mit:

- **Mathematischen Formeln und Abbildungen:** Erst allgemeine Formeln, dann mithilfe von Beispielen erklären wie man diese verwendet
- **Abbildungen:** Sämtliche Diagramme, Verläufe und sonstiges Ähnliches
- **Klausurbeispiele:** Müssen enthalten sein, sorgfältig mithilfe der Lösungen dargestellt
- **Tutorialsbeispiele:** Mit Lösungen müssen enthalten sein

---

## Wie muss das Dashboard mit den Lernzetteln verknüpft sein?

Insgesamt 5 Aufgaben in der Klausur, die alle voneinander abgegrenzt werden sollen. Alle Teilaufgaben müssen im Dashboard mithilfe der Inhalte im Lernzettel erklärt werden.

### Aufgabe 1 – Linearer Regelkreis (30 Punkte)

Thema: Analyse und Stabilitätsuntersuchung eines geschlossenen Regelkreises.

**Was immer vorkommt:**

#### a) Blockschaltbild → Übertragungsfunktionen bestimmen
- Schleifenübertragungsfunktion des offenen Regelkreises ablesen: F_o(s) = G_R(s) · G_S(s)
- Führungsübertragungsfunktion herleiten: F_W(s) = G_R G_S / (1 + G_R G_S)
- Störübertragungsfunktion herleiten: F_Z(s) = G_{S2} / (1 + G_R G_{S1} G_{S2})
- Auch Nicht-Standard-Strukturen (Messglied im Rückführzweig, innere Schleifen, Vorsteuerung)

#### b) Stabilität des offenen Regelkreises prüfen
- Polstellen von F_o(s) berechnen – liegen alle in der linken Halbebene?

#### c) Hurwitz-Kriterium
- Charakteristisches Polynom aus 1 + F_o(s) = 0 aufstellen
- Hurwitz-Bedingungen für n = 2: alle Koeffizienten positiv
- Hurwitz-Bedingungen für n = 3: alle Koeffizienten positiv + a_1 a_2 > a_0 a_3
- Wertebereich für K_R bestimmen (Ungleichungen lösen)

#### d) Bode-Diagramm
- Asymptotischen Betragsverlauf einzeichnen (Knickfrequenzen, Steigungen)
- Anfangssteigung bestimmen (Anzahl I-Anteile × −20 dB/Dek.)
- Phasenreserve φ_r = 180° + ∠F_o(jω_D) ablesen
- Amplitudenreserve A_r = -|F_o(jω_k)|_dB ablesen

**Was als Variante vorkommt:**

#### e) Totzeitglied
- Betrag bleibt gleich, Phase sinkt um ω · T_t · 180°/π
- Destabilisierende Wirkung auf Phasenreserve erklären
- Hurwitz nicht anwendbar → Nyquist-Kriterium nötig

#### f) Stationärer Fehler (Endwertsatz)
- e_∞ = lim_{s→0} s · (W_0/s) / (1 + F_o(s)) = W_0 / (1 + K_o)
- Bedingung für e_∞ = 0: I-Anteil in F_o(s) nötig

#### g) Regler aus Bode-Diagramm ablesen
- PI-Regler erkennen: Anfangssteigung −20 dB/Dek., Knick bei ω = 1/T_R
- PD-Regler erkennen: Steigung +20 dB/Dek. bis zur Knickfrequenz
- K_R ablesen: Betrag bei ω = 1 (in lin. Skala umrechnen)

#### h) PD-Regler qualitativ
- Vor-/Nachteile nennen
- Skizze des Bode-Diagramms

---

### Aufgabe 2 – Systemanalyse (20 Punkte)

Thema: Drei weitgehend unabhängige Teilaufgaben aus verschiedenen Bereichen.

**Was immer vorkommt:**

#### a) Ortskurven – K und n bestimmen
- Startpunkt bei ω → 0: F_o(0) = K ablesen (reeller Wert auf der positiven reellen Achse)
- Endpunkt bei ω → ∞: Winkel = -n · 90° ablesen → Polüberschuss n bestimmen
- Drehrichtung: immer im Uhrzeigersinn (bei stabilen Systemen mit positivem K)
- Schnittpunkt mit negativer reeller Achse: Stabilitätsaussage (vor oder hinter -1?)
- Typische Formen: PT1 → Halbkreis, PT2 → Schlaufe, IPT1 → kommt aus -j∞

#### b) F_W(s) rückwärts → Strecke oder Regler herausrechnen
- Umformung: G_S = F_W / (G_R(1 - F_W)) bzw. G_R = F_W / (G_S(1 - F_W))
- Polstellen der ermittelten Strecke bestimmen → stabil?
- Übertragungsfunktion vereinfachen (kürzen)

#### c) Bode-Diagramm → F_o(s) rekonstruieren
- Anfangssteigung ablesen → Anzahl I-Anteile
- Anfangsverstärkung K ablesen (Schnitt mit ω = 1 oder aus Niveau)
- Knickfrequenzen ablesen → Zeitkonstanten T_k = 1/ω_k
- Steigungsänderungen: −20 dB/Dek. → PT1, −40 dB/Dek. → PT2
- F_o(s) aufschreiben
- PT2-Korrektur: bei D < 1/√2 erscheint Überhöhung → D aus Überhöhung bestimmen

**Was als Variante vorkommt:**

#### d) Hurwitz mit zwei Parametern
- Charakteristisches Polynom mit zwei Unbekannten (z.B. K_R und K_D)
- Hurwitz-Bedingungen als Ungleichungen aufstellen
- Stabilitätsbereich im Parameterraum beschreiben

#### e) Allgemeines Nyquist-Kriterium
- Offener Regelkreis hat Pole in der rechten Halbebene (r_o > 0)
- Ortskurve muss (-1, 0) genau r_o-mal gegen den Uhrzeigersinn umschlingen
- Umschlingungszahl zählen → Stabilitätsaussage

#### f) Stationäre Abweichung + Endwertsatz
- Endwert des Ausgangssignals berechnen
- Prüfen ob gewünschter Endwert erreichbar ist (I-Anteil vorhanden?)

---

### Aufgabe 3 – Kaskadenregelung (33 Punkte)

Thema: Vollständiger Entwurf einer Kaskadenregelung für ein physikalisches System.

**Was immer vorkommt:**

#### a) Physikalisches System → Blockschaltbild
- System wird beschrieben (Hydraulikzylinder oder Gleichstrommotor)
- Blockschaltbild der Kaskadenstruktur ergänzen/zeichnen
- Alle Signale benennen: W, W_i, E_a, E_i, U, Y_i, Y, Z

#### b) Kompensationsglied G_K(s) herleiten
- Formel: G_K(s) = -G_Z(s) / G_{S1}(s) (für Störgrößenaufschaltung)
- Oder: G_K(s) zur Polkompensation bestimmen
- Realisierbarkeit prüfen: Grad(Zähler) ≤ Grad(Nenner)?
  - Ja → realisierbar ✓
  - Nein → nicht realisierbar → Näherung (stationär oder DT1)

#### c) Innenkreis: P-Regler auslegen (n-fach schneller)
- Geschlossener Innenkreis soll n-mal schneller sein: T_W = T_0 / n
- Reglerverstärkung: K_{R,i} = (n-1)/K_{S1} ≈ n/K_{S1}
- Herleitung: F_{W,i}(s) mit PT1-Näherung des geschlossenen Innenkreises

#### d) Außenkreis: PI-Regler nach Kessler (Betragsoptimum)
- T_R = T_1 (größte Zeitkonstante der Gesamtstrecke → Polkompensation)
- K_R = T_1 / (2 · K_S · T_Σ) für D = 1/√2
- T_Σ = Summe aller kleinen Zeitkonstanten (T_W + Parasitäre)
- K_S = stationäre Streckenverstärkung (bei I-Anteil: Integrierbeiwert)
- PI-Regler aufschreiben: G_{R,a}(s) = K_R · (1 + T_R s) / (T_R s)

**Was als Variante vorkommt:**

#### e) Störgrößenaufschaltung F_{SD}
- Ideale Kompensation: G_{K,SD}(s) = -G_Z(s) / G_{S1}(s)
- Realisierbarkeit prüfen
- Falls nicht realisierbar → stationäre Kompensation: G_{K,SD}(0) = -G_Z(0) / G_{S1}(0)

#### f) Qualitative Verlaufszuordnung
- Drei Kurven gegeben (ideal, stationär, keine Kompensation) → zuordnen
- Ideal: y(t) = 0 sofort
- Stationär: Ausschlag, dann Rückkehr zu 0
- Keine: größter Ausschlag, langsame Rückkehr

---

### Aufgabe 4 – Zustandsraum (35 Punkte)

Thema: Modellierung und Reglerentwurf im Zustandsraum.

**Was immer vorkommt:**

#### a) Anzahl Zustandsgrößen bestimmen
- Mechanik: Anzahl Energiespeicher (Masse → Geschwindigkeit, Feder → Auslenkung)
- Elektrik: Anzahl Energiespeicher (Kondensator → Spannung, Spule → Strom)

#### b) DGL herleiten
- Mechanik: Freischnitt zeichnen → Newton-Gesetz ΣF = mẍ
- Elektrik: Kirchhoff-Maschen- oder Knotenregel anwenden
- Ergebnis: DGL n-ter Ordnung

#### c) Zustandsraumdarstellung A, b, c^T aufstellen
- Zustandsgrößen wählen (typisch: z_1 = x, z_2 = ẋ für 2. Ordnung)
- Gleichungssystem in Matrixform bringen

#### d) Eigenwerte berechnen → Stabilität und Schwingfähigkeit
- det(λI - A) = 0 lösen
- Für 2×2: λ² - tr(A)λ + det(A) = 0
- Aussage: Re(λ_i) < 0 → stabil; Im(λ_i) ≠ 0 → schwingfähig

#### e) Zustandsregler durch Eigenwertvorgabe
- Wunscheigenwerte λ* gegeben
- Wunschpolynom aufstellen: (s - λ_1*)(s - λ_2*) = s² + p_1 s + p_0
- A_R = A - br^T aufschreiben (mit r_1, r_2 als Unbekannte)
- det(sI - A_R) berechnen
- Koeffizientenvergleich → r_1, r_2 bestimmen
- Ergebnis: r^T = (r_1, r_2)

**Was als Variante vorkommt:**

#### f) Modalform (Diagonalform)
- Eigenvektoren zu jedem λ_i berechnen: (A - λ_i I)v_i = 0
- Modalmatrix aufstellen: V = [v_1 | v_2]
- Inverse berechnen und Diagonalform Λ = V^{-1}AV bestimmen
- Transformierte Parameter: b̃ = V^{-1}b, c̃^T = c^T V

#### g) Vorfilter f berechnen
- Ziel: stationäre Verstärkung F_W(0) = 1
- Formel: f = -[c^T A_R^{-1} b]^{-1}
- A_R^{-1} berechnen → c^T A_R^{-1} b ausrechnen → f bestimmen

---

### Aufgabe 5 – Digitale Signalverarbeitung (20–28 Punkte)

Thema: Grundlagen der digitalen Signalverarbeitung.

**Was immer vorkommt:**

#### a) Signalklassifizierung
- 3–4 Signale gegeben → einordnen in:
  - Analog (wertkontinuierlich + zeitkontinuierlich)
  - Abgetastet (wertkontinuierlich + zeitdiskret)
  - Quantisiert (wertdiskret + zeitkontinuierlich)
  - Digital (wertdiskret + zeitdiskret)

#### b) Abtastfrequenz aus Signalverlauf ablesen
- Abstand zwischen Abtastpunkten T_{abt} ablesen
- f_{abt} = 1/T_{abt} berechnen

#### c) Shannon-Theorem / Aliasing
- Nyquist-Frequenz bestimmen: f_N = f_{abt}/2
- Prüfen welche Signalfrequenzen Aliasing verursachen: f_{sig} > f_N
- Alias-Frequenz berechnen: f_{alias} = |f_{sig} - f_{abt}|

#### d) Quantisierung
- Quantisierungsintervall: Δ = (x_max - x_min) / (2^n - 1)
- Maximaler Fehler: e_max = Δ / 2
- Benötigte Bits: n ≥ log_2(N_Stufen) → aufrunden

**Was als Variante vorkommt:**

#### e) Anti-Aliasing-Filter aus OPV-Schaltung
- Schaltung analysieren → Übertragungsglied identifizieren (meist PT1)
- Parameter ablesen: K = -R_2/R_1, T = R_2 C_2
- Grenzfrequenz: f_g = 1/(2π T)
- Eignung prüfen: f_g ≤ f_{abt}/2?

#### f) Digitale Filter-Koeffizienten bestimmen
- Differenzengleichung: y_k = a_1 y_{k-1} + b_0 u_k
- Aus Sprungantwort-Werten (y_0, y_1, y_2) → Gleichungssystem aufstellen → lösen
- BIBO-Stabilität prüfen: |a_1| < 1?
- Stationärer Endwert: y_∞ = b_0 / (1 - a_1)

#### g) Euler-Diskretisierung PT1 → Differenzengleichung
- PT1 kontinuierlich: T ẏ + y = Ku
- Euler-Vorwärts: ẏ ≈ (y_k - y_{k-1}) / Δt einsetzen
- Koeffizienten ablesen: a_1 = T/(T+Δt), b_0 = KΔt/(T+Δt)
- Rückwärts: aus Koeffizienten T und K bestimmen

---

## Wie müssen die Dashboardseiten aufgebaut sein

- Muss alles von jeder Aufgabe enthalten und gut erklären
- Es müssen für jede Aufgabe interaktive Diagramme gegeben sein, in denen man Regler, Werte und sonstiges auswählen kann und direkt Betrags-/Phasenverlauf skizziert bekommt
- Es müssen Vorgehensweisen skizziert sein wie man bestimmte Lösungen durch Diagramme bekommt

---

## QUALITÄTSSTANDARDS – NICHT VERHANDELBAR

Das Dashboard muss das Niveau eines **sehr guten Lehrbuches kombiniert mit einer interaktiven Lernplattform** erreichen. Jede einzelne Seite muss folgende Standards erfüllen:

### Standard 1: Mathematische Formeln

**Jede Formel muss:**
- Mit KaTeX korrekt gerendert werden ($$...$$ für Display, $...$ für Inline)
- Eine **Schritt-für-Schritt-Herleitung** haben (nicht einfach hinschreiben, sondern zeigen wie man dahin kommt)
- Alle Variablen und Parameter **einzeln erklärt** bekommen (was bedeutet jede Größe, welche Einheit)
- Mit einem **konkreten numerischen Beispiel** sofort angewendet werden (echte Zahlen einsetzen, ausrechnen)

**Beispiel wie es NICHT sein soll:**
> „Die Führungsübertragungsfunktion ist: F_W(s) = G_R G_S / (1 + G_R G_S)"

**Beispiel wie es sein MUSS:**
> Herleitung aus den Grundgleichungen des Regelkreises (E = W - Y, U = G_R·E, Y = G_S·U), Schritt für Schritt umformen, dann numerisches Beispiel mit G_R = 2, G_S = 1/(s+1) vollständig durchrechnen und Ergebnis interpretieren.

---

### Standard 2: Interaktive Diagramme (Pflicht pro Seite)

**Jede Aufgaben-Seite muss mindestens enthalten:**

#### a) Sprungantworten (Plotly.js)
- Sprungantwort des **offenen** und **geschlossenen** Regelkreises
- Vergleich verschiedener Regler (P, PI, PID) in **einem Plot** – farblich unterschieden
- Schieberegler für Parameter (K_R, T_R, T_D) → sofortige Aktualisierung
- Einzeichnung von: Überschwingen, Anregelzeit, stationärem Endwert, stationärem Fehler

#### b) Bode-Diagramm (Plotly.js, 2 Subplots: Betrag oben, Phase unten)
- **Asymptotische Näherung** UND **exakter Verlauf** im selben Plot (verschiedene Farben)
- Knickfrequenzen mit vertikalen gestrichelten Linien markiert und beschriftet
- 0-dB-Linie und -180°-Linie eingezeichnet
- Durchtrittsfrequenz ω_D und Phasenschnittfrequenz ω_k mit Markern
- Phasenreserve φ_r und Amplitudenreserve A_r als beschriftete Pfeile/Annotationen
- Mehrere Grundglieder **nebeneinander vergleichbar**: PT1, PT2 (verschiedene D), I, IPT1

#### c) Ortskurve / Nyquist-Diagramm (Plotly.js)
- Ortskurve F_o(jω) mit Frequenzmarkierungen (ω-Werte an der Kurve)
- Kritischer Punkt (-1, 0) als roter X-Marker
- Schieberegler für K → zeigt wie Ortskurve sich verschiebt und wann System instabil wird
- Stabilitätsgrenze visuell hervorgehoben

#### d) Pol-Nullstellen-Diagramm (Plotly.js)
- Pole als ×, Nullstellen als ○ in der komplexen Ebene
- Imaginäre Achse als Stabilitätsgrenze markiert
- Dynamisch: bei Änderung von K_R wandern die Pole (Root Locus Andeutung)

---

### Standard 3: SVG-Blockschaltbilder (Pflicht)

**Jede Seite muss SVG-Blockschaltbilder enthalten** – keine ASCII-Art, keine Textbeschreibungen. SVG direkt in HTML einbetten.

**Pflichtbilder:**
- Standard-Regelkreis mit W, E, U, Y, G_R, G_S, Rückführung beschriftet
- Nicht-Standard-Strukturen (Störung Z, Messglied G_M, Vorsteuerung)
- Kaskadenstruktur mit Inner- und Außenkreis
- Für jede Seite mindestens 1 spezifisches SVG-Schaltbild

**SVG-Qualitätsanforderungen:**
- Pfeile mit korrekten Pfeilspitzen (marker-end)
- Summationspunkt als Kreis mit + und − beschriftet
- Übertragungsglieder als beschriftete Rechtecke
- Responsive (viewBox statt feste Pixel)
- Sauber und professionell (wie in der Vorlesung)

---

### Standard 4: Vollständige Klausuraufgaben mit Lösung

**Jede Seite muss mindestens 2 vollständig durchgerechnete Klausuraufgaben enthalten:**

Format einer Musteraufgabe:
1. **Aufgabenstellung** (wie in echter Klausur, mit Zahlenwerten)
2. **Lösung Schritt 1:** Was wird gemacht? Warum? Formel anschreiben.
3. **Lösung Schritt 2:** Einsetzen der Zahlen, Zwischenergebnis
4. **Lösung Schritt 3:** Weiterrechnen, Endergebnis
5. **Ergebnis-Box** (grün hinterlegt): Endergebnis klar hervorgehoben
6. **Interpretation:** Was bedeutet das Ergebnis physikalisch?

Die Aufgaben sollen **direkt aus den echten Klausuraufgaben** im `knowledge/Klausuraufgaben/`-Ordner stammen oder diesen sehr nahe sein.

---

### Standard 5: Visualisierung von Systemverhalten

**Für jedes Übertragungsglied muss gezeigt werden:**
- Sprungantwort (Zeitbereich)
- Bode-Diagramm (Frequenzbereich)
- Ortskurve (Nyquist)
- Formel G(s) mit Parameterbedeutung

**Vergleichstabellen** für die Grundglieder (P, I, D, PT1, PT2, IT1, IPT1):
- Übertragungsfunktion
- Sprungantwort (Formel + Plot)
- Bode: Steigung, Phase, Knickfrequenz
- Typische Anwendung

---

### Standard 6: Konzeptuelle Erklärungen (Physikalisches Verständnis)

**Vor jeder Formel kommt die intuitive Erklärung:**
- Was passiert physikalisch?
- Warum braucht man das?
- Was ist die Kernaussage, die man sich merken muss?

**Merkkästen** (hervorgehoben, gelber Hintergrund) für die 3–5 wichtigsten Kernaussagen pro Thema.

---

### Standard 7: Technologie-Stack

```
Mathematik:    KaTeX (CDN) – alle Formeln mit $$ oder $
Diagramme:     Plotly.js (CDN) – interaktiv, responsiv
Schriftarten:  Google Fonts: Inter + JetBrains Mono
Icons:         Unicode-Symbole oder einfache SVG
Styling:       Reines CSS (keine Frameworks), CSS Custom Properties
SVG:           Inline im HTML, viewBox, professionelle Darstellung
```

---

## DESIGN-STANDARDS

### Farben (verpflichtend)

```
Aufgabe 1: #4f46e5 (Indigo)     – Linearer Regelkreis
Aufgabe 2: #7c3aed (Violett)    – Systemanalyse
Aufgabe 3: #dc2626 (Rot)        – Kaskadenregelung
Aufgabe 4: #059669 (Grün)       – Zustandsraum
Aufgabe 5: #d97706 (Amber)      – Digitale SV
Fragen:    #0284c7 (Blau)       – Fragen-Modus
```

### Layout
- Fixierte Navbar (dark, #0f172a)
- Farbige Hero-Section pro Seite (dunkler Gradient in Seitenfarbe)
- Sticky Tab-Navigation unterhalb der Hero-Section
- Maximale Inhaltsbreite: 1100px, zentriert
- Weiße Content-Cards auf hellgrauem Hintergrund (#f0f4f8)

### Interaktive Elemente
- Alle Schieberegler mit sofortiger Reaktion (kein Submit-Button nötig)
- Plotly-Diagramme: responsive (100% Breite), professionelles Theme
- Hover-Effekte auf Cards
- Loading-States wenn nötig

---

## Seite: Fragen-Modus (`fragen.html`)

**Pflicht-Inhalte:**
- **Alle** Fragen aus `knowledge/Fragen aus Tut/` und `knowledge/Klausuraufgaben/Fragen/` übernehmen
- Mindestens 80 Fragen total (aus PDFs + neue klausurrelevante)
- Aufklappbar: Frage → Antwort (Richtig/Falsch) + ausführliche Erklärung (3–5 Sätze)
- Bei komplexen Fragen: Mini-Formel oder Mini-SVG in der Erklärung
- Filter nach: Thema (alle 8 Kapitel), Schwierigkeitsgrad, Richtig/Falsch
- Zufallsmodus-Button: zeigt zufällige Frage
- Fortschrittsanzeige: wie viele Fragen aufgedeckt

---

## VORLESUNGSÜBERSICHT

1. Einführung – Begriff der Regelung, Beispiele (Dampfmaschine, Segway, Kfz, Schüttgut)
2. Regelung und Steuerung – Antriebsregelung, Vorsteuerungen
3. Linearer Regelkreis – Struktur, Hurwitz, Nyquist (speziell + allgemein), Bode, Totzeit
4. Synthese – Stationäres Verhalten, Regler (P/I/PI/PD/PID), Kessler, Betragsoptimum
5. Kaskadenregelung & Störgrößenaufschaltung
6. Digitale Signalverarbeitung – Abtastung, Shannon, Quantisierung, Filter
7. Zustandsraum – DGL, Eigenwerte, Modalform, Stabilität
8. Regelung im Zustandsraum – Zustandsregler, Eigenwertvorgabe, Vorfilter

---

## Git-Workflow

- Alle Änderungen direkt auf `main` branch committen und pushen
- Keine Pull Requests nötig
- Nach jedem größeren Abschnitt committen (nicht alles auf einmal)
- Commit-Messages auf Deutsch
