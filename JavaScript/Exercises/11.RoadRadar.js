function radar(speed, area) {
  const limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const limit = limits[area];

  const over = speed - limit;

  if (over <= 0) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
    return;
  }

  const status =
    over <= 20 ? "speeding" :
    over <= 40 ? "excessive speeding" :
    "reckless driving";

  console.log(
    `The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`
  );
}

radar(200, 'motorway')
