// Mouse event don't work - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>

// 1.[Learned] onclick 2.onblclick 3.onmousedown 4.onmouseup 5.onmouseenter 6.onmouseleave 7.onmousemove 8. onmouseover
// 2.[ various poperties and so on.....]

console.clear();
const div = document.querySelector('div');


const buttons = document.querySelectorAll(".btn");

// target to print ineertext
Array.from(buttons).map((button) => {
    button.addEventListener("click", function (e) {
        console.log(e.target.innerText);
    });
});

/*

const buttons = document.querySelectorAll(".btn");

// button to map econvert
Array.from(buttons).map((button) => {
    button.addEventListener("click", function () {
        console.log("clicked");
    });
});




const buttons = document.querySelectorAll(".btn");
console.log(buttons);


div.addEventListener("click", function (e) {
   
    console.log(e.target.className);
   
     // console.log(e.target.id);
    // console.log(e.target.textContent);
    //console.log(e.target.innerText);
 });




div.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
 });

div.addEventListener("click", function (e) {
    console.log(e.target);
 });


div.addEventListener("click", function (e) {
    console.log(e);
 });

div.addEventListener("mouseover", function (e) {
    console.log("offsetX= " + e.offsetX + "offsetY= " + e.offsetY);
 })
 

// X, Y.......

div.addEventListener("mouseover", function (e) {
    console.log("clientX= " + e.clientX + "clientY= " + e.clientY);
 })
 

// X ...........

div.addEventListener("mouseover", function (e) {
   console.log("clientX= " + e.clientX);
})




 1.

div.addEventListener("click", function () {
   console.log("click"); })

   2.

div.addEventListener("dblclick", function () {
     console.log("double click is occured."); })

3.

div.addEventListener("mousedown", function () {
    console.log("onmousedown is occured.");
})

4.
div.addEventListener("mouseup", function () {
    console.log("onmouseup is occured.");
})


5.

div.addEventListener("mouseenter", function () {
    console.log("onmouseenter is occured.");
})

6.
div.addEventListener("mouseleave", function () {
    console.log("onmouseleave is occured.");
})

7.

div.addEventListener("mousemove", function () {
    console.log("onmousemove is occured.");
})

8.

div.addEventListener("mouseover", function () {
    console.log("onmouseover is occured.");
})
*/