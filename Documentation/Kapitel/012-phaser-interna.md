### Die Phaser Funktionen
Phaser stellt mehrere Funktionen zur Verfügung, die verschiedene Aufgaben haben:

* preload
  * Die Preload-Funktion wird ausgeführt beim starten von Phaser. Diese Funktion kann benutzt werden um z.B. Bilder und Sounds zu laden.
* create
  * Ist die 2. Funktion die Ausgeführt wird. Hier werden normalerweise die Bilder platziert und an die richtige Position mit der richtigen größe geschoben
* update
  * Die update-Funktion wird als letztes von unseren hier genannten Funktionen aufgerufen und wird immer so oft es geht ausgeführt. 

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
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser-arcade-physics.min.js"></script>
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
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser-arcade-physics.min.js"></script>
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
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser-arcade-physics.min.js"></script>
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

### Beginn mit unserem Projekt
Für unser Projekt können wir wie oben anfangen, können nur die Preload Funktion weglassen, da wir keinerlei Bilder benötigen. 

Wir überlegen uns welche Variablen wir brauchen und können diese erstmal Oben global anlegen um diese in allen Phaser-Funktionen verwenden zu können.
```js
var paddleLeft; // Linkes Paddle
var paddleRight; // Rechtes Paddle
var ball; // Ball
var ballX = 1; // Geschwindigkeit in X
var ballY = 1; // Geschwindigkeit in Y
```

Nun können wir die Create Funktion erstellen:
```js
function create() {

}
```
> der nun nachfolgende Code wird wenn nichts dabei steht, in die Create-Funktion geschrieben.

Innerhalb dieser Funktion können wir nun den Ball und die beiden Paddles erstellen und platzieren.

```js
// fügt die Rechtecke auf dem Bildschirm hinzu
paddleLeft = this.add.rectangle(50, 350, 25, 100, 0xffffff)
paddleRight = this.add.rectangle(950, 350, 25, 100, 0xffffff)
ball = this.add.rectangle(500, 300, 25, 25, 0xffffff)
```
> Erstellung dreier Rechtecke mittels der add.rectangle Funktion. Diese bekommt als erstes die Position für X, dann Y und anschließend die größe für X und Y mit. Der letzte Parameter setzt die Farbe.

Als nächstes müssen wir für unsere Objekte (Rechtecke) die Physik auch aktivieren und können gleichzeitig darunter auch die Kollision für die Welt mitgeben. Die Welt ist quasi das Fenster und die Kollision damit würde uns hindern, die Paddles außerhalb des Fensters zu schieben.

```js
// Erstellt für jeden vorhandenen Körper die Physik
this.physics.add.existing(paddleLeft, false);
this.physics.add.existing(paddleRight, false);
this.physics.add.existing(ball, false);

// Legt fest, dass die einzelnen Rechtecke nicht außerhalb des Bildschirms fliegen dürfen
paddleLeft.body.setCollideWorldBounds(true);
paddleRight.body.setCollideWorldBounds(true);
ball.body.setCollideWorldBounds(true);

// aktiviert die Funktion um die Berührung des Bildschirms zu überprüfen und entsprechend zu reagieren
ball.body.onWorldBounds = true;
```
> Aktiviert die Physik und die Kollision mit der Welt

Nun können wir festlegen, was genau passieren soll, wenn die Objekte miteinander Kollidieren:

```js
// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Rechten Schläger und dem Ball hinzu
this.physics.add.collider(
  paddleRight,
  ball,
  function (paddle, ball) {
    ballX *= -1;
  }
)

// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Linken Schläger und dem Ball hinzu
this.physics.add.collider(
  paddleLeft,
  ball,
  function (paddle, ball) {
    ballX *= -1;
  }
)

// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Ball und dem oberen und unteren Bildschirmende hinzu
this.physics.world.on('worldbounds', function (body, up, down, left, right) {
  if (up || down) { // kann auch einfach nur up || down sein, da es ja schon true ist. Das || ist das oder Zeichen
    ballY *= -1; // *= ist gleichbedeutend mit ballY = ballY * -1. Das *= ist also ein Zugriff auf die Variable selbst mit dem Wert der dahinter steht

  }
})
```
> Was passiert mit bei einer Kollision? Dafür können wir eine neue Kollision hinzufügen für den Linken und den Rechten Paddle mit dem Ball und zum Schluss für die Welt. Dabei ändern wir aber lediglich immer die Koordinaten für unsere globalen Variablen.

Wir wären nun mit der Create-Funktion durch und widmen uns nun der Update Funktion.

```js
function update() {

}
```
> der nun nachfolgende Code wird wenn nichts dabei steht, in die update-Funktion geschrieben.

Als erstes wollen wir uns die Tastatureingaben holen, dafür stellt Phaser uns eine Funktion bereit in der wir sowas Abfragen können und uns die Tasten geben lassen welche wir benötigen.

```js
let cursors = this.input.keyboard.createCursorKeys();
let wasd = this.input.keyboard.addKeys('W,S,A,D');
```
> Stellt uns Objekte zur Verfügung welche wir Anschließend wieder benutzen können um die Eingaben auf der Tastatur zu erfassen

Nun können wir die Eingaben abfangen:

```js
if (cursors.down.isDown) {
  paddleRight.y += 10;
} else if (cursors.up.isDown) {
  paddleRight.y -= 10;
}

if (wasd.S.isDown) {
  paddleLeft.y += 10;
} else if (wasd.W.isDown) {
  paddleLeft.y -= 10;
}
```
> Bewege die Paddles bei der Richtigen Tastatureingabe. Das Linke Paddle wird mit WASD und das Rechte mit den Pfeiltasten gesteuer

Nun fehlt nur noch die Bewegung des Balls. Diese können wir ebenfalls mit den globalen Variablen steuern und bewegen den Ball einfach mit der jeweiligen Geschwindigkeit pro Zug weiter.

```js
ball.x += ballX;
ball.y += ballY;
```