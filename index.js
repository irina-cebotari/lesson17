// const func = () => {
//     console.log('hi')
// }

// func()


// const closure = () => {
//     let x=5;

//     function showX() {
//         return x;
//     }

//     function changeX(y) {
//         x=y
//     }

//     return [showX, changeX];
// }

// const [showX, changeX] = closure()

// console.log(showX())
// changeX(10)
// console.log(showX())


// const closure = () => {
//     let x=5;

//     function showX() {
//         return x;
//     }

//     function changeX(y) {
//         x=y
//     }

//     return [showX, changeX];
// }

// 
// const [showY, changeY] = closure()

// console.log(showX())
// console.log(showY())
// changeX(10)
// changeY(7)
// console.log(showX())
// console.log(showY())



// const closure = () => {
//     const initialValue = 10
//     let x = initialValue;

//     function ch1() {
//         return x;
//     }

//     function ch2() {
//         x = x + 3;
//     }

//     function ch3() {
//         x = x * 3;
//     }

//     function ch4() {
//         x = initialValue;
//     }

//     return { ch1, ch2, ch3, ch4 }
// }

// const { ch1, ch2, ch3, ch4 } = closure()

// ch2()
// ch3()
// console.log(ch1())
// ch4()
// console.log(ch1())



// const closure = () => {
//     const initialValue = 10
//     let x = initialValue

//     function showX() {
//         return x
//     }

//     function addThree() {
//         x = x + 3
//     }

//     function multiplyByThree() {
//         x = x * 3
//     }

//     function reset() {
//         x = initialValue
//     }

//     return { showX, addThree, multiplyByThree, reset }
// }

// const { showX, addThree, multiplyByThree, reset } = closure()

// addThree()
// addThree()
// addThree()

// console.log(showX(), '1')

// multiplyByThree()

// console.log(showX(), '2')

// reset()

// console.log(showX(), '3')



// const arr = [1, {}, [122], 'string', false]


// const arr = [1, 2, 3, 4]

// console.log()

// arr[0] = 0

// arr[arr.length] = ['str', 'str']

// console.log(arr)

// const firstPart = arr.slice(0, 2)
// const secondPart = arr.slice(2)

// console.log(firstPart, secondPart, [...firstPart, 2.5, ...secondPart])

// const arr = [1, 2, , 3, 4]

// arr[2] = 2.5

// console.log(arr)


// const arr = [1, 2, 3, 4]

// arr[50] = 'item50'

// console.log(arr)
// console.log(arr.length)



// const arr = [1,2,3,4,5,6]

// console.log(arr. filter((item) => item !=2))

// const filteredArr = arr. filter((item) => {
//     return item >3;
// })

// console.log(filteredArr)

// console.log(arr. filter((item) => {
//     return item >3;
// }))

// delete arr[1]

// console.log(arr)



// const arr = [1,2,3,4,5,6]

// arr.length = 3

// console.log(arr)




// const arr = [1, 2, 3, 4, 5, 6]

// arr.pop()

// const lastItem = arr.pop()

// console.log(lastItem)

// console.log(arr)



// const func = (arg) => {
//     console.log('hi' + arg)
//     console.log(2 + 2)
//     return 'str'
// }

// const str = func('Dima')

// console.log(str)


// const arr = [1, 2, 3, 4, 5, 6]

// const returnValue = arr.push(7)

// console.log(arr)

// console.log(returnValue)



// const arr = [1, 2, 3, 4, 5, 6]
// const arr1 = [7, 8, 9]

// console.log(arr.concat(arr1))

// const concatResult = arr.concat(arr1)
// console.log(concatResult)
// console.log(arr)
// console.log(arr1)






const arr = [1, 2, 3, 4, 5, 6]

const mappedArr = arr.map((item, index)=> {
    // return item * 2
    return <h2>{item}</h2>
})

console.log(mappedArr)