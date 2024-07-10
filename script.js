// Displaying data from data.json file
document.addEventListener("DOMContentLoaded", () => {
  fetch("db/data.json")
    .then((response) => response.json())
    .then((data) => {
      const projectsContainer = document.getElementById("projects-list");

      data.projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-container");
        projectDiv.innerHTML = `
            <div class="image">
              <img src="${project.image}" width="200px" height="200px" alt="${project.name} icon">
            </div>
            <div class="flex-col-between">
            <div class="content">
              <div class="name">${project.name}</div>
              <div class="timeline">${project.timeline}</div>
              <div class="description">${project.description}</div>
              <div class="flex-row">
                ${project.light
                  .map((item) => `<div class="light">${item}</div>`)
                  .join("")}
              </div>
              <div class="flex-row links">
                ${project.links
                  .map(
                    (badge) => `
                  <a href="${badge.link}" target="_blank" class="badge badge-icon" style="">
                    <img style="filter: invert(1); width: 12px; height: "12px" src="${badge.badgeIcon}" alt="Badge Icon">
                    ${badge.badgeText}
                  </a>
                `
                  )
                  .join("")}
              </div>
            </div>
            </div/>
          `;
        projectsContainer.appendChild(projectDiv);
      });

      const skillsContainer = document.getElementById("badges");
      data.skills.forEach((skill) => {
        const span = document.createElement("span");
        span.classList.add("badge");
        span.textContent = skill.name;
        skillsContainer.appendChild(span);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});


// Displaying Data from app.json file
document.addEventListener("DOMContentLoaded", () => {
  fetch("db/app.json")
    .then((response) => response.json())
    .then((data) => {
      const menuContainer = document.getElementById("menu");
      
      data.menu.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("items-container");
        itemDiv.innerHTML = `
        <a href="${item.link}" tooltip="${item.tooltip}" flow="right">
          <div class="icon">
            <img src="${item.icon}"  width="24px" height="24px" alt="${item.alt}" />
          </div>
        </a>`;
        menuContainer.appendChild(itemDiv);
      });
      
      const contactsContainer = document.getElementById("contact-list");
      data.contacts.forEach((contact) => {
        const contactDiv = document.createElement("div");
        contactDiv.innerHTML = `
          <a href="${contact.link}" target="_blank" >
            <img class="icon" src="${contact.icon}" width="24px" height="24px" alt="${contact.alt}" />
          </a>`;
        contactsContainer.appendChild(contactDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
