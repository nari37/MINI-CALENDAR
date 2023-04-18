 const monthNameE1 = document.getElementById("month-name");
 const weekdaysE = document.getElementById("week-name");
 const dayNumE = document.getElementById("day-number");
 const yearE = document.getElementById("year-num");

 const date = new Date();
 monthNameE1.innerText = date.toLocaleString("en",{
    month:"long"
 })
 weekdaysE.innerText = date.toLocaleString("en",{
    weekday:"long"
 })
 dayNumE.innerText = date.getDate();
 yearE.innerText = date.getFullYear();

 
 