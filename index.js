"use strict";
// Enums 
var Chocolate;
(function (Chocolate) {
    Chocolate[Chocolate["dairyMilk"] = 0] = "dairyMilk";
    Chocolate[Chocolate["mooro"] = 1] = "mooro";
    Chocolate[Chocolate["sonnet"] = 2] = "sonnet";
    Chocolate[Chocolate["paradise"] = 3] = "paradise";
    Chocolate[Chocolate["now"] = 4] = "now";
    Chocolate[Chocolate["perk"] = 5] = "perk";
    Chocolate[Chocolate["kitkat"] = 6] = "kitkat";
})(Chocolate || (Chocolate = {}));
console.log(Chocolate); // get full enum
console.log(Chocolate.dairyMilk); // 0
console.log(Chocolate[1]); // mooro
var Chocolate1;
(function (Chocolate1) {
    Chocolate1[Chocolate1["dairyMilk"] = 12] = "dairyMilk";
    Chocolate1[Chocolate1["mooro"] = 13] = "mooro";
    Chocolate1[Chocolate1["sonnet"] = 14] = "sonnet";
    Chocolate1[Chocolate1["paradise"] = 15] = "paradise";
    Chocolate1[Chocolate1["now"] = 16] = "now";
    Chocolate1[Chocolate1["perk"] = 17] = "perk";
    Chocolate1[Chocolate1["kitkat"] = 18] = "kitkat";
})(Chocolate1 || (Chocolate1 = {}));
console.log(Chocolate1.kitkat); // output 18 
var Chocolate2;
(function (Chocolate2) {
    Chocolate2["dairyMilk"] = "dairyMilk";
    Chocolate2["mooro"] = "mooro";
    Chocolate2["sonnet"] = "sonnet";
    Chocolate2["paradise"] = "paradise";
    Chocolate2["now"] = "now";
    Chocolate2["perk"] = "perk";
    Chocolate2["kitkat"] = "kitkat";
})(Chocolate2 || (Chocolate2 = {}));
const myChocolate = Chocolate2.sonnet;
console.log(myChocolate); // output sonnet
let myChocolate1 = Chocolate["now"];
console.log(myChocolate1);
