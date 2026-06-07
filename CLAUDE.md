# Vorgaben zum Lernen von Regelungstechnik 1

## Kontext und Ziel

Dieser Agent unterstützt Studierende der Regelungstechnik 1 (Universität Paderborn, Prof. Dr.-Ing. Ansgar Trächtler) bei der Prüfungsvorbereitung. Das Ziel ist es, alle relevanten Themen der Vorlesung verständlich aufzubereiten, Klausuraufgaben zu erklären und zu üben.

**Sprache:** Alle Antworten und Erklärungen immer auf Deutsch.

**Dashboard:** Mit "Dashboard" ist eine Lernwebsite gemeint, die später von Claude erstellt werden soll. Sie soll interaktive Abbildungen, Erklärungen, Formeln, Übungsaufgaben und den Fragen-Modus enthalten. Alle Inhalte die hier aufgebaut werden, sollen letztlich auf dieser Website dargestellt werden.

---

## Knowledge-Ordner Struktur

Alle Lerninhalte befinden sich im Ordner `knowledge/`. PDFs werden mit PyPDF2 gelesen (`from PyPDF2 import PdfReader`).

```
knowledge/
├── Vorlesungen/          → Vorlesungsfolien, gegliedert nach Kapiteln (Kap 1–8)
├── Klausuraufgaben/      → Echte Klausuraufgaben sortiert nach Aufgabentyp (Aufgabe1–5, Fragen)
├── Tutorien/             → Tutorialaufgaben mit Lösungen
├── Übungen/              → Übungsblätter ohne Lösungen
└── Fragen aus Tut/       → Richtig/Falsch-Fragen aus den Tutorien
```

**Hinweis:** `knowledge/Vorlesungen/Kapitel1_Einführung/Kap1_Regelungstechnik.pdf` ist aktuell beschädigt (leere Datei). Inhalt aus vorherigem Session-Kontext verwenden bis die Datei neu hochgeladen wird.

---

## Regeln zur Verwendung der Inhalte

**Regel 1:** Zur Informationsgewinnung kann alles benutzt werden was im Ordner `knowledge/` zu finden ist.

**Regel 2:** An den Aufgaben im Ordner `Klausuraufgaben` zuerst orientieren – die Übersicht der Aufgabentypen unten ist die Hauptreferenz dafür, was klausurrelevant ist.

**Regel 3:** Selbstständig aus den Ordnern Tutorien, Übungen, Vorlesungen und Klausuraufgaben raussuchen, was zu den jeweiligen Aufgabentypen passt. Die Klausuraufgaben sollen auch genutzt werden, um interaktive Abbildungen für das Dashboard zu bauen.
- **Tutorien:** Mehrere Aufgaben pro Datei, nach Thema benannt, Lösungen vorhanden → als Orientierung nutzen
- **Übungen:** Ohne Lösungen → für Beispielaufgaben, Abbildungen und Realitätsbezüge im Dashboard
- **Vorlesungen:** Grundbaustein von allem – zu jedem Thema die zugehörigen Vorlesungsfolien lesen und als Basis für Erklärungen nutzen

**Regel 4:** Alle Vorlesungsthemen sollen im Dashboard mit sinnvollen Beschreibungen, Abbildungen und interaktiven Elementen aufbereitet werden. Interaktive Abbildungen sollen es ermöglichen, selbst Werte, Regler und Strukturbilder zusammenzustellen und daraus resultierende Ortskurven, Betrags- und Phasendiagramme zu sehen – zur Förderung des Verständnisses.

**Regel 5:** Mathematische Formeln aus der Vorlesung sollen erklärt und mit konkreten Beispielen vertieft werden.

---

## Übersicht der Aufgabentypen in der Klausur

Zu jeder Aufgabe sollen die Lerninhalte im Dashboard erstellt werden.

### Aufgabe 1 — Linearer Regelkreis (30 Punkte)
Thema: Analyse und Stabilität des Regelkreises

Was immer vorkommt:
- Blockschaltbild gegeben (evtl. Nicht-Standard-Struktur) → F_o(s) bestimmen
- Stabilität des offenen Regelkreises prüfen (Polstellen)
- F_W(s) und F_Z(s) herleiten
- Hurwitz-Kriterium → Wertebereich K_R für Stabilität des geschlossenen Regelkreises
- Bode-Diagramm: Betragsverlauf asymptotisch einzeichnen, Amplituden- & Phasenreserve ablesen

Varianten / Extra-Teilaufgaben:
- Einfluss eines Totzeitgliedes auf Stabilität (Phase sinkt, Amplitude bleibt → destabilisierend)
- Stationären Fehler per Endwertsatz berechnen
- Regler aus Bode-Diagramm ablesen (z.B. PI-Regler: Knickfrequenz = 1/T_R, K_R ablesen)
- PD-Regler qualitativ skizzieren + Vor-/Nachteile nennen

---

### Aufgabe 2 — Mehrere unabhängige Teilaufgaben (20 Punkte)
Thema: Gemischte Stabilitäts- und Systemanalyse (je ~3 unabhängige Teile)

Was immer vorkommt:
- Ortskurven: Parameter K und n aus Kurvenverlauf bestimmen (Grenzwert bei ω→0, Drehrichtung)
- F_W(s) rückwärts: G_S(s) oder G_R(s) herausrechnen, Stabilität der Strecke prüfen (Polstellen)
- Bode-Diagramm → F_o(s) rekonstruieren: K, PT1-, PT2-Glieder erkennen, Korrekturterm bei D<1

Varianten:
- Hurwitz mit zwei Parametern (K_R, K_D) → Bedingungen für Stabilitätsbereich
- Allgemeines Nyquist-Kriterium (bei instabilem offenem Regelkreis, Pol-Nullstellen-Diagramm gegeben)
- Stationäre Abweichung per Endwertsatz + prüfen ob Ziel erreichbar

---

### Aufgabe 3 — Kaskadenregelung (33 Punkte)
Thema: Entwurf einer Kaskadenregelung + Störgrößenkompensation

Was immer vorkommt:
- Physikalisches System beschrieben (Hydraulikzylinder oder Gleichstrommotor) → Blockschaltbild ergänzen
- Kompensationsglied G_K(s) herleiten und Realisierbarkeit prüfen (Zählergrad ≤ Nennergrad?)
- Innere Kaskade: P-Regler auslegen (n-fach schneller als offener Kreis → T_W = T_o/n)
- Äußere Kaskade: PI-Regler nach vereinfachtem Betragsoptimum (Kessler) (D=1 oder D=1/√2) → T_R = langsamste Zeitkonstante, K_R aus Formel

Varianten:
- Störgrößenkompensation F_SD: ideale Korrekturfunktion bestimmen, Realisierbarkeit prüfen
- Alternativen: stationäre Kompensation (nur bei ω=0) oder PT1-Näherung
- Qualitative Verlaufszuordnung (ideal / keine / stationäre Kompensation)

---

### Aufgabe 4 — Zustandsraum (35 Punkte)
Thema: Modellierung und Regler-Entwurf im Zustandsraum

Was immer vorkommt:
- Anzahl Zustandsgrößen bestimmen (= Anzahl Energiespeicher)
- DGL herleiten: Freischnitt (Mechanik) oder Knoten-/Maschenregel (Elektrik)
- Zustandsraumdarstellung A, b, c^T aufstellen
- Separates System: Eigenwerte berechnen, Stabilität und Schwingfähigkeit beurteilen
- Zustandsregler-Entwurf durch Eigenwertvorgabe (Wunschpolynom aufstellen → Koeffizientenvergleich → r^T)

Varianten:
- Eigenvektoren berechnen → Modalform (Diagonalform) herleiten (V, V⁻¹, Λ)
- Vorfilter f berechnen für stationäre Genauigkeit (u = −r^T·z + f·w)

---

### Aufgabe 5 — Digitale Signalverarbeitung (20–28 Punkte)
Thema: Abtastung, Quantisierung, digitale Filter

Was immer vorkommt:
- Abtastfrequenz aus Signalverlauf ablesen
- Signalklassifizierung: wert-/zeitkontinuierlich vs. -diskret (3 Signale: analog, abgetastet, digital)
- Shannon-Abtasttheorem: ab welcher Signalfrequenz treten Aliasing-Effekte auf? (f_sig > f_abt/2)
- Quantisierung: Intervall berechnen, maximaler Fehler (= Intervall/2), benötigte Bits (2^n ≥ Anzahl Stufen)

Was oft vorkommt:
- Anti-Aliasing-Filter: Operationsverstärker-Schaltung → Übertragungsglied identifizieren (PT1), Parameter aus Bode ablesen, als Tiefpass geeignet?
- Digitaler Filter: Koeffizienten a₀, a₁, b₀ aus Sprungantwort bestimmen (Gleichungssystem)
- BIBO-Stabilität digitaler Filter prüfen (aufklingende Ausgangsfolge → instabil)
- Differenzengleichung ↔ PT1-Glied über Euler-Integration (T und K aus Δt und Koeffizienten)

---

### Aufgabe Fragen: Richtig/Falsch ankreuzen
Was immer vorkommt: 8–10 Aussagen, ankreuzen ob richtig/falsch

Häufige Themen:
- Steuerung vs. Regelung (Steuerung reicht nicht bei Störungen!)
- Totzeit: senkt Phase, Betrag unverändert → destabilisierend
- Hurwitz: notwendig und hinreichend (ohne Totzeit)
- Nyquist: auch bei Totzeit anwendbar
- Übertragungsfunktion: nur für lineare, zeitinvariante Systeme
- Zustandsraum: auch für nichtlineare, zeitvariante Systeme + Totzeit
- Stabilität: Voraussetzung für stationäre Genauigkeit

---

## Übersicht: Themen der Vorlesungen

1. Einführung
	- 1.1 Begriff der Regelung und grundsätzlicher Aufbau
	- 1.2 Beispiele von Regelungen (Dampfmaschine, Gleichstromantrieb, Schüttgut, Füllstand, Segway, Kfz, u.v.m.)

2. Regelung und Steuerung
	- 2.2 Einfaches Beispiel einer Antriebsregelung
	- 2.3 Entwurf von Vorsteuerungen

3. Der lineare Regelkreis
	- 3.1 Allgemeine Struktur und Gleichungen des Regelkreises
	- 3.2 Stabilität von Regelkreisen
	- 3.3 Das Hurwitz-Kriterium
	- 3.4 Das spezielle Nyquist-Kriterium
	- 3.5 Stabilitätsprüfung im Bode-Diagramm mit dem speziellen Nyquist-Kriterium
	- 3.6 Maße für die Stabilitätsreserve (Betrags- und Phasenreserve)
	- 3.7 Die allgemeine Formulierung des Nyquist-Kriteriums
	- 3.8 Totzeitglieder und Stabilität von Regelkreisen mit Totzeit

4. Synthese (Entwurf) von Regelungen
	- 4.1 Aufgabenstellung und Anforderungen an den Regelkreis
	- 4.2 Stationäres Verhalten des Regelkreises
	- 4.3 Grundsätzliche Struktur des Reglers
	- 4.4 Realisierung von Reglern (P-, I-, PI-, PD-, PID-Regler)
	- 4.5 Methoden zur Festlegung der Reglerparameter
	- 4.6 Anwendungsbeispiel: Entwurf einer Drehzahlregelung für einen fremderregten Gleichstrommotor
	- 4.7 Maßnahmen zur gezielten Formung des Frequenzgangs

5. Strukturmaßnahmen: Kaskadenregelung und Störgrößenaufschaltung
	- 5a) Kaskadenregelung (Grundidee, Bedingungen, Störverhalten)
	- 5b) Störgrößenaufschaltung (Grundidee, Voraussetzungen, ideale Kompensation)
	- Kombination von Kaskadenregelung und Störgrößenaufschaltung
	- Anwendungsbeispiel: Drehzahlregelung mit Kaskadenregelung und Störgrößenaufschaltung

6. Grundlagen der digitalen Signalverarbeitung
	- 6.1 Abtastung, Analog/Digital- und Digital/Analog-Umsetzung
	- 6.2 Digitale Filter
	- 6.3 Das Abtast-Theorem von Shannon

7. Beschreibung dynamischer Systeme im Zustandsraum
	- 7.1 Beispiele und Vergleich von Frequenzbereichs- und Zustandsmethodik
	- 7.2 Allgemeine Form der Zustandsgleichungen
	- 7.3 Die Diagonalform (Modalform) der Zustandsgleichungen
	- 7.4 Stabilität im Zustandsraum
	- 7.5 Zusammenhang zwischen Übertragungsfunktion und Zustandsdarstellung

8. Regelung im Zustandsraum
	- 8.1 Allgemeine Struktur einer Zustandsregelung
	- 8.2 Reglerentwurf durch Eigenwertvorgabe

---

## Fragen-Modus

Es soll eine eigene Übersicht zu den Fragen geben, die im Dashboard als aufklappbare Karten dargestellt wird.

Orientierung an den Fragen-PDFs aus:
- `knowledge/Fragen aus Tut/` (Richtig/Falsch-Fragen aus den Tutorien)
- `knowledge/Klausuraufgaben/Fragen/` (echte Klausurfragen)

Es sollen alle vorhandenen Fragen aus den PDFs übernommen werden, plus zusätzliche neue Fragen, die in dieser Form noch nicht vorkommen aber klausurrelevant sind.

Jede Frage soll:
- Aufklappbar sein, sodass man nicht direkt die Antwort sehen kann
- Eine gute Erklärung beim Aufklappen hinterlegt haben (wenn nötig mit selbst erstellten Abbildungen)
- Auf einer selbst erstellten Schwierigkeitsskala bewertet sein
- Angeben, aus welchem Thema der Vorlesung die Frage stammt
