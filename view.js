updateView()
function updateView() 
{
    html.innerHTML = /*HTML*/ `
    <div id="you-met">
    <div class="you_met-found__text">You met:</div>
    <div class="you_met-found__window"></div>
    <button class="you_met-found__button">Greet:</button>
</div>
<div id="road">


    <div id="car">

        <div id="car__front"></div>

        <div id="car__middle">

            <div class="door-container">
                <div id="front-left-door" class="door border door-left"></div>
                <div id="front-right-door" class="door border door-left"></div>
            </div>

            <div id="roof">
                <div class="front-window"></div>
                <div class="front-side-windows"></div>
                <div class="back-side-windows"></div>
                <div class="back-window"></div>
                <div class="roof-frame"></div>
            </div>

            <div class="door-container">
                <div id="back-left-door" class="door border door-right"></div>
                <div id="back-right-door" class="door border door-right"></div>
            </div>

        </div>

        <div id="car__back"></div>

        <div class="tyre-front-left tyre"></div>
        <div class="tyre-front-right tyre"></div>
        <div class="tyre-back-left tyre"></div>
        <div class="tyre-back-right tyre"></div>

    </div>

</div>
<div id="you-found">
    <div class="you_met-found__text">You found:</div>
    <div class="you_met-found__window"></div>
    <button class="you_met-found__button">Use?</button>
</div>
    `
    
    winOrLoseCheck()
} 

function startDriving() 
{
    let r = Math.floor(Math.random()*100)
    if(r < 20){getRandomPerson()}
    else if(r > 20){getRandomObject()}
}

function getRandomPerson() {
    let random = Math.floor(Math.random() * 4)
    if (random == 1) {
        let m = document.getElementById('you-meet').innerHTML = /*html*/
            `
            <div> Eskil</div><br>
            <div>Hva tenker du om LoC eller GM?</div>

            <button onclick="correctGreeting()">Det er det beste i verden</button>
            <button onclick="wrongGreeting()">Bare søppel</button>

            `
        return m;
    }
    else if (random == 2) {
        let m = document.getElementById('you-meet').innerHTML = /*HTML*/
            `
    <div> Rebecka</div><br>
    <div>Hva gjør dere?</div>

    <button onclick="correctGreeting()">Morramøte</button>
    <button onclick="wrongGreeting()">Gaming</button>

    `
        return m;
    }
    else if (random == 3) {
        let m = document.getElementById('you-meet').innerHTML = /*HTML*/
    `
    <div> Marie</div><br>
    <div>Er det lurt å skrive logg?</div>

    <button onclick="correctGreeting()">Ja</button>
    <button onclick="wrongGreeting()">Nei</button>
    `
        return m;

    }
    else {getRandomPerson()};

}


function getRandomObject() {
    let random = Math.floor(Math.random() * 5)
    if (random ==1){
        let m = document.getElementById("you-found").innerHTML = /*HTML*/
        `
            <div>Sprayboks</div>
            <div>Rød</div>

        <button onclick=>Aksepter</button>
        <button onclick=>Avslå</button>
        `
        return m;
    }
    else if (random ==2){
        let m = document.getElementById("you-found").innerHTML = /*HTML*/
        `
            <div>Wunderbaum</div>
            <div>Grønn</div>

        <button onclick=>Aksepter</button>
        <button onclick=>Avslå</button>
        `
        return m;
    }
    else if (random ==3){
        let m = document.getElementById("you-found").innerHTML = /*HTML*/
        `
            <div>Terning</div>
            <div>Rosa</div>

        <button onclick=>Aksepter</button>
        <button onclick=>Avslå</button>
        `
        return m;
    }
    else if (random ==4){
        let m = document.getElementById("you-found").innerHTML = /*HTML*/
        `
            <div>Eksos</div>
            <div>Krom</div>

        <button onclick=>Aksepter</button>
        <button onclick=>Avslå</button>
        `
        return m;
    }
    else {getRandomObject()};
}

    function correctGreeting(){
        multiplyer = 1;
        multiplyer++
        points = points * multiplyer
        document.getElementById("you-meet").innerHTML = 
        `
        <div>Correct!</div>
        `
    }

    function wrongGreeting(){
    multiplyer= 0.5
    points = points * multiplyer
    points = -5
    document.getElementById("you-meet").innerHTML = 
    `
    <div>Wrong!</div>
    `
    }

    function acceptItem(){
        points++
        startDriving()
    }

    function declineItem(){
        startDriving()
    }
    
    
    function changeColor() {
    
    
        if (!document.getElementById('car__front').style.backgroundColor == 'red') {
            document.getElementById('car__front').style.backgroundColor == 'red';
        }
    
        else if (!document.getElementById('car__middle').style.backgroundColor == 'red') {
            document.getElementById('car__middle').style.backgroundColor == 'red';
        }
    
        else if (!document.getElementById('front-left-door').style.backgroundColor == 'red') {
            document.getElementById('front-left-door').style.backgroundColor == 'red';
        }
        else if (!document.getElementById('front-right-door').style.backgroundColor == 'red') {
            document.getElementById('front-right-door').style.backgroundColor == 'red';
        }
        else if (!document.getElementById('roof').style.backgroundColor == 'red') {
            document.getElementById('roof').style.backgroundColor == 'red';
        }
    
        else if (!document.getElementById('back-left-door').style.backgroundColor == 'red') {
            document.getElementById('back-left-door').style.backgroundColor == 'red';
        }
        else if (!document.getElementById('back-right-door').style.backgroundColor == 'red') {
            document.getElementById('back-right-door').style.backgroundColor == 'red';
    
        }
        else if (!document.getElementById('car__back').style.backgroundColor == 'red') {
            document.getElementById('car__back').style.backgroundColor == 'red';
        }
    
    }

    function winOrLoseCheck() {
        if(points >= win) {
            winFunction();
        }
        else if(points <= lose) {
            loseFunction();
        }
    }
    
    function winFunction() {
        html.innerHTML = /*HTML*/ `
        <div>Gratulerer, du vant spillet!!</div>
        <button onclick="location.reload()">Spill igjen</button>
        <img src="plan/snoop-dogg-dancing.gif" alt="Snoop Dogg danser fordi du vant <3">
        `
    }
    
    function loseFunction() {
        html.innerHTML = /*HTML*/ `
        <div>Lol du tapte, noob</div>
        <button onclick="location.reload()">Spill igjen</button>
        <img src="plan/kto-kounotori.gif" alt="Du er en taper >:(">
        `
    }
