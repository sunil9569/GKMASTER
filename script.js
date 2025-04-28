let isHindi = true;

function toggleLanguage() {
  if (isHindi) {
    document.getElementById("home").innerText = "Home";
    document.getElementById("categories").innerText = "Categories";
    document.getElementById("mocktest").innerText = "Mock Test";
    document.getElementById("about").innerText = "About Us";
    document.getElementById("contact").innerText = "Contact";
    document.getElementById("hero-title").innerText =
      "Prepare for Your Dream Government Job with GK Master!";
    document.getElementById("hero-subtitle").innerText =
      "Thousands of questions, mock tests, and daily quizzes - all in one place!";
    document.getElementById("start-practice").innerText = "Start Practicing";
    document.getElementById("give-mock").innerText = "Take Mock Test";
    document.getElementById("cat1").innerText = "SSC GK";
    document.getElementById("cat2").innerText = "Railway GK";
    document.getElementById("cat3").innerText = "Police GK";
    document.getElementById("cat4").innerText = "Banking GK";
    document.getElementById("cat5").innerText = "Static GK";
    document.getElementById("cat6").innerText = "Current Affairs";
    document.getElementById("footer-text").innerText =
      "© 2025 GK Master. All rights reserved.";
    document.getElementById("language-btn").innerText = "Switch Language";
    document.getElementById("logo").innerText = "GK Master";
  } else {
    document.getElementById("home").innerText = "होम";
    document.getElementById("categories").innerText = "कैटेगरीज";
    document.getElementById("mocktest").innerText = "मॉक टेस्ट";
    document.getElementById("about").innerText = "हमारे बारे में";
    document.getElementById("contact").innerText = "संपर्क करें";
    document.getElementById("hero-title").innerText =
      "अपने सपनों की सरकारी नौकरी की तैयारी कीजिए GK Master के साथ!";
    document.getElementById("hero-subtitle").innerText =
      "हजारों सवाल, मॉक टेस्ट और डेली क्विज़ – सब एक जगह!";
    document.getElementById("start-practice").innerText =
      "अभी अभ्यास शुरू करें";
    document.getElementById("give-mock").innerText = "मॉक टेस्ट दें";
    document.getElementById("cat1").innerText = "SSC GK";
    document.getElementById("cat2").innerText = "Railway GK";
    document.getElementById("cat3").innerText = "Police GK";
    document.getElementById("cat4").innerText = "Banking GK";
    document.getElementById("cat5").innerText = "Static GK";
    document.getElementById("cat6").innerText = "Current Affairs";
    document.getElementById("footer-text").innerText =
      "© 2025 GK Master. सर्वाधिकार सुरक्षित।";
    document.getElementById("language-btn").innerText = "भाषा बदलें";
    document.getElementById("logo").innerText = "GK Master";
  }
  isHindi = !isHindi;
}