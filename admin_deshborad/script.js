// Demo JSON 
const demoResponses = {
  Members: ["Data is working for now..."],
  Items: ["Data is working for now..."],
  Categories: ["Data is working for now..."],
  Records: ["Data is working for now..."],
  Transactions: ["Data is working for now..."],
  Products: {
    Smartphones: ["Flagship", "Mid-range", "Budget"],
    Laptops: ["Ultrabooks", "Gaming Laptops", "Business Laptops"],
    Desktops: ["Prebuilt PCs", "Custom Gaming Rigs", "Office Systems"]
  },
  StaffMembers: ["Data is working for now..."],
  OnlineOrders: ["Data is working for now..."],
  Settings: ["Data is working for now..."]
};

// render section
function renderSection(title, items) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const section = document.createElement("div");
  section.classList.add("category");

//   const heading = document.createElement("h2");
//   heading.textContent = title;
//   section.appendChild(heading);

  // nested categories 
  if (typeof items === "object" && !Array.isArray(items)) {
    for (const category in items) {
      const subHeading = document.createElement("h3");
      subHeading.textContent = category;
      section.appendChild(subHeading);

      const list = document.createElement("ul");
      items[category].forEach(subItem => {
        const li = document.createElement("li");
        li.textContent = subItem;
        list.appendChild(li);
      });
      section.appendChild(list);
    }
  } else {
    //  flat list 
    const list = document.createElement("ul");
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    section.appendChild(list);
  }

  content.appendChild(section);
}

async function loadSection(sectionName) {
  try {

        // const response = await fetch(`/api/${sectionName.toLowerCase()}`);
    // const data = await response.json();

    const data = demoResponses[sectionName];
    renderSection(sectionName, data);
  } catch (error) {
    console.error("Error fetching.....:", error);
    document.getElementById("content").innerHTML = `<p>Failed to load ${sectionName} data.....</p>`;
  }
}
