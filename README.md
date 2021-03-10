# DePepisto's - Base Framework

Bei diesem Repository handelt es sich um das Basis Frontend Framework auf Basis von HTML CSS SCSS JAVASCRIPT mit modernen Features, welches sich gerade im Aufbau befindet.

> «don’t repeat yourself» und «clean code»

## Mitarbeit

Wie bei jedem Entwicklungsprojekt aller Anfang ist schwer, gerne kannst du helfen diese Umgebung besser zu gestalten und Änderungen vorschlagen oder Issues schreiben.

### Befehle des Nodepackagemanagers (npm)

`npm i` initialisiert das Projekt mit all seinen Abhängigkeiten \n

`npm run dev` ist der Befehl, der für das Starten der Umgebung erforderlich ist, alles auf einmal baut und auf Änderungen wartet. Hierbei wird ein Liveserver incl. Browser-Refresh gestartet. \n

`npm run build` ist der Build-Befehl, hierbei wird alles gebaut und im `dist/` Verzeichnis hinterlegt. Es wird nicht auf Änderungen an Dateien gewartet.

### Grundregeln

- Alle(!) CSS-Selektoren bestehen aus lediglich einer Klasse.
- Keine #IDs als Selektoren.
- Keine verschachtelten Selektoren (ul > li > ul > li > a), was nicht zu verwechseln ist mit der SASS-Schreibweise.
- Keine Markup/DOM-Abbildung im CSS.
- Kein Einsatz von «!important».
- Selektoren so unspezifisch wie möglich, so spezifisch wie nötig.
- Keine HTML-Tag-Selektoren (nav, button, body usw.).

## Beschreibung

Wir halten unser Framework skalierbar und wartbar mit «BEMIT»

Der Begriff setzt sich zusammen aus der BEM-Notation und der «Inverted Triangle CSS Architecture» (ITCSS).

### BEM-Notation

`BEM (Block, Element, Modifier)` ist eine Methodologie mit definierter Syntax, wie Klassen in HTML vergeben und diese als Selektoren in CSS genutzt werden können. BEM ist aber keine genau standardisierte Norm, sondern vielmehr eine «Art zu denken».

Das HTML-Markup wird dabei in Komponenten aufgeteilt, wobei jede der Komponenten in drei Gruppen strukturiert wird:

- **Block:** das «root» als eigenständige Komponente, mit eigener Semantik.
- **Element:** Bestandteil des Blocks, ohne eigenständige Bedeutung.
- **Modifier:** eine Variante oder Erweiterung des Blocks.

### ITCSS (Inverted Triangle CSS Architecture)

ITCSS ist ein Designkonzept (Architektur-Modell) für die Organisation von CSS in Softwareprojekten. Entwickelt wurde es von Harry Roberts [csswizardy.com](csswizardry.com). Primär geht es darum, Kaskadierungen und Spezifikationen von CSS unter Verwendung von verschiedenen Namespaces in sogenannte «Layer» zu unterteilen. Wiederverwendbarkeit und Skalierbarkeit stehen im Vordergrund.

ITCSS – Layers(Ebenen)

**Abstracts**

Diese Ebene beinhaltet alle Projektweiten «SASS»-Variablen und Tools wie Funktionen, Mixins diese entfallen wenn kein Preprocessor zum Einsatz kommt

Beispiele:

- Farben
- Spacings

Beispiele Tools

- Mixins
- Funktionen
- Animationen

**Base**

Hier sollten Sie Stile mit geringer Spezifität haben, die im gesamten DOM angewendet werden sollen. Dazu gehören Box-Größe, Resets, normalisieren, etc.
Dies ist die erste Ebene, in der wir reines CSS verwenden können.

Persönlich genieße ich es, in diesem Abschnitt Stile wie Textauswahl, Schriftart-Glättungund Tap-Highlight-Resetzu haben.

- root (CSS Variablen, smooth Scroll etc)
- Box-sizing
- Normalize

**Components**
In dieser Ebene sind alle kleinen, unabhängigen, generischen, *und wiederverwendbaren *Teile der Benutzeroberfläche
Alle Komponenten werden über ein Mixin

```SCSS
//SASS Eingabe

@include block("name", component) {
   //css Angaben
   font-size: 1rem;
 }
```

```CSS
/*CSS Ausgabe*/

.dp-c-name {
   font-size: 1rem;
 }
```

Und im HTML erkennbar:
_dp = verwendeter prefix, c = Auszeichnung das es eine Komponente ist_

```HTML
<div class="dp-c-name-der-componente">

```

Beispiele:

- Buttons
- Formulare

**Layouts**
In dieser Ebene wir das allgemine Layout definiert

**Pages**

**Themes**
Die Themes Ebene wird dafür genutzt verschiedene Styles anzulegen zum Beispiel Darkmode, Print etc

**Utilities**

Hier werden Helferklassen abgelegt, welche eine hochspezifische Aufgabe zu erledigen haben. Im Normalfall genau eine.

> «Do one thing and do it well.»

Vorangehende Styles aus dem hierarchischen «triangle» werden übersteuert und es ist ausnahmsweise sogar erlaubt, ein «!important» einzusetzen. Sie können über den gesamten UI-Bereich explizit verwendet werden.

Beispiele:

- Alignment
- Displaying
- Positioning
  > .u-text-center { text-align:center; }

**Vendors**
