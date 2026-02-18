let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
function intersection(arr1, arr2) {


    let result = [];   // Store common elements (without duplicates)

    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {

        // 1. Element exists in arr2
        // 2. Element is not already in result (avoid duplicates)
        if (arr1.includes(arr2[i])) {
            result.push(arr2[i])
        }
    }

    return result
}


console.log("Intersection :", intersection(arr1, arr2));