// Get elements from the DOM
const input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');

// Event listener for adding a new to-do item
addButton.addEventListener('click', addItem);

// Function to add a new to-do item
function addItem() {
    // Get the value from the input field
    const inputValue = input.value.trim();

    // If the input value is not empty
    if (inputValue !== '') {
        // Create a new to-do item
        const newItem = document.createElement('div');
        newItem.classList.add('item');

        // Create input element for the to-do item
        const newItemInput = document.createElement('input');
        newItemInput.type = 'text';
        newItemInput.classList.add('item_input');
        newItemInput.value = inputValue;
        newItemInput.disabled = true; // Initially disable editing
        newItem.appendChild(newItemInput);

        // Create edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('editButton');
        editButton.addEventListener('click', toggleEdit); // Attach event listener
        newItem.appendChild(editButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', deleteItem);
        newItem.appendChild(deleteButton);

        // Add the new item to the container
        container.appendChild(newItem);

        // Clear the input field
        input.value = '';
    }
}

// Function to toggle edit mode for a to-do item

function toggleEdit() {
    const item = this.parentElement;
    const inputField = item.querySelector('.item_input');

    // Toggle editing
    inputField.disabled = !inputField.disabled;

    // Change button icon and text
    if (inputField.disabled) {
        this.innerHTML = '<i class="fas fa-edit"></i> Edit'; // Change icon to Edit
    } else {
        this.innerHTML = '<i class="fas fa-save"></i> Save'; // Change icon to Save
    }
}

// Function to delete a to-do item
function deleteItem() {
    const item = this.parentElement;
    item.remove();
}
