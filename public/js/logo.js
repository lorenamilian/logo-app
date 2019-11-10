prompt("Welcome To Logo Maker")

const tittle = document.querySelectorAll('h1')[0]

if(tittle !== null){
  return (tittle.textContent = document.getElementById("tittle"));
};

const imagen = document.querySelectorAll(".img")[0]

imgen.addEventListener("click", function () {
   
  
});

// 2: Set the color of the <h1> to a different color
document.querySelectorAll('h1')[0].style.color = "blue"


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
document.querySelectorAll(".desc")[0].textContent = " todo esta bien" ;
// 4: Set the class of the <ul> to 'list'
document.querySelector("ul").className= "list";
// 5: Create a new list item and add it to the <ul>
  var para = document.createElement("LI");
para.innerHTML = "<input>This is a paragfgdvxvfraph.";
document.querySelector(".list").appendChild(para);
/*var newItem = document.createElement("LI");       // Create a <li> node
var textnode = document.createTextNode("my new item");  // Create a text node
newItem.appendChild(textnode);                    // Append the text to <li>
var list = document.getElementsByClassName("list");    // Get the <ul> element to insert a new node
list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>*/
// 6: Change all <input> elements from text fields to checkboxes
/*let x = document.querySelectorAll("input");
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    x[index].setAttribute("type", "checkbox");
}
// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
 var btn = document.createElement("BUTTON");
  btn.innerHTML = "Delete";
  document.querySelector(".extra").appendChild(btn);
// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
btn.addEventListener("click", () => {
   document.querySelector(".extra").remove();
} ); */