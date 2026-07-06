const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
  localStorage.setItem("theme", "dark");
} else {
  localStorage.setItem("theme", "light");
}
 });

const settingsBtn = document.getElementById("settings-btn");
const panel = document.getElementById("settings-panel");

settingsBtn.addEventListener("click", function () {
  panel.classList.toggle("hidden");
});

const saved = localStorage.getItem("theme");

 if (saved === "dark") {
  document.body.classList.add("dark");
 }




const translations = {
  en: {
    name: "Dmytro Getman",
    profile: "Personal profile",
    right: "Right to work in Ireland",
    experience: "Work Experience",
    skills: "Key Skills",
    education: "Education",
    availability: "Availability",
    profileText: "Reliable and hard-working candidate looking for an entry-level role in Ireland, particularly warehouse, retail, or general operative work. Punctual, quick to learn new tasks, and comfortable with physically demanding work. Able to work independently or as part of a team, and available to start immediately with flexible hours.",
    rightText: "Eligible to work in Ireland under Temporary Protection. No employment permit required.",
    job1Title: "Painting & Renovation Support",
    job1Desc: "Helped prepare a room for renovation — stripped old paint and wallpaper from walls and cleared site waste.",
    job2Title: "Promotional Leaflet Distribution",
    job2Desc: "Distributed promotional leaflets in a public setting.",
    skill1: "Punctual, reliable, and hard-working",
    skill2: "Comfortable with physically demanding tasks (standing, lifting, repetitive work)",
    skill3: "Quick to learn new processes and follow instructions carefully",
    skill4: "Works well independently or as part of a team",
    skill5: "Polite, respectful, and calm under pressure",
    skill6: "Basic to intermediate computer skills — studied on a QQI Level 5 course in programming",
    skill7: "Languages: Ukrainian (native), Russian (fluent), English (conversational, good comprehension)",
    edu1Meta: "Computer Programming & Coding, QQI Level 5 2024 – 2025",
    edu1Desc: "Studied programming fundamentals, web authoring, and IT-related subjects.",
    edu2Meta: "Leaving Certificate 2022 – 2024",
    edu3Title: "Secondary School Education",
    avail1: "Available to start immediately",
    avail2: "Available for full-time or part-time work",
    avail3: "Flexible with working hours",
    downloadBtn: "Download CV (PDF)"
  },
  ua: {
    name: "Дмитро Гетьман",
    profile: "Про мене",
    right: "Право на роботу в Ірландії",
    experience: "Досвід роботи",
    skills: "Ключові навички",
    education: "Освіта",
    availability: "Доступність",
    profileText: "Надійний і працьовитий кандидат, який шукає роботу початкового рівня в Ірландії, зокрема на складі, у роздрібній торгівлі або як підсобний робітник. Пунктуальний, швидко навчається новим завданням і готовий до фізично важкої роботи. Може працювати самостійно або в команді, готовий розпочати роботу негайно, гнучкий графік.",
    rightText: "Має право працювати в Ірландії за програмою тимчасового захисту. Дозвіл на працевлаштування не потрібен.",
    job1Title: "Допомога з фарбуванням та ремонтом",
    job1Desc: "Допомагав готувати кімнату до ремонту — знімав стару фарбу та шпалери зі стін і прибирав будівельне сміття.",
    job2Title: "Розповсюдження рекламних листівок",
    job2Desc: "Розповсюджував рекламні листівки в громадських місцях.",
    skill1: "Пунктуальний, надійний і працьовитий",
    skill2: "Готовий до фізично важкої роботи (стояння, підняття вантажів, повторювані дії)",
    skill3: "Швидко навчається новим процесам і уважно дотримується інструкцій",
    skill4: "Добре працює самостійно або в команді",
    skill5: "Ввічливий, шанобливий і спокійний у стресових ситуаціях",
    skill6: "Базові та середні комп'ютерні навички — навчався на курсі програмування QQI Level 5",
    skill7: "Мови: українська (рідна), російська (вільно), англійська (розмовний рівень, добре розуміння)",
    edu1Meta: "Комп'ютерне програмування та кодування, QQI Level 5 2024 – 2025",
    edu1Desc: "Вивчав основи програмування, веброзробку та ІТ-дисципліни.",
    edu2Meta: "Атестат про повну загальну середню освіту 2022 – 2024",
    edu3Title: "Середня освіта",
    avail1: "Готовий розпочати роботу негайно",
    avail2: "Готовий до роботи на повний або неповний робочий день",
    avail3: "Гнучкий графік роботи",
    downloadBtn: "Download CV (PDF) Англійською"
  }
};

let currentLang = "en";

function updateLanguage() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });

  langBtn.textContent = currentLang === "en" ? "Українською" : "English";
}

const langBtn = document.getElementById("lang-btn");

langBtn.addEventListener("click", function () {
  if (currentLang === "en") {
    currentLang = "ua";
  } else {
    currentLang = "en";
  }
  localStorage.setItem("lang", currentLang);
  updateLanguage();
});


const savedLang = localStorage.getItem("lang");
  if (savedLang === "ua") {
     currentLang = "ua";
     updateLanguage();
}
