function hasCommonsElements(array1, array2) {
    if(!array2 || array2.length === 0) return false; //O(1)

    const hashTable = array1.reduce((acc, e) => { 
        if(!acc[e]) //O(n)
            acc[e] = true;
      
        return acc;
    } , {}) //O(n)
  
    for(let element of array2) //O(n)
        if(hashTable[element]) return true; //O(1)
  
    return false; //O(1)
  }
  //O(n) Time complexity
  //O(n) Space complexity

  function hasCommonsElements2(array1, array2) {
    return array1.some(e => array2.includes(e)); //O(n)
  }

  let arrayA = [1,2,4,5];
  let arrayB = [7,8,5];
  
  console.log(hasCommonsElements2(arrayA, arrayB));