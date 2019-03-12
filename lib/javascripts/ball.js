export function self(){
  return document.getElementById('ball');
}

export function setX(val){
  this.self().setAttribute("cx", val)
}

export function getX() {
  return parseInt(this.self().getAttribute("cx"))
}

export function setY(val){
  this.self().setAttribute("cx", val)
}

export function getY(){
  return parseInt(this.self().getAttribute("cy"))
}

export function getR(){
  return parseInt(this.self().getAttribute("r"))
}

export function convertFromPercent(){
  // This function runs on page load to convert thex,y position of the ball
  // (which exists as apercentage on page load to account for screen sizes)
  // into a pixal value
  var windowHeight = window.innerHeight
  var windowWidth = window.innerWidth

  var ballXPercent = (parseInt(this.self().getAttribute("cx")) / 100) * windowWidth
  this.setX(ballXPercent)

  var ballY = (parseInt(this.self().getAttribute("cy")) / 100) * windowHeight
  this.self().setAttribute("cy", ballY)
}
