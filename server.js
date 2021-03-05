const express = require('express');
const path = require('path');

const app = express();
const PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send ('Table reservation server live!')
});

app.listen(PORT, () => console.log (`app listening on PORT ${PORT}`));




// Get the HTML data from page
const submitButton = document.querySelector("#submit-button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const id = document.querySelector("#id");
const phoneNumber = document.querySelector("#phoneNumber");

// Get the HTML for the tables and wait list
const waitListDiv = document.querySelector("#waitListSection");
const tableSectionDiv = document.querySelector("#tableSection");

// Give it an action when clicked
submitButton.on("click", addReservation(event));
// Adding reservation
const addReservation = (event) => {

    event.preventDefault();

    const reservation = {
        name: name.val(),
        email: email.val(),
        id: id.val(),
        phoneNumber: phoneNumber.val()
    };


    // If a spot is available then:
    // add to table array
    if (reservedTables.length < 5) {
        reservedTables.push(reservation);
        addToTable(reservation);
        console.log("Your reservation had been booked!");
    }
    // Else:
    // add to waiting list array
    else {
        waitingList.push(reservation);
        addToWaitList(reservation);
        console.log("Sorry you have been added to our wait list..please wait your turn.");
    }


};

const addToTable = (reservation) => {

    const {name, email, id, phoneNumber } = reservation;

    let listItem = $("<li>");
    let tableNumber = reservedTables.length + 1;

    listItem.append(
      $("<h2>").text("Table #" + tableNumber),
      $("<hr>"),
      $("<h2>").text("ID: " + id),
      $("<h2>").text("Name: " + name),
      $("<h2>").text("Email: " + email),
      $("<h2>").text("Phone: " + phoneNumber)
    );


    tableSectionDiv.append(listItem);
};

const addToWaitList = (reservation) => {

    const { name, email, id, phoneNumber } = reservation;
    // Post this to the waiting list


}

const reservedTables = ['randomdata'];
const waitList = ['declined'];

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve/:reserve', (req, res) => { 
    const list = req.params.reservedTables
    
    console.log(list)
});

app.listen(PORT, () => console.log (`App listening on PORT ${PORT}`));

