import './style.css'

let outputArea = document.querySelector(".grid-wrapper") as HTMLElement;

let motoForm = document.getElementById("moto-form") as HTMLFormElement;
let manufacturerInput = document.getElementById("manufacturer-input") as HTMLInputElement;
let modelInput = document.getElementById("model-input") as HTMLInputElement;
let typeInput = document.getElementById("type-input") as HTMLInputElement;
let engineTypeInput = document.getElementById("engine-type-input") as HTMLInputElement;
let eingineVolumeInput = document.getElementById("eingine-volume-input")as HTMLInputElement;
let horsepowerInput = document.getElementById("horsepower-input")as HTMLInputElement;
let dryWeightInput = document.getElementById("dry-weight-input")as HTMLInputElement;
let urlInput = document.getElementById("url-input") as HTMLInputElement;

motoForm.addEventListener("submit", (event:Event) => {
  event.preventDefault();
  console.log("hi");
  console.log(createNewMotorcycle());
});

type Motorcycle = {
  manufacturer: string,
  model: string,
  type: string,
  engineType: string,
  engineVolume: number,
  horsePower: number,
  dryWeight: number,
  url: string
}

let Motorcycle: Motorcycle[] = [];

function createNewMotorcycle(){

  

  let newMotorcycle: Motorcycle = {
    manufacturer: manufacturerInput.value,
    model: modelInput.value,
    type: typeInput.value,
    engineType: engineTypeInput.value,
    engineVolume: eingineVolumeInput.value,
    horsePower: horsepowerInput.value,
    dryWeight: dryWeightInput.value,
    url: urlInput.value
  }

  if (newMotorcycle.manufacturer === "" || newMotorcycle.model === "" || newMotorcycle.type === "" || newMotorcycle.engineType === "" || newMotorcycle.engineVolume === "" || newMotorcycle.horsePower === "" || newMotorcycle.dryWeight === "" || newMotorcycle.url === "" ){
    window.alert("Bitte alle Felder ausfüllen!");
  } else{

    //object key value == leer check?

  //? Ausgabe d. inputs in Card erstellen
  let manufacturerDiv = document.createElement("div");
  manufacturerDiv.classList.add("manufacturer-div")
  manufacturerDiv.innerHTML = newMotorcycle.manufacturer

  let modelDiv = document.createElement("div");
  modelDiv.classList.add("model-div")
  modelDiv.innerHTML = newMotorcycle.model

  let typeDiv = document.createElement("div");
  typeDiv.classList.add("type-div")
  typeDiv.innerHTML = newMotorcycle.type

  let engineTypeDiv = document.createElement("div");
  engineTypeDiv.classList.add("engine-type-div")
  engineTypeDiv.innerHTML = newMotorcycle.engineType

  let engineVolumeDiv = document.createElement("div");
  engineVolumeDiv.classList.add("engine-volume-div")
  engineVolumeDiv.innerHTML = newMotorcycle.engineVolume

  let horsePowerDiv = document.createElement("div");
  horsePowerDiv.classList.add("horse-power-div")
  horsePowerDiv.innerHTML = newMotorcycle.horsePower

  let dryWeightDiv = document.createElement("div");
  dryWeightDiv.classList.add("dry-weight-div")
  dryWeightDiv.innerHTML = newMotorcycle.dryWeight

  let urlDiv = document.createElement("div");
  urlDiv.classList.add("url-div")
  urlDiv.innerHTML = newMotorcycle.url

  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-button")
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", () => {
    
  })

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button")
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    cardDiv.remove();
  })

  //? card erstellen
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.style.backgroundImage = `url(${newMotorcycle.url})`

  //? inputs in card packen
  cardDiv.appendChild(manufacturerDiv);
  cardDiv.appendChild(modelDiv);
  cardDiv.appendChild(typeDiv);
  cardDiv.appendChild(engineTypeDiv);
  cardDiv.appendChild(engineVolumeDiv);
  cardDiv.appendChild(horsePowerDiv);
  cardDiv.appendChild(dryWeightDiv);
  cardDiv.appendChild(editBtn);
  cardDiv.appendChild(deleteBtn);

  //?fertige card ausgeben
  outputArea.appendChild(cardDiv);

  motoForm.reset();
  }
};

