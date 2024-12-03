// script.js

document.addEventListener('scroll', function () {
    let chapters = document.querySelectorAll('.story-chapter');
    let scrollTop = window.scrollY;

    chapters.forEach(function (chapter, index) {
        let chapterHeight = chapter.offsetHeight;
        let chapterTop = chapter.offsetTop;
        let scrollPosition = scrollTop + window.innerHeight;

        // Fade in/out effect based on scroll position
        if (scrollPosition > chapterTop + chapterHeight / 3) {
            chapter.style.opacity = 1;
        } else {
            chapter.style.opacity = 0.5;
        }

        // Parallax effect for images inside chapters
        let img = chapter.querySelector('img');
        if (img) {
            let parallaxEffect = (scrollTop - chapterTop) * 0.1;
            img.style.transform = `translateY(${parallaxEffect}px)`;
        }
    });
});
