let counter = 0
const main = document.querySelector("main")
const cells = createLine(3).flatMap(y => createLine(3).map(x => {
    const cell = document.createElement("div")
    cell.classList.toggle("cell")
    // cell.classList.toggle("x"+j)
    // cell.classList.toggle("y"+i)
    cell.addEventListener("click", click)
    main.appendChild(cell)
    return {cell, x, y}
}))

console.log(cells)

function click(event) {
    const src = event.srcElement
    if (src.classList.contains("select")) {
        return
    }
    src.classList.toggle("select")
    src.innerHTML = counter % 2 === 0 ? "X" : "O"
    counter++
    cells.forEach(cell => console.log(cell.x,cell.y,cell.cell.innerHTML, cell.cell === src))
}

// const cells = document.querySelectorAll(".cell")
function createLine(size) {
    return [...Array(size).keys()]
}

function handleClick(event) {
    return click(event)
}