function getFirstElement (arr){
    if (arr) {
        return arr[0]; 
    }
    return null
    
    }
    const numbers = [1, 2, 3];
    const words = ["apple","banana","cherry"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);