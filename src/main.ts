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

let saveBtn = document.getElementById("save-btn") as HTMLButtonElement;

const loadGarageButton = document.getElementById("load-btn");
const parkInGarageButton = document.getElementById("park-btn");

let editIndex: number | null = null;

motoForm.addEventListener("submit", (event:Event) => {
  event.preventDefault();
  if (editIndex !== null){
    updateMotorcycleInEditForm(editIndex);
  } else {
    createNewMotorcycle();
  }
  console.log(Motorcycles);
});

saveBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (editIndex !== null) {
    updateMotorcycleInEditForm(editIndex);
  }
});

loadGarageButton?.addEventListener("click", () => {
  const MotorcyclesFromLocalStorage = localStorage.getItem("Motorcycles");
  Motorcycles = JSON.parse(MotorcyclesFromLocalStorage);
  renderSavedMotorcycles();
});

parkInGarageButton?.addEventListener("click", () => {
  localStorage.setItem("Motorcycles", JSON.stringify(Motorcycles));
});

function renderSavedMotorcycles(){
  Motorcycles.forEach(motorcycle => {
    createMotorcycleCardsAndAddMotrcycleToCard(motorcycle, Motorcycles.length - 1);
  });
}

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

let Motorcycles: Motorcycle[] = [];

function createNewMotorcycle(){

  let newMotorcycle: Motorcycle = {
    manufacturer: manufacturerInput.value,
    model: modelInput.value,
    type: typeInput.value,
    engineType: engineTypeInput.value,
    engineVolume: parseInt(eingineVolumeInput.value),
    horsePower: parseInt(horsepowerInput.value),
    dryWeight: parseInt(dryWeightInput.value),
    url: urlInput.value
  }

  if (newMotorcycle.manufacturer === "" || newMotorcycle.model === "" || newMotorcycle.type === "" || newMotorcycle.engineType === "" || newMotorcycle.engineVolume === 0 || newMotorcycle.horsePower === 0 || newMotorcycle.dryWeight === 0 || newMotorcycle.url === "" ){
    window.alert("Bitte alle Felder ausfüllen!");
    return
  }

  Motorcycles.push(newMotorcycle);
  createMotorcycleCardsAndAddMotrcycleToCard(newMotorcycle, Motorcycles.length - 1);
  motoForm.reset();

};

function createMotorcycleCardsAndAddMotrcycleToCard(motorcycle:Motorcycle, index:number){

  //? Ausgabe d. inputs in Card erstellen
  let manufacturerDiv = document.createElement("div");
  manufacturerDiv.classList.add("manufacturer-div")
  manufacturerDiv.innerHTML = motorcycle.manufacturer

  let modelDiv = document.createElement("div");
  modelDiv.classList.add("model-div")
  modelDiv.innerHTML = motorcycle.model

  let typeDiv = document.createElement("div");
  typeDiv.classList.add("type-div")
  typeDiv.innerHTML = motorcycle.type

  let engineTypeDiv = document.createElement("div");
  engineTypeDiv.classList.add("engine-type-div")
  engineTypeDiv.innerHTML = motorcycle.engineType

  let engineVolumeDiv = document.createElement("div");
  engineVolumeDiv.classList.add("engine-volume-div")
  engineVolumeDiv.innerHTML = motorcycle.engineVolume.toString();

  let horsePowerDiv = document.createElement("div");
  horsePowerDiv.classList.add("horse-power-div")
  horsePowerDiv.innerHTML = motorcycle.horsePower.toString();

  let dryWeightDiv = document.createElement("div");
  dryWeightDiv.classList.add("dry-weight-div")
  dryWeightDiv.innerHTML = motorcycle.dryWeight.toString();

  let urlDiv = document.createElement("div");
  urlDiv.classList.add("url-div")
  urlDiv.innerHTML = motorcycle.url

  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-button")
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", () => {
    loadMotorcycleIntoEditForm(index);
  })

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button")
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    deletMotorcycle(index, cardDiv);
  })

  //? card erstellen
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.style.backgroundImage = `url(${motorcycle.url})`

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

  cardDiv.dataset.index = index.toString();

};

function loadMotorcycleIntoEditForm(index:number){
  let motorcycle = Motorcycles[index];
  manufacturerInput.value = motorcycle.manufacturer;
  modelInput.value = motorcycle.model;
  typeInput.value = motorcycle.type;
  engineTypeInput.value = motorcycle.engineType;
  eingineVolumeInput.value = motorcycle.engineVolume.toString();
  horsepowerInput.value = motorcycle.horsePower.toString();
  dryWeightInput.value = motorcycle.dryWeight.toString();
  urlInput.value = motorcycle.url;

  editIndex = index;
  saveBtn.style.display = "block";
}

function updateMotorcycleInEditForm(index:number){
  let updatedMotorcycle: Motorcycle = {
    manufacturer: manufacturerInput.value,
    model: modelInput.value,
    type: typeInput.value,
    engineType: engineTypeInput.value,
    engineVolume: parseInt(eingineVolumeInput.value),
    horsePower: parseInt(horsepowerInput.value),
    dryWeight: parseInt(dryWeightInput.value),
    url: urlInput.value
  }

  if (updatedMotorcycle.manufacturer === "" || updatedMotorcycle.model === "" || updatedMotorcycle.type === "" || updatedMotorcycle.engineType === "" || updatedMotorcycle.engineVolume === 0 || updatedMotorcycle.horsePower === 0 || updatedMotorcycle.dryWeight === 0 || updatedMotorcycle.url === "" ){
    window.alert("Bitte alle Felder ausfüllen!");
    return
  }

  Motorcycles[index] = updatedMotorcycle;

  let cardDiv = outputArea.querySelector(`[data-index="${index}"]`) as HTMLDivElement;
  cardDiv.style.backgroundImage = `url(${updatedMotorcycle.url})`;
  cardDiv.querySelector(".manufacturer-div")!.innerHTML = updatedMotorcycle.manufacturer;
  cardDiv.querySelector(".model-div")!.innerHTML = updatedMotorcycle.model;
  cardDiv.querySelector(".type-div")!.innerHTML = updatedMotorcycle.type;
  cardDiv.querySelector(".engine-type-div")!.innerHTML = updatedMotorcycle.engineType;
  cardDiv.querySelector(".engine-volume-div")!.innerHTML = updatedMotorcycle.engineVolume.toString();
  cardDiv.querySelector(".horse-power-div")!.innerHTML = updatedMotorcycle.horsePower.toString();
  cardDiv.querySelector(".dry-weight-div")!.innerHTML = updatedMotorcycle.dryWeight.toString();

  motoForm.reset();
  editIndex = null;
  saveBtn.style.display = "none";

};

function deletMotorcycle(index:number, cardDiv:HTMLElement){
  Motorcycles.splice(index, 1);
  cardDiv.remove();

  outputArea.querySelectorAll(".card").forEach((card, idx) => {
    card.setAttribute("data-index", idx.toString());
  });

};
