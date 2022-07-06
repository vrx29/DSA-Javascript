/* 
*   Problem Statement :
*   Given two finite non-empty sets. find their cartesian product.
*
*   Ideation
*   In mathematics, specifically set theory the cartesian product of two sets A and B denoted 
*   by A x B is the set of all ordered pairs (a,b) where a is in A and b is in B.
*
*   const A = [1,2]
*   const B = [3,4,5]
*   A x B = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
*/
const array1 = [1,2]
const array2 = [3,4]

function cartesianProduct(arr1, arr2){
    const res = []
    for(let i of arr1){
        for(let j of arr2){
            res.push([i,j])
        }
    }
    return res;
}

console.log(cartesianProduct(array1, array2))

// Time complexity will be O(m*n) as both arrays may have different length
