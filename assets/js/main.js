let vorName = "Uladzimir"
let nachName = "Siauko"

console.log(vorName.length)
console.log(nachName.length)

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"))
console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon"))

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"))
console.log(txt2.search("green"))
console.log(txt2.search("blue"))

let A = 'Sam is going to coding school'
document.write(A.slice(0,3) + "<br>")
document.write(A.slice(4,7) + "<br>")
document.write(A.slice(1,15), A.slice(22,29) + "<br>")
document.write(A.slice(4,15), A.slice(22,29) + "<br>")
document.write(A.slice(22,29) + "<br>")
document.write(A.slice(0,6), A.slice(22,29) + "<br>" + "<br>")

let textA = 'Sam is back from coding school'
document.write(textA.substring(0,3) + "<br>")
document.write(textA.substring(4,7) + "<br>")
document.write(textA.substring(23,30) + "<br>")
document.write(textA.substring(0,6), textA.slice(23,30) + "<br>" + "<br>")

let textB = 'Sam is working at coding school'
document.write(textB.substr(0,3) + "<br>")
document.write(textB.substr(4,3) + "<br>")
document.write(textB.substr(15,2), textB.substr(24,7)  + "<br>")
document.write(textB.substr(0,6), textB.substr(24,7) + "<br>" + "<br>")

let textC = "Sam is good at coding school"

document.write(textC.replace("good","bad").replace("coding","") + "<br>")
document.write(textC.replace("Sam","Tom").replace("coding","") + "<br>")
document.write(textC.replace("school","tennis").replace("coding","") + "<br>" + "<br>")

// tooo much method
let textD = "Sam is going to coding school";
    textD = textD.replace("coding","")
document.write(textD.toUpperCase() + "<br>")
document.write(textD.toLowerCase() + "<br>")
let samBig = textD.substr(0,3).toUpperCase()
let schoolBig = textD.substr(-6,6).toUpperCase()
document.write(`${samBig} is going to ${schoolBig}` + "<br>")
let goingBig = textD.substring(4,15).toUpperCase()
document.write(`Sam ${goingBig} school` + "<br>")
let letS = textD.substr(0,1).toUpperCase()
let letI = textD.substr(4,1).toUpperCase()
let letG = textD.substr(7,1).toUpperCase()
let letT = textD.substr(13,1).toUpperCase()
let letStwo = textD.substr(-6,1).toUpperCase()
document.write(`${letS}am ${letI}s ${letG}oing ${letT}o ${letStwo}chool` + "<br>" + "<br>")

// method replace
let textD2 = "Sam is going to coding school";
    textD2 = textD2.replace("coding","")
    .replace("is","Is")
    .replace("going","Going")
    .replace("to","To")
    .replace("school","School")   
document.write(textD2.toUpperCase() + "<br>")
document.write(textD2.toLowerCase() + "<br>")
document.write(textD2 + "<br>" + "<br>")

let text1 = "Sam is going to coding school"
    text1 = text1.replace("coding","")
let text2 = "Tom"
let text3 = "programming bike"
let text4 = "and"
let text5 = "to the movie theater"

let concatText1 = text1.concat(" ", text4, " ", text5)
document.write(concatText1 + "<br>")
let concatText2 = concatText1.replace("school", "").replace("and", "").replace("the", "").replace("to", "")
document.write(concatText2 + "<br>")
let concatText3 = text2.concat(" ", text4, " ", text1).replace("is", "are")
document.write(concatText3 + "<br>")
let concatText4 = concatText3.replace("school", "gym").concat(" ", text4, " ", text5)
document.write(concatText4 + "<br>")
let concatText5 = text2.concat(" ", text1).replace("Sam", "").concat(" ", text4, " ", text5)
document.write(concatText5 + "<br>")


// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Tom and Sam are going to school
// Tom and Sam are going to gym and to the movie theater
// Tom is going to school and to the movie theater
