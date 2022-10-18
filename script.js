let count = 0
let total = 0
let countEntered = document.getElementById("count-entered")
let countSaved = document.getElementById("count-saved")
let countTotal = document.getElementById("count-total")

function increasecount() {
    count += 1
    countEntered.textContent = count
}

function save() {
    // Count Privious Entries
    if(countSaved.textContent == 0) {
        countSaved.textContent = count
    }else {
        countSaved.textContent += " - " + count
    }
    
    // Count Total Entries
    total += count
    countTotal.textContent = total
    
    
    count = 0
    countEntered.textContent = 0
}
