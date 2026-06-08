# Lernzettel 1 – Einführung in die Regelungstechnik

> Kapitel 1 der Vorlesung. Begriff der Regelung, grundsätzlicher Aufbau eines Regelkreises und klassische Beispiele. (Die Original-PDF Kap. 1 ist beschädigt – Inhalte aus Vorlesungsübersicht, Tutorium 1 und Standardliteratur.)

---

## 1.1 Begriff der Regelung und grundsätzlicher Aufbau

### Unterschied Regelung ↔ Steuerung

| | **Steuerung** (offener Wirkungsweg) | **Regelung** (geschlossener Wirkungskreis) |
|---|---|---|
| Wirkungsweg | offen: Eingang → Strecke → Ausgang | geschlossen: Ausgang wird zurückgeführt |
| Messung der Regelgröße | **nein** | **ja** (zwingend) |
| Reaktion auf unbekannte Störungen | nein | ja |
| Reaktion auf Modellfehler | nein | ja |

- **Steuerung:** Die Stellgröße wird nur aus dem Sollwert (und ggf. einem Streckenmodell) berechnet. Der tatsächliche Ausgang wird **nicht** zurückgemessen. Eine Steuerung „weiß" nicht, ob ihr Ziel erreicht wurde.
- **Regelung:** Der Istwert $y$ wird gemessen, mit dem Sollwert $w$ verglichen und die Differenz über einen Regler ausgeglichen. Dadurch entsteht der **geschlossene Wirkungskreis** (Rückkopplung).

### Wann reicht eine Steuerung, wann braucht man eine Regelung?

- **Steuerung reicht**, wenn das System **exakt bekannt** ist und **keine unbekannten Störungen** auftreten. Beispiel aus Kap. 2: Masse $m$ exakt bekannt, keine Reibung → die Vorsteuerung trifft die Endposition exakt.
- **Regelung notwendig**, sobald die Strecke **ungenau bekannt** ist oder **unvorhersehbare Störungen** wirken. Beispiel: Masse 20 % leichter als angenommen → reine Steuerung schießt über das Ziel hinaus, erst die Rückführung korrigiert.

> **Merksatz:** Modellunsicherheiten und unbekannte Störungen lassen sich **nur durch eine Regelung** ausgleichen, **nicht** durch eine Steuerung.

### Die Grundgrößen

- **Regelgröße $y(t)$ (Istwert):** Die zu beeinflussende Ausgangsgröße der Strecke (z. B. Drehzahl, Temperatur, Position).
- **Führungsgröße $w(t)$ (Sollwert):** Der gewünschte Wert für die Regelgröße.
- **Stellgröße $u(t)$:** Eingang der Strecke, vom Regler erzeugt, innerhalb von Grenzen frei vorgebbar.
- **Regeldifferenz / Regelfehler $e(t)$:** Abweichung zwischen Soll und Ist, Eingang des Reglers:
$$e(t) = w(t) - y(t)$$
- **Störgröße $z(t)$:** Ein nicht vorgebbarer, häufig unbekannter Eingang, der die Strecke meist unerwünscht beeinflusst (z. B. Lastmoment, Wind, Außentemperatur). Sie greift typischerweise **innerhalb oder am Ausgang der Strecke** ein.

### Der geschlossene Wirkungskreis

Der Begriff beschreibt die ringförmige Signalkette:
$$w \;\to\; \underbrace{e=w-y}_{\text{Vergleich}} \;\to\; \text{Regler} \;\to\; u \;\to\; \text{Strecke} \;\to\; y \;\to\; \text{(Messung)} \;\to\; \text{zurück zum Vergleich}$$
Jede Änderung von $y$ wirkt über die Rückführung auf sich selbst zurück – das ist der Kern der Regelung.

### Grundbestandteile jedes Regelkreises

1. **Regelstrecke (Prozess):** das zu beeinflussende System.
2. **Stellglied (Aktor):** verstellt die Strecke, sorgt für Leistungsverstärkung.
3. **Messglied (Sensor):** erfasst die Regelgröße $y$.
4. **Regler:** bildet aus $e$ die Stellgröße $u$, formt die Dynamik.
5. **Vergleichsstelle:** bildet $e = w - y$.

### Regler vs. Strecke

- **Strecke $G_S$:** physikalisch vorgegeben, **nicht** frei wählbar (das, was man hat).
- **Regler $G_R$:** wird **entworfen** (Struktur P/PI/PID und Parameter), um das Verhalten gezielt zu verbessern.

### Warum zwingend Messung?

Ohne Messung von $y$ gibt es kein $e=w-y$ → der Regler kann nicht erkennen, ob eine Abweichung besteht, und kann Störungen/Modellfehler nicht ausgleichen. Die Messung schließt den Wirkungskreis.

### Was passiert bei einer Störung?

Tritt $z$ auf, verändert sich $y$. Über die Rückführung wächst $e=w-y$, der Regler verstellt $u$ entgegen und führt $y$ wieder zum Sollwert zurück. Bei einem I-Anteil im Regler verschwindet die bleibende Abweichung vollständig.

---

## 1.2 Beispiele von Regelungen

### Fliehkraftregler der Dampfmaschine (James Watt)
- **Geregelt:** Drehzahl der Maschine.
- **Prinzip:** Rotierende Fliehgewichte heben sich mit steigender Drehzahl, schließen über ein Gestänge das Dampfventil → Drehzahl sinkt. Klassische mechanische Rückkopplung.
- **Störung:** wechselnde Last; der Regler hält die Drehzahl konstant.

### Segway (inverses Pendel)
- **Geregelt:** Neigungswinkel (Aufrechthaltung).
- **Ohne Regelung instabil**, weil ein inverses Pendel einen Pol in der **rechten** $s$-Halbebene besitzt – kleinste Auslenkungen wachsen exponentiell. Erst die schnelle Rückführung (Neigungssensor → Motormoment) stabilisiert.

### Kfz-Tempomat (Tutorium 1, A3)
- **Geregelt:** Fahrzeuggeschwindigkeit.
- **Zuordnung der Bestandteile:**
  - Messeinrichtung: Geschwindigkeitsmessung + Steuergerät
  - Stelleinrichtung: Motor / Drosselklappe
  - Regler & Vergleichseinrichtung: Steuergerät
  - Regelstrecke: Fahrzeug
  - Führungsgröße: Wunschgeschwindigkeit
  - **Störgrößen:** Luftwiderstand, Steigung, Radwiderstand
  - Regelgröße: aktuelle Geschwindigkeit

### Füllstandsregelung
- **Regelziel:** konstanter Füllstand trotz schwankendem Zu-/Abfluss. Stellgröße = Ventilstellung, Störung = Abflussschwankungen.

### Schüttgutregelung (Förderband)
- **Besonderheit:** **Totzeit** – das Material braucht eine Transportzeit, bis eine Verstellung am Ausgang ankommt. Totzeiten erschweren die Regelung (Phasenabsenkung, siehe Lernzettel 3.8).

### Gemeinsamkeit aller Beispiele
Alle besitzen denselben Aufbau: **Messen → Vergleichen → Stellen → Rückführen**. Unabhängig von der Physik ist die regelungstechnische Struktur identisch (Standard-Regelkreis).

---

## Kernaussagen (zum Merken)

1. Regelung = geschlossener Kreis mit Messung; Steuerung = offener Weg ohne Messung.
2. Nur die Regelung gleicht **unbekannte Störungen und Modellfehler** aus.
3. $e = w - y$ ist die zentrale Größe; der Regler arbeitet auf sie hin.
4. Jeder Regelkreis hat: Strecke, Stellglied, Messglied, Regler, Vergleichsstelle.
5. Instabile Strecken (Segway) brauchen die Regelung sogar zwingend zur Stabilisierung.
