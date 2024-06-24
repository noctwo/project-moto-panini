# Moto Panini - Your own Motorcycle Collection

## Description

Motorcycle Garage Manager is a simple web application that allows users to create, edit, save, load and delete motorcycle entries. The application stores the motorcycles in the local storage of the browser, providing a persistent way to manage the motorcycle collection.

## Features

- Add new motorcycles with detailed information.
- Edit existing motorcycle details.
- Delete motorcycles from the collection.
- Save and load the motorcycle collection using local storage.

## Technologies Used

- TypeScript
- HTML
- CSS

## Screenshots

![Example screenshot](./project-moto-panini/src/img/moto-panini-screen.png)

![Link to Project](https://noctwo.github.io/project-moto-panini/)


## Usage
1. Adding a Motorcycle:

- Fill in the form with the motorcycle's details.
- Click the "Save" button to add the motorcycle to your collection.

2. Editing a Motorcycle:

- Click the "Edit" button on the motorcycle card you want to edit.
- The form will populate with the motorcycle's details.
- Update the details and click the "Save" button to save changes.

3. Deleting a Motorcycle:

- Click the "Delete" button on the motorcycle card you want to remove.

4. Saving to Local Storage:

- Click the "Park in Garage" button to save the current collection to local storage.

5. Loading from Local Storage:

- Click the "Load Garage" button to load the saved collection from local storage.


## Code Overview

HTML Structure
- The form to input motorcycle details is identified by id="moto-form".
- The inputs for motorcycle details have specific IDs (e.g., id="manufacturer-input").


CSS
- Styles are imported from style.css.


JavaScript
- The main functionality is in the main.ts file.
- Key elements are selected using document.getElementById and document.querySelector.
- The motorcycle data is stored in the Motorcycles array, which is updated upon adding, editing, or deleting a motorcycle.
- Event listeners are attached to handle form submission, saving to local storage, loading from local storage, and editing/deleting motorcycles.
- Functions like createNewMotorcycle, updateMotorcycleInEditForm, renderSavedMotorcycles, createMotorcycleCardsAndAddMotorcycleToCard, and deleteMotorcycle manage the motorcycle data and update the DOM accordingly.


TypeScript
- The project uses TypeScript for type safety.
- The Motorcycle type defines the structure of a motorcycle object.


## Contact

Created by Pius (https://github.com/noctwo)