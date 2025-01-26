const cars = [
  {
      "Make": "Toyota",
      "Model": "Corolla",
      "Year": 2021,
      "Color": "Blue",
      "Transmission": "Automatic",
      "Options": {
          "AirConditioningning": true,
          "Leather": false,
          "GPS": true,
          "Sunroof": false,
          "Bluetooth": true,
          "RearviewCamera": true,
          "HeatedSeats": false,
          "StabilityControl": true,
          "PowerWindows": true,
          "ParkingAssist": false
      },
      "URL": "https://www.slashgear.com/img/gallery/2021-toyota-corolla-xse-sedan-review-ambition-meets-reality/intro-1644978099.jpg"
  },
  {
      "Make": "Honda",
      "Model": "Civic",
      "Year": 2020,
      "Color": "Rouge",
      "Transmission": "Manuelle",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": false,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": false,
        "HeatedSeats": true,
        "StabilityControl": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://hips.hearstapps.com/hmg-prod/images/2020-honda-civic-si-sedan-hpt-386-1591293383.jpg?crop=0.565xw:0.474xh;0.252xw,0.501xh&resize=2048:*"
    },
    {
      "Make": "Ford",
      "Model": "Mustang",
      "Year": 2022,
      "Color": "Noir",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": true,
        "Sunroof": false,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": true,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://www.mustangspecs.com/wp-content/uploads/2022/01/Shadow-Black-2022-Ford-Mustang-4.webp"
    },
    {
      "Make": "Chevrolet",
      "Model": "Malibu",
      "Year": 2019,
      "Color": "Blanc",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": false,
        "GPS": true,
        "Sunroof": false,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": false,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": false
      },
      "URL": "https://st2.stat.vin/files/1G1ZD5ST9KF166140/COPART/31599281/photo/b91be0b6-8de4-4066-9f33-6a243a3dd2e2.JPG"
    },
    {
      "Make": "Nissan",
      "Model": "Altima",
      "Year": 2020,
      "Color": "Gris",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": false,
        "GPS": true,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": false,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://preview.redd.it/n9dewybyf6k31.jpg?width=640&crop=smart&auto=webp&s=11cb113570f1074d8b29ace0fc8be5990d797c00"
    },
    {
      "Make": "BMW",
      "Model": "Serie 3",
      "Year": 2021,
      "Color": "Noir",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": true,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": true,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://images.carexpert.com.au/crop/1200/630/app/uploads/2021/07/2021-BMW-320i-Review-14.jpg"
    },
    {
      "Make": "Mercedes-Benz",
      "Model": "C-Class",
      "Year": 2022,
      "Color": "Argent",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": true,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": true,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://i.gaw.to/content/photos/46/21/462111-mercedes-benz-classe-c-2022-nouvelle-et-spectaculaire-a-l-interieur.jpeg"
    },
    {
      "Make": "Audi",
      "Model": "A4",
      "Year": 2021,
      "Color": "Blanc",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": true,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": true,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://images.thewest.com.au/publication/B881884771Z/1622789033616_GPO39R4DU.2-2.jpg?imwidth=810&impolicy=wan_v3"
    },
    {
      "Make": "Volkswagen",
      "Model": "Passat",
      "Year": 2020,
      "Color": "Bleu",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": false,
        "GPS": true,
        "Sunroof": true,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": false,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://images.cars.com/cldstatic/wp-content/uploads/volkswagen-passat-2020-01-angle--blue--exterior--front--mountains.jpg"
    },
    {
      "Make": "Hyundai",
      "Model": "Elantra",
      "Year": 2019,
      "Color": "Rouge",
      "Transmission": "Manuelle",
      "Options": {
        "AirConditioningning": true,
        "Leather": false,
        "GPS": true,
        "Sunroof": false,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": false,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": false
      },
      "URL": "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2019/03/myelantra12.jpg"
    },
    {
      "Make": "Kia",
      "Model": "Optima",
      "Year": 2020,
      "Color": "Argent",
      "Transmission": "Automatique",
      "Options": {
        "AirConditioningning": true,
        "Leather": true,
        "GPS": true,
        "Sunroof": false,
        "Bluetooth": true,
        "RearviewCamera": true,
        "HeatedSeats": true,
        "ControleDeStabilite": true,
        "PowerWindows": true,
        "ParkingAssist": true
      },
      "URL": "https://cka-dash.s3.amazonaws.com/156-1019-LKM1142/mainimage.jpg"
    }
  
  // Ajoute les autres voitures ici
];

const options = {
  "AirConditioningning": "Air conditioning",
  "Leather": "Leather",
  "GPS": "GPS Navigation System",
  "Sunroof": "Sunroof",
  "Bluetooth": "Bluetooth Connectivity",
  "RearviewCamera": "Rearview Camera",
  "HeatedSeats": "Heated Seats",
  "ControleDeStabilite": "Stability Control",
  "PowerWindows": "Power Windows",
  "ParkingAssist": "Parking Assist"
};

// Index of the currently displayed car
let currentCarIndex = 0;

// Function to display a car in the user interface
function displayCar(index) {
  const car = cars[index];
  document.getElementById('car-image').src = car.URL;
  document.getElementById('car-make').textContent = car.Make;
  document.getElementById('car-model').textContent = car.Model;
  document.getElementById('car-year').textContent = car.Year;
  document.getElementById('car-color').textContent = car.Color;
  document.getElementById('car-transmission').textContent = car.Transmission;
  document.getElementById('car-fuel').textContent = car.Fuel;
  
  const optionsText = Object.keys(car.Options)
    .filter(option => car.Options[option])
    .map(option => options[option])
    .join(', ');
  document.getElementById('car-options').textContent = optionsText;
}

// Function to open the modal with the correct context (add/edit)
function openCarModal(editMode = false) {
  const modal = document.getElementById('car-modal');
  const formInputs = {
    make: document.getElementById('car-make-input'),
    model: document.getElementById('car-model-input'),
    year: document.getElementById('car-year-input'),
    color: document.getElementById('car-color-input'),
    transmission: document.getElementById('car-transmission-input'),
    fuel: document.getElementById('car-fuel-input'),
    url: document.getElementById('car-url-input'),
  };
  const optionsContainer = document.getElementById('car-options-input');
  optionsContainer.innerHTML = ''; 

  // Create the checkboxes in the modal
  for (let key in options) {
    const label = document.createElement('label');
    label.innerHTML = `<input type='checkbox' id='${key}' name='${key}'> ${options[key]}`;
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement('br'));
  }

  if (editMode) {
    modal.querySelector('#modal-title').innerText = 'Edit the car';
    const car = cars[currentCarIndex];
    formInputs.make.value = car.Make;
    formInputs.model.value = car.Model;
    formInputs.year.value = car.Year;
    formInputs.color.value = car.Color;
    formInputs.transmission.value = car.Transmission;
    formInputs.fuel.value = car.Fuel;
    formInputs.url.value = car.URL;
    for (let key in car.Options) {
      if (car.Options[key]) document.getElementById(key).checked = true;
    }
  } else {
    modal.querySelector('#modal-title').innerText = 'Add a new car';
    formInputs.make.value = '';
    formInputs.model.value = '';
    formInputs.year.value = '';
    formInputs.color.value = '';
    formInputs.transmission.value = '';
    formInputs.fuel.value = '';
    formInputs.url.value = '';
    for (let key in options) {
      document.getElementById(key).checked = false;
    }
  }
  modal.style.display = 'block';
}

// Close the modal
function closeCarModal() {
  const modal = document.getElementById('car-modal');
  modal.style.display = 'none';
}

// Save the car data from the form
function saveCar(editMode = false) {
  const formInputs = {
    Make: document.getElementById('car-make-input').value.trim(),
    Model: document.getElementById('car-model-input').value.trim(),
    Year: parseInt(document.getElementById('car-year-input').value, 10),
    Color: document.getElementById('car-color-input').value.trim(),
    Transmission: document.getElementById('car-transmission-input').value.trim(),
    URL: document.getElementById('car-url-input').value.trim(),
  };

  // Validation of required fields
  if (!formInputs.Make || !formInputs.Model || isNaN(formInputs.Year)) {
    alert('Please fill in all required fields.');
    return;
  }

// Retrieving the options
  const optionsValues = {};
  Object.keys(options).forEach(key => {
    optionsValues[key] = document.getElementById(key).checked;
  });

  const car = {
    ...formInputs,
    Options: optionsValues
  };

  if (editMode) {
    if (cars[currentCarIndex]) {
      cars[currentCarIndex] = car;
    } else {
      console.error("Unable to edit a non-existent car.");
    }
  } else {
    cars.push(car);
    currentCarIndex = cars.length - 1;
  }

  displayCar(currentCarIndex);
  closeCarModal();
}


// Navigation to the previous car
document.getElementById('prev-car').addEventListener('click', () => {
  currentCarIndex = (currentCarIndex - 1 + cars.length) % cars.length;
  displayCar(currentCarIndex);
});

// Navigation to the next car
document.getElementById('next-car').addEventListener('click', () => {
  currentCarIndex = (currentCarIndex + 1) % cars.length;
  displayCar(currentCarIndex);
});

// Sort the cars by year
document.getElementById('sort-year').addEventListener('change', () => {
  cars.sort((a, b) => a.Year - b.Year);
  displayCar(currentCarIndex);
});

// Sort the cars by make
document.getElementById('sort-make').addEventListener('change', () => {
  cars.sort((a, b) => a.Make.localeCompare(b.Make));
  displayCar(currentCarIndex);
});


// Add a new car
document.getElementById('new-car').addEventListener('click', () => openCarModal(false));

// Editing an existing car
document.getElementById('edit-car').addEventListener('click', () => openCarModal(true));

// Save from the modal
document.getElementById('save-car').addEventListener('click', () => saveCar(document.getElementById('modal-title').innerText === 'Modifier la voiture'));

// Cancel the modal
document.getElementById('cancel-car').addEventListener('click', closeCarModal);

// Display the default car on load
window.onload = () => displayCar(currentCarIndex);