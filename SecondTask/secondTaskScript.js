document.addEventListener('DOMContentLoaded', function()
{
    const bookList = document.getElementById('bookList');
    let lastClickedIndex = null;

    bookList.addEventListener('click', function(event)
    {
        const items = Array.from(bookList.getElementsByTagName('li'));
        const clickedItem = event.target;
        const index = items.indexOf(clickedItem);

        if (event.ctrlKey)
        {
            clickedItem.classList.toggle('selected');
        }
        else if (event.shiftKey)
        {
            if (lastClickedIndex !== null)
            {
                const start = Math.min(lastClickedIndex, index);
                const end = Math.max(lastClickedIndex, index);
                for (let i = start; i <= end; i++)
                {
                    items[i].classList.add('selected');
                }
            }
        } else
        {
            items.forEach(item => item.classList.remove('selected'));
            clickedItem.classList.add('selected');
        }

        lastClickedIndex = index;
    });
});
