// Enums 

enum Chocolate {
    dairyMilk, // index 0 jb hum index nh dengy to y khu hi index 0 s start krta h
    mooro, // 1
    sonnet, // 2 
    paradise, // 3 
    now, // 4
    perk, // 5 
    kitkat, // 6 
}

 //console.log(Chocolate); // get full enum

console.log(Chocolate.dairyMilk); // 0
console.log(Chocolate[1]); // mooro


enum Chocolate1 {
    dairyMilk = 12 , // m n iska index dy diya to baki y agy khud hi index consider krega jese 12 k bd 13 ata h
    mooro , // 13
    sonnet  , // 14
    paradise  , // 15
    now  , // 16
    perk, // 17
    kitkat, // 18
}

console.log(Chocolate1.kitkat);// output 18 


enum Chocolate2 {
    dairyMilk = "dairyMilk", 
    mooro = "mooro", 
    sonnet = "sonnet", 
    paradise = "paradise", 
    now = "now", 
    perk = "perk", 
    kitkat = "kitkat", 
}

const myChocolate: Chocolate2 = Chocolate2.sonnet
console.log(myChocolate); // output sonnet


let myChocolate1: Chocolate = Chocolate["now"] 
console.log(myChocolate1); // output 4 because now 4 index p h









