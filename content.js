console.log("Chrome extension ready to go?");
let paragraphs = document.getElementsByClassName('highlight');
for(elt of paragraphs){
    elt.style ['background-color']= '#FF00FF';
    let dueDate = elt.innerHTML;
    console.log(dueDate);
}
