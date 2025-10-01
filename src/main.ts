import './style.css'

function createMainPage() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="heading">
        <h1>Welcome to Rally!!</h1>
        <div>
          <p>A Hack Club community project where everyone adds their own touch to the website</p>
        </div>
        
      </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    createMainPage();
})

