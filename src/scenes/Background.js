import ScrollMagic from "../lib/ScrollMagic";

export default (rotatableAngle) => (
  [
    new ScrollMagic.Scene({offset:0, duration:1.5 * (document.body.scrollHeight - document.body.offsetHeight)})
      .setTween("#sun-moon-background",{transform: `rotate(${rotatableAngle}rad)`}), // Moon rise/set styling animation
    new ScrollMagic.Scene({offset:0, duration:document.body.scrollHeight - document.body.offsetHeight})
      .setTween(".particles-js-canvas-el",{backgroundColor: "#56869b"}), // Sky brighten
    new ScrollMagic.Scene({offset:0, duration:document.body.scrollHeight - document.body.offsetHeight})
      .setTween("#mountain-background",{filter: "grayscale(50%) contrast(80%) brightness(70%)"}) // Mountain visibility
  ]
)