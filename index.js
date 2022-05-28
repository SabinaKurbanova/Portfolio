
window.onload = function(){
  // dark-light theme
  const ballSun = document.getElementById("ball")
  const ball = document.getElementById("label")
  const test = document.querySelectorAll('.about-me__text')
  ball.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
      ballSun.style.transform =('translateX(30px)')
    }else{
      ballSun.style.transform =('translateX(0)')
    }

  }
  // burger
  const burger =document.querySelector('.burger')
  const navbar = document.querySelector('.navbar__item');
  
  burger.addEventListener('click',() => {
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
  })
}
