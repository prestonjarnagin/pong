var paddleSpeed = 30;
var windowHeight = window.innerHeight
var windowWidth = window.innerWidth
var leftPaddle = document.getElementById('left-paddle')

const ball = require('./ball')

// These convert % to pixels
  ball.convertFromPercent();

  var leftPaddleY = (parseInt(leftPaddle.getAttribute("y")) / 100) * windowHeight
  leftPaddle.setAttribute("y", leftPaddleY);
//

$(window).keydown(keyDownHandler);

function keyDownHandler(e){
  //When a key is pressed we figure out which one and we handle that action
  if (e.keyCode == 40){
    paddleY = parseInt(leftPaddle.getAttribute("y"))

    if ((paddleY + 140) < windowHeight) {
      leftPaddle.setAttribute("y", (paddleY + paddleSpeed));
    }
  } else if (e.keyCode == 38) {
    paddleY = parseInt(leftPaddle.getAttribute("y"))
    if (paddleY > 0) {
      leftPaddle.setAttribute("y", (paddleY - paddleSpeed));
    }
  } else if (e.keyCode == 32) {
    document.getElementById('start-text').style.display = "none";
    moveBall()
  }
}

function moveBall(){ //This method will move the ball every so many milliseconds
  var id = setInterval(frame, 10);

  function frame() {
    if((ball.getX() - ball.getR()) >= 72){
      ball.setX(ball.getX() - 3.5)
    } else {
      checkCollision()
      clearInterval(id)
    }
  }
}

function checkCollision(){ //This method is meant to get the top & bottom of the paddle & ball and check if they overlap at all.
  paddleTop = parseInt(leftPaddle.getAttribute("y"))
  paddleBottom = parseInt(paddleTop) + 125

  ballTop = ball.getY() - ball.getR()
  ballBottom = ball.getY() + ball.getR()

  if ((ballBottom > paddleTop && ballBottom < paddleBottom) || (ballTop < paddleTop && ballTop > paddleBottom)) {
    // Ball in within collision window of paddle

    var id = setInterval(frame, 10);

    function frame() {
      ball.setX(ball.getX() + 3.5)
      if (ball.getX() < -10) {
        clearInterval(id)
      }
    }
  }
  else{
    // Ball is not in collision window of paddle
    var id = setInterval(frame, 10);
    function frame() {
      ball.setX(ball.getX() - 3.5)
      if (ball.getX() < -20) {
        clearInterval(id)
        ball.setX(windowWidth/2)
      }
    }
  }
}
