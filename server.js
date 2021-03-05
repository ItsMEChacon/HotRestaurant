const express = require('express');

const app = express();
const PORT = 3500;


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

// Give it an action when clicked
submitButton.on("click", addReservation(event))
// Adding reservation
const addReservation = (event) => {

    event.preventDefault();

    const reservation = {
        name: name.val(),
        email: email.val(),
        id: id.val(),
        phoneNumber: phoneNumber.val()
    };

    app.post("/tables", reservation, () => {

        // If a spot is available then:
        // add to table array
        if (reservedTables.length <= 5) {
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


    });
};

const addToTable = (reservation) => {

};

const addToWaitList = (reservation) => {

}