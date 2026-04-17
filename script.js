
// Animates why students love this section..
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat h2");

  stats.forEach(stat => {
    let text = stat.innerText;

    if (text.includes("5")) {
      let count = 0;
      let interval = setInterval(() => {
        count++;
        stat.innerText = count + " min";
        if (count === 5) clearInterval(interval);
      }, 100);
    }

    if (text.includes("100")) {
      let count = 0;
      let interval = setInterval(() => {
        count += 10;
        stat.innerText = count + "%";
        if (count === 100) clearInterval(interval);
      }, 50);
    }
  });
});

// Breathing exercise 

$(document).ready(function () {

  $("#startBtn").click(function () {
    startBreathing();
  });

  function startBreathing() {
    let cycles = 3; // number of breathing cycles
    let count = 0;

    function breathe() {
      if (count >= cycles) {
        $("#instruction").text("Well done 💙");
        return;
      }

      // INHALE
      $("#instruction").text("Breathe in...");
      $("#circle").addClass("expand");

      setTimeout(() => {
        // HOLD
        $("#instruction").text("Hold...");
      }, 4000);

      setTimeout(() => {
        // EXHALE
        $("#instruction").text("Breathe out...");
        $("#circle").removeClass("expand");
      }, 6000);

      setTimeout(() => {
        count++;
        breathe(); // repeat cycle
      }, 10000);
    }

    breathe();
  }

});