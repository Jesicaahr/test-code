//RUN APPS : node test-code.js

// 1.	Buatlah 1 API untuk mengeluarkan deret fibonaci dengan kondisi, 
// urutan output harus descending dan tanpa memasukan bilangan genap.

// # contoh 1 	 
// input 		: 4
// output 		: 5 3 1 1 

// #contoh 2
// input 		: 6
// output 		: 21 13 5 3 1 1

function oddFibonaci(num){
    let arr = [1, 1]
    let a = 1
    let b = 1

    if(num  == 1 ) {
        arr = [1]
    }

    while (arr.length < num) {
        let result = a +b 
        if(result % 2 !== 0) {
            arr.push(result)
        }
        a = b
        b = result
    }
    
    let output = ''
    for(let i = arr.length -1; i >= 0; i--) {
        output += `${arr[i]} ` 
    }
    return output

}

console.log(oddFibonaci(4));
console.log(oddFibonaci(6));


// 2.	Buatlah 1 API untuk mencari jumlah kata terpanjang dari irisan 2 string berikut.
// String 1 (alfabet umum) 	: abcdefghijklmnopqrstuvwxyz
// String 2 			: <input>

// #contoh 1 :
// Input 	: abc
// output 	: 3

// #contoh 2 :
// Input 	: xxxxxxxxxxxxxxxxxxaxbcdefghzzzzzzzzzzzzzzzzzzzzzzzz
// output 	: 7

function longestWord(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arrAlphabet = alphabet.split('')
    let longest = 0

    let output =[];
    for(let x = 0; x <= arrAlphabet.length; x++) {
        for ( let i = 0; i < arrAlphabet.length; i++ )   
        {
            let output2=[]
            for ( let j = 0; j < arrAlphabet.length-i; j++ )
            {
                output2.push(arrAlphabet[j]);
            }
            output.push(output2.join(""));
        }
        arrAlphabet.shift()
    }

    for(let i = 0; i < output.length; i++) {
        if(string.indexOf(output[i]) !== -1) {
            let count = output[i].length
            if(longest < count) {
                longest = count
            }

        }
    }
    return longest;
}
console.log(longestWord('abc'));
console.log(longestWord('xxxxxxxxxxxxxxxxxxaxbcdefghzzzzzzzzzzzzzzzzzzzzzzzz'));

