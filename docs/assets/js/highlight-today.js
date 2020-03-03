var days = ['Weekends', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekends'];
let today = new Date();
var day_of_week = days[today.getDay()];
let todays_card_title = document.getElementById(day_of_week);
todays_card_title.classList.add("bg-primary");
todays_card_title.classList.add("text-white");
todays_card_title.innerHTML = day_of_week + " (today)";