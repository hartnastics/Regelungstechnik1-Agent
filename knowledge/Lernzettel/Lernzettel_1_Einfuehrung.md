# Lernzettel 1 – Einführung in die Regelungstechnik

> Kapitel 1. Aufbau in zwei Teilen:
> **Teil A – Fragestellungen:** Jede Frage aus der CLAUDE.md wird einzeln und vollständig beantwortet.
> **Teil B – Komplette Beispiele:** vollständige Aufgaben/Beispiele (Tutorium, Richtig-Falsch-Fragen) mit Begründung.
>
> *(Die Original-PDF zu Kap. 1 ist beschädigt; Inhalte aus Vorlesungsübersicht, Tutorium 1 und Standardliteratur.)*

---
---

# TEIL A – Fragestellungen (alle einzeln beantwortet)

## 1.1 Begriff der Regelung und grundsätzlicher Aufbau

**F: Was ist der Unterschied zwischen einer Regelung und einer Steuerung?**
A: Bei der **Steuerung** (offener Wirkungsweg) wird die Stellgröße nur aus dem Sollwert (und ggf. einem Streckenmodell) berechnet; der Ausgang wird **nicht** zurückgemessen. Bei der **Regelung** (geschlossener Wirkungskreis) wird die Regelgröße $y$ gemessen, mit dem Sollwert $w$ verglichen ($e=w-y$) und die Differenz über einen Regler ausgeglichen. Kurz: Steuerung = ohne Rückführung, Regelung = mit Rückführung.

**F: Wann reicht eine Steuerung aus, wann ist eine Regelung notwendig?**
A: Eine **Steuerung reicht**, wenn die Strecke exakt bekannt ist und keine unbekannten Störungen wirken (Beispiel: Masse exakt bekannt, keine Reibung → die Vorsteuerung trifft das Ziel genau). Eine **Regelung ist notwendig**, sobald Modellunsicherheiten oder unbekannte/unvorhersehbare Störungen auftreten – nur die Rückführung kann diese ausgleichen.

**F: Was ist die Regelgröße, die Führungsgröße, die Stellgröße?**
A: **Regelgröße $y$ (Istwert):** die zu beeinflussende Ausgangsgröße der Strecke (z. B. Drehzahl, Temperatur, Position). **Führungsgröße $w$ (Sollwert):** der gewünschte Wert für $y$. **Stellgröße $u$:** der vom Regler erzeugte Eingang der Strecke, innerhalb von Grenzen frei vorgebbar.

**F: Was ist eine Störgröße und wo greift sie in den Regelkreis ein?**
A: Die **Störgröße $z$** ist ein nicht vorgebbarer, häufig unbekannter Eingang, der die Strecke meist unerwünscht beeinflusst (z. B. Lastmoment, Wind, Außentemperatur). Sie greift typischerweise **innerhalb der Strecke** oder **am Streckenausgang** ein.

**F: Was ist der Regelfehler und wie wird er berechnet?**
A: Der Regelfehler (Regeldifferenz) ist die Abweichung zwischen Soll- und Istwert und der Eingang des Reglers:
$$e(t)=w(t)-y(t).$$

**F: Was versteht man unter dem „geschlossenen Wirkungskreis"?**
A: Die ringförmige Signalkette $w\to[e=w-y]\to\text{Regler}\to u\to\text{Strecke}\to y\to(\text{Messung})\to$ zurück zum Vergleich. Jede Änderung von $y$ wirkt über die Rückführung auf sich selbst zurück – das ist der Kern der Regelung.

**F: Welche Grundbestandteile hat jeder Regelkreis?**
A: (1) **Regelstrecke** (zu beeinflussendes System), (2) **Stellglied/Aktor** (verstellt die Strecke, Leistungsverstärkung), (3) **Messglied/Sensor** (erfasst $y$), (4) **Regler** (bildet aus $e$ die Stellgröße $u$), (5) **Vergleichsstelle** (bildet $e=w-y$).

**F: Was ist der Unterschied zwischen Regler und Strecke?**
A: Die **Strecke** ist physikalisch vorgegeben und **nicht** frei wählbar (das, was man hat). Der **Regler** wird **entworfen** (Struktur P/PI/PID und Parameter), um das Verhalten gezielt zu verbessern.

**F: Warum braucht eine Regelung zwingend eine Messung der Regelgröße?**
A: Ohne Messung von $y$ gibt es kein $e=w-y$ → der Regler kann nicht erkennen, ob eine Abweichung besteht, und Störungen/Modellfehler nicht ausgleichen. Die Messung schließt den Wirkungskreis.

**F: Was passiert im Regelkreis, wenn eine Störung auftritt?**
A: $y$ ändert sich → der Fehler $e=w-y$ wächst → der Regler verstellt $u$ entgegen → $y$ wird zum Sollwert zurückgeführt. Mit I-Anteil im Regler verschwindet die bleibende Abweichung vollständig.

---

## 1.2 Beispiele von Regelungen

**F: Wie funktioniert die Drehzahlregelung einer Dampfmaschine (Fliehkraftregler)?**
A: Rotierende Fliehgewichte heben sich mit steigender Drehzahl, schließen über ein Gestänge das Dampfventil → weniger Dampf → Drehzahl sinkt. Eine rein mechanische Rückkopplung: Regelgröße = Drehzahl, Stellgröße = Ventilstellung, Störung = wechselnde Last.

**F: Welche Größe wird beim Segway geregelt und warum ist das System ohne Regelung instabil?**
A: Geregelt wird der **Neigungswinkel** (Aufrechthaltung). Das inverse Pendel hat einen Pol in der **rechten** $s$-Halbebene → kleinste Auslenkungen wachsen exponentiell. Erst die schnelle Rückführung (Neigungssensor → Motormoment) stabilisiert es.

**F: Was wird bei einem Kfz-Tempomat geregelt und was sind typische Störgrößen?**
A: Geregelt wird die **Fahrzeuggeschwindigkeit**. Typische Störgrößen: Luftwiderstand, Steigungswiderstand, Radwiderstand, Fahrereingriffe.

**F: Was ist das Regelziel bei einer Füllstandsregelung?**
A: Einen **konstanten Füllstand** trotz schwankendem Zu- bzw. Abfluss halten. Stellgröße = Ventilstellung, Störung = Abflussschwankungen.

**F: Wie funktioniert eine Schüttgutregelung und welche Besonderheiten hat sie?**
A: Massenstrom/Füllstand auf einem Förderband wird geregelt. **Besonderheit: Totzeit** – das Material braucht eine Transportzeit, bis eine Verstellung am Ausgang ankommt. Totzeiten erschweren die Regelung (Phasenabsenkung → Stabilitätsproblem, siehe Lernzettel 3.8).

**F: Welche Gemeinsamkeit haben alle Beispiele bezüglich des Regelkreis-Aufbaus?**
A: Alle besitzen denselben Aufbau **Messen → Vergleichen → Stellen → Rückführen**. Unabhängig von der konkreten Physik ist die regelungstechnische Struktur identisch (Standard-Regelkreis).

---
---

# TEIL B – Komplette Beispiele

## ▣ Tutoriumsaufgabe (Tut 1, A3) — Tempomat: Bestandteile zuordnen & Blockschaltbild

**Aufgabenstellung:** Ein Tempomat regelt die Geschwindigkeit eines Kraftfahrzeugs. Das Motorsteuergerät vergleicht gemessene Ist- und eingestellte Soll-Geschwindigkeit und steuert auf dieser Basis die Drosselklappe. (a) Ordne die Bestandteile einer Regelung dem Beispiel zu. (b) Stelle den Regelkreis als Blockschaltbild dar.

**Lösung (a) – Zuordnung:**

| Bestandteil | Tempomat |
|---|---|
| Messeinrichtung | Geschwindigkeitsmessung / Steuergerät |
| Stelleinrichtung | Motor, Drosselklappe |
| Regler (mit Vergleichs- & Korrektureinrichtung) | Steuergerät |
| Regelstrecke | Fahrzeug |
| Führungsgröße | gewünschte (Soll-)Geschwindigkeit |
| Störgröße | Luftwiderstand, Steigung, Radwiderstand |
| Regelgröße | aktuelle Geschwindigkeit |

**Lösung (b) – Blockschaltbild (in Worten):**
$$v_{soll}\to[\,e=v_{soll}-v\,]\to\underbrace{\text{Steuergerät}}_{\text{Regler}}\to\underbrace{\text{Motor/Drosselklappe}}_{\text{Stellglied}}\to\underbrace{\text{Fahrzeug}}_{\text{Strecke}}\to v\ (\text{mit Widerständen als Störung})\to\text{Messung}\to\text{zurück}.$$
> **Ergebnis:** Klassischer geschlossener Wirkungskreis; die Widerstände greifen als Störgröße an der Strecke an und werden über die Rückführung ausgeregelt.

---

## ▣ Verständnisfragen (Richtig/Falsch) — mit Begründung

**1. „Modellunsicherheiten lassen sich durch eine Steuerung beheben."** — **Falsch.** Eine Steuerung hat keine Rückführung; sie kann auf Abweichungen durch Modellfehler nicht reagieren. Dafür braucht es eine Regelung.

**2. „Modellunsicherheiten lassen sich durch eine Regelung ausgleichen."** — **Richtig.** Die Rückführung misst den Istwert und korrigiert Abweichungen, egal woher sie kommen (Modellfehler oder Störung).

**3. „Eine Steuerung kann auf bekannte Störungen reagieren."** — **Richtig.** Ist die Störung bekannt (gemessen/geschätzt), kann eine Steuerung sie über eine Störgrößenvorsteuerung berücksichtigen. Auf **unbekannte** Störungen kann sie nicht reagieren.

**4. „Eine Steuerung ist ausreichend, um auch bei Störungen und Modellungenauigkeiten das gewünschte Verhalten zu erzielen."** — **Falsch.** Bei unbekannten Störungen/Modellfehlern ist eine Regelung nötig.

**5. „Ist sowohl die Störgröße als auch das System vollständig bekannt, genügt eine Steuerung, um den Zustand genau einzustellen."** — **Richtig.** Bei perfektem Modell und bekannter Störung kann die Steuerung den nötigen Stellverlauf exakt berechnen.

---

## Kernaussagen (zum Merken)

1. Regelung = geschlossener Kreis mit Messung; Steuerung = offener Weg ohne Messung.
2. Nur die Regelung gleicht **unbekannte** Störungen und Modellfehler aus.
3. $e=w-y$ ist die zentrale Größe; der Regler arbeitet auf sie hin.
4. Jeder Regelkreis: Strecke, Stellglied, Messglied, Regler, Vergleichsstelle.
5. Instabile Strecken (Segway) brauchen die Regelung sogar zur Stabilisierung.
