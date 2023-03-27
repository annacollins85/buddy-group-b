/*
Create an object that acts a water bottle.
It will need a volume property to store how full or empty the bottle is. 
Volume will be 100 when bottle is full and 0 when empty. 
Give your water bottle methods for 
  - filling it up
  - pouring 10 units of water into it
    Note: You cannot exceed the bottle capacity.
  - drinking 10 units from it
    Note: You cannot drink more than its actual contents.
  - and telling if the bottle is full
  - and telling if the bottle is empty
We made a start on this here by giving you the skeleton of our object.
You have to implement the missing features according to the specification.
*/

// Here is your starting point:
let bottle = {
  volume: 0,
  fillUp: function () {
    this.volume = 100;
  },
  pour: function () {
    if (this.volume <= 90) {
      this.volume = this.volume + 10;
    } else {
      this.volume = 100;
    }
  },
  drink: function () {
    if (this.volume >= 10) {
      this.volume = this.volume - 10;
    } else {
      this.volume = 0;
    }
  },
  isFull: function () {
    this.volume === 100;
  },
  isEmpty: function () {
    this.volume === 0;
  },
};

/*
As you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access an Array stored inside an Object.
 - How to access a specific property of an object and set it.
You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients for your menus. It is stored in the "weeklyMealPlan" object.
Complete the exercises below.
*/

// Here is your
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: ["Chicken"],
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];

for (let weekday of weeklyMealPlan) {
  weekday.forEach(function (ingredient) {
    if (!weekendGroceriesToBuy.includes(ingredient)) {
      weekendGroceriesToBuy.push(ingredient);
    }
  });
}

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array

let weekendGroceriesToBuy = [];

Object.keys(weeklyMealPlan).forEach(function (day, index) {
  if (index === 5 || index === 6) {
    const ingredients = weeklyMealPlan[day];
    ingredients.forEach((ingredient) => {
      if (!weekendGroceriesToBuy.includes(ingredient)) {
        weekendGroceriesToBuy.push(ingredient);
      }
    });
  }
});

for (let weekday of weeklyMealPlan) {
  weekday.forEach(function (ingredient) {
    if (!weekendGroceriesToBuy.includes(ingredient)) {
      weekendGroceriesToBuy.push(ingredient);
    }
  });
}

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
*/
// Gather daily item counts into this object

let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

Object.keys(weeklyMealPlan).forEach(function (day, index) {
  const ingredientsArr = weeklyMealPlan[day];
  const amount = ingredientsArr.length;
  numberOfItemsPerWeek[day] = amount;
});

weeklyMealPlan[day];
weeklyMealPlan["monday"];
weeklyMealPlan.monday;

weeklyMealPlan.day;
