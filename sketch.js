var Sword, Sword_Image, EnemyG, Enemy_Image, Fruit1, Fruit2,
  Fruit3, Fruit4, FruitG, F1Image, F2Image, F3Image, F4Image, Score, GameOverImage

var GameOverSound
var KnifeSwordSound
var PLAY = 1;
var END = 0;
var gameState = 1;




function preload() {
  //load your images here 

  Sword_Image = loadImage("sword.png");
  F1Image = loadImage("fruit1.png");
  F2Image = loadImage("fruit2.png");
  F3Image = loadImage("fruit3.png");
  F4Image = loadImage("fruit4.png")
  Enemy_Image = loadAnimation("alien1.png", "alien2.png")
  GameOverImage = loadImage("gameover.png")
  GameOverSound = loadSound("gameover.mp3")
  KnifeSwordSound = loadSound("knifeSwooshSound.mp3")


}

function setup() {
  createCanvas(600, 600);
  //add code here

  //creating sword

  Sword = createSprite(40, 200, 20, 20);
  Sword.addImage(Sword_Image);
  Sword.scale = 0.7;

  EnemyG = new Group()
  FruitG = new Group()

  Score = 0
  fill("black")
  textSize(20)
  stroke(100)

}


function draw() {
  background("cyan")

  if (gameState === PLAY) {
    Sword.x = World.mouseX
    Sword.y = World.mouseY

    var select_item = Math.round(random(1, 5));
    if (World.frameCount % 100 === 0) {
      if (select_item == 1) {
        Fruit1()
      } else if (select_item == 2) {
        Enemy()
      } else if (select_item == 3) {
        Fruit2()
      } else if (select_item == 4) {
        Fruit3()
      } else {
        Fruit4()
      }
    }

    if (Sword.isTouching(FruitG)) {
      FruitG.destroyEach()
      Score = Score + 1
      KnifeSwordSound.play()

    } else

    if (Sword.isTouching(EnemyG)) {
      EnemyG.destroyEach()
      gameState = END;
      FruitG.destroyEach()
      EnemyG.setVelocityXEach(0)
      FruitG.setVelocityXEach(0)
      Sword.addImage(GameOverImage)
      Sword.scale = 2
      Sword.x = 300
      Sword.y = 200
      GameOverSound.play()

    }
  }

  drawSprites();

  text("Score: " + Score, 500, 50);
  //fill("black")
}


function Enemy() {

  var Enemy = createSprite(600, Math.round(random(30, 400)), 10, 10)

  Enemy.addAnimation("enemy_blinking", Enemy_Image)
  Enemy.velocityX = -6
  Enemy.scale = 0.75
  Enemy.lifetime = 150
  EnemyG.add(Enemy)

}

function Fruit1() {
  var Fruit1 = createSprite(600, Math.round(random(30, 400)), 10, 10)

  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit1.x = 600;
    Fruit1.velocityX = -(7 + (Score / 4));
  } else {
    Fruit1.x = 0;
    Fruit1.velocityX = 7 + (Score / 4)
  }

  Fruit1.addImage(F1Image)
  Fruit1.scale = 0.2
  Fruit1.lifetime = 150
  FruitG.add(Fruit1)
}

function Fruit2() {
  var Fruit2 = createSprite(600, Math.round(random(30, 400)), 10, 10)
  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit2.x = 600;
    Fruit2.velocityX = -(7 + (Score / 4));
  } else {
    Fruit2.x = 0;
    Fruit2.velocityX = 7 + (Score / 4)
  }
  Fruit2.addImage(F2Image)
  Fruit2.scale = 0.2
  Fruit2.lifetime = 150
  FruitG.add(Fruit2)
}

function Fruit3() {
  var Fruit3 = createSprite(600, Math.round(random(30, 400)), 10, 10)
  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit3.x = 600;
    Fruit3.velocityX = -(7 + (Score / 4));
  } else {
    Fruit3.x = 0;
    Fruit3.velocityX = 7 + (Score / 4)
  }

  Fruit3.addImage(F3Image)
  Fruit3.scale = 0.2
  Fruit3.lifetime = 150
  FruitG.add(Fruit3)
}

function Fruit4() {
  var Fruit4 = createSprite(600, Math.round(random(30, 400)), 10, 10)

  var set_position = Math.round(random(1, 2));
  if (set_position == 1) {
    Fruit4.x = 600;
    Fruit4.velocityX = -(7 + (Score / 4));
  } else {
    Fruit4.x = 0;
    Fruit4.velocityX = 7 + (Score / 4)
  }

  Fruit4.addImage(F4Image)
  Fruit4.scale = 0.2
  Fruit4.lifetime = 150
  FruitG.add(Fruit4)
}