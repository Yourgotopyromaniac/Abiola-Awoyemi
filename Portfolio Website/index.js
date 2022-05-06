function baffleText()
{
    const text =  baffle(".notbold");
    text.set({
      characters: '░▒░░██░███▓ █ ░██ ██░░ █▒ ▓██░ ░',
            speed: 300
    });

    const text2 =  baffle(".boldtext");
    text.set({
      characters: '░▒░░██░███▓ █ ░██ ██░░ █▒ ▓██░ ░',
            speed: 300
    });

    text.start();
    text.reveal(2500);

    text2.start();
    text2.reveal(2500);
}

setTimeout(() => {baffleText();}, 4050);

const switchButton = document.getElementById("d-m-switch");

function darkMode() 
{
  document.getElementById("body-light").classList.toggle("body-dark");
  document.getElementById("loading-text").classList.toggle("loading-text-dark");
  document.getElementById("start").classList.toggle("ball-dark");
  document.getElementById("ball1").classList.toggle("ball-dark");
  document.getElementById("ball2").classList.toggle("ball-dark");
  document.getElementById("ball3").classList.toggle("ball-dark");
  document.getElementById("end").classList.toggle("ball-dark");
  document.getElementById("navbar").classList.toggle("nav-dark");
  document.getElementById("link1").classList.toggle("link-dark");
  document.getElementById("link2").classList.toggle("link-dark");
  document.getElementById("link3").classList.toggle("link-dark");
  document.getElementById("link4").classList.toggle("link-dark");
  document.getElementById("welcome-text").classList.toggle("welcome-text-dark");
  document.getElementById("welcome-section").classList.toggle("welcome-dark");
  document.getElementById("theme-sun").classList.toggle("link-dark");
  document.getElementById("theme-moon").classList.toggle("link-dark");
  document.getElementById("about").classList.toggle("about-dark");
  document.getElementById("skill1").classList.toggle("skill1-dark");
  document.getElementById("skill2").classList.toggle("skill2-dark");
  document.getElementById("skill3").classList.toggle("skill3-dark");
  document.getElementById("skill4").classList.toggle("skill4-dark");
  document.getElementById("skill5").classList.toggle("skill5-dark");
  document.getElementById("skill6").classList.toggle("skill6-dark");
  document.getElementById("logo").classList.toggle("logo-dark");
  document.getElementById("projects").classList.toggle("project-box-dark");
  document.getElementById("project1").classList.toggle("project-tile-dark");
  document.getElementById("project2").classList.toggle("project-tile-dark");
  document.getElementById("project3").classList.toggle("project-tile-dark");
  document.getElementById("project4").classList.toggle("project-tile-dark");
  document.getElementById("project5").classList.toggle("project-tile-dark");
  document.getElementById("proj-link1").classList.toggle("proj-link-dark");
  document.getElementById("proj-link2").classList.toggle("proj-link-dark");
  document.getElementById("proj-link3").classList.toggle("proj-link-dark");
  document.getElementById("proj-link4").classList.toggle("proj-link-dark");
  document.getElementById("proj-link5").classList.toggle("proj-link-dark");
  document.getElementById("proj-link6").classList.toggle("proj-link-dark");
  document.getElementById("proj-link7").classList.toggle("proj-link-dark");
  document.getElementById("proj-link8").classList.toggle("proj-link-dark");
  document.getElementById("proj-link9").classList.toggle("proj-link-dark");
  document.getElementById("proj-link10").classList.toggle("proj-link-dark");
  document.getElementById("uptosection").classList.toggle("upto-dark");
  document.getElementById("quote-box").classList.toggle("quote-dark");
  document.getElementById("topic1").classList.toggle("learning-box-dark");
  document.getElementById("topic2").classList.toggle("learning-box-dark");
  document.getElementById("topic3").classList.toggle("learning-box-dark");
  document.getElementById("topic4").classList.toggle("learning-box-dark");
  document.getElementById("topic5").classList.toggle("learning-box-dark");
  document.getElementById("topic6").classList.toggle("learning-box-dark");
  document.getElementById("hourglass").classList.toggle("hourglass-dark");
  document.getElementById("contact").classList.toggle("contact-dark");
  document.getElementById("back-to-top").classList.toggle("back-to-top-dark");
  document.getElementById("footer").classList.toggle("footer-dark");
  document.getElementById("svg").classList.toggle("svg-icon-dark");
  document.getElementById("svg2").classList.toggle("svg-icon-dark");
  document.getElementById("hire").classList.toggle("hire-btn-dark");
  document.getElementById("bar1").classList.toggle("span-dark");
  document.getElementById("bar2").classList.toggle("span-dark");
  document.getElementById("bar3").classList.toggle("span-dark");
  document.getElementById("footer-link1").classList.toggle("link-dark");
  document.getElementById("footer-link2").classList.toggle("link-dark");

  if(document.body.classList.contains("body-dark"))
  {
    localStorage.setItem("darkTheme", "enabled");
  }

  else
  {
    localStorage.setItem("darkTheme", "disabled");
  }

};

  if(localStorage.getItem("darkTheme") == "enabled")
  {
    switchButton.setAttribute("checked", "true")
    darkMode();
  }


var nickName = document.getElementById("name");
nickName.addEventListener('animationiteration', nameChange);
function nameChange() 
{
  if(nickName.innerHTML==="CIPHER")
  {
    nickName.innerHTML = "EMMANUEL";
  }

  else if( nickName.innerHTML==="EMMANUEL")
  {
    nickName.innerHTML= "BIOLA"
  }

  else
  {
    nickName.innerHTML="CIPHER"
  }
    
}

var cip = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});

function addScroll()
{
  document.body.classList.remove("no-scroll")
}

setTimeout(() => {addScroll();}, 4000);