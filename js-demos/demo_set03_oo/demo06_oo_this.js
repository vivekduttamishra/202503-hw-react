
const sanjay = {
    name: 'Sanjay',
    age: 30,
}

const shivanshi = {
    name: 'Shivanshi',
    age: 28,
}

function eat( food){
    console.log(`${this.name} is eating ${food.name} with calories ${food.calories}`);
}

sanjay.eat=eat;
shivanshi.eat=eat;

//who is eating here!
shivanshi.eat( {name:'chicken', calories:450});


eat({name:'salad', calories:100});