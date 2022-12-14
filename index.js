const hero = {
    elementId : 'hero',
    name : 'Wizard',
    avatar : '/images/wizard.png',
    health : '60',
    diceCount : 3
}

const monster = {
    elementId : 'monster',
    name : 'Orc',
    avatar : '/images/orc.png',
    health : '10',
    diceCount : 1
}

// so we want to Create a new constructor function called Character which takes our data as a paramenter and 
// Set up "this" for each of the 5 properties in our objects (eg: this.health = data.health)
function character(){
    this.elementId = data.elementId
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
//     Create a method called getCharacterHtml that performs the same tasks as our current renderCharacter function.Create 
//     two new instances of Character. One for a hero, called "wizard", and one for a monster, called "orc". 
//    Render both of them on the page.Delete both the old renderCharacter function and the two lines of code at the
//    bottom of the page which invoke that function.
    this.getCharacterHtml= function(){
        const{elementId, name, avatar, health , diceCount} =  data;
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>        
    }
}

function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++){
        // so we are getting random numbers from 0-5 so we add +1 to make it 0-6
        newDiceRolls.push(Math.floor(Math.random()*6)+1)
    }
    return newDiceRolls;
}
getDiceRollArray(3)


function getDiceHtml(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6) + 1
    })
}

function renderCharacter(data){
    
`
}

renderCharacter(hero)
renderCharacter(monster)
