console.log('OK');

gsap.to('.flower' , {
  scale: 1.5,
  duration: 2,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%'
});

// gsap.to('.leaf' , {
//  scale: 2,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   transformOrigin: '50% 50%'
// });

gsap.from('.letter' , {
 y: -500,
 ease: 'back',
  duration: 1,
  stagger: .25
});

