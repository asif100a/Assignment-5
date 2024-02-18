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
    if(pParibahan) {
        pParibahan.scrollIntoView({behavior: 'smooth'});
    };
};


const ticketBtns = document.getElementsByClassName('ticket-btn');
for(const btn of ticketBtns) {
    btn.addEventListener('click', function(e) {
        console.log('clicked');
    });
    console.log()
};