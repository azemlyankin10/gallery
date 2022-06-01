window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".hero__title", {duration: 2, y: 30, opacity: 0, ease: "power4.out"})
  gsap.from(".hero__descr", {duration: 2, delay: 1, opacity: 0})
  gsap.from(".hero__btn", {duration: 2, y: 30, opacity: 0, ease: "power4.out"})

  gsap.from(".photos-wrap img:nth-child(1)", {duration: 1, delay: 1.3, opacity: 0, scale: 0.7, ease: "power4.out"})
  gsap.from(".photos-wrap img:nth-child(2)", {duration: 1, delay: 2.1, opacity: 0, scale: 0.7, ease: "power4.out"})
  gsap.from(".photos-wrap img:nth-child(3)", {duration: 1, delay: 2.5, opacity: 0, scale: 0.7, ease: "power4.out"})

  gsap.from(".photos__author", {duration: 2, delay: 2.8, opacity: 0})


  const burger = document.querySelector('.burger')
  const cross = document.querySelector('.close')

  const tl = gsap.timeline({paused: true});
  tl.fromTo(".menu", {duration: .3, opacity: 0, y: -300, display: "none"}, {duration: .3, opacity: 1, y: 0, delay: .2, display: "block"})
    .fromTo(".menu__nav", {duration: .5, y: 20, opacity: 0}, {duration: .5, y: 0, opacity: 1})
    .fromTo(".social", {duration: .5, y: 20, opacity: 0}, {duration: .5, y: 0, opacity: 1})
    .fromTo(".menu__right", {duration: .5, y: 20, opacity: 0}, {duration: .5, y: 0, opacity: 1})

  burger.addEventListener('click', () => {
    tl.play()
  })

  cross.addEventListener('click', () => {
    tl.reverse()
  })
})


