function reverse(str) { //O(n)
    if(!str|| str.length < 2 || typeof str !== 'string') return null;
    
    let reversed = '';
    const totalItens = str.length - 1;
    for(let i = totalItens; i >= 0; i--) {
        reversed+=str[i]
    }

    return reversed;
}

function reverse2(str) { //O(n)
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Jonathan'))