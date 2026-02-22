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

function renderJobs() {
  for (const job of allJobs) {
    console.log(job);
    const jobsContainer = document.getElementById("jobs-container");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
    
  <div class="card-body  bg-white rounded-lg">
    <div class='flex justify-between'>

    <div class="">
    <h2 class="card-title font-bold">${job.companyName}</h2>
    <p class="text-gray-500">${job.position}</p>

    <div class='flex w-50 py-5'>
    <p class="text-gray-500">${job.type}</p>
    <p>.</p>
    <p class="text-gray-500">${job.salary}</p>
    </div>
    
    <span id="not-applied-status" class="bg-[#eef4ff] px-4 py-1">Not Applied</span>

    <p class="text-gray-600 pt-3 pb-5">${job.description}</p>
    
   
    <div class="join gap-4">
      <input class="join-item btn" type="radio" name="options" aria-label="Interview" />
      <input class="join-item btn" type="radio" name="options" aria-label="Rejected" />
   </div>
   
    </div>

    <div id="delete-icon">
    <i class="fa-regular fa-trash-can text-gray-400"></i>
    </div>
    </div>
  </div>

`;
    jobsContainer.appendChild(newCard);
  }

  const totalTabCount = document.getElementById("tab-count");
  totalTabCount.innerText = allJobs.length;
  const totalCount = document.getElementById("total-count");
  totalCount.innerText = allJobs.length;
}
renderJobs();
