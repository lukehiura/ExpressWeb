"use strict";

function displayPersonData(tableId, person) {
    let table = document.getElementById(tableId);

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = `<img src="${person.picture.thumbnail}" alt="Portrait of ${person.name.first} ${person.name.last}"/>`;
    cell2.innerHTML = `<a href="mailto:${person.email}">${person.name.first} ${person.name.last}</a>`;
    cell3.innerHTML = person.phone;
    cell4.innerHTML = person.location.city;
}

async function handleButtonClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('id');

    const url = targetId === 'browserDataButton' ? 'https://randomuser.me/api/' : '/random-person';

    try {
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error("Unable to fetch the data. Please try again later.");
        }

        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
            displayPersonData('tableBody', data.results[0]);
        } else {
            throw new Error("No data found from the API response.");
        }

    } catch (error) {
        console.error("An error occurred while fetching the data: " + error.message);
    }
}


async function handleServerButtonClick(event) {
    event.preventDefault();

    try {
        const response = await fetch('/from-server');

        if (response.status !== 200) {
            throw new Error("Unable to fetch the data. Please try again later.");
        }

        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
            displayPersonData('tableBody', data.results[0]);
        } else {
            throw new Error("No data found from the API response.");
        }

    } catch (error) {
        console.error("An error occurred while fetching the data: " + error.message);
    }
}

async function handleExpressButtonClick(event) {
    event.preventDefault();

    try {
        const response = await fetch('/click');
        if (response.status !== 200) {
            throw new Error("Unable to fetch the data. Please try again later.");
        }

        const data = await response.text();
        console.log(data);

    } catch (error) {
        console.error("An error occurred while fetching the data: " + error.message);
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const browserDataButton = document.getElementById('browserDataButton');
    const serverDataButton = document.getElementById('serverDataButton');
    const expressButton = document.getElementById('express-button'); // Add this line

    browserDataButton.addEventListener('click', handleButtonClick);
    serverDataButton.addEventListener('click', handleServerButtonClick);
    expressButton.addEventListener('click', handleExpressButtonClick); // Add this line
});


