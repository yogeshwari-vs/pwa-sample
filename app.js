
// .container holds cards that are to be displayed
const container = document.querySelector(".container")

// Crate an array of cards
const pics = [
    {name: "Picture1", image: "Pictures/pic1.PNG"},
    {name: "Picture2", image: "Pictures/pic2.PNG"}
]

// looping through every item in th array
const showPics = () => {
    let output = ""
    pics.forEach(
        ({name,image}) =>
            (output += `
                <div class = "card">
                    <img class = "card--avatar" src=${image} />
                    <h1 class ="card--title"> ${name}</h1>
                </div>
            `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPics)
