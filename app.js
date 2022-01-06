var btn = document.querySelector(".burger")

btn.addEventListener("click", () => {
    document.querySelector(".respo").classList.remove("go")
    document.querySelector(".respo").classList.add("come")
    document.querySelector(".respo").style.opacity = "1"
    // document.body.style.overflow = 'hidden'
})
var links = document.querySelectorAll('.link2').forEach((el) => {
  el.addEventListener("click",(event)=> {
    event.preventDefault()
    console.log(el.querySelector("a").href)
    document.querySelector(".respo").classList.remove("come")
    document.querySelector(".respo").classList.add("go")

    setTimeout(()=> {
      document.querySelector(".respo").style.opacity = "0"
      window.location.href = el.querySelector("a").href;
    },500)
  })
  // document.body.style.overflow = 'scroll'
})
var respo = document.querySelector(".respo")
window.addEventListener("scroll",()=>{
  if (window.innerWidth <= 1000){
    console.log("hey")
    respo.classList.remove("come")
    respo.classList.add("go")
    setTimeout(()=> {
      respo.style.opacity = "0"
    },500)
  }
})




const swiper = new Swiper('.sw1', {
    // Optional parameters
    loop: true,
    speed: 10,
    autoplay: {
         delay: 4000
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.sw-next',
      prevEl: '.sw-prev',
    },
    
  });

 

  
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset 
      && (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset 
      
    );
  }
  function check(){
    var titres = document.querySelectorAll(".title");
    titres.forEach((el)=>{
      if (elementInViewport(el) == true){
        el.classList.add("start1")
      }
    })
    var subtitres = document.querySelectorAll(".subtitle");
    subtitres.forEach((el)=>{
      if (elementInViewport(el) == true){
        el.classList.add("start2")
      }
    })
    
    var txts = document.querySelectorAll(".txt-cont");
    txts.forEach((el)=>{
      if (elementInViewport(el) == true){
        el.classList.add("start3")
      }
    })
    var cards = document.querySelectorAll(".card");
    cards.forEach((el)=>{
      if (elementInViewport(el) == true){
        el.classList.add("appear")
      }
    })
    var foot = document.querySelector(".footer")
    if (elementInViewport2(foot) == true){
      foot.classList.add("appear")
    }
  }
  window.addEventListener("scroll",check);
  check()
  
  setInterval(()=> {
    var slide1 = document.querySelector(".acti")
    var slide2 = document.querySelector(".hi")

    slide1.classList.remove("acti")
    slide1.classList.add("hi")

    slide2.classList.remove("hi")
    slide2.classList.add("acti")
  },4000)
  var portfolio = document.querySelector(".port-swiper")
  var imgs = document.querySelectorAll(".carre")
  imgs.forEach((el) => {
    el.addEventListener("mouseover",()=>{
      el.querySelector(".txt-container").style.opacity = "1";
    })
    el.addEventListener("mouseout",()=>{
      el.querySelector(".txt-container").style.opacity = "0";
    })
    el.addEventListener("click",()=> {
      portfolio.style.opacity = 1
      portfolio.style.top = -document.querySelector("#portfolio").getBoundingClientRect().top +'px'
      console.log(document.querySelector("#portfolio").getBoundingClientRect().top + ' ' +portfolio.style.top)
      portfolio.style.zIndex = "1"
      document.body.style.overflow = 'hidden'
      
    })
  })
  var btn_x = document.querySelector(".x").addEventListener("click", ()=>{
    portfolio.style.opacity = 0;
    portfolio.style.zIndex = "-10"
    document.body.style.overflow = 'auto';

  })
  var photos = ['https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa58c3b36ca374dffe8ee_port1.jpeg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa5e13b36ca374dffe8f5_port2.jpeg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aad0d416f90126f4e859a_port3.jpeg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b90f8a2ec8d8276bfb9dc_port4.jpg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b910bede1286e5f007d0c_port5.jpg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9120a2ec8d8276bfb9e1_port6.jpg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9133ede1286e5f007d13_port7.jpg',
  'https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552aa58c3b36ca374dffe8ee_port1.jpeg'
  ]
  var swiper2 = new Swiper('.sw2', {
    // Optional parameters
    loop: false,
    speed: 10,
    // autoplay: {
    //      delay: 4000
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> <img src="'+ photos[index] +'" class="photo-item"> </span>';
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    
  });

  
  
