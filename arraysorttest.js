const sorter = (arr) => {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const result = [];
    let counter = 0;
    for (let letter of arr) {
        if (alphabet.includes(letter)) {
            result.push(letter);
            counter++;
        }
    }
    const odds = arr.filter(x => x % 2);
    var x = arr[x];
    var reSult = [];
    for (let x = 1; x < arr.length; x++) {
        if (arr[x] % 2 === 0) {
            reSult.push(arr[x]);
        }
    }

    console.log(' odds: ' + odds + ' evens: ' + reSult + ' chars ' + result);
};
sorter([5, 3, 4, 2, 1, 0, 7, 'i', 'h', 'k']);