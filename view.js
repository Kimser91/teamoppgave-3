updateView()
function updateView() 
{
    html.innerHTML = /*HTML*/ `
    <div>Hei</div>
    `
    winOrLoseCheck()
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
    document.getElementById("you-meet").innerHTML = 
    `
    <div>Wrong!</div>
    `
    }

    function aksepterItem(){


    }

    function avslåItem(){

        
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
        <button onclick="Location.reload()">Spill igjen</button>
        <img src="plan/snoop-dogg-dancing.gif" alt="Snoop Dogg danser fordi du vant <3">
        `
    }
    
    function loseFunction() {
        html.innerHTML = /*HTML*/ `
        <div>Lol du tapte, noob</div>
        <button onclick="Location.reload()">Spill igjen</button>
        <img src="plan/kto-kounotori.gif" alt="Du er en taper >:(">
        `
    }
