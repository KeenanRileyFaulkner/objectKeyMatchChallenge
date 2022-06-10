var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const sizeTheSame = (obj1, obj2) => {
    let match;

    obj1.size === obj2.size ? match = true : match = false;
    return match;
}

const clattersTheSame = (obj1, obj2) => {
    let match;

    obj1.clatters === obj2.clatters ? match = true : match = false;
    return match;
}

const weighsTheSame = (obj1, obj2) => {
    let match;

    obj1.weight === obj2.weight ? match = true : match = false;
    return match;
}

const guessGifts = (listArr, presentArr) => {
    guesses = []

    presentArr.forEach(present => {
        listArr.forEach(toy => {
            if(sizeTheSame(toy, present) && clattersTheSame(toy, present) && weighsTheSame(toy, present)) {
                if(!guesses.includes(toy.name)) {
                    guesses.push(toy.name);
                }                
            }
        });
    });

    return guesses;
}

console.log(guessGifts(wishlist, presents));