console.log("Chrome extension ready to go?");
let paragraphs = document.getElementsByClassName('highlight');
for(elt of paragraphs){
    elt.style ['background-color']= '#FFccFF';
    let dueDate = elt.innerHTML;
    console.log(dueDate);
}
let selection = "hi";

// do stuff with the range

console.log(selection); // Selection object
