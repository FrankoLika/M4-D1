//Ex.1
console.log("EX.1");
function calcolaSomma(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let risultato = num1 + num2;
        if (num1 === num2) {
            console.log(risultato * 3);
        } else {
            console.log(risultato);
        }
    } else {
        console.log("error");
    }
}
calcolaSomma(5, 5);


//Ex.2
console.log("EX.2");
function controllaInteroE50(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
            //return true;
            console.log("true");
        } else {
            console.log("!== 50");
        }
    } else {
        console.log("error");
    }
}
controllaInteroE50(0, 5);


//Ex.3
console.log("EX.3");
function rimuoviCarattereStringa(str, pos) {
    let newStr = str.split("");
    newStr.splice(pos, 1);
    let newStr2 = newStr.join();
    let nuovaStrSenzaVirgole = newStr2.replaceAll(",", "");
    console.log(nuovaStrSenzaVirgole);
}
rimuoviCarattereStringa("come stai", 1);


//Ex.4
console.log("EX.4");
function valorePiuAlto(num1, num2, num3) {
    if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)) {
        if (num1 > num2 && num1 > num2) {
            console.log("il numero più alto è " + num1);
        } else if (num2 > num1 && num2 > num3) {
            console.log("il numero più alto è " + num2);
        } else {
            console.log("il numero più alto è " + num3);
        }
    } else {
        console.log("error");
    }
}
valorePiuAlto(120, 132, 1);


//Ex.5
console.log("EX.5");
function numeriCompresi(num1, num2) {
    if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
        console.log("true");
        //return true;
    } else {
        console.log("false");
        //return false;
    }
}
numeriCompresi(100, 77);


//Ex.6
console.log("EX.6");
function creaStringa(str, num) {
    let string = str.repeat(num);
    console.log(string);
}
creaStringa("parola ", 5);


//Ex.7
console.log("EX.7");
function nomeCitta(nomeC) {
    if (nomeC.includes("Los") || nomeC.includes("New")) { //SE CONTIENE LOS O NEW
        if (nomeC.substring(0, 3) === "Los" || nomeC.substring(0, 3) === "New") { //SE INIZIA CON LOS O NEW
            console.log("la città contiene 'Los' o 'New' all'inizio");
        } else {
            console.log("la città contiene 'Los' o 'New', ma non inizia con 'Los' o 'New'");
        }
    } else {
        console.log("la città non contiene nè 'Los' nè 'New'");
    }
}
nomeCitta("parolaNew");


//Ex.8
console.log("EX.8");
function sommaArray(arr) {
    var risultato = 0;
    if (arr.length === 3) {
        for (var i = 0; i < arr.length; i++) {
            risultato = risultato + arr[i];
        }
        console.log("il risultato è " + risultato);
    } else {
        console.log("l'array deve contenere 3 elementi!");
    }
}
sommaArray([2, 4, 5]);


//Ex.9
console.log("EX.9");
function controllaArray(arr) {
    if (arr.length === 2) {
        for (let n of arr) {
            if (n === 0 || n === 1) {
                //return true;
                console.log("giusto");
                break;
            } else {
                console.log("l'array non contiene ne 0 ne 1");
                break;
            }
        }
    } else {
        console.log("l'array deve contenere 2 elementi!");
    }
}
controllaArray([2, 2]);


//Ex.10
console.log("EX.10");
function controllaArray2(arr) {
    if (arr.length === 2) {
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] !== 0 && arr[i] !== 3) || (arr[i] !== 0 && arr[i] !== 3)) {
                //return true;
                console.log("non contengono 0 e 3 ");
                break;
            } else {
                //return false;
                console.log("contengono 0, 3 o entrambi");
                break;
            }
        }
    } else {
        console.log("l'array deve contenere 2 elementi!")
    }
}
controllaArray2([1, 1]);


//Ex.11
console.log("EX.11");
function stringaPiuLunga(arr) {
    var parola = "";
    for (let str of arr) {
        if (str.length > parola.length) {
            parola = str;
        }
    }
    console.log("la parola più lunga è " + parola);
}
stringaPiuLunga(["uno", "due", "tre", "quattro"]);


//Ex.12
console.log("EX.12");
function tipoDiAngolo(gradi) {
    if (gradi < 90) {
        console.log("angolo acuto");
    } else if (gradi > 90 && gradi < 180) {
        console.log("angolo ottuso");
    } else if (gradi === 90) {
        console.log("angolo retto");
    } else if (gradi === 180) {
        console.log("angolo piatto");
    } else {
        console.log("angolo inesistente");
    }
}
tipoDiAngolo(180);


//Ex.13
console.log("EX.13");
function trovaIndice(arr) {
    let numAlto = 0;
    let indice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numAlto) {
            numAlto = arr[i];
            indice = [i];
        }
    }
    console.log("il numero più alto è " + numAlto);
    console.log("l'indice è " + indice);
}
trovaIndice([1, 2, 3, 4, 5, 6]);


//Ex.14
console.log("EX.14");
function numPariPiuAlto(arr) {
    var numPariMax = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > numPariMax) {
            numPariMax = arr[i];
        }
    }
    console.log("il numero pari più grande è " + numPariMax);
}
numPariPiuAlto([5, 20, 3, 10, 4, 40, 100]);


//Ex.15
console.log("EX.15");
function numPosNeg(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) { //0 = neutro
        //return true;
        console.log("un numero è positivo e l'altro negativo");
    } else {
        //return false
        console.log("i numeri sono entrambi positivi o negativi");
    }
}
numPosNeg(2, -6);


//Ex.16
console.log("EX.16");
function stringa3Caratterim(str) {
    if (str.length < 3) {
        console.log(str.toUpperCase());
    } else {
        let primi3Caratt = str.substring(0, 3).toLowerCase();
        let altriCaratt = str.substring(3).toUpperCase();
        console.log(primi3Caratt + altriCaratt);
    }
}
stringa3Caratterim("Buonasera")


//Ex.17
console.log("EX.17");
function calcolaSomma2(num1, num2) {
    let somma = num1 + num2;
    if (somma >= 50 && somma <= 80) {
        console.log("65");
    } else {
        console.log("80");
    }
}
calcolaSomma2(25, 25);


//Ex.18
console.log("EX.18");
function convertiNum(num) {
    if (num % 3 === 0) {
        num = "Diego"
    } else if (num % 5 === 0) {
        num = "Riccardo"
    } else if (num % 7 === 0) {
        num = "Stefano";
    } else {
        console.log("il numero non è divisibile per 3, 5 e 7");
        num = "error";
    }
    console.log(num);
}
convertiNum(3);


//Ex.19
console.log("EX.19");
function acronimo(frase) {
    let parole = frase.split(' ');
    let acronimo = '';
    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i][0].toUpperCase();
    }
    console.log(acronimo);
}
acronimo("Fabbrica Italiana Automobili Torino")



//EXTRA Ex.1
console.log("EXTRA Ex.1");
function caratterePiuUsato(str) {
    let caratteri = str.split('');
    let counterC = {};
    let piuUsato = '';
    let highestCount = 0;
    caratteri.forEach(carattere => {
        if (counterC[carattere]) {
            counterC[carattere]++;
        } else {
            counterC[carattere] = 1;
        }
    });
    Object.keys(counterC).forEach(carattere => {
        if (counterC[carattere] > highestCount) {
            piuUsato = carattere;
            highestCount = counterC[carattere];
        }
    });
    console.log(counterC);
    console.log("il carattere più usato è " + piuUsato);
}
caratterePiuUsato("mmmmmmmmnnnnnnnnfffffddd");


//EXTRA Ex.2
console.log("EXTRA Ex.2");
function anagrammi(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("non hanno la stessa lunghezza e quindi non possono essere anagrammi")
    } else {
        const contCaratteri = {};
        for (let carattere of str1) {
            if (contCaratteri[carattere]) {
                contCaratteri[carattere]++;
            } else {
                contCaratteri[carattere] = 1;
            }

        }
        for (let carattere of str2) {
            if (!contCaratteri[carattere]) {
                console.log("non lo sono")
                break;
            } else {
                console.log("lo sono")
                break;
            }
            contCaratteri[carattere]--;
        }
    }
}
anagrammi("ciao", "ciao")


//EXTRA Ex.3
console.log("EXTRA Ex.3");
function trovaAnagrammi(str, listAnagrammi) {
    var anagrammiCorretti = [];
    listAnagrammi.forEach(anagramma => {
        if (anagramma !== str && anagramma.split('').sort().join('') === str.split('').sort().join('')) {
            anagrammiCorretti.push(anagramma);
        }
    });
    console.log("Gli anagrammi sono : " + anagrammiCorretti);
}
trovaAnagrammi("ciao", ["oiac", "oaic", "cosa"]);


//EXTRA Ex.4
console.log("EXTRA Ex.4");
function parolaPalindroma(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    if (str === str.split('').reverse().join('')) {
        console.log("palindroma");
    } else {
        console.log("non palindroma");
    }
}
parolaPalindroma("radar");


//EXTRA Ex.5
console.log("EXTRA Ex.5");
function reverseNum(num) {
    let numStr = String(num);
    console.log(numStr.split('').reverse().join(''));
}
reverseNum(12345)


//EXTRA Ex.6
console.log("EXTRA Ex.6");
function scala(num) {
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            console.log("#".repeat(i)); // ripetere '#' basandosi sul indice
        }
    } else {
        console.log("il numero è 0 o negativo");
    }

}
scala(4)


//EXTRA Ex.7
console.log("EXTRA Ex.7");
function reverseStringa(str){
    console.log(str.split('').reverse().join(''));
}
reverseStringa("Ciao");


//EXTRA Ex.8
console.log("EXTRA Ex.8");
function dividiArray(arr, num){
    var res = [];
    for(let i = 0; i < arr.length; i += num) {
         res.push(arr.slice(i, i + num));
    }
    console.log(res);
}
dividiArray([2,3,412], 2)


//EXTRA Ex.9
console.log("EXTRA Ex.9");
function piramide(z){
    let piramide = "";
    for(let i  = 1; i <= z ; i++){
        let spazio = " ".repeat(z - i);
        let p = "#".repeat(i * 2 - 1);
        piramide = piramide + spazio + p + "\n";
    }
    console.log(piramide);
}
piramide(5);


//EXTRA Ex.10
console.log("EXTRA Ex.10");





