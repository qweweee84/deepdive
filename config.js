const BASE_URL = "https://qweweee84.github.io/deepdive/Infographics/";

const infographicPages = [
    { title: "근감소증 예방 및 관리 인포그래픽", filename: "근감소증 예방 및 관리.html" },
    { title: "퇴행성 무릎 관절염 관리 인포그래픽", filename: "퇴행성 무릎 관절염 관리.html" },
    { title: "대상포진 예방 및 관리 인포그래픽", filename: "대상포진 예방 및 관리.html" },
    { title: "현명한 상속 및 증여 전략 인포그래픽", filename: "현명한 상속 및 증여 전략.html" },
    { title: "뇌 건강 및 치매 예방 인포그래픽", filename: "뇌 건강 및 치매 예방.html" },
    { title: "공황장애 인포그래픽", filename: "공황장애 극복.html" },
];

window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infographic-list");
  infographicPages.forEach(page => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = BASE_URL + page.filename;
    a.textContent = page.title;
    a.target = "_blank"; // 새 탭에서 열기
    li.appendChild(a);
    list.appendChild(li);
  });
});