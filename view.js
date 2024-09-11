updateView()
function updateView() 
{
    html.innerHTML = /*HTML*/ `
    <div>Hei</div>
    `
} 

function getRandomPerson()
{
   let random = Math.floor(Math.random()*10)
    if(random == 1)
        {
           let m = document.getElementById('you-meet').innerHTML = /*html*/
            `
            <div> Eskil</div><br>
            <div>Hva tenker du om LoC eller GM?</div>
            `
            return m;
        }


    
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
