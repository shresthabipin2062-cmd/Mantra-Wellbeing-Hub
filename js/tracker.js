const calendar = document.getElementById("calendar");
const moodSelect = document.getElementById("mood");

let selectedDay = null;

// Generate current month
function generateCalendar() {
  const daysInMonth = new Date().getDate();
  
  for (let i = 1; i <= 30; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;

    day.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
      day.classList.add("selected");
      selectedDay = i;
    });

    // Load saved mood
    const savedMood = localStorage.getItem("day-" + i);
    if (savedMood) {
      day.classList.add(savedMood);
    }

    calendar.appendChild(day);
  }
}

// Save mood
function saveMood() {
  if (!selectedDay) return alert("Select a day");

  const mood = moodSelect.value;
  localStorage.setItem("day-" + selectedDay, mood);

  document.querySelectorAll(".day").forEach(d => {
    if (d.innerText == selectedDay) {
      d.classList.remove("happy","neutral","sad","stressed");
      d.classList.add(mood);
    }
  });
}

generateCalendar();