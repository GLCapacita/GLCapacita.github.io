function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JHcVIzTA85":
        Script1();
        break;
      case "6KJnuUwE5du":
        Script2();
        break;
      case "6gMtlwNrBCW":
        Script3();
        break;
      case "5uWgUKgE782":
        Script4();
        break;
      case "6VsauvM2MGH":
        Script5();
        break;
      case "6F3WIo2JxCA":
        Script6();
        break;
      case "6pDGY4qTXY6":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6bJoqTWM46B');
const duration = 750;
const easing = 'ease-out';
const id = '5nxpTPt2lOS';
const pulseAmount = 0.07;
const delay = 11396;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('66npbjcTT77');
const duration = 750;
const easing = 'ease-out';
const id = '6mmk74ffg4c';
const pulseAmount = 0.07;
const delay = 18415;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6DsOaHiZraK');
const duration = 750;
const easing = 'ease-out';
const id = '5pkUpNHVeIf';
const pulseAmount = 0.07;
const delay = 24761;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5kAx3Dc7eSZ');
const duration = 750;
const easing = 'ease-out';
const id = '6j7zxih3way';
const pulseAmount = 0.07;
const delay = 33875;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6E4GlvFlsH7');
const duration = 750;
const easing = 'ease-out';
const id = '6o3nurNUDVb';
const pulseAmount = 0.07;
const delay = 37006;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6VgRZlgy4VD');
const duration = 750;
const easing = 'ease-out';
const id = '6YrBqWu1Cmy';
const pulseAmount = 0.07;
const delay = 42864;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6gEkF5YPRwG');
const duration = 750;
const easing = 'ease-out';
const id = '5galQ0mJ4C9';
const pulseAmount = 0.07;
const delay = 47494;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
