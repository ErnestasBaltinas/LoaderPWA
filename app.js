if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('/LoaderPWA/loaderSW.js')
        .then(registration => console.log('Service Worker registered'))
        .catch(err => 'SW registration failed'));
}


document.querySelector(".loading-spinner-container").addEventListener("click", toggleClass);

function toggleClass() {
    var element = document.getElementsByClassName("loading-spinner")[0];
    element.classList.toggle("load-complete");
}