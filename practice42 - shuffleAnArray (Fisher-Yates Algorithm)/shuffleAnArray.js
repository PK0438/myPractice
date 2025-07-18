//shuffling an array using Fisher-Yates algorithm

const cards = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

shuffleArray(cards);

console.log(cards);

function shuffleArray(array) {
    for(let i = cards.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
}

//

function fisherYatesWithLogs(array) {
    console.log("🎯 Starting Fisher-Yates shuffle");
    console.log("Original:", array);
    
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        
        console.log(`\nStep ${shuffled.length - i}:`);
        console.log(`  i = ${i}, considering positions 0 to ${i}`);
        console.log(`  Random index chosen: ${randomIndex}`);
        console.log(`  Swapping positions ${i} and ${randomIndex}`);
        console.log(`  Before swap: [${shuffled.join(', ')}]`);
        
        // Swap
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        
        console.log(`  After swap:  [${shuffled.join(', ')}]`);
    }
    
    console.log(`\n🎉 Final result: [${shuffled.join(', ')}]`);
    return shuffled;
}

// Try it!
fisherYatesWithLogs(['Apple', 'Banana', 'Orange', 'Grape']);



//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
shuffleArray(numbers);
console.log(numbers);

// Pick 6 random numbers from the numbers array using Fisher-Yates algorithm
/**
 * Picks a specified number of random unique elements from an array.
 * 
 * This function creates a shallow copy of the input array and partially shuffles it
 * using the Fisher-Yates algorithm, ensuring that the selected elements are unique.
 * It then returns the last `count` elements from the shuffled portion.
 * 
 * @param {Array} array - The source array to pick elements from.
 * @param {number} count - The number of random elements to pick.
 * @returns {Array} An array containing `count` random unique elements from the input array.
 * 
 * // Explanation:
 * // 1. Make a shallow copy of the input array to avoid mutating the original.
 * // 2. Shuffle only the last `count` elements using Fisher-Yates algorithm.
 * // 3. Swap each element with a randomly chosen earlier element (including itself).
 * // 4. Return the last `count` elements from the shuffled array copy.
 */
function pickRandomElements(array, count) {
    const arrCopy = array.slice();  // Create a shallow copy of the input array
    for (let i = arrCopy.length - 1; i > arrCopy.length - 1 - count; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[i]];
    }
    return arrCopy.slice(arrCopy.length - count);
}

const sixRandomNumbers = pickRandomElements(numbers, 6);
console.log(sixRandomNumbers);


//program

   
    function fisherYatesShuffle(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {                                          // Loop from the last element down to the second element
            const j = Math.floor(Math.random() * (i + 1));                                  // Pick a random index from 0 to i (inclusive)
            [arr[i], arr[j]] = [arr[j], arr[i]];                                            // Swap the current element with the element at the random index
        }
        
        return arr;                                                                         // Return the shuffled array
    }


    document.getElementById('generateBtn').onclick = function() {
        const count = parseInt(document.getElementById('countSelect').value, 10);           // Get the number of elements to select from the dropdown  
        const numbers = Array.from({length: 100}, (_, i) => i);                             // Create an array of numbers from 0 to 99
        fisherYatesShuffle(numbers);                                                        // Shuffle the array using Fisher-Yates algorithm 
        const selected = numbers.slice(0, count);                                           // Select the first 'count' elements from the shuffled array 
        document.getElementById('result').textContent = selected.join(', ');                // Display the selected numbers in the element with id 'result'
    };