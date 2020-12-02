// Log a message to the console
console.log("Hello from Back to School!");

// Make viz a Global constant which is defined below and referenced below
let viz;

// Make page render dashboard (tasks)
// 1. Find the URL of the dashboard
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

// 2. Find the vizContainer on the page - document.get... references HTML
const vizContainer = document.getElementById("vizContainer");

// 3. Create viz options e.g. dashbaord dimensions, apply filters. {} indicate an 'object' looked up info from API documentation. Dashboard is pre-filtered to North
const options = {
  device: "desktop",
  Region: "North",
  Category: ["Furniture", "Technology"],
  onFirstInteractive: function () {
    console.log("The viz has loaded");
    document.getElementById("showViz").disabled = false;
    document.getElementById("hideViz").disabled = false;
  },
};

//4. Render viz - again looked up various parameters in {} from API docs
function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

//5. On click of Hide Viz, hide the dashboard
const hideVizButton = document.getElementById("hideViz");

hideVizButton.addEventListener("click", function () {
  viz.hide();

  // Show the show button
  document.getElementById("showViz").style.display = "inline";

  //Hide the hide button
  document.getElementById("hideViz").style.display = "none";
});

//6. On click of Show Viz, show the dashboard
const showVizButton = document.getElementById("showViz");

showVizButton.addEventListener("click", function () {
  viz.show();

  // Hide the show button
  document.getElementById("showViz").style.display = "none";

  // Show the hide button
  document.getElementById("hideViz").style.display = "inline";
});

//7. Export options
const exportToPDF = document.getElementById("exportToPDF");
exportToPDF.addEventListener("click", function () {
  viz.showExportPDFDialog();
});

const exportToCrossTab = document.getElementById("exportToCrossTab");
exportToCrossTab.addEventListener("click", function () {
  viz.showExportCrossTabDialog();
});

const exportToPowerPoint = document.getElementById("exportToPowerPoint");
exportToPowerPoint.addEventListener("click", function () {
  viz.showExportPowerPointDialog();
});

// Tell HTML to execute function above when page loads
document.addEventListener("DOMContentLoaded", initViz);
