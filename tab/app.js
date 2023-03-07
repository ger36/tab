const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id; 
    if (id) {
        //toggling the active status from the buttons
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hiding the content from other sections
        articles.forEach(function(article) {
            article.classList.remove("active");
        });
        //making the id active
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});