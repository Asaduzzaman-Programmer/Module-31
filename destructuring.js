

const data = [{name:'abul', addess:'kabul', home:'mokbul'}]
// console.log(data[0].name)


const fata = [{bal:"nai", isTrue: true}]
// console.log(fata[0].isTrue)

const laptop = {
    count : 6500,
    brand: [
        {id: 1, name: 'lenovo', price: 70000},
        {id: 2, name: 'asus', price: 90000},
        {id: 3, name: 'mac', price: 190000}
    ]
}

// console.log(laptop.brand[1].price)

const user = {
    id: 5012, 
    addess: {
        street: {
            first: "sultan mor",
            second:"Daka mor",
            third:[{
                start: "khulna",
                end:"barishal"
            }]
        }
    }
}

console.log(user.addess.street.third[0].end);