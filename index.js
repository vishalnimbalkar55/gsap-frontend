function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

const frameCount = 175;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = `./assets/intro-watch-face/DR_INTRO_${i
    .toString()
    .padStart(3, "0")}.webp`;
  //   img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 1,
    trigger: `#page`,
    start: `top top`,
    end: `200% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

let hero = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    scrub: 1,
    trigger: "#page",
    pin: true,
    // markers: true,
    scroller: `#main`,
    start: `top top`,
    end: `500% top`,
  },
});


// watch size dowm

hero
  .to(
    ".watch-face",
    {
      scale: 0.5,
      yPercent: -46,
      // duration:  0.1,
    },
    "-=1.40"
  )
  // watch white background reduce
  .to(
    ".page-Wrapper",
    {
      clipPath: `inset(26% 20%)`,
      // duration: 0.1,
    },
    "-=1.40"
  )
  // watch white background insde heaing text remove
  .to(
    ".website-hedding .left",
    {
      x: "4vw",
      opacity: 0,
      duration: 0.1,
    },
    "-=1.40"
  )
  .to(
    ".website-hedding .right",
    {
      x: "-4vw",
      opacity: 0,
      duration: 0.1,
    },
    "-=1.40"
  );


   // watch send hedding text added with transition
hero
  .to(
    ".heading-top-left",
    {
      x: "-4vw",
      opacity: 1,
      duration: 0.1,
    },
    "-=1.10"
  )
  .to(
    ".heading-bottom-right",
    {
      x: "4vw",
      opacity: 1,
      duration: 0.1,
    },
    "-=1.10"
  )
  .to(
    ".small-liner-wrapper span",
    {
      y: "0",
      opacity: 1,
      duration: 0.1,
    },
    "-=1.10"
  )
  .to(
    ".section-1-watch-svg",
    {
      y: "0",
 
      duration: 0.35,
    },
    "-=0.80"
  );


  hero
  .to(
    ".watch-shape-svg",
    {
      y: "-50%",
      duration: 0.35,
    },
    "-=0.70"
    // "-=0.90"
  )
  .to(
    ".watch-shape-svg .path-1",
    {
      strokeDashoffset:"0",
      // strokeDasharray: "100%,100%",
      // strokeDasharray:"330%, 500%",
      duration: 0.35,
    },
    "-=0.70"
    // "-=0.90"
  )
  .to(
    ".watch-shape-svg .path-2",
    {
      strokeDashoffset:"0",
      // strokeDasharray: "100%,100%",
      // strokeDasharray:"330%, 500%",
      duration: 0.30,
    },
    "-=0.65"
    // "-=0.90"
  )
  .to(
    ".index-1 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.58"
    // "-=0.90"
  )
  .to(
    ".index-2 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.56"
    // "-=0.90"
  )
  .to(
    ".index-3 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.54"
    // "-=0.90"
  )
  .to(
    ".index-4 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.52"
    // "-=0.90"
  )
  .to(
    ".index-5 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.50"
    // "-=0.90"
  )
  .to(
    ".index-6 .inner-line",
    {
      clipPath: `inset(0 0% 0px 0px)`,
      duration: 0.20,
    },
    "-=0.48"
    // "-=0.90"
  );




const left_svg_text= document.querySelectorAll(".svg-left-text-section .text-container .inner-text")

var left_svg_textArray = Array.from(left_svg_text);

// Reverse the array
left_svg_textArray.reverse();
const right_svg_text= document.querySelectorAll(".svg-right-text-section .text-container .inner-text")

var right_svg_textArray = Array.from(right_svg_text);

// Reverse the array
right_svg_textArray.reverse();

hero
.to(
  left_svg_textArray,
  {
    x: "0%",
    duration: 0.15,
    stagger:0.02
  },
  "-=0.40"
  // "-=0.90"
)

hero
.to(
  right_svg_text,
  {
    x: "0%",
    duration: 0.15,
    stagger:0.02
  },
  "-=0.40"
  // "-=0.90"
)

  // gsap.from('.path', {duration: 5, drawSVG:0, repeat:0, yoyo:true});
// hero.to(
//   ".heading-top-left",
//   {
//     x: "-4vw",
//     opacity: 1,
//     duration: 0.1,
//   },
//   "-=10%"
// );


// hero.to(
//   ".heading-top-left",
//   {
//     x: "-4vw",
//     opacity: 1,
//     duration: 0.1,
//   },
//   "-=10%"
// );
