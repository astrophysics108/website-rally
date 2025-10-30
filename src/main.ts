import './style.css'
import icon from "/newrallylogo.png";
import rallypic from "/rally.png";

function createMainPage() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    </head>
      <div class="heading">
      <div class = "container">
        <div>
          <img class="logo" src="${icon}" alt="Rally Logo"/>
        </div>
        <div>
          <h1>WELCOME TO</h1>
          <img class="rally-pic" src="${rallypic}" alt="Rally"/>
          <p>A community project where everyone adds their own touch to the website</p>
          <div class="button">
                <button onclick="document.location='./links.html'">To the pages!!!</button>
            </div>
        </div>
      </div>
      </div>
        
     
      <div class="credits">
        <h4>Credits!</h4>
        <br>
        <p>Youthacks - infrastructure and hosting<br>
        KittyCat - site logo <br>
        Noololly - site design and organiser<br>
        Lenny - organiser<br>
        Mattsoh - organiser<br>
        </p>
      </div>
      </div>
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
