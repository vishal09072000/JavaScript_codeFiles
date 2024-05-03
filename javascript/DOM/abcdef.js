// setAttributes
// let img = document.querySelector("#image")
// img.setAttribute("src","https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg.transform/576x300/image.jpg")

// getAttributes
// let paragraph=document.querySelector("#para")
// let gotAtt = paragraph.getAttribute("id")
// console.log(gotAtt);

let creatediv = document.createElement("div")
creatediv.innerText = "Hii There"
document.body.prepend(creatediv)
creatediv.setAttribute("id", "title")