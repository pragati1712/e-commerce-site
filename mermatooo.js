function showTab(tabName) {
    // Redirect to the corresponding page
    switch (tabName) {
        case 'men':
            window.location.href = 'men.html';
            break;
        case 'women':
            window.location.href = 'women.html';
            break;
        case 'kids':
            window.location.href = 'kids.html';
            break;
        default:
            console.error('Invalid tabName:', tabName);
            break;
    }
}


// Function to fetch product data from the API
async function fetchProductData() {
    try {
        const response = await fetch('https:https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();
        return data.categories; // Assuming data is an object with categories
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to update the badge element with dynamic data
async function updateBadge() {
    const categories = await fetchProductData();
    
    // Assuming you have only one product in the first category for simplicity
    const product = categories[0].category_products[0];

    // Update the badge element if badge_text is available
    const badgeElement = document.querySelector('.badge');
    if (product.badge_text) {
        badgeElement.textContent = product.badge_text;
        badgeElement.style.backgroundColor = 'white'; // Customize as needed
        badgeElement.style.color = 'black'; // Customize as needed
    } else {
        // If no badge text is provided, hide the badge
        badgeElement.style.display = 'none';
    }
}

// Trigger badge update when the page loads
window.onload = updateBadge;


// Function to fetch product data from the API
async function fetchProductData() {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to fetch product data from the API
async function fetchProductData() {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to fetch product data from the API
async function fetchProductData() {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();
        return data.categories;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to update product details with dynamic data
async function updateProductDetails() {
    const categories = await fetchProductData();

    categories.forEach(category => {
        const productContainer = document.querySelector(`#${category.category_name.toLowerCase()}Tab`);

        category.category_products.forEach(product => {
            // Create elements for product details
            const productDetails = document.createElement('div');
            productDetails.classList.add('product-details');

            // Set actual price
            const actualPriceElement = document.createElement('div');
            actualPriceElement.classList.add('price');
            actualPriceElement.textContent = `RS ${product.price}.00`;
            productDetails.appendChild(actualPriceElement);

            // Check if compare_at_price is available
            if (product.compare_at_price) {
                // Set compare price with strikethrough
                const comparePriceElement = document.createElement('div');
                comparePriceElement.classList.add('compare-price');
                comparePriceElement.textContent = `(~${product.compare_at_price})`;
                productDetails.appendChild(comparePriceElement);

                // Calculate and display discount percentage
                const actualPrice = parseFloat(product.price);
                const comparePrice = parseFloat(product.compare_at_price);
                const discountPercentage = ((comparePrice - actualPrice) / comparePrice) * 100;

                const discountElement = document.createElement('div');
                discountElement.classList.add('discount');
                discountElement.textContent = `(${discountPercentage.toFixed(2)}% Off)`;
                productDetails.appendChild(discountElement);
            }

            // Append product details to the product container
            productContainer.appendChild(productDetails);
        });
    });
}

// Trigger product details update when the page loads
window.onload = updateProductDetails;
