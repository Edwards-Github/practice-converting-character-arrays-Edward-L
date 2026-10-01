// Task 1: Decode the following Reversed Messages
let message1 =
  " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";

let message2 =
  "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";

let message3 =
  "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";

let message4 =
  ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

console.log(message1.split("").reverse().join(""));
console.log(message2.split("").reverse().join(""));
console.log(message3.split("").reverse().join(""));
console.log(message4.split("").reverse().join(""));

// Task 2: Write your own reverse message1
let message5 = "Hard work will pay off! Never give up!";
console.log(message5.split("").reverse().join(""));
