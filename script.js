const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
  const today = new Date();
  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  
  //Make the second hand go
  const secondHandDegrees = 90 + (seconds*(360/60));
  if (secondHandDegrees == 360) secondHand.removeProperty('transition');
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  
  //Make the minute hand go
   const minuteHandDegrees = 90 + (minutes*6);
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;

//Make the hour hand go
   const hourHandDegrees = 90 + (hours*30);
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;

}


setInterval(setTime,1000);