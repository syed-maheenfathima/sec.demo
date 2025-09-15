function calculateDistance() {
  let initialSpeed = 30;         // in km/h
  const maxSpeed = 120;          // max limit
  const totalTime = 96;          // in minutes
  const interval = 10;           // in minutes
  let currentSpeed = initialSpeed;
  let distance = 0;

  const fullIntervals = Math.floor(totalTime / interval);  // 96 / 10 = 9
  const remainingMinutes = totalTime % interval;           // 96 % 10 = 6

  for (let i = 0; i < fullIntervals; i++) {
    const timeInHours = interval / 60;
    distance += currentSpeed * timeInHours;

    // Double speed for next interval but cap at 120
    currentSpeed = Math.min(currentSpeed * 2, maxSpeed);
  }

  // Add remaining minutes, if any
  if (remainingMinutes > 0) {
    const timeInHours = remainingMinutes / 60;
    distance += currentSpeed * timeInHours;
  }

  console.log("Total distance traveled: " + distance.toFixed(2) + " km");
}

calculateDistance();
