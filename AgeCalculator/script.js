let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let user = document.getElementById("result");

function calculateAge() {
  // Getting the user's birth date and creating a Date object
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // Getting today's date and creating a Date object
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  // Initialize the year difference
  let y3 = y2 - y1;

  // Calculate the month difference
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--; // Reduce the year difference if the current month is before the birth month
    m3 = 12 + m2 - m1; // Adjust the month difference
  }

  // Calculate the day difference
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--; // Reduce the month difference if the current day is before the birth day
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1; // Adjust the day difference
  }

  // Adjust for negative month difference
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and  <span>${d3}</span> days old.`;
}

// Helper function to get the number of days in a month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
