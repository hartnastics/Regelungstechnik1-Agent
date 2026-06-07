#Vorgaben zum lernen von Regellungstechnik 1

---

##Übersicht der Aufgabentypen in der Klausur-Zu jeder Aufgabe sollen die Lernsachen erstellt werden im Dashboard

Aufgabe 1 — Linearer Regelkreis (30 Punkte)
Thema: Analyse und Stabilität des Regelkreises
Was immer vorkommt:

	-Blockschaltbild gegeben (evtl. Nicht-Standard-Struktur) → F_o(s) bestimmen
	-Stabilität des offenen Regelkreises prüfen (Polstellen)
	-	F_W(s) und F_Z(s) herleiten
	-Hurwitz-Kriterium → Wertebereich K_R für Stabilität des geschlossenen Regelkreises
	-Bode-Diagramm: Betragsverlauf asymptotisch einzeichnen, Amplituden- & Phasenreserve ablesen

Varianten / Extra-Teilaufgaben:

	-Einfluss eines Totzeitgliedes auf Stabilität (Phase sinkt, Amplitude bleibt → destabilisierend)
	-Stationären Fehler per Endwertsatz berechnen
	-Regler aus Bode-Diagramm ablesen (z.B. PI-Regler: Knickfrequenz = 1/T_R, K_R ablesen)
	-PD-Regler qualitativ skizzieren + Vor-/Nachteile nennen

---

Aufgabe 2 — Mehrere unabhängige Teilaufgaben (20 Punkte)
Thema: Gemischte Stabilitäts- und Systemanalyse (je ~3 unabhängige Teile)
Was immer vorkommt:

	-Ortskurven: Parameter K und n aus Kurvenverlauf bestimmen (Grenzwert bei ω→0, Drehrichtung)
	-F_W(s) rückwärts: G_S(s) oder G_R(s) herausrechnen, Stabilität der Strecke prüfen (Polstellen)
	-Bode-Diagramm → F_o(s) rekonstruieren: K, PT1-, PT2-Glieder erkennen, Korrekturterm bei D<1

Varianten:

	-Hurwitz mit zwei Parametern (K_R, K_D) → Bedingungen für Stabilitätsbereich
	-Allgemeines Nyquist-Kriterium (bei instabilem offenem Regelkreis, Pol-Nullstellen-Diagramm gegeben)
	-Stationäre Abweichung per Endwertsatz + prüfen ob Ziel erreichbar

---

Aufgabe 3 — Kaskadenregelung (33 Punkte)
Thema: Entwurf einer Kaskadenregelung + Störgrößenkompensation
Was immer vorkommt:

	-Physikalisches System beschrieben (Hydraulikzylinder oder Gleichstrommotor) → Blockschaltbild ergänzen
	-Kompensationsglied G_K(s) herleiten und Realisierbarkeit prüfen (Zählergrad ≤ Nennergrad?)
	-Innere Kaskade: P-Regler auslegen (n-fach schneller als offener Kreis → T_W = T_o/n)
	-Äußere Kaskade: PI-Regler nach vereinfachtem Betragsoptimum (Kessler) (D=1 oder D=1/√2) → T_R = langsamste Zeitkonstante, K_R aus Formel

Varianten:

	-Störgrößenkompensation F_SD: ideale Korrekturfunktion bestimmen, Realisierbarkeit prüfen
	-Alternativen: stationäre Kompensation (nur bei ω=0) oder PT1-Näherung
	-Qualitative Verlaufszuordnung (ideal / keine / stationäre Kompensation)

---

Aufgabe 4 — Zustandsraum (35 Punkte)
Thema: Modellierung und Regler-Entwurf im Zustandsraum
Was immer vorkommt:

	-Anzahl Zustandsgrößen bestimmen (= Anzahl Energiespeicher)
	-DGL herleiten: Freischnitt (Mechanik) oder Knoten-/Maschenregel (Elektrik)
	-Zustandsraumdarstellung A, b, c^T aufstellen
	-Separates System: Eigenwerte berechnen, Stabilität und Schwingfähigkeit beurteilen
	-Zustandsregler-Entwurf durch Eigenwertvorgabe (Wunschpolynom aufstellen → Koeffizientenvergleich → r^T)

Varianten:

	-Eigenvektoren berechnen → Modalform (Diagonalform) herleiten (V, V⁻¹, Λ)
	-Vorfilter f berechnen für stationäre Genauigkeit (u = −r^T·z + f·w)

---

Aufgabe 5 — Digitale Signalverarbeitung (20–28 Punkte)
Thema: Abtastung, Quantisierung, digitale Filter
Was immer vorkommt:

	-Abtastfrequenz aus Signalverlauf ablesen
	-Signalklassifizierung: wert-/zeitkontinuierlich vs. -diskret (3 Signale: analog, abgetastet, digital)
	-Shannon-Abtasttheorem: ab welcher Signalfrequenz treten Aliasing-Effekte auf? (f_sig > f_abt/2)
	-Quantisierung: Intervall berechnen, maximaler Fehler (= Intervall/2), benötigte Bits (2^n ≥ Anzahl Stufen)

Was oft vorkommt:

	-Anti-Aliasing-Filter: Operationsverstärker-Schaltung → Übertragungsglied identifizieren (PT1), Parameter aus 	-Bode ablesen, als Tiefpass geeignet?
Digitaler Filter: Koeffizienten a₀, a₁, b₀ aus Sprungantwort bestimmen (Gleichungssystem)
BIBO-Stabilität digitaler Filter prüfen (aufklingende Ausgangsfolge → instabil)
Differenzengleichung ↔ PT1-Glied über Euler-Integration (T und K aus Δt und Koeffizienten)

---

Aufgabe Fragen: Richtig/Faslch ankreuzen
Was immer vorkommt: 8–10 Aussagen, ankreuzen ob richtig/falsch
Häufige Themen:

	-Steuerung vs. Regelung (Steuerung reicht nicht bei Störungen!)
	-Totzeit: senkt Phase, Betrag unverändert → destabilisierend
	-Hurwitz: notwendig und hinreichend (ohne Totzeit)
	-Nyquist: auch bei Totzeit anwendbar
	-Übertragungsfunktion: nur für lineare, zeitinvariante Systeme
	-Zustandsraum: auch für nichtlineare, zeitvariante Systeme + Totzeit
	-Stabilität: Voraussetzung für stationäre Genauigkeit

---

##Regeln zur Verwendung der gegebenen Inhalte

Regel1: Zur Informationsgewinnung kann alles benutzt werden was im Ordner: knowledge/... zu finden ist

Regel2: An den Aufgaben in dem Ordner Klausuraufgaben ist sich als erstes zu Orientieren, bzw die unter Übersicht der Aufgaben zu findenden Stichpunkte die hier gegeben sind

Regel3: Selbstständig aus den Ordnern Tutorien, Übungen, Vorlesungen und Klausuraufgaben raussuchen was zu den jeweiligen Aufgaben Typen passen kann, außerdem sollen die Aufgaben der Klausur auch benutzt werden um zukünftig interaktive Abbildungen im Dashboard erstellen zu können
	-Tutorien: Mehrere Aufgaben gegeben, die jeweilige Datei ist nach dem Thema bennant, es sind lösungen angegeben an denen man sich orientieren müss
	-Übungen: Ohne Lösungen angegeben, können benutzt werden um zukünftige Abbildungen, Beispielaufgaben, Beispiele für die Realität usw. aufbauen zu können (ebenso wie auch tutorien usw.)
	-Vorlesungen: Grundbaustein und Fundament von allem, egal was man macht man muss dazu Informationen dazu aus der Vorlesung raussuchen und erklärungen angeben

Regel4: Themen aus der Vorlesung sind alle wichtig und sollten mit sinvollen Beschreibungen und Abbildung, sowie interaktiven Abbildungen, in denen man selber Werte, Regler, Strukturbilder usw zusammenstellen kann um dann daraus resultierende Ortskurve, Betrags- sowie Phasendiagramm dann sehen kann - Soll zum Verständnis von den Themen helfen

Regel5: Mathematische Formeln aus der Vorlesung sollen erklärt und mit Beispielen stärker beschrieben werden

---

##Übersicht: Themen der Vorlesungen

1. Einführung

1.1 Begriff der Regelung und grundsätzlicher Aufbau
1.2 Beispiele von Regelungen

2. Regelung und Steuerung

2.2 Einfaches Beispiel einer Antriebsregelung
2.3 Entwurf von Vorsteuerungen

3. Der lineare Regelkreis
3.1 Allgemeine Struktur und Gleichungen des Regelkreises
3.2 Stabilität von Regelkreisen
3.3 Das Hurwitz-Kriterium
3.4 Das spezielle Nyquist-Kriterium
3.5 Stabilitätsprüfung im Bode-Diagramm mit dem speziellen Nyquist-Kriterium
3.6 Maße für die Stabilitätsreserve (Betrags- und Phasenreserve)
3.7 Die allgemeine Formulierung des Nyquist-Kriteriums
3.8 Totzeitglieder und Stabilität von Regelkreisen mit Totzeit
4. Synthese (Entwurf) von Regelungen
4.1 Aufgabenstellung und Anforderungen an den Regelkreis
4.2 Stationäres Verhalten des Regelkreises
4.3 Grundsätzliche Struktur des Reglers
4.4 Realisierung von Reglern (P-, I-, PI-, PD-, PID-Regler)
4.5 Methoden zur Festlegung der Reglerparameter
4.6 Anwendungsbeispiel: Entwurf einer Drehzahlregelung für einen fremderregten Gleichstrommotor
4.7 Maßnahmen zur gezielten Formung des Frequenzgangs
5. Strukturmaßnahmen: Kaskadenregelung und Störgrößenaufschaltung
5a) Kaskadenregelung (Grundidee, Bedingungen, Störverhalten)
5b) Störgrößenaufschaltung (Grundidee, Voraussetzungen, ideale Kompensation)
Kombination von Kaskadenregelung und Störgrößenaufschaltung
Anwendungsbeispiel: Drehzahlregelung mit Kaskadenregelung und Störgrößenaufschaltung
6. Grundlagen der digitalen Signalverarbeitung
6.1 Abtastung, Analog/Digital- und Digital/Analog-Umsetzung
6.2 Digitale Filter
6.3 Das Abtast-Theorem von Shannon
7. Beschreibung dynamischer Systeme im Zustandsraum
7.1 Beispiele und Vergleich von Frequenzbereichs- und Zustandsmethodik
7.2 Allgemeine Form der Zustandsgleichungen
7.3 Die Diagonalform (Modalform) der Zustandsgleichungen
7.4 Stabilität im Zustandsraum
7.5 Zusammenhang zwischen Übertragungsfunktion und Zustandsdarstellung
8. Regelung im Zustandsraum
8.1 Allgemeine Struktur einer Zustandsregelung
8.2 Reglerentwurf durch Eigenwertvorgabe


##Fragen-Modus
-Es soll eine egene Übersicht zu den Fragen geben:
	-Orientieren soll man sich edabei an die fragen pdfs aus 
		-Fragen aus Tut
		-Klausurfragen 
-Es sollen alle gegebenen Fragen die schon in den pdfs zu finden sind beinhalten und zusätzliche fragen erstellt werden die es so noch nicht gibt und anders sind die ebenfalls in zukünftigen Klausuren abgefragt werden
-Jede Frage soll:
	-Aufklabbar sein sodass man nicht direkt die Anwort sehen kann
	-Es soll eine gute Erkläreung, wenn nötig mit selbst erstelleten Abbildungen zu Aufklappen hinterlegt sein
	-Es sollen alle Fragen auf einer sellbst erstelten Skala nach Schwierigkeit bewertet werden
	-Es soll angegebn werden aus welchen Thema der Vorlesung die Frage stammt








