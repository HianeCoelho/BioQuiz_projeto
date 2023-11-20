let quest = Array(15).fill(0);
let num = 0;

function displayArray() {
    let arrayDisplayDiv = document.getElementById('arrayDisplay');
    let arrayString = quest.join(', ');
    arrayDisplayDiv.innerHTML = arrayString;
}
displayArray();

function correct() {
    quest[num] = 1;
    displayArray();
}

function incrementNum() {
    num++;
    console.log('Value of num: ' + num);
}

