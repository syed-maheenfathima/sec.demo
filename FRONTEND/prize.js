//basic pay is 30 rs for 4km for the next 5km prize is 10rs for km for next 10km prize is 15rs for next 15km prize is 20rs user travel 19.5km

let distance1 = 19.5;
let b = 30;   
let fare = b;

if (distance1 > 4) {
  let step = Math.min(distance1 - 4, 5);   
  fare += step * 10;
}

if (distance1 > 9) {
  let step = Math.min(distance1 - 9, 10);  
  fare += step * 15;
}

if (distance1 > 19) {
  let step = distance1 - 19;              
  fare += step * 20;
}

console.log(fare); 
