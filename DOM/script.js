// canvas = document.getElementById("plotCanvas")

// canvas.style.backgroundColor = "#dfd"


//Given points
var points = [
    { x: 10, y: 20 },
    { x: 30, y: 10 },
    { x: 50, y: 25 },
    { x: 70, y: 30 },
    { x: 90, y: 10 },
    { x: 110, y: 40 },
    { x: 130, y: 60 },
    { x: 150, y: 20 },
    { x: 170, y: 100 },
    { x: 190, y: 180 },
    { x: 210, y: 160 },
    { x: 230, y: 120 },
    { x: 250, y: 150 },
    { x: 270, y: 140 },
    { x: 290, y: 20 },
    { x: 310, y: 50 },
    { x: 330, y: 40 },
    { x: 350, y: 60 },

];


//Canvas selected
canvas = document.getElementById("canvas")


//point slected
// var point = document.createElement("div")


// //styling the point
// point.style.height = "30px"
// point.style.width = "30px"
// point.style.borderRadius = "15px"
// point.style.background = "#fff"
// point.style.position = "absolute"
// // point.style.top = "70px"
// point.style.left = "40px"


//adding point to canvas
for (var i = 0; i < points.length; i++) {

    //harek choti point banaunu paryo
    var point = document.createElement("div")

    //harek choti append garna paryo
    canvas.appendChild(point)

    //sab lai class dina paryo
    point.classList.add("iampoint")

    //harek choti tesko top left define garna paryo
    // x = left 
    // y = top
    var x = points[i].x
    var y = points[i].y
    point.style.top = y + "px"
    point.style.left = x + "px"

    //styling the points
    point.style.height = "12px"
    point.style.width = "12px"
    point.style.borderRadius = "7px"
    point.style.background = "#fff"
    point.style.position = "absolute"
    point.style.cursor = "cell"

    //Event halne hola aaba
    //hya halne haina

}


//styling the point
// point.style.height = "30px"
// point.style.width = "30px"
// point.style.borderRadius = "15px"
// point.style.background = "#fff"
// point.style.position = "absolute"
// point.style.top = "70px"
// point.style.left = "40px"



pointClass = document.querySelectorAll('.iampoint')


// pointClass[0].querySelector("div").addEventListener("click", dele=>{
//     console.log(this)

// })

for (var i = 1; i <= pointClass.length; i++) {
    canvas.childNodes[i].addEventListener('click', function () {
        // console.log(this)
        this.remove()
    })
}



