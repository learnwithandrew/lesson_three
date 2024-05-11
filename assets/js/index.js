document.addEventListener('DOMContentLoaded', () => {
    let carContainer = document.getElementById('car-cards');
    let cars = [
        {
            id: 1,
            carName: "Convertible car",
            carImage: "./assets/images/convertible_prev_ui.png",
            carParts: ["gear box", "wheels", "headlights"]
        },
        {
            id: 2,
            carName: "Sports car",
            carImage: "./assets/images/sports-car_prev_ui.png",
            carParts: ["gear box", "wheels", "headlights"]
        },
        {
            id: 3,
            carName: "Minivan car",
            carImage: "./assets/images/minivan_prev_ui.png",
            carParts: ["gear box", "wheels", "headlights"]
        },
        {
            id: 4,
            carName: "Electric car",
            carImage: "./assets/images/tesla_prev_ui.png",
            carParts: ["gear box", "wheels", "headlights"]
        },
        {
            id: 5,
            carName: "Luxury car",
            carImage: "./assets/images/benz-suv_prev_ui.png",
            carParts: ["gear box", "wheels", "headlights"]
        }
    ]

    function displayCars() {
        cars.forEach((car) => {
            const carCard = document.createElement('div')
            carCard.classList.add('card')
            carCard.innerHTML = `
              <img src="${car.carImage}" alt="${car.carName}" />
              <h5>${car.carName}</h5>
              <a href="">Shop now</a>
            `
            console.log(carCard)
            carContainer.appendChild(carCard)
        })
    }

    displayCars()


})