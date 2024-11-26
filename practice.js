// Define stages for tomato growth
const tomatoStages = [
    { stage: "Germination", startDay: 0, endDay: 10, description: "Keep soil moist and warm (20–25°C).", className: "germination" },
    { stage: "Seedling", startDay: 10, endDay: 25, description: "Thin seedlings and provide sunlight.", className: "seedling" },
    { stage: "Vegetative", startDay: 25, endDay: 60, description: "Fertilize with nitrogen for growth.", className: "vegetative" },
    { stage: "Flowering", startDay: 60, endDay: 80, description: "Support pollination and fertilize with potassium.", className: "flowering" },
    { stage: "Harvesting", startDay: 80, endDay: 100, description: "Harvest ripe tomatoes; water regularly.", className: "harvesting" },
  ];
  
  // Initialize timeline
  function createTimeline(stages) {
    const timeline = document.getElementById("days-timeline");
    const tableBody = document.querySelector("#growth-table tbody");
    const tooltip = document.getElementById("tooltip");
  
    timeline.innerHTML = ""; // Clear previous timeline
    tableBody.innerHTML = ""; // Clear previous table
  
    // Create timeline blocks and table rows
    stages.forEach((stage, index) => {
      // Create timeline block
      const block = document.createElement("div");
      block.className = `stage-block ${stage.className}`;
      block.style.flexGrow = stage.endDay - stage.startDay;
      block.innerHTML = `${stage.stage} <br> (${stage.startDay}–${stage.endDay} days)`;
      block.dataset.description = stage.description;
  
      // Tooltip interactivity
      block.addEventListener("mouseenter", (e) => {
        tooltip.innerHTML = e.target.dataset.description;
        tooltip.style.opacity = "1";
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY - 30}px`;
      });
  
      block.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
      });
  
      timeline.appendChild(block);
  
      // Create table row
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${stage.stage}</td>
        <td>${stage.startDay}–${stage.endDay}</td>
        <td>${stage.description}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call function for tomato timeline
  createTimeline(tomatoStages);
  