// anime({
//   targets: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine'
//   }
// });

// anime({
//   targets: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 1000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });

// anime({
//   targets: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 2000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 2000
//   }
// });

// anime({
//   targets: 'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500, delay: 3000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 3000
//   }
// });

var playPause = anime(
    {
        targets: ['div.barbell', 'div.plate'],
        translateY: [
        { value: 200, duration: 500 },
        { value: 0, duration: 800 }
        ],
        rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
        },
        delay: function(el, i, l){ return i * 1000},
        autoplay:false,
        loop:true
    },
    {
        targets: 'div.plate',
        translateY: [
        { value: 200, duration: 500 },
        { value: 0, duration: 800 }
        ],
        rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
        },
        delay: function(el, i, l){ return i * 1000},
        autoplay:false,
        loop:true
    }
  );

  var timeline = anime.timeline({
    autoplay:false,
    loop: false
  });

  timeline.add({
    targets: 'div.barbell',
    translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
    ],
    rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
    },
    opacity: 100
  });

  timeline.add({
    targets: 'div.plate.left',
    translateX: [
    { value: 150, duration: 500 }
    ],
    delay: function(el, i, l){ return i * 500},
    opacity: 100
  });

  timeline.add({
    targets: 'div.plate.right',
    translateX: [
    { value: -150, duration: 500 }
    ],
    delay: function(el, i, l){ return i * 500},
    opacity: 100
  });
  
  timeline.add({
    targets: 'div.stronger',
    opacity: 100,
    translateY: [
        {value:50, duration: 500}
    ]
  });

  document.querySelector('#boxes .play').onclick = timeline.play;
  document.querySelector('#boxes .pause').onclick = timeline.pause;