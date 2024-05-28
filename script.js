document.querySelectorAll('.merch-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.border = "3px solid #ff0000";
    });

    item.addEventListener('mouseout', () => {
        item.style.border = "none";
    });
});
