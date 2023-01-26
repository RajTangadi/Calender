const currentDate = document.querySelector(".current-date"),
  days = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalender = () => {
  let firstDateOfMonth = new Date(currYear, currMonth, 1).getDay(), // getting first date of month
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDate(), // getting last day of month
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  //   creating li of previous month last days
  for (let i = firstDateOfMonth; i > 0; i--) {
    liTag += `<li class = "inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  //   creating li of all days of current month

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class = "${isToday}">${i}</li>`;
  }

  //   creating li of next month first days

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class = "inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  days.innerHTML = liTag;
};
renderCalender();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalender();
  });
});
