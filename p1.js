

//Question 1


function addToArrayPush(iterations){
    let arr = [];
    let start_ms = performance.now();
    for (var i = 0; i < iterations; i++) {
        arr.push('value');
    }
    let end_ms = performance.now();
    let duration = end_ms - start_ms;
    console.log(`Add by push took: ${duration} ms`);
    return duration;
}

function addToArrayIndexing(iterations){
    let arr = [];
    let start_ms = performance.now();
    for (var i = 0; i < iterations; i++) {
        arr[i] = 'value';
    }
    let end_ms = performance.now();
    let duration = end_ms - start_ms;
    console.log(`Add by indexing took: ${duration} ms`);
    return duration;
}

function benchmark() {
    let iterations = 1000000; 
    let pushTimes = [];
    let indexTimes = [];

    for (var i = 0; i < 3; i++) {
        pushTimes.push(addToArrayPush(iterations));
        indexTimes.push(addToArrayIndexing(iterations));
    }

    let averagePushTime = pushTimes.reduce((element1, element2) => element1+element2,0)/pushTimes.length;
    let averageIndexTime = indexTimes.reduce((element1, element2) => element1+element2,0)/indexTimes.length;

    

    console.log(`Average for add by push: ${averagePushTime} ms \n Average for add by index assignment: ${averageIndexTime} ms`);
}

benchmark()

