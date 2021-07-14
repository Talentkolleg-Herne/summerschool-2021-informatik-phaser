var WIDTH = 1024;
var HEIGHT = 800;

var config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  scene: {
    preload: preload,
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
var ballY = 1 * Math.random() ;

function preload() {
  this.load.image('paddle', 'assets/images/paddle.PNG');
}

function create() {
  paddleLeft = this.add.rectangle(50, 350, 25, 100, 0xffffff)
  paddleRight = this.add.rectangle(950, 350, 25, 100, 0xffffff)
  ball = this.add.rectangle(500, 300, 25, 25, 0xffffff)

  this.physics.add.existing(paddleLeft, false);
  this.physics.add.existing(paddleRight, false);
  this.physics.add.existing(ball, false);

  paddleLeft.body.setCollideWorldBounds(true);
  paddleRight.body.setCollideWorldBounds(true);
  ball.body.setCollideWorldBounds(true);
  ball.body.onWorldBounds = true;

  this.physics.add.collider(
    paddleRight,
    ball,
    function (paddle, ball) {
      ballX *= -1;
    }
  )

  this.physics.add.collider(
    paddleLeft,
    ball,
    function (paddle, ball) {
      ballX *= -1;
    }
  )

  this.physics.world.on('worldbounds', function (body, up, down, left, right) {
    if (up || down) {
      ballY *= -1;
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
