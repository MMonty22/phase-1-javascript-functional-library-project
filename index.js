function helper (collection) {
    if (Array.isArray(collection) === false) {
        let newArray = Object.values(collection)
        return newArray
    }
    else return collection
}

function myEach (collection, callback) {
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        callback(helpFunc[i])
        //console.log('i',i)
        }
    return collection
}

function myMap (collection, callback) {
    let newMapArray = []
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        newMapArray.push(callback(helpFunc[i]))
        
    }
    return newMapArray
}

function myReduce (collection, callback, acc) {
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        acc = callback(acc, helpFunc[i], i, helpFunc)
    }
    return acc
}

function myFind (collection, predicate) {
    let result
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        let found = predicate(helpFunc[i], i, helpFunc)
        if (found) {
            result = helpFunc[i]
            break
        }
    }
    return result
}

function myFilter (collection, predicate) {
    let newFilterArray = []
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        if (predicate(helpFunc[i])) {
            newFilterArray.push(helpFunc[i])
        }
    }
    return newFilterArray
}

function mySize (collection) {
    let helpFunc = helper(collection)
    for (let i=0; i < helpFunc.length; i++) {
        return helpFunc.length
    }
    return collection.length
}

function myFirst (array, [n]) {
    let newFirstArray = []
    if (n == undefined) return array[0]
    for (let i = 0; i < n; i++) {
        newFirstArray.push(array[i])
    }
    return newFirstArray
}

function myLast (array, [n]) {
    let newLastArray = []
    if (n == undefined) return array[-1]
    for (let i = 0; i < n; i++) {
        newLastArray.push(array[i])
    }
    return newLastArray
}

function myKeys (object) {
    let array = []
    for (let obj in object) {
        //console.log('obj', obj)
        array.push(obj)
    }
    return array
}

function myValues (object) {
    let array = []
    for (let obj in object) {
        //console.log('objV',object[obj])
        array.push(object[obj])
    }
    return array
}