document.addEventListener('DOMContentLoaded', () => {
    // Populate size options
    const sizeOptionsContainer = document.querySelector('.size-options');
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    sizes.forEach(size => {
      const span = document.createElement('span');
      span.textContent = size;
      sizeOptionsContainer.appendChild(span);
    });
  
  
    // Populate related products
    const relatedProductsList = document.querySelector('.related-products-list');
    const mainImage = document.getElementById('main-product-image');
    const products = [
      { name: 'V-Neck T-Shirts', img: 'assets/images/Rectangle 20.png' },
      { name: 'Full Sleeve T-Shirts', img: 'assets/images/Rectangle 20.png' },
      { name: 'Another T-Shirt', img: 'assets/images/Frame 15.png' },
      { name: 'Another T-Shirt', img: 'assets/images/Frame 15.png' },
    ];
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img class="related-product-image" src="${product.img}" alt="${product.name}" />

        <div>
          ${product.name}<br/>
          <small>Explore Now!</small>
        </div>
      `;
      card.querySelector('img').addEventListener('click', () => {
        mainImage.src = product.img;
        mainImage.alt = product.name;
      });
      relatedProductsList.appendChild(card);
    });
  });