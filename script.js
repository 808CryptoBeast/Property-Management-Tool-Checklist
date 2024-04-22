document.addEventListener('DOMContentLoaded', function() {
    const checklistItems = document.getElementById('checklist-items');
    const newItemInput = document.getElementById('new-item');
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', function() {
        const newItemText = newItemInput.value;
        if (newItemText.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            newItem.addEventListener('click', function() {
                newItem.classList.toggle('completed');
            });
            checklistItems.appendChild(newItem);
            newItemInput.value = '';
        } else {
            alert('Please enter a valid item.');
        }
    });
    const mainItems = document.querySelectorAll('.main-item');
    mainItems.forEach(item => {
        item.addEventListener('click', function() {
            item.querySelector('.sublist').classList.toggle('hidden');
        });
    });
});
