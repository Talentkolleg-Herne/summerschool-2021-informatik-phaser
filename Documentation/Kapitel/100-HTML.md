# Exkurs - HTML
HTML (Hypertext Markup Language) wird benutzt um eine Webseite zu beschreiben. Das heißt mittels HTML wird der Aufbau einer Webseite beschrieben und nicht deren eigentlichen Design. Das Design wird anschließend in CSS gemacht. In der HTML gibt es sogenannte Tags, die für verschiedene Strukturen stehen und von dem Englischen Begriff abgeleitet werden. Ein Tag wird mit den folgenden Klammern eingeleitet <> und meistens wie folt beendet </>. Der Tagname steht zwischen den Klammern bzw. zwischen dem Schrägstrich und der schließenden Klammer. Hier sind ein paar Beispiele:

* `<html></html>`
* `<p></p>`
* `<head></head>`
* `<body></body>`

Man kann diese Tags auch als Container oder Behälter betrachten, da diese auch Daten beinhalten können. So wird ein Paragraphen-Tag `p` am Anfang eines Paragraphen geschrieben um diesen auch mit dem schließenden Tag zu beenden.

```html
<p>Ich bin ein neuer Paragraph</p>
<p>Paragraphen können auch 
mehrzeilig sein</p>
```

## Aufbau eines Tags
```html
                           +--- HTML-Attribut
                           |   +--- Wert in Hochkommas
                           |   |
<p>ein Text mit einem <a href="…">Link</a></p>
 |                     |                |  |
 |                     |                |  +--- schließendes
 |                     |                |       HTML-Tag mit 
 |                     |                |       Schrägstrich
 |                     |                |
 |                     |                +--- schließendes Tag
 |                     +--- öffnendes Tag
 +--- öffnendes HTML-Tag
```

## Webseiten-Struktur
Als ein Beispiel wird hier ein sehr simple Webseite herhalten.
```html
<html>
  <head>
    <title>Meine Webseite</title>
  </head>
  <body>
    Lorem ipsum 
  </body>
</html> 
```
### Head und Body
Eine HTML-Seite besteht immer aus einem `<html>`-Bereich, indem der eigentliche Seitenaufbau beschrieben wird. Darin wird nun ein `<head>` und einen `<body>`-Bereich definiert. Innerhalb des `<head>` kommen nun Metadaten wie z.B. der Author, das Zeichenformat und dort kann man den Titel der Seite beschreiben. In den `<body>` Bereich kommt nun alles, was für den Benutzer sichtbar wird rein. 

### Ein paar weitere Tags
Um ein paar weitere Tags und einen ersten einfachen Aufbau zu bekommen schreiben wir hier folgende Zeilen, die ich anschließend erläutern werde. Dabei schreibe ich hier nur den `<body>`:

```html
<body>
   <h1>Lorem ipsum </h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
   <p>Mauris ante neque, vehicula quis, convallis sit amet, 
      vestibulum ornare, arcu. </p>
   <p>Donec at lorem et elit congue dictum. Cras sapien ligula, 
      rutrum quis, posuere id, faucibus id, risus. Maecenas sed est 
      volutpat arcu adipiscing tempus. Sed dictum mauris euismod 
      mauris.</p> 
</body>
```

* `<h1>`
  * Eine h1 ist eine Überschrift1 (engl. Headline1). Die Überschriften gehen von 1 (die größte) bis 6 (die kleinste). Nach einer Überschrift folgt auch immer ein Zeilenumbruch.
* `<p>`
  * Ein p ist ein Paragraph. Ein Paragraph enthält meistens Text und anschließend ein Zeilenumbruch.
* `<ul, ol>`
  * erzeugen ungeordnete bzw. geordnete (nummerierte) Listen. Ungeordnete Listen werden mit einem führenden Listenpunkt dargestellt, geordnete Listen mit einem Index. In beiden Listen wird jedes Listenelement in li-Tags eingeschlossen.
  ```html
  <ol>
    <li>HTML strukturiert den Inhalt </li>
  </ol>
  ```
* `<div>`
  * In einem DIV können andere Elemente hineingefügt werden. Das div fungiert nur als eine Art Container.

### Kommentare
Kommentare werden in HTML wie folgt beschrieben:
```html
<!-- Dies ist ein Kommentar -->
```
> Kommentare dienen dazu den Quelltext besser zu Strukturen und für den Leser annehmlicher zu gestalten.


### Quellcode-Strukturieren
Es ist üblich den Quellcode mit bestimmten Einrückungen besser lesbar zu machen. Dazu gehört z.B. dass verschachtelte Tags meistens in einer neuen Zeile (außer z.B. Links oder andere kurze Tags) und mit einem vorangegangenen Tab-Zeichen eingerückt werden.

Beispiel hier mit einer Tabelle:

```html
<table>
   <tr>
      <td>Zeile 1 Spalte 1</td>
      <td>Zeile 1 Spalte 2</td>
   </tr>
   <tr>
      <td>Zeile 2 Spalte 1</td>
      <td>Zeile 2 Spalte 2</td>
   </tr>
</table>
```
> Wie man sieht sidn die `<tr>`und die `<td>` jeweils in einer neuen Zeile und weiter eingerückt als z.B. das `<table>`
