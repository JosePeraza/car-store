const cars = [
    {   
        id: 1,
        brand: 'Nissan',
        model: '370Z',
        color: 'Red',
        year: '2020',
        price: 696900,
        photo: 'https://www.diariomotor.com/imagenes/2012/10/nissan-370z-972x900-13.jpg'
    },
    {   
        id: 2,
        brand: 'Nissan',
        model: 'ALTIMA',
        color: 'White',
        year: '2021',
        price: 540400,
        photo: 'https://s3-us-west-2.amazonaws.com/assets.izmocars.com/inventory/100416/273816/640x480/60057431_905587836457227_691190044722987008_o.jpg'
    },
    {   
        id: 3,
        brand: 'Nissan',
        model: 'VERSA',
        color: 'Red',
        year: '2020',
        price: 294900,
        photo: 'https://fotos.perfil.com/2020/08/20/nuevo-nissan-versa-cuando-comenzara-la-preventa-en-la-argentina-1004024.jpg'
    },
    {   
        id: 4,
        brand: 'Nissan',
        model: 'KICKS',
        color: 'Orange',
        year: '2021',
        price: 380009,
        photo: 'https://fotos.perfil.com/2020/05/15/nissan-kicks-957038.jpg'
    },
    {   
        id: 5,
        brand: 'Nissan',
        model: 'X-TRAIL',
        color: 'Red',
        year: '2021',
        price: 625700,
        photo: 'https://i.blogs.es/4c953b/nissan-x-trail-filtrado-1/840_560.jpg'
    },
    
];

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
                      </td>
                 </tr>`
    });

    tableContainer.innerHTML = tableHtml;
}
function addCar() {
    //Obtener el valor del input
    //agregar el usuario al arreglo
    //imprimir nuevamente los carros
    const id = cars[cars.length - 1].id + 1;

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

printCars();