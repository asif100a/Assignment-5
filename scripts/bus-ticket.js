// // 
// const pParibahan = document.getElementById('p-paribahan');
// pParibahan.addEventListener('click', function(){
//     console.log('Present');
// });

// 
// const buyTicket = document.getElementById('buy-ticket');

// Scroll to get Ticket
function getTicketById(getTicket) {
    const pParibahan = document.getElementById(getTicket);
    if (pParibahan) {
        pParibahan.scrollIntoView({ behavior: 'smooth' });
    };
};

// Change The backgroun of btn & get specific btn
const ticketBtns = document.getElementsByClassName('ticket-btn');
let sum = 0;
for (const btn of ticketBtns) {

    btn.addEventListener('click', function (e) {
        btn.classList.add('bg-green-400', 'text-white');

        const specificBtn = e.target.id;

        // Decrement the left Seats
        const seatsLeft = document.getElementById('seats-left');
        seatsLeft.innerText --;
        // const decrement = 


        // Create elements to show in the box
        const showBtnSeat = document.createElement('li');
        showBtnSeat.innerText = specificBtn;

        const showClass = document.createElement('li');
        showClass.innerText = 'Economy';
        
        const showPrice = document.createElement('li');
        showPrice.innerText = '550';

        // Create li container
        const ul = document.createElement('ul');
        ul.appendChild(showBtnSeat);
        ul.appendChild(showClass);
        ul.appendChild(showPrice);
        
        ul.classList.add('flex');
        ul.classList.add('justify-around');
        
        // Append the ul in the Show Box
        const showSelectedSeats = document.getElementById('show-selected-seat');
        showSelectedSeats.appendChild(ul);

        
        // Calculate the Total price
        const totalPriceString = showPrice;
        let totalPrice = parseInt(totalPriceString.innerText);
        let sumOfPrice = sum += totalPrice;
        
        // Add Total price to the Box
        const totalTicketPrice = document.getElementById('total-price'); 
        totalTicketPrice.innerText = sumOfPrice;
    });
};



// 



// console.log(showSelectedSeats)



// function getTicketButton() {
//     const ticketBtns = document.getElementsByClassName('ticket-btn');
//     console.log(ticketBtns)

//     for (const btn of ticketBtns) {
//         console.log(btn);
//     }
// };


// function setButtonColor(e) {
//     const btnColor = getElementById(e);
//     btnColor.classList.add('bg-green-400', 'text-white');
// };