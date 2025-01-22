//your code here!
const listContainer = document.getElementById("infi-list"); 
let itemCount = 10; 
let currentItemIndex = 1; 

function createListItem(index) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${index}`;
    return listItem;
}

function renderItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = createListItem(currentItemIndex++);
        listContainer.appendChild(listItem);
    }
}

listContainer.addEventListener("scroll", () => {
        renderItems(2);
});

renderItems(itemCount);
