var paddleSpeed = 30;
var windowHeight = window.innerHeight
var windowWidth = window.innerWidth
var ball = document.getElementById('ball')
var leftPaddle = document.getElementById('left-paddle')

// These convert % to pixels
  var leftPaddleY = (parseInt(leftPaddle.getAttribute("y")) / 100) * windowHeight
  leftPaddle.setAttribute("y", leftPaddleY);

  var ballX = (parseInt(ball.getAttribute("cx")) / 100) * windowWidth
  ball.setAttribute("cx", ballX)

  var ballY = (parseInt(ball.getAttribute("cy")) / 100) * windowHeight
  ball.setAttribute("cy", ballY)
//

$(window).keydown(keyDownHandler);

function keyDownHandler(e){ //When a key is pressed we figure out which one and we handle that action
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
  var xPos = parseInt(ball.getAttribute("cx"))

  function frame() {
    if((xPos - parseInt(ball.getAttribute("r"))) >= 72){
      xPos -= 3.5;
      ball.setAttribute("cx", xPos)
    } else {
      checkCollision()
      clearInterval(id)
    }
  }
}

function checkCollision(){ //This method is meant to get the top & bottom of the paddle & ball and check if they overlap at all.
  paddleTop = parseInt(leftPaddle.getAttribute("y"))
  paddleBottom = parseInt(paddleTop) + 125

  ballTop = parseInt(ball.getAttribute("cy")) - parseInt(ball.getAttribute("r"))
  ballBottom = parseInt(ball.getAttribute("cy")) + parseInt(ball.getAttribute("r"))
}
