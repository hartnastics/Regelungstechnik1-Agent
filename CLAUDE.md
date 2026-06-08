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

**Pflicht vor jeder Dashboard-Seite:** Alle zugehörigen Vorlesungs-PDFs, Klausuraufgaben und Tutorienlösungen lesen. Inhalte direkt aus den PDFs übernehmen und in eigenen Worten erklären.

---

## QUALITÄTSSTANDARDS – NICHT VERHANDELBAR

Das Dashboard muss das Niveau eines **sehr guten Lehrbuches kombiniert mit einer interaktiven Lernplattform** erreichen. Jede einzelne Seite muss folgende Standards erfüllen:

---

### Standard 1: Mathematische Formeln

**Jede Formel muss:**
- Mit KaTeX korrekt gerendert werden ($$...$$ für Display, $...$ für Inline)
- Eine **Schritt-für-Schritt-Herleitung** haben (nicht einfach hinschreiben, sondern zeigen wie man dahin kommt)
- Alle Variablen und Parameter **einzeln erklärt** bekommen (was bedeutet jede Größe, welche Einheit)
- Mit einem **konkreten numerischen Beispiel** sofort angewendet werden (echte Zahlen einsetzen, ausrechnen)

**Beispiel wie es NICHT sein soll:**
> „Die Führungsübertragungsfunktion ist: $F_W(s) = G_R G_S / (1 + G_R G_S)$"

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

## SEITENSPEZIFISCHE ANFORDERUNGEN

### Seite: Aufgabe 1 – Linearer Regelkreis (`aufgabe1.html`)

**Pflicht-Inhalte:**

#### Tab 1: Grundstruktur
- SVG: Standard-Regelkreis vollständig beschriftet
- SVG: Regelkreis mit Störgröße Z
- Herleitung F_W(s) und F_Z(s) Schritt für Schritt
- Bedeutung jedes Terms erklärt
- Numerisches Beispiel: G_R = K_R, G_S = K_S/(1+Ts) → F_W ausrechnen

#### Tab 2: Hurwitz-Kriterium
- Herleitung des charakteristischen Polynoms aus F_W
- Hurwitz-Matrix für n=2, n=3 mit Erklärung des Aufbauprinzips
- Vollständiges Beispiel: PT1PT1PT1-Strecke, P-Regler → K_R-Bereich berechnen (alle Schritte)
- Interaktiv: K_R-Schieberegler → Pole im Pol-Nullstellen-Diagramm wandern

#### Tab 3: Bode-Diagramm
- Erklärung der asymptotischen Näherung mit geometrischer Anschauung
- **Vergleichsplot (Plotly):** PT1 + PT2 + I-Glied + IPT1 im selben Bode-Diagramm (umschaltbar)
- Schieberegler für T und K → sofortige Aktualisierung des Bode-Diagramms
- Asymptotischer Verlauf als gestrichelte Linie, exakter Verlauf als durchgezogene Linie
- **Vollständige Aufgabe:** Aus gegebenem Bode-Diagramm F_o(s) ablesen (mit Anleitung)

#### Tab 4: Stabilitätsreserven
- SVG: Bode-Diagramm mit eingezeichneten Stabilitätsreserven (φ_r, A_r als Pfeile)
- SVG: Ortskurve mit Abstandsmaßen zum kritischen Punkt
- Interaktiv: Schieberegler K_R → φ_r und A_r werden live neu berechnet und angezeigt
- Vollständige Aufgabe: Stabilitätsreserven ablesen + bewerten

#### Tab 5: Totzeit
- Plot: Phasenverlauf mit und ohne Totzeit im Vergleich (gleicher Betrag, unterschiedliche Phase)
- Schieberegler T_t → zeigt wie Phasenreserve sinkt bis System instabil wird
- Kritischer T_t-Wert wird automatisch berechnet und angezeigt

#### Tab 6: Regler-Entwurf
- SVG: PI-Regler Struktur
- Bode-Diagramm des PI-Reglers (zeigt Knickfrequenz 1/T_R)
- Sprungantwort-Vergleich: P vs PI vs PID auf gleicher Strecke, alle Parameter einstellbar
- Endwertsatz visuell erklärt

---

### Seite: Aufgabe 2 – Systemanalyse (`aufgabe2.html`)

**Pflicht-Inhalte:**

#### Tab 1: Ortskurven verstehen
- **Interaktiver Ortskurven-Plot (Plotly):** Systemtyp wählbar (PT1, PT2, PT1PT1, IPT1, IPT1PT1)
- Für jede Kurve: Startpunkt (ω→0), Endpunkt (ω→∞), Drehrichtung erklärt
- Aus Ortskurve K und n ablesen: animierte Erklärung mit Markierungen
- Vollständige Aufgabe: Gegebene Ortskurve → K und n bestimmen (Schritt für Schritt)

#### Tab 2: Nyquist-Kriterium
- SVG: Schematische Darstellung des kritischen Punktes und Einschließen
- Interaktiv: K_R erhöhen → Ortskurve verschiebt sich → visuell sehen wann (-1,0) eingeschlossen wird
- Allgemeines Nyquist: Beispiel mit instabilem offenem Kreis

#### Tab 3: Bode → F_o(s) rekonstruieren
- Schritt-für-Schritt-Anleitung mit konkretem Plot
- Vollständige Aufgabe: Bode gegeben → F_o ablesen (PT1-Knick, I-Glied, Verstärkung)
- PT2-Korrektur bei D < 1/√2 erklärt mit Beispiel-Plot

#### Tab 4: F_W rückwärts
- Algebraische Umformung vollständig gezeigt
- Stabilitätsprüfung der ermittelten Strecke

---

### Seite: Aufgabe 3 – Kaskadenregelung (`aufgabe3.html`)

**Pflicht-Inhalte:**

#### Tab 1: Grundidee
- SVG: Kaskadenstruktur mit Inner- und Außenkreis, Störung, alle Signale beschriftet
- SVG: Vergleich Einzelregelung vs. Kaskadenregelung (Störverhalten)
- Sprungantwort-Vergleich (Plotly): Mit und ohne Kaskade → Störverhalten visuell

#### Tab 2: Systemmodelle
- SVG: Gleichstrommotor-Blockschaltbild vollständig (elektrischer + mechanischer Teil)
- SVG: Hydraulikzylinder-Blockschaltbild
- Alle Übertragungsfunktionen mit Herleitung aus physikalischen Gleichungen
- Zahlenwerte für typische Parameter

#### Tab 3: Innenkreis (P-Regler)
- Herleitung T_W = T_0/n vollständig mit Algebra
- Interaktiv: n-Schieberegler → zeigt wie sich Sprungantwort des Innenkreises ändert
- Vollständige Aufgabe: P-Regler-Auslegung mit echten Zahlenwerten

#### Tab 4: Kessler / Betragsoptimum
- Herleitung der Kessler-Formel aus dem Betragsoptimum (Warum funktioniert das?)
- K_R = T_1 / (2·K_S·T_Σ) vollständig erklärt (jede Variable, Einheit, Bedeutung)
- T_R = T_1 erklärt über Polkompensation (SVG: Pol-Nullstellen-Diagramm zeigt Kürzung)
- Interaktiv: Parameter eingeben → K_R und T_R werden berechnet → Sprungantwort mit D=1/√2 gezeigt
- Vergleich D=1 vs D=1/√2: Sprungantworten nebeneinander mit Überschwingen markiert
- Vollständige Aufgabe: Kompletter Kessler-Entwurf mit Zahlenwerten

#### Tab 5: Störgrößenaufschaltung
- SVG: Blockschaltbild der Aufschaltung
- Herleitung G_K,SD = -G_Z/G_S1 (warum genau diese Formel?)
- Sprungantwort-Vergleich (Plotly): Ideal / Stationär / Keine Kompensation – alle drei Kurven im selben Plot
- Vollständige Aufgabe: G_K berechnen + Realisierbarkeit prüfen

---

### Seite: Aufgabe 4 – Zustandsraum (`aufgabe4.html`)

**Pflicht-Inhalte:**

#### Tab 1: Modellierung
- SVG: Masse-Feder-Dämpfer mit Freischnitt und eingetragenen Kräften
- SVG: RLC-Schaltkreis mit Kirchhoff-Beschriftung
- Vollständige Herleitung: Newton-Gesetz → DGL → Zustandsraumform (jeder Schritt erklärt)
- Vollständige Herleitung: Kirchhoff → DGL → Zustandsraumform

#### Tab 2: Eigenwerte und Stabilität
- Geometrische Erklärung: s-Ebene mit linker/rechter Halbebene, Stabilitätsregionen
- Interaktiver Pol-Nullstellen-Plot (Plotly): Eigenwerte verschieben → Sprungantwort ändert sich live
- Zu jedem Eigenwerttyp die zugehörige Sprungantwort zeigen:
  - Reell negativ → aperiodisch stabil
  - Komplex negativ → gedämpfte Schwingung
  - Reell positiv → aufklingend instabil
  - Rein imaginär → ungedämpfte Schwingung
- Vollständiges Beispiel: 2×2-Matrix → Eigenwerte → Stabilitätsurteil

#### Tab 3: Modalform
- Eigenvektoren geometrisch erklärt (Richtung, in die Matrix streckt/staucht)
- Vollständige Rechnung: A → Eigenwerte → Eigenvektoren → V → V⁻¹ → Λ (alle Schritte)
- Bedeutung der Diagonalform: entkoppelte Gleichungen visualisiert

#### Tab 4: Zustandsregler
- SVG: Blockschaltbild Zustandsregelung (Zustandsvektor zurückgeführt)
- Koeffizientenvergleich vollständig gezeigt: Wunschpolynom aufstellen → vergleichen → r lösen
- Interaktiv: Wunsch-Eigenwerte in s-Ebene verschieben → r^T wird berechnet → Sprungantwort live
- Vollständige Aufgabe mit Zahlenwerten (n=2)

#### Tab 5: Vorfilter
- Warum ist Vorfilter nötig? Ohne vs. mit Vorfilter – Sprungantwort Vergleich
- f = -[c^T · A_R^{-1} · b]^{-1} vollständig hergeleitet
- Vollständige Rechnung: A_R^{-1} berechnen → f bestimmen (alle Schritte mit Zahlen)

---

### Seite: Aufgabe 5 – Digitale Signalverarbeitung (`aufgabe5.html`)

**Pflicht-Inhalte:**

#### Tab 1: Signalklassen
- Vier Grafiken (SVG oder Canvas): Analog, Abgetastet, Quantisiert, Digital – visuell nebeneinander
- Jede Klasse: Darstellung, Definition, typische Anwendung

#### Tab 2: Abtastung & Shannon
- Interaktiver Aliasing-Simulator (Plotly):
  - Original-Sinussignal + Abtastpunkte + rekonstruiertes Signal
  - Schieberegler für f_sig und f_abt
  - Wenn Aliasing: rekonstruierte Frequenz berechnet und angezeigt
  - Farblicher Wechsel: grün = kein Aliasing, rot = Aliasing
- Spektrum-Visualisierung (Plotly): Zeigt Frequenzanteile vor und nach Abtastung

#### Tab 3: Quantisierung
- Visualisierung (Plotly): Analoges Signal + quantisiertes Signal + Quantisierungsfehler nebeneinander
- Interaktiv: n-Bits-Schieberegler → Stufenzahl, Δ und e_max live berechnet
- Vollständige Aufgabe: Quantisierungsrechnung mit Zahlen

#### Tab 4: Digitale Filter
- Interaktiver Filter-Simulator (Plotly):
  - IIR-Filter: a_1-Schieberegler → Sprungantwort und Pol im Einheitskreis live
  - Bei |a_1| > 1: roter Hinweis "BIBO-instabil", Pol außerhalb Einheitskreis
- Tabelle: FIR vs IIR Vergleich (Vor-/Nachteile)
- Vollständige Aufgabe: Koeffizienten aus Sprungantwort bestimmen (Gleichungssystem lösen)
- Euler-Diskretisierung: PT1 → Differenzengleichung vollständig hergeleitet

#### Tab 5: Anti-Aliasing-Filter
- SVG: RC-Tiefpass-Schaltung + invertierender OPV-Tiefpass
- Bode-Diagramm des PT1-Filters mit markierter Grenzfrequenz
- Vollständige Aufgabe: Aus Bode-Diagramm T und K ablesen, f_g berechnen

---

### Seite: Fragen-Modus (`fragen.html`)

**Pflicht-Inhalte:**
- **Alle** Fragen aus `knowledge/Fragen aus Tut/` und `knowledge/Klausuraufgaben/Fragen/` übernehmen
- Mindestens 80 Fragen total (aus PDFs + neue klausurrelevante)
- Aufklappbar: Frage → Antwort (Richtig/Falsch) + ausführliche Erklärung (3–5 Sätze)
- Bei komplexen Fragen: Mini-Formel oder Mini-SVG in der Erklärung
- Filter nach: Thema (alle 8 Kapitel), Schwierigkeitsgrad, Richtig/Falsch
- Zufallsmodus-Button: zeigt zufällige Frage
- Fortschrittsanzeige: wie viele Fragen aufgedeckt

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

## AUFGABENTYPEN IN DER KLAUSUR

### Aufgabe 1 — Linearer Regelkreis (30 Punkte)
- Blockschaltbild → F_o(s) bestimmen (auch Nicht-Standard-Strukturen)
- Stabilität prüfen (Polstellen des offenen Kreises)
- F_W(s) und F_Z(s) herleiten
- Hurwitz-Kriterium → Wertebereich K_R
- Bode-Diagramm: asymptotischer Betragsverlauf, φ_r und A_r ablesen
- Varianten: Totzeit, Endwertsatz, Regler aus Bode ablesen, PD-Regler skizzieren

### Aufgabe 2 — Systemanalyse (20 Punkte)
- Ortskurven: K und n aus Verlauf bestimmen
- F_W rückwärts → G_S oder G_R herausrechnen
- Bode → F_o(s) rekonstruieren (PT1, PT2, I-Glieder erkennen)
- Varianten: Hurwitz mit 2 Parametern, allgemeines Nyquist, Endwertsatz

### Aufgabe 3 — Kaskadenregelung (33 Punkte)
- Physikalisches System → Blockschaltbild ergänzen
- Kompensationsglied G_K(s) herleiten, Realisierbarkeit prüfen
- P-Regler Innenkreis: n-fach schneller (T_W = T_0/n)
- PI-Regler Außenkreis nach Kessler (D=1/√2): T_R = T_1, K_R = T_1/(2·K_S·T_Σ)
- Varianten: Störgrößenaufschaltung, qualitative Verlaufszuordnung

### Aufgabe 4 — Zustandsraum (35 Punkte)
- Anzahl Zustandsgrößen (= Energiespeicher)
- DGL herleiten (Freischnitt / Kirchhoff)
- A, b, c^T aufstellen
- Eigenwerte → Stabilität und Schwingfähigkeit
- Zustandsregler durch Eigenwertvorgabe (Wunschpolynom → r^T)
- Varianten: Modalform (V, V⁻¹, Λ), Vorfilter f

### Aufgabe 5 — Digitale Signalverarbeitung (20–28 Punkte)
- Signalklassifizierung (4 Typen)
- Shannon: Aliasing-Grenzfrequenz bestimmen
- Quantisierung: Δ, e_max, Bit-Anzahl
- Varianten: Anti-Aliasing-Filter aus OPV-Schaltung, digitale Filter-Koeffizienten, BIBO-Stabilität

### Aufgabe Fragen — Richtig/Falsch (8–10 Aussagen)
Themen: Steuerung vs. Regelung, Totzeit, Hurwitz, Nyquist, ÜF-Gültigkeit, Zustandsraum, Stabilität

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
