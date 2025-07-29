window.onload = function() {
    alert("Halo! Selamat datang di halaman perkenalan Nisa");
};

const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆️ Scroll ke Atas";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "10px";
scrollBtn.style.border = "none";
scrollBtn.style.backgroundColor = "#e91e63";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#ffe4e1";
        item.style.transition = "0.3s";
    });
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "transparent";
    });
});

const instaLink = document.querySelector("a[href*='instagram']");
instaLink.addEventListener("click", function(e) {
    const confirmation = confirm("Kamu yakin mau buka Instagram Nisa?");
    if (!confirmation) {
        e.preventDefault();
    }
});
