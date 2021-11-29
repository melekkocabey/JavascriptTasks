function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

 let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3 /* adrese değer atıyorsun örneğin product2 nin adresi 101 ise product3 ün adresi 102 ise atama sonucu 101 adresi artık 102 adresini tutuor demektir.102.adresinde ki product a karpuz at ve 102 de ki değeri yazdır dememktirf. */
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
console.log(sayi2)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products[0].productName + " " + products[0].unitPrice)

function add(bisey,...numbers) { //rest oparetorü >>> ... gönderilen parametreleri bir array içine koy, her zaman fonksiyonun sonuna bırakılmalı
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
        console.log(numbers[i])
    }
    console.log(total)
    console.log(bisey)
}

add(20,30,40) //let numbers = [20,30] 20,30 array yap numbers a gönder
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers)) //gönderilen sayılardan en büyüğünü bul

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
let [icAnadolu1,marmara1] = ["İç Anadolu","Marmara"]
 console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//objeninde elemanlarını değişkene atama işlemi ,parçalama işlemi,verileri işlerken yararlı
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})//parantez içine alınmazsa süslü parantezleri blok olarak görür

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity) 
/*login({title}){
    console.log("<h1>"+title+"</h1>");
}login diyew bir ekrarn var ve bu şekilde çağrıldığında params gönder birden fazla params olduğunda böyle yazılır