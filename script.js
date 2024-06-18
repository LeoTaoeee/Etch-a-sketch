const grid = document.querySelector("#grid")
const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter number of squares per side (max 100):");
    newSize = parseInt(newSize);

    // Validate input
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Clear existing grid
    clearGrid();

    // Build new grid
    buildGrid(newSize);
});


function buildSingleCell() {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.style.opacity = 0;  // Initialize with opacity 0
    cell.addEventListener("mouseover", hoverEffect)
    return cell
}

function buildGrid(n){
    for(let i=0;i<n;i++){
        const row = document.createElement("div")
        for(let j=0;j<n;j++){
            row.appendChild(buildSingleCell())
        }
        row.classList.add("grid-row")
        grid.appendChild(row)
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function hoverEffect(e) {
    const cell = e.target;
    let currentOpacity = parseFloat(cell.style.opacity);
    if (currentOpacity < 1) {
        cell.style.opacity = currentOpacity + 0.1;  // Increase opacity by 0.1
    }
}


buildGrid(16)