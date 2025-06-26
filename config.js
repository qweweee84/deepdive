const BASE_URL = "https://qweweee84.github.io/deepdive/";

const infographicPages = [
    { title: "공황장애 인포그래픽", filename: "panic-disorder.html" },  
];

window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infographic-list");
  infographicPages.forEach(page => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = BASE_URL + page.filename;
    a.textContent = page.title;
    li.appendChild(a);
    list.appendChild(li);
  });
});
