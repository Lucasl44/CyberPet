const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const rabbit = document.getElementById("rabbit");
const confirm1 = document.getElementById("confirm");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const drink = document.getElementById("drink");
const animalDiv = document.getElementById("animalDiv");
const foodStatus = document.getElementById("foodStatus");
const drinkStatus = document.getElementById("thirstStatus");
const boredomStatus = document.getElementById("boredomStatus");
const display1 = document.getElementById("display");
const deathBox = document.getElementById("deathBox");
const nameDead = document.getElementById("nameDead");
const actions = document.getElementById("actions");
let deathStatus = false;

class Animal {
    constructor(species, name) {
        this._species = species;
        this._name = name;
    }
    get species () {
        return this._species;
    }
    get name () {
        return this._name;
    } 
}
class Health extends Animal {
    constructor (species, name) {
        super(species, name)
        this._hunger = 5;
        this._thirst = 5;
        this._boredom = 5;
    }
    get hunger () {
        return this._hunger;
    }
    get thirst () {
        return this._thirst;
    }
    get boredom () {
        return this._boredom;
    }
    hungerUp() {
        this._hunger++;
    }
    hungerDown() {
        this._hunger--;
    }
    thirstUp() {
        this._thirst++;
    }
    thirstDown() {
        this._thirst--;
    }
    boredomUp() {
        this._boredom++;
    }
    boredomDown() {
        this._boredom--;
    }
}
let theAnimal = ""
cat.addEventListener("click", () => {
    let spec = "cat";
    let name = prompt("Name?");
    theAnimal = new Health(spec, name);
    confirm1.style.display = "block";
    animalPic.src = "img/cat.png";
});
dog.addEventListener("click", () => {
    let spec = "dog";
    let name = prompt("Name?");
    theAnimal = new Health(spec, name);
    confirm1.style.display = "block";
    animalPic.src = "img/dog.png";
});
rabbit.addEventListener("click", () => {
    let spec = "rabbit";
    let name = prompt("Name?");
    theAnimal = new Health(spec, name);
    confirm1.style.display = "block";
    animalPic.src = "img/rabbit.png";
});
const statsdown = () => {
    theAnimal.hungerDown();
    theAnimal.thirstDown();
    theAnimal.boredomDown();
}
const HealthD = () => {
    statsdown();
    if (deathStatus){
        display1.style.display = "none";
        feed.style.display = "none";
        play.style.display = "none";
        drink.style.display = "none";
        nameDead.textContent = `${theAnimal.name} died.`
        deathBox.style.display = "block";
        animalPic.style.transform = "rotate(180deg)";
        animalPic.style.filter = "grayscale(100%)";
    }
    if (theAnimal.hunger == 0 || theAnimal.thirst == 0 || theAnimal.boredom == 0) {
        deathStatus = true;
    }

    if (theAnimal.hunger > 1 && theAnimal.hunger <= 3) {
        foodStatus.textContent = `${theAnimal.name} is starving.`;
    }
    else if (theAnimal.hunger >= 4 && theAnimal.hunger <= 7) {
        foodStatus.textContent = `${theAnimal.name} is hungry.`;
    }
    else if (theAnimal.hunger > 7) {
        foodStatus.textContent = `${theAnimal.name} is full.`;
    }


    if (theAnimal.thirst > 1 && theAnimal.thirst <= 3) {
        drinkStatus.textContent = `${theAnimal.name} is parched.`;
    }
    else if (theAnimal.thirst >= 4 && theAnimal.thirst <= 7) {
        drinkStatus.textContent = `${theAnimal.name} is thirsty.`;
    }
    else if (theAnimal.thirst > 7) {
        drinkStatus.textContent = `${theAnimal.name} doesn't need water`;
    }

    if (theAnimal.boredom > 1 && theAnimal.boredom <= 3) {
        boredomStatus.textContent = `${theAnimal.name} is bored.`;
    }
    else if (theAnimal.boredom >= 4 && theAnimal.boredom <= 7) {
        boredomStatus.textContent = `${theAnimal.name} is weary.`;
    }
    else if (theAnimal.boredom > 7) {
        boredomStatus.textContent = `${theAnimal.name} is happy.`;
    }
}

confirm1.addEventListener("click", () => {
    animalDiv.style.display = "none";
    confirm1.style.display = "none";
    actions.style.display = "block";
    setInterval(HealthD, 5000);
});

feed.addEventListener("click", () => {
    theAnimal.hungerUp();
    console.log(`You feed ${theAnimal.name}`);
})

play.addEventListener("click", () => {
    theAnimal.boredomUp();
    console.log(`You play with ${theAnimal.name}`);
})

drink.addEventListener("click", () => {
    theAnimal.thirstUp();
    console.log(`You give ${theAnimal.name} a drink`);
})
