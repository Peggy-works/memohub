let categories = [
    "Meals", 
    "Snacks",
    "Beverages",
    "Water (oz or mls)",
    "Est. Total Calories",
    "Exercise & Minutes", 
    "Hours of Sleep",  
]

let radioIcons = [
    { name: 'morning', value: '1', classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'},
    { name: 'Afternoon', value: '2', classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'},
    { name: 'Evening', value: '3', classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'},

] 

let svgs = {
    morning: {classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'},
    day: {classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'},
    night: {classes: 'p-1 bi bi-brightness-alt-high-fill', width: '28', height: '36'} 
}

let categories2 = [
    ["Meals", "meals"], 
    ["Snacks", "snacks"],
    ["Beverages", "beverage"],
    ["Water (oz or mls)", "water"],
    ["Est. Total Calories", "calories"],
    ["Exercise & Minutes", "exminutes"], 
    ["Hours of Sleep", "sleephours"],  
]

export {
    categories,
    categories2,
    svgs,
    radioIcons
}