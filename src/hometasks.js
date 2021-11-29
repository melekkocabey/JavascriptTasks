// 1. JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
let PrimeNumber = function (num){
    if(num == 2)
    console.log(num + " Asaldır");
    else{
        var count = 0;
        for(var i=2; i <num ; i++){
            if(num % i == 0)
            count++;
        }
        if(count == 0)
        console.log(num + " Asaldır");
        else
        console.log(num + " Asal Değildir");
    }
}
let findPrimeNumber = function (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        PrimeNumber(numbers[i]);        
    }
}
findPrimeNumber(2,7,10);
