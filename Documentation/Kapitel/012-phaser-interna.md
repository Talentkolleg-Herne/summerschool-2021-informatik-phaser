### Die Phaser Funktionen
Phaser stellt mehrere Funktionen zur Verfügung, die verschiedene Aufgaben haben:

* preload
  * Die Preload-Funktion wird ausgeführt beim starten von Phaser. Diese Funktion kann benutzt werden um z.B. Bilder und Sounds zu laden.
* create
  * Ist die 2. Funktion die Ausgeführt wird. Hier werden normalerweise die Bilder platziert und an die richtige Position mit der richtigen größe geschoben
* render
  * Die render-Funktion wird als letztes von unseren hier genannten Funktionen aufgerufen und wird immer so oft es geht ausgeführt. 

### Unser erstes Phaser Beispiel
Unser erstes Beispiel erläuter ich mal mit den Zeilenangaben und dem Aufbau des Codes in kleineren Schritten.

Zuerst, da es sich dabei um ein Spiel handelt welches im Browser dargestellt wird und der Browser üblicherweise mit HTML Dateien arbeitet definieren wir das Grundgerüst für eine HTML Datei:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

In Zeile 1 definieren wir also, dass es sich dabei um eine HTML-Datei handelt. Nun wird alles was zu der HTMl-Datei gehört in den `<html>` Tag geschrieben (für weitere Erläuterungen => siehe Exkurs HTML). Nun können wir mittels eines CDN das Phaser-Framework mit den Funktionen die wir brauchen hinzufügen.

> Ein CDN oder auch Content Delivery Network stellt Inhalte über das Netzwerk (Internet) zur Verfügung um mal schnell etwas zu testen oder Inhalte zentral verwalten zu können. In unserem Fall können wir es verwenden um mit Phaser schnell anfangen zu können ohne vorher die Phaser-Dateien downloaden zu müssen.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
  </head>
  <body>
  </body>
</html>
```

Nun können wir in den Body-Tag unser Javascript für Phaser schreiben. Da HTML eigentlich kein Javascript unterstützt, müssen wir den Code dafür innerhalb eines Script-Tags schreiben:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
  </head>
  <body>
    <script>
    </script>
  </body>
</html>
```

> Ab jetzt werde ich auch ausschließlich den Code aus dem Script-Tag schreiben und nur zum Schluss noch einmal den vollständigen Code zeigen.

Zuerst können wir uns ein Konfigurationsobjekt erstellen, in dem festgelegt wird die groß unser Spiel z.B. ist (die Angabe erfolgt in der Einheit Pixel). Hier könnten wir auch direkt eine Hintergrundfarbe für das Spiel festlegen.

```js
var config = {
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
}
```

Als nächstes muss in dieses Objekt auch die Funktionen die wir von Phaser benutzen wollen mit rein. Dafür definieren wir das Attribut `scene` innerhalb unserer Konfiguration und schreiben die Funktionen rein die wir benutzen möchten mit der Funktion wie Sie bei uns heißt.

```js
var config = {
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  scene: {
    preload: preload,
    create: create
  }
}
```
Wir können jetzt auch sofort diese Funktionen defnieren.

```js
var config = {
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  scene: {
    preload: preload,
    create: create
  }
};

function preload() {
}

function create () {
}
```
> Hier haben wir die Funktions-Namen nicht geändert. Dazu gibt es meistens auch keinen Grund und der Standardname kann einfach beibehalten werden. 

Als nächstes müssen wir unser Spiel erstellen. Das geht ganz einfach mittels

```js
var game = new Phaser.Game(config);
```
Damit legen wir eine neue Variable an, die alle Informationen und Daten für das Spiel enthält. Dazu benutzen wir eine Funktion die von Phaser bereitgestellt wird `Game` und übergeben dieser Funktion unser Konfigurationsobjekt als Parameter.

```js
var config = {
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config);

function preload() {
}

function create () {
}
```
> Unser Spiel würd nun schon funktionieren und die Funktionen ausführen. Das können wir auch testen, indem wir in diese Funktionen ein `console.log`schreiben. 

Wir fangen nun an, ein Bild hinzuzufügen.

```js
var config = {
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/bild1.png');
}

function create () {
  this.add.image(500, 200, 'sky');
}
```
> Mittels `this` kann auf Werte und Funktionen eines Objekts zugegriffen werden. Dieses Objekt stellt die Funktion `image` zur Verfügung an die wir mittels eines weiteren Objekts `load` kommen. Damit können wir ein Bild laden und ihn einen Namen geben (erster Parameter ist der Name und der zweite ist der Pfad zum Bild).

> In der Create Funktion wird das Bild nun dargestellt mittels dem Objekt `add` und der Funktion `image`. Da geben wir die Position auf der X-Achse und der Y-Achse an um zum Schluss den Namen des Bildes angeben zu können. Die Position 0/0 ist in Phaser in der linken oberen Ecke.

Unser kompletter Code sieht also nun wie folgt aus: 

```html
<!DOCTYPE html>
<html>

  <head>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
  </head>

  <body>
    <script>
      var config = {
        width: 800,
        height: 600,
        backgroundColor: '#4488aa',
        scene: {
          preload: preload,
          create: create
        }
      };

      var game = new Phaser.Game(config);

      function preload() {
        this.load.image('sky', 'assets/bild1.png');
      }

      function create () {
        this.add.image(500, 200, 'sky');
      }
    </script>
  </body>
</html>
```
