function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const container = document.querySelector('.container-grid');
    const cards = Array.from(container.getElementsByClassName('card'));

    if (sortValue === 'high-to-low') {
        cards.sort((a, b) => {
            return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
        });
    } else if (sortValue === 'low-to-high') {
        cards.sort((a, b) => {
            return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
        });
    } else if (sortValue === 'clothing' || sortValue === 'jewelries' || sortValue === 'shoes' || sortValue === 'bags') {
        // Map dropdown values to data-category values
        const categoryMap = {
            'clothing': 'Clothing',
            'jewelries': 'Jewelries',
            'shoes': 'Shoes/Sneakers',
            'bags': 'Bags/Purses'
        };
        const selectedCategory = categoryMap[sortValue];
        
        cards.forEach(card => {
            if (card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        return;
    } else {
        // Reset to default view (show all items)
        cards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }

    // Reorder sorted items in the DOM
    cards.forEach(card => container.appendChild(card));
}
