// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length; //O(1)
    
    for(var i =0; i<len-1; i++) { //O(n)
       for(var j = i+1;j<len; j++) { //O(n)
          if (arr[i] + arr[j] === sum)
              return true; //O(1)
       }
    }
  
    return false; //O(1)
}

//O(n^2) Time complexity
//O(1) Time complexity
  
// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i]))
            return true;
        
        mySet.add(sum - arr[i]);
    }

    return false;
}

//O(n) Time complexity
//O(n) Space complexity