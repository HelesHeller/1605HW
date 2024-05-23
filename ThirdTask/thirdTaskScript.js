document.addEventListener('DOMContentLoaded', function()
{
    const resizable = document.getElementById('resizable');
    const handle = document.getElementById('handle');

    handle.addEventListener('mousedown', function(e)
    {
        e.preventDefault();

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e)
    {
        resizable.style.width = e.clientX - resizable.getBoundingClientRect().left + 'px';
        resizable.style.height = e.clientY - resizable.getBoundingClientRect().top + 'px';
    }

    function stopResize()
    {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }
});
