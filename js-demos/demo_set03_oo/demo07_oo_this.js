
const sanjay = {
    name: 'Sanjay',
    age: 30,
}

const shivanshi = {
    name: 'Shivanshi',
    age: 28,
}

var name='Global!'

function eat( food){
    console.log(`${this.name} is eating ${food.name} with calories ${food.calories}`);
}



eat({name:'salad', calories:100});