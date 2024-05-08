export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];


export const renderToppings = () => {
    const toppingContainer = document.querySelector('.container');
    toppingContainer.innerHTML = '';

    toppings.forEach((topping, index) => {
        const toppingElement = document.createElement('div');
        toppingElement.classList.add('topping');
        toppingElement.classList.toggle('topping--selected', topping.selected);
        toppingElement.innerHTML = `
            <h3>${topping.name}</h3>
            <p>${topping.price}</p>
        `;
        
        toppingElement.addEventListener('click', () => {
            toggleTopping(index); 
            renderToppings(); 
        });

        toppingContainer.appendChild(toppingElement);
    });
};

 const toggleTopping = (index) => {
      toppings[index].selected = !toppings[index].selected
  };
