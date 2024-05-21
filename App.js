// app.js


//ระบบซื้อของ smartphone มือ 2 
document.addEventListener('DOMContentLoaded', () => {
    const smartphoneList = document.getElementById('smartphone-list');
    const addSmartphoneForm = document.getElementById('add-smartphone-form');
    const modelInput = document.getElementById('model');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');

    const buyModal = document.getElementById('buyModal');
    const buyModalText = document.getElementById('buyModalText');
    const cancelBuyButton = document.getElementById('cancelBuyButton');
    const confirmBuyButton = document.getElementById('confirmBuyButton');

    let currentBuyIndex = null;

    const smartphones = [
        { model: 'iPhone 12', price: 600, description: 'A great phone with a powerful chip and great camera.' },
        { model: 'Samsung Galaxy S20', price: 500, description: 'A high-end smartphone with an amazing display.' },
        { model: 'Google Pixel 5', price: 450, description: 'A solid phone with a fantastic camera and clean software.' }
    ];

    const renderSmartphones = () => {
        smartphoneList.innerHTML = '';
        smartphones.forEach((phone, index) => {
            const phoneElement = document.createElement('div');
            phoneElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');
            phoneElement.innerHTML = `
                <h3 class="text-xl font-bold">${phone.model}</h3>
                <p class="text-gray-700">$${phone.price}</p>
                <p class="text-gray-600">${phone.description}</p>
                <div class="mt-2">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onclick="buySmartphone(${index})">Buy</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onclick="removeSmartphone(${index})">Remove</button>
                </div>
            `;
            smartphoneList.appendChild(phoneElement);
        });
    };

    const addSmartphone = (event) => {
        event.preventDefault();
        const newSmartphone = {
            model: modelInput.value,
            price: parseFloat(priceInput.value),
            description: descriptionInput.value
        };
        smartphones.push(newSmartphone);
        renderSmartphones();
        addSmartphoneForm.reset();
    };

    window.removeSmartphone = (index) => {
        smartphones.splice(index, 1);
        renderSmartphones();
    };

    window.buySmartphone = (index) => {
        currentBuyIndex = index;
        const phone = smartphones[index];
        buyModalText.textContent = `Are you sure you want to buy the ${phone.model} for $${phone.price}?`;
        buyModal.classList.remove('hidden');
    };

    cancelBuyButton.addEventListener('click', () => {
        buyModal.classList.add('hidden');
        currentBuyIndex = null;
    });

    confirmBuyButton.addEventListener('click', () => {
        if (currentBuyIndex !== null) {
            smartphones.splice(currentBuyIndex, 1);
            renderSmartphones();
            buyModal.classList.add('hidden');
            currentBuyIndex = null;
            alert('Purchase successful!');
        }
    });

    addSmartphoneForm.addEventListener('submit', addSmartphone);
    renderSmartphones();
});

// ระบบขายของ smartphone มือ2
document.addEventListener('DOMContentLoaded', () => {
    const smartphoneList = document.getElementById('smartphone-list');
    const addSmartphoneForm = document.getElementById('add-smartphone-form');
    const modelInput = document.getElementById('model');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');

    const smartphones = [
        { model: 'iPhone 15', price: 600, description: 'A great phone with a powerful chip and great camera.' },
        { model: 'Samsung Galaxy S24', price: 500, description: 'A high-end smartphone with an amazing display.' },
        { model: 'Google Pixel 8', price: 450, description: 'A solid phone with a fantastic camera and clean software.' }
    ];

    const renderSmartphones = () => {
        smartphoneList.innerHTML = '';
        smartphones.forEach((phone, index) => {
            const phoneElement = document.createElement('div');
            phoneElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');
            phoneElement.innerHTML = `
                <h3 class="text-xl font-bold">${phone.model}</h3>
                <p class="text-gray-700">${phone.price} Bath</p>
                <p class="text-gray-600">${phone.description}</p>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2" onclick="removeSmartphone(${index})">Remove</button>
            `;
            smartphoneList.appendChild(phoneElement);
        });
    };

    const addSmartphone = (event) => {
        event.preventDefault();
        const newSmartphone = {
            model: modelInput.value,
            price: parseFloat(priceInput.value),
            description: descriptionInput.value
        };
        smartphones.push(newSmartphone);
        renderSmartphones();
        addSmartphoneForm.reset();
    };

    window.removeSmartphone = (index) => {
        smartphones.splice(index, 1);
        renderSmartphones();
    };

    addSmartphoneForm.addEventListener('submit', addSmartphone);
    renderSmartphones();
});
