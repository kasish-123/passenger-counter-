// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let counter=0
function increment(){
    counter=counter+1
    document.getElementById("count-el").innerText = counter

}
function save(){
    document.getElementById("save-el").innerText+= " "+counter+" - "
    document.getElementById("count-el").innerText = 0
    counter=0
}


