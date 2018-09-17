import {TweenLite as Tween, Linear, TimelineLite, Expo} from 'gsap';

const scheduler1 = new TimelineLite() // Animation time schedule

// SVG Sections --> "วิศวพัฒน์" text drawing
for (let charIndex = 1; charIndex < 14; charIndex++) {
  const charSVG = document.querySelector(`path.char_${charIndex}`)
  charSVG.style.stroke = "#fff68f"
  charSVG.style.strokeDasharray = charSVG.getTotalLength()
  charSVG.style.ease = Linear.easeNone
  scheduler1.add(Tween.fromTo(`path.char_${charIndex}`, 0.2,{strokeDashoffset:charSVG.getTotalLength()},{strokeDashoffset:0}),0.2*(charIndex-1))
}
// Fill "วิศวพัฒน์" text with #fff68f (bright yellow) color
scheduler1.add(Tween.fromTo(`path`, 2.6,{fill:"#fff68f00", ease: Expo.easeIn},{fill:"#fff68f", ease: Expo.easeIn}), 0)

module.exports = scheduler1