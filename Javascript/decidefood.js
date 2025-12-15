function decideFood() {
    const mood = document.getElementById("mood").value;

    const foodOptions = {
        happy: ["Pizza", "Ice Cream", "Burger", "Pasta"],
        sad: ["Chocolate", "Fries", "Cupcakes", "Hot Coffee"],
        tired: ["Energy Drink", "Sandwich", "Noodles", "Smoothie"],
        excited: ["Tacos", "Sushi", "BBQ Wings", "Milkshake"],
        stressed: ["Tea", "Soup", "Dosa", "Fried Rice"]
    };

    const choices = foodOptions[mood];
    const randomFood = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("result").innerText = "You should eat: " + randomFood;
}