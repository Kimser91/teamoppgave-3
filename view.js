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

function getRandomObject() 
{
    
}