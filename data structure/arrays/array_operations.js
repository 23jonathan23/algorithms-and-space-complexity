let strings = 
['a', 'b', 'c', 'd']
//4x4 = 16 bytes of storage

//lookup
string[0] //O(1)

//push
strings.push('e') //O(1)

//pop
strings.pop() //O(1)

//unshift
strings.unshift('x') //O(n)

//splice
strings.splice(2, 0, 'alien') //O(n)

console.log(strings)