// 914. X of a Kind in a Deck of Cards

// You are given an integer array deck where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

var hasGroupsSizeX = function (deck) {
    if (deck.length === 1) {
        return false
    } else {
        let frequency = []
        let mapped = {}
        const allEqual = arr => arr.every(val => val === arr[0]);
        for (let key of deck) {
            mapped[key] = (mapped[key] || 0) + 1
        }
        frequency = Object.values(mapped)
        frequency = frequency.sort()
        let min = frequency[0];
        let group = []
        for (let item in frequency) {
            group[item] = frequency[item]%min
        }
        return allEqual(group)
        // return group
    }

};

let deck = [1,1,1,2,2,2,3,3]

console.log(hasGroupsSizeX(deck));