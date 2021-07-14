
# NodeJS - Projekt
Hier wird es alle Informationen zu dem NodeJS - Projekt geben. 

## Die Idee / Das Projekt
Das Projekt ist es einen Blog mit Tagebucheinträgen zu entwicklen, in dem die entwicklung von diesem Projekt festgehalten und dokumentiert werden kann. Dafür muss man einen Artikel schreiben (erstmal als Datei) und später können auch Bilder eingefügt werden.

### Phase 1
Die erste Phase ist das fertigstellen des Blogs, wobei die Artikel in einer Datei stehen und nicht in einer Datenbank. Die Datei wird quasi als Datenbank benutzt. Das Format der Datei steht zu diesem Zeitpunkt noch nicht fest.
### Phase 2
Die zweite Phase ist es sich mit einer Datenbank zu beschäftigen und die Artikel in diese zu verlagern.

## NodeJS
NodeJS ist eine laufumgebung für Javascript mit dem man Anwendungen in Javascript schreiben kann ohne einen Webserver aufsetzen zu müssen. Mit NodeJS ist es also möglich serverseitig Javascript zu benutzen und ist somit nicht mehr zwingend auf einen Webserver angewiesen. Zudem ermöglicht NodeJS den Zugriff auf lokale Resourcen (wie Dateien usw.) und macht es somit nützlich für viele Projekte.

### Nodejs - Installation
Da ich oben schon beschrieben habe was NodeJS überhaupt ist, gehe ich jetzt hier also lediglich auf die installation ein. Heruntergeladen werden kann NodeJS von folgender Webseite: https://nodejs.org/en/ . Hier kann nun entweder die LTS version oder die Current Version gewählt, heruntergeladen und installiert werden.

### Installation Testen
Dazu drücken wir die `Windows`-Taste und die Taste `R`. Damit rufen wir ein Fenster auf (siehe Abbildung 1), indem wir Programme ausführen können. In dieses Fenster schreiben wir nun cmd rein und drücken Enter. Damit öffnen wir die Eingabeauffroderung (siehe Abbildung 2) in der wir nun ebenfalls wieder Befehle ausführen können. In dieses Fenster können wir nun das Programm node (welches von NodeJS kommt) ausführen und uns z.B. die Version anzeigen lassen. Dafür schreiben wir in die Eingabeaufforderung folgenden Befehl rein.

```bash
node -v
```
> Mittels node rufen wir das Programm nodejs auf und mit dem Paramter -v weisen wir node an uns nur die Version anzuzeigen. Das ganze habe ich mal als Abbildung 3 hier reingepackt. Wichtig ist, es kann durchaus sein, dass die Version nicht die gleiche ist wie bei mir.

![In dem Ausführen Fenster können wir Programme oder Befehle ausführen](execute_cmd.PNG)

![Unsere Eingabeaufforderung für Befehle unter Windows](cmd_window_empty.PNG)

![node -v gibt die verwendete Version von dem Programm nodejs aus](cmd_window_node_version.PNG)

## NodeJS verwenden
Um NodeJS nun zu verwenden, können wir in unserem Projektordner eine neue Datei namens indx.js erstellen. Die Dateiendung .JS steht für Javascript und der name kann tatsächlich frei ausgewählt werden. Um nun die Datei auszuführen müssen wir das Node-Programm ausführen mittels `node` gefolgt von der Datei die wir ausführen wollen. In unserem Fall als `node index.js`

## Unsere erste NodeJS Anwendung
Für unsere erste NodeJS-Anwendung müssen wir uns, da wir ja auch eine Browseranwendung schreiben wollen, von Nodejs bestimmte http (Protokoll für Browser) Funktionen importieren. Das kann mittels folgenden Code gemacht werden.

```js
const http = require('http');
```
> packt die nodejs internen http-Funktionen in die Variable http. Damit sind die Funktionen über diese Variable aufrufbar.

Als nächstes können wir unser Server definieren.

```js
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
```
> Erstellt ein Objekt (unseren Server) mit den zuvor importierten http-Funktionen. Das req und res sind der Request (Anfrage) an den Server und der Response (Antwort von unserem Server). Diese lassen sich nun verarbeiten und bearbeiten.

Mittels der Zeile `res.end('Hello World')` wird als Response an unserem Browser die Nachricht `Hello World` geschickt. Damit wird die Schrift `Hello World` in unserem Browser angezeigt, wenn wir den Server aufrufen.

#### Den Server aufrufen
Um den Server aufzurufen müssen wir definieren, worauf unser Server hören soll. Das können wir mittels folgendem Code machen:

```js
server.listen(port, hostname, () => {
  console.log(`Server is running`);
});
```
> Lässt unser Server-Objekt auf den Port und den Hostnamen hören.

Hier wird festgelegt, dass der Server auf den spezifierten Port und dem festgelegten Hostnamen hört. Als Beispiel gebe ich hier meine locale Adresse (127.0.0.1) und den Port 3000 an.

```js
server.listen(3000, '127.0.0.1', () => {
  console.log(`Server is running`);
});
```

## Auf weitere Pfade reagieren
Bis jetzt können wir auf folgende Pfade reagieren `http://localhost:3000` reagieren. Meistens ist es jedoch so, dass man auch noch auf andere URL reagieren möchte. In unserem Beispiel wäre also als Beispiel `/` um alle Blogs anzuzeigen und vielleicht `/blog/1` um z.B. einen bestimmten Blog anzuzeigen.

Aufrufen kann das ganze nun im Browser unter `http://localhost:3000/test` und `http://localhost:3000`

## Unser HTML mit NodeJS ausgeben

Möchte man nun HTML mittels nodeJS ausgeben, muss man erstmal die Datei an sich in NodeJS laden. Das ganze geht, indem man ebenfalls die Funktionen für Dateien importiert. 

```js
const fs = require("fs");
```
> Importiert die Filesystem (Dateisysteme auf Deutsch) Funktionen und "speichert" sie in der Variablen fs. 

Damit kann man nun das HTML in eine andere Variable reinladen. 

```js
fs.readFile("index.html", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  index = data;
});
```
> Mittels der Filesystem Funktionen können wir die Funktion `readFile` aufrufen und dort die Dateinamen und die Kodierung (wie die Datei genau abgespeichert wurde (ist meistens utf8)) angeben um Sie so zu laden. Der dritte Parameter ist eine Funktion. In dieser Funktion gibt es einmal ein Fehler (error) und daten (data). Diese Daten können wir benutzen und einer anderen Variablen zuweisen. Vorher prüfen wir nach ob die Variable err einen Fehler enthält.
```js
if (err) {
    console.log(err);
  }
index = data;
```

Als nächstes können wir recht einfach unser html auf einen bestimmten Pfad ausgeben. Das HTML liegt nämlich nun in unserer Variable und kann mittels `res.end(index)` ausgeben werden. Wichtig ist hierbei, dass es zuerst als Text ausgeben wird und nicht als HTML dargestellt wird. Das liegt an den Header des Response, welchen wir normalerweise nicht sehen, er allerdings ein paar Standardwerte mitbekommt. Dieser ist für den Inhaltstyp (content-type) eben text/plain also einfach normaler text. Um das Verhalten zu ändern und alles als HTML darzustellen muss das nun geändert werden auf den Inhaltstyp text/html. Das ganze geht mittels

```js
res.setHeader("Content-Type", "text/html");
```

Unser vollständiger Pfad sieht also nun so aus:

```js
else if (req.url.startsWith("/blog")) {
  res.setHeader("Content-Type", "text/html");
  res.end(index);
}
```
> Setzt den Inhaltstyp (Content-Type) auf text/html um das Ergebnis als HTML darzustellen.

## Das HTML anpassen
Das HTML kann mittels eines einfachen Tricks angepasst werden undzwar dem des Suchen und Ersetzen. In Javascript kann man auf Texte Funktionen anwenden und so z.B. die Funktion `replace` aufrufen. Diese Funktion überschreibt alle vorkomnisse des ersten Parameters mit den des zweiten in dem ausgewählten Text. Dafür schreiben wir als Beispiel in unser HTML bestimmte Tags oder auch Titel die wir kennen um Sie später ersetzen zu können. Als Beispiel setze ich hier einmal den Titel (im Header) als `{{TITLE}}` um ihn einfach identifizieren und ändern zu können.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <title>{{TITLE}}</title>
  </head>
...
```
> ... steht für den weiteren Text, da hier erstmal nur der `<title>` Tag interessant ist.

Jetzt kann in der Funktion, die das HTML zurück gibt unsere Variable angepasst werden. 

```js
index = index.replace("{{TITLE}}", "Meine Geschichte");
```
> Überschreibt alle Vorkomnisse von {{TITLE}} mit "Meine Geschichte"


## Alles zusammensetzen
Nun möchten wir alles zusammen setzen und unser HTML an die Blogseite anpassen. Dafür können wir uns erstmal eine URL aussuchen auf die wir dann reagieren möchten, wenn Sie angesprochen wird und wir für unseren Blog benutzen wollen. Ich würde jetzt einfach mal festlegen, dass wir die Seiten des blogs auf `/blog/0` als Beispiel legen um den ersten Eintrag unseres Blogs anzuzeigen. Wieso der Blog bei 0 anfängt erkläre ich später nocheinmal. Jetzt müssen wir uns die letzte Zahl unserer URL besorgen. Da es hier wichtig ist immer die letzte komplette Zahl zu bekommen können wir uns alles geben lassen vom Ende bis zu der Position des letzten `/`-Zeichens.

```js
else if (req.url.startsWith("/blog")) {
  // Gibt mir die Position des letzten / Zeichens
  var position = req.url.lastIndexOf("/");

  // Gibt mir die eigentliche Zahl von unserer oben errechneten Position und der gesamten länge
  var zahl = req.url.substring(position +1 , req.url.length);

  // Setzt nochmal den Inhaltstyp auf text/html
  res.setHeader("Content-Type", "text/html");

  // Greift auf unsere Geschichten Variable zu und überschreibt den entsprechenden Text mit der anderen Variable aus unserer vorher definierten Datei
  index = index.replace("{{TITLE}}", geschichten[zahl].zusammenfassung);
  index = index.replace("{{UBERSCHRIFT}}", geschichten[zahl].ueberschrift);

  // Gibt den aktualisierten Text wieder zurück um ihn darzustellen im Browser
  res.end(index);
}
```
> Die Funktion ist für alle urls gültig die mit /blog anfangen. Berechnet anschließend die letzte Zahl und nimmt diese Zahl als index für unsere JSON-Datei. In Javascript fangen solche Listen von mehreren Elementen immer mit 0 an, weswegen unser erster Eintrag auch den Index mit der Nummer 0 zugeschrieben bekommt. Alternativ muss mit einer 1 angefangen werden und immer 1 abgezogen werden um wieder den richtigen Index zu bekommen.

