const script = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${script}`)){
        link.classList.add('active');
    }
})