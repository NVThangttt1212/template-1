 var $$ = document.querySelectorAll.bind(document);
 var $ = document.querySelector.bind(document);

const langs = $$(".nav__item button")

langs.forEach((lang, index) => {
    lang.onclick = function () {
        $('.dich.text__click').classList.remove('text__click')
        this.classList.add('text__click')
    }
})
