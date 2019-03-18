function getDayName(dateString) {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // getDay returns a number anywhere from 0 to 6;
  let day = new Date(dateString).getDay();
  let dayName = daysOfTheWeek[day];
  console.log(dayName);
  return dayName;
}

let date = new Date();
getDayName(date);
