// Write your solution here!

const cats = ['Milo', "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const moreCats = [...cats, name]
    return moreCats;
}

function prependCat(name){
    const catsCopy = [name, ...cats];
    return catsCopy;
}

function removeLastCat(){
    const removeCat = cats.slice(0, -1)
    return removeCat;
}

function removeFirstCat(){
   const removeCat = cats.slice(1)
   return removeCat;
}