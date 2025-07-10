$(document).ready(function () {
    loadLayout();
    loadContent('dashboard');
});

function loadLayout() {
    fetch('layout.html')
        .then(res => res.text())
        .then(text => $(text).html())
        .then((html) => $('.custom-container').html(html))
}

function loadContent(template) {
    fetch(template + ".html")
        .then(res => res.text())
        .then(text => $(text).html())
        .then((html) => $('.content').html(html))
}