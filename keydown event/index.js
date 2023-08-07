const getActivityBtn = document.getElementById("getActivityBtn");
const activityContainer = document.getElementById("activityContainer");

getActivityBtn.addEventListener("click", () => {
  // Clear any previous activity
  activityContainer.innerHTML = "";

  // Add a spinner while loading
  const spinner = document.createElement("div");
  spinner.classList.add("spinner-border");
  activityContainer.appendChild(spinner);

  fetch("https://apis.ccbp.in/random-activity")
    .then((response) => response.json())
    .then((data) => {
      // Remove the spinner
      activityContainer.removeChild(spinner);

      // Display the random activity
      const activity = data.activity;
      const activityText = document.createElement("p");
      activityText.textContent = `Random Activity: ${activity}`;
      activityContainer.appendChild(activityText);
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching activity:", error);
    });
});
