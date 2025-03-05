document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("./cv.json");
    const data = await response.json();
    console.log(data);

    const educationContainer = document.querySelector(".left-column");
    const workContainer = document.querySelector(".right-column");

    data.education.forEach((education) => {
      const eduElement = document.createElement("div");
      eduElement.classList.add("edu");

      const eduTitle = document.createElement("h4");
      eduTitle.classList.add("edu-title");
      eduTitle.innerHTML = `${education.utbildningstitel}`;

      const eduDetails = document.createElement("p");
      eduDetails.classList.add("edu-details");
      eduDetails.textContent = `${education.skola} ${education.period}`;

      eduElement.appendChild(eduTitle);
      eduElement.appendChild(eduDetails);
      educationContainer.appendChild(eduElement);
    });
    data.work.forEach((job) => {
      const jobElement = document.createElement("div");
      jobElement.classList.add("job");

      const jobTitle = document.createElement("h4");
      jobTitle.classList.add("job-title");
      jobTitle.textContent = `${job.yrkesroll}`;

      const jobDetails = document.createElement("p");
      jobDetails.classList.add("job-details");
      jobDetails.innerHTML = `${job.företag} ${job.period} ${job.rollbeskrivning}`;

      jobElement.appendChild(jobTitle);
      jobElement.appendChild(jobDetails);
      workContainer.appendChild(jobElement);
    });
  } catch (error) {
    console.error("Error loading JSON-file");
  }
});
