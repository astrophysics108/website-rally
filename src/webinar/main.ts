import './style.css'
import icon from "/public/webinar/photo.png";

function createMainPage() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

        <div class="heading">
            <img src="${icon}" alt="Webinar Log" class="logo"/>
        <div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    createMainPage();
})

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload();
    }
});
