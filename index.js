const boxes = document.querySelectorAll('.box');
let draggedBox = null;

boxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'dragging');
        draggedBox = box;
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.getData('text/plain') === 'dragging') {
            if (box !== draggedBox) {
                // Swap positions of boxes
                const temp = box.innerHTML;
                box.innerHTML = draggedBox.innerHTML;
                draggedBox.innerHTML = temp;
            }
        }
    });
});
