var width = ["426", "1024"];

var sm = new ScrollMagic.Controller({
  refreshInterval: 0,
});

var marquee = document.querySelector(".footer-marquee");

var scene = new ScrollMagic.Scene({
  triggerElement: marquee,
  triggerHook: "onEnter",
  offset: 0,
  duration: window.innerHeight + marquee.offsetHeight * 2,
});

scene.on("progress", function ({ progress }) {
  var startingOffset = 200;
  if (window.innerWidth >= width[0] && window.innerWidth <= width[1]) {
    startingOffset = 250;
  }
  if (window.innerWidth > width[0]) {
    var amount = -600;
    console.log("!!!!!!");
    marquee.style.transform = `translate3d(0, 0, 0) translateX(${amount * progress + startingOffset
      }px)`;
  }

  // change this number to increase or decrease the speed
});

scene.addTo(sm);

//for previous sponsors

var sm1 = new ScrollMagic.Controller({
  refreshInterval: 0,
});

var marquee1 = document.querySelector(".footer-marquee1");

var scene1 = new ScrollMagic.Scene({
  triggerElement: marquee1,
  triggerHook: "onEnter",
  offset: 0,
  duration: window.innerHeight + marquee1.offsetHeight * 2,
});

scene1.on("progress", function ({ progress }) {
  var startingOffset = -230;
  if (window.innerWidth >= width[0] && window.innerWidth <= width[1]) {
    startingOffset = -100;
  }
  if (window.innerWidth > width[0]) {
    var amount = 600;
    console.log("!!!!!!");
    marquee1.style.transform = `translate3d(0, 0, 0) translateX(${amount * progress + startingOffset
      }px)`;
  }

  // change this number to increase or decrease the speed
});

scene1.addTo(sm1);



AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 1500,
    easing: 'linear',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});


