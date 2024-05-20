document.addEventListener('DOMContentLoaded', function() {
    const treeItems = document.querySelectorAll('#directoryTree li');

    treeItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const childUl = item.querySelector('ul');
            if (childUl) {
                childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
            }
            event.stopPropagation(); // предотвратить всплытие события
        });
    });
});
