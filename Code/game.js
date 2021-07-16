var config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  scene: {
    create: create,
    update: update,
  },
  physics: {
    default: 'arcade',
  },
};

var game = new Phaser.Game(config);

var paddleLeft;
var paddleRight;
var ball;
var ballX = 1;
var ballY = 1;


function create() {
  // fügt die Rechtecke auf dem Bildschirm hinzu
  paddleLeft = this.add.rectangle(50, 350, 25, 100, 0xffffff)
  paddleRight = this.add.rectangle(950, 350, 25, 100, 0xffffff)
  ball = this.add.rectangle(500, 300, 25, 25, 0xffffff)

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
}


function update() {
  let cursors = this.input.keyboard.createCursorKeys();
  let wasd = this.input.keyboard.addKeys('W,S,A,D');

  ball.x += ballX;
  ball.y += ballY;

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
}
