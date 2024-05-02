const body = document.body;

let scrollTimer;

function handleScroll() {
    body.classList.add('is-scrolling');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
        body.classList.remove('is-scrolling');
    }, 100);
}

window.addEventListener('scroll', handleScroll);