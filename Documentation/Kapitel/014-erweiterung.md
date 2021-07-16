# Erweiterungen
Hier fasse ich einmal die Erweiterungen zusammen, die wir nachträglich eingebaut haben.

## Ball schneller werden lassen in x-Richtung
Um den Ball schneller werden lassen zu können bei jeder Berührung müssen wir drauf achten aus welcher Richtung wir kommen und können dann jenachdem welchen Wert ballX hat die Variable eröhen (wir müssen aufpassen, da der Ball von Rechts kommt der Wert Minus ist). 

Damit sehen unsere beiden Kollider nun wie folgt aus:

```js
// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Rechten Schläger und dem Ball hinzu
  this.physics.add.collider(
    paddleRight,
    ball,
    function (paddle, ball) {
      ballX += 1; // erhöhe ballX um eins, da wir hier von links kommen und daher der Wert minus ist.
      ballX *= -1;
    }
  )

  // fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Linken Schläger und dem Ball hinzu
  this.physics.add.collider(
    paddleLeft,
    ball,
    function (paddle, ball) {
      ballX -= 1; // vermindere ballX um eins, da wir hier von rechts kommen und daher der Wert minus ist.
      ballX *= -1;
    }
  )
```

## Ball zurücksetzen nachdem ein Spieler gewonnen hat
Um den Ball zurück setzen zu können, muss bei einer Rechten- oder Linken-Rand-Kollision der x und y Wert des Balles wieder auf den Ursprung gesetzt werden.

```js
// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Ball und dem oberen und unteren Bildschirmende hinzu
this.physics.world.on('worldbounds', function (body, up, down, left, right) {
  if (up === true || down === true) { // kann auch einfach nur up || down sein, da es ja schon true ist. Das || ist das oder Zeichen
    ballY *= -1; // *= ist gleichbedeutend mit ballY = ballY * -1. Das *= ist also ein Zugriff auf die Variable selbst mit dem Wert der dahinter steht
  }
  // prüft 
  if (left || right) {
    ball.x = 500;
    ball.y = 300;
  }
})
```

## Ball schneller werden lassen in y-Richtung
Möchte man den Ball auch in die y-Richtung schneller werden lassen, benötigt man hierfür eine neue Variable. Man hat hier nämlich das Problem, dass es wie bei der X-Richtung einmal positiv und einmal negativ sein kann, man allerdings im Unterschied zu X nicht weiß ob man eine negative Zahl hat oder eine positive. Daher kann man das vorher abfragen und anschließend richtig erhöhen.

```js
// fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Rechten Schläger und dem Ball hinzu
  this.physics.add.collider(
    paddleRight,
    ball,
    function (paddle, ball) {
      ballX += 1;
      if (ballY > 0) {
        ballY += 1;
      } else {
        ballY -= 1;
      }
      ballX *= -1;
    }
  )

  // fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Linken Schläger und dem Ball hinzu
  this.physics.add.collider(
    paddleLeft,
    ball,
    function (paddle, ball) {
      ballX -= 1;
      if (ballY > 0) {
        ballY += 1;
      } else {
        ballY -= 1;
      }
      ballX *= -1;
    }
  )
```

### Die Geschwindigkeit des Balles zurücksetzen
Da man die Geschwindigkeit des Balles immer erhöht und dieser Wert auch gespeichert bleibt, muss bei einem Punkt der Wert wieder zurück gesetzt werden.

```js
 // fügt einen Collider (prüft die Kollision zwischen zwei Objekten) für den Ball und dem oberen und unteren Bildschirmende hinzu
  this.physics.world.on('worldbounds', function (body, up, down, left, right) {
    if (up === true || down === true) { // kann auch einfach nur up || down sein, da es ja schon true ist. Das || ist das oder Zeichen
      ballY *= -1; // *= ist gleichbedeutend mit ballY = ballY * -1. Das *= ist also ein Zugriff auf die Variable selbst mit dem Wert der dahinter steht
    }
    if (left || right) {
      ball.x = 500;
      ball.y = 300;

      ballX = 1;
      ballY = 1;
    }
  })
``` 