// Tab Switching
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    const target = button.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

// Learn More Toggle
const learnMoreButtons = document.querySelectorAll(".learn-more");

learnMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const moreInfo = document.getElementById(targetId);
    moreInfo.style.display = moreInfo.style.display === "block" ? "none" : "block";
  });
});
