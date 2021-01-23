// const cars = [
//     {   
//         id: 1,
//         brand: 'Nissan',
//         model: '370Z',
//         color: 'Red',
//         year: '2020',
//         price: 696900,
//         photo: 'https://www.diariomotor.com/imagenes/2012/10/nissan-370z-972x900-13.jpg'
//     },
//     {   
//         id: 2,
//         brand: 'Nissan',
//         model: 'ALTIMA',
//         color: 'White',
//         year: '2021',
//         price: 540400,
//         photo: 'https://s3-us-west-2.amazonaws.com/assets.izmocars.com/inventory/100416/273816/640x480/60057431_905587836457227_691190044722987008_o.jpg'
//     },
//     {   
//         id: 3,
//         brand: 'Nissan',
//         model: 'VERSA',
//         color: 'Red',
//         year: '2020',
//         price: 294900,
//         photo: 'https://fotos.perfil.com/2020/08/20/nuevo-nissan-versa-cuando-comenzara-la-preventa-en-la-argentina-1004024.jpg'
//     },
//     {   
//         id: 4,
//         brand: 'Nissan',
//         model: 'KICKS',
//         color: 'Orange',
//         year: '2021',
//         price: 380009,
//         photo: 'https://fotos.perfil.com/2020/05/15/nissan-kicks-957038.jpg'
//     },
//     {   
//         id: 5,
//         brand: 'Nissan',
//         model: 'X-TRAIL',
//         color: 'Red',
//         year: '2021',
//         price: 625700,
//         photo: 'https://i.blogs.es/4c953b/nissan-x-trail-filtrado-1/840_560.jpg'
//     },
    
// ];

const cars = JSON.parse(localStorage.getItem('cars')) || [];

let updating = false;
let updatingId = -1;

function printCars() {

    const tableContainer = document.getElementById('container-cars');

    let tableHtml = '';
    cars.forEach((car) => {
        tableHtml += `<tr>
                      <td><div class="container img-max align-items-center"><img class="img-fluid img-thumbnail rounded mx-auto d-block" src="${car.photo}" alt="Car-${car.id}"></div></td>    
                      <td>${car.brand}</td>
                      <td>${car.model}</td>
                      <td>${car.color}</td>
                      <td>${car.year}</td>
                      <td>$${car.price}</td>
                      <td>
                          <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                              Eliminar
                          </button>
                          <button onclick="enabledUpdateCar(${car.id})" class="btn btn-warning">
                              Actualizar
                          </button>
                      </td>
                 </tr>`
    });

    tableContainer.innerHTML = tableHtml;
}
function addCar() {
    //Obtener el valor del input
    //agregar el usuario al arreglo
    //imprimir nuevamente los carros
    if(updating) {
        updateCar();
        return;
    }

    const inputPhoto = document.getElementById('photo');
    const photo = inputPhoto.value;
    const inputBrand = document.getElementById('brand');
    const brand = inputBrand.value;
    const inputModel = document.getElementById('model');
    const model = inputModel.value;
    const inputYear = document.getElementById('year');
    const year = inputYear.value;
    const inputColor = document.getElementById('color');
    const color = inputColor.value;
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;

    let id = 1;
    if(cars.length > 0) {
        id = cars[cars.length - 1].id + 1;
    }

    const newCar = {
        id: id,
        photo: photo,
        brand: brand,
        model: model,
        year: year,
        color: color,
        price: price
    }
    cars.push(newCar);
    printCars();
    console.log(cars);
    localStorage.setItem('cars', JSON.stringify(cars));

    //Limpiamos el formulario al darle push
    document.getElementById('form-cars').reset();
}

function deleteCar(id) {
    //como eliminar un valor de un arreglo? 1. utilizando splice
    // necesito el indice del elemento si lo que yo recivo es el id, como lo obtengo? -> findIndex 
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    console.log(cars);
    printCars();
}

function enabledUpdateCar(id) {
    updatingId = id;
    const car = cars.find((car) => car.id === id);
    

    const updateBrand = document.getElementById('brand');
    updateBrand.value = car.brand;
    const inputModel = document.getElementById('model');
    inputModel.value = car.model; 
    const inputYear = document.getElementById('year');
    inputYear.value = car.year;
    const inputColor = document.getElementById('color');
    inputColor.value = car.color;
    const inputPrice = document.getElementById('price');
    inputPrice.value = car.price;
    const inputPhoto = document.getElementById('photo');
    inputPhoto.value = car.photo;

    updating = true;
    
    const button = document.getElementById('save');
    button.textContent = 'Update';
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');

    const buttonCancel = document.getElementById('cancel');
    buttonCancel.classList.remove('d-none');
}

function updateCar() {
    const car = cars.find((car) => car.id === updatingId);
    console.log(car);

    const inputPhoto = document.getElementById('photo');
    const photo = inputPhoto.value;
    const inputBrand = document.getElementById('brand');
    const brand = inputBrand.value;
    const inputModel = document.getElementById('model');
    const model = inputModel.value;
    const inputYear = document.getElementById('year');
    const year = inputYear.value;
    const inputColor = document.getElementById('color');
    const color = inputColor.value;
    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;

    car.photo = photo;
    car.brand = brand;
    car.model = model;
    car.year = year;
    car.color = color;
    car.price = price;


    printCars();
    cancelUpdate();
    
}

function cancelUpdate() {
    //Limpiamos el formulario al darle push
    document.getElementById('form-cars').reset();

    //Devolvemos los datos a sus valores originales
    updating = false;
    updatingId = -1;

    const button = document.getElementById('save');
    button.textContent = 'Submit';
    button.classList.remove('btn-warning');
    button.classList.add('btn-primary');

    const buttonCancel = document.getElementById('cancel');
    buttonCancel.classList.add('d-none');
}


    printCars();
