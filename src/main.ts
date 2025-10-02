import './style.css'
import icon from "/sword_placeholder.png";

function createMainPage() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="heading">
      <div>
        <img class="logo" src="${icon}" alt="Rally Logo"/>
      </div>
        <h1>Welcome to Rally!!</h1>
        <div>
          <p>A community project where everyone adds their own touch to the website</p>
        </div>
        
      </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    createMainPage();
})

