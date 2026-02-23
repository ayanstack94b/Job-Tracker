const allJobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Developer",
    location: "London, UK",
    type: "Full-time",
    salary: "£55,000 / year",
    description:
      "Develop scalable and high-performance user interfaces for global products.",
    status: "all",
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Engineer",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "€70,000 / year",
    description:
      "Design and maintain distributed cloud services with high availability.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "UI Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "AED 240,000 / year",
    description:
      "Build customer-facing web platforms focused on performance and usability.",
    status: "all",
  },
  {
    id: 4,
    companyName: "Siemens",
    position: "React Developer",
    location: "Munich, Germany",
    type: "Full-time",
    salary: "€65,000 / year",
    description:
      "Develop enterprise-level web applications for industrial automation systems.",
    status: "all",
  },
  {
    id: 5,
    companyName: "HSBC",
    position: "Software Engineer",
    location: "London, UK",
    type: "Full-time",
    salary: "£50,000 / year",
    description:
      "Maintain secure banking applications and optimize backend processes.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Shopify",
    position: "Product Developer",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "CAD 95,000 / year",
    description:
      "Enhance e-commerce platform features with scalable frontend architecture.",
    status: "all",
  },
  {
    id: 7,
    companyName: "SAP",
    position: "Frontend Intern",
    location: "Frankfurt, Germany",
    type: "Internship",
    salary: "€1,500 / month",
    description:
      "Support UI development and testing for enterprise resource planning tools.",
    status: "all",
  },
  {
    id: 8,
    companyName: "Emirates Group",
    position: "JavaScript Developer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "AED 210,000 / year",
    description:
      "Develop and maintain digital platforms for aviation and travel services.",
    status: "all",
  },
];

let currentTab = "all";

function renderJobs() {
  const jobsContainer = document.getElementById("jobs-container");
  jobsContainer.innerHTML = "";

  let filteredJobs;

  if (currentTab === "all") {
    filteredJobs = allJobs;
  } else {
    filteredJobs = allJobs.filter(function (job) {
      return job.status === currentTab;
    });
  }

  if (filteredJobs.length === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.innerHTML = `
      <div class="text-center py-16">
        <i class="fa-regular fa-folder-open text-4xl mb-4 text-gray-400"></i>
        <h2 class="text-xl font-semibold">
          No ${currentTab === "all" ? "" : currentTab} jobs available
        </h2>
        <p class="text-gray-500 mt-2">
          Nothing to show in this section.
        </p>
      </div>
    `;
    jobsContainer.appendChild(emptyDiv);

    // Update tab count for empty state
    document.getElementById("tab-count").innerText = 0;

    return;
  }

  for (const job of filteredJobs) {
    const newCard = document.createElement("div");

    let statusText;
    let statusClass;

    if (job.status === "all") {
      statusText = "Not Applied";
      statusClass = "bg-base-300";
    } else if (job.status === "interview") {
      statusText = "Interview";
      statusClass = "bg-green-100 text-green-600";
    } else if (job.status === "rejected") {
      statusText = "Rejected";
      statusClass = "bg-red-100 text-red-600";
    }

    let interviewClass = "btn";
    let rejectedClass = "btn";

    if (job.status === "interview") {
      interviewClass = "btn bg-green-500 text-white";
    }

    if (job.status === "rejected") {
      rejectedClass = "btn bg-red-500 text-white";
    }

    newCard.innerHTML = `
      <div class="card-body bg-white rounded-lg">
        <div class="flex justify-between">

          <div>
            <h2 class="card-title font-bold">${job.companyName}</h2>
            <p class="text-gray-500">${job.position}</p>

            <div class="flex w-50 py-5 gap-2">
              <p class="text-gray-500">${job.type}</p>
              <p>.</p>
              <p class="text-gray-500">${job.salary}</p>
            </div>

            <span class="status-label px-4 py-1 rounded ${statusClass}">
              ${statusText}
            </span>

            <p class="text-gray-600 pt-3 pb-5">${job.description}</p>

            <div class="join gap-4">
              <button 
                class="interview-btn join-item ${interviewClass}"
                data-id="${job.id}">
                Interview
              </button>

              <button 
                class="rejected-btn join-item ${rejectedClass}"
                data-id="${job.id}">
                Rejected
              </button>
            </div>
          </div>

          <div>
            <i 
              class="fa-regular fa-trash-can text-gray-400 delete-btn"
              data-id="${job.id}">
            </i>
          </div>

        </div>
      </div>
    `;

    jobsContainer.appendChild(newCard);
  }

  const interviewCount = allJobs.filter(function (job) {
    return job.status === "interview";
  }).length;

  const rejectedCount = allJobs.filter(function (job) {
    return job.status === "rejected";
  }).length;

  document.getElementById("total-count").innerText = allJobs.length;
  document.getElementById("interview-count").innerText = interviewCount;
  document.getElementById("rejected-count").innerText = rejectedCount;
  document.getElementById("tab-count").innerText = filteredJobs.length;
}

renderJobs();
const tabRadios = document.querySelectorAll('input[name="job-filter"]');

for (const radio of tabRadios) {
  radio.addEventListener("change", function (event) {
    currentTab = event.target.value;
    // console.log(currentTab);
    renderJobs();
  });
}

// ---------------- EVENT LISTENER SECTION ----------------

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    // Check which button was clicked
    const isInterview = event.target.classList.contains("interview-btn");
    const isRejected = event.target.classList.contains("rejected-btn");
    const isDelete = event.target.classList.contains("delete-btn");

    // If buttons were not clicked
    if (!isInterview && !isRejected && !isDelete) {
      return;
    }

    const dataId = Number(event.target.dataset.id);

    // Find the matching job object from array
    const job = allJobs.find(function (item) {
      return item.id === dataId;
    });

    if (!job) {
      return;
    }

    // Update status based on button clicked
    if (isInterview) {
      job.status = "interview";
    } else if (isRejected) {
      job.status = "rejected";
    } else if (isDelete) {
      const index = allJobs.findIndex(function (item) {
        return item.id === dataId;
      });
      allJobs.splice(index, 1);
    }

    renderJobs();
  });
