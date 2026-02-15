var element = document.body;

function warnaBerubah() {
    element.classList.toggle("Dark");
    if (element.classList.constains('dark')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
}

var tema = localStorage.getItem("tema");