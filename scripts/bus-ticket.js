// // 
// 
// Scroll to get Ticket
function getTicketById(getTicket) {
    const pParibahan = document.getElementById(getTicket);
    if (pParibahan) {
        pParibahan.scrollIntoView({ behavior: 'smooth' });
    };
};

// Change The backgroun of btn & get specific btn
const ticketBtns = document.getElementsByClassName('ticket-btn');
// let available = 0;
let count = 0;
let clickedBtn = 0;
let sum = 0;
for (const btn of ticketBtns) {

   

    btn.addEventListener('click', function (e) {


        btn.classList.add('bg-green-400', 'text-white');

        const specificBtn = e.target.id;

        // Decrement the left Seats
        const seatsLeft = document.getElementById('seats-left');
        seatsLeft.innerText--;


        // Seat-Counting in the box
        const countSeat = document.getElementById('count-seat');
        count ++;
        countSeat.innerText = count;
        countSeat.classList.add('px-3', 'rounded-lg');


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


        // Calculate the Grand Total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = sumOfPrice;

        if(btn && !btn.disabled) {
            btn.disabled = false;
            clickedBtn++;
        }

        

        if(clickedBtn >= 4){  

            // Use of Coupon code in the Grand Total
            const applyCoupon = document.getElementById('apply-coupon');
            applyCoupon.addEventListener('click', function() {
            
                const couponBooking = document.getElementById('coupon-booking');
                let inputValue = couponBooking.value;
                
                // 15% discount to grand total
                if (inputValue === 'NEW15') {
                    const grandTotalPrice = parseInt(grandTotal.innerText);
                    const discount = grandTotalPrice * 0.15;
                    let grandPrice = grandTotalPrice - discount;
                    grandTotal.innerText = grandPrice;
                    
                    // Hide the input field After gaining
                    const hideInput = document.getElementById('to-hide-input');
                    hideInput.classList.add('hidden');
                }
                else if(inputValue === 'Couple 20') {
                    const grandTotalPrice = parseInt(grandTotal.innerText);
                    const discount = grandTotalPrice * 0.20;
                    let grandPrice = grandTotalPrice - discount;
                    grandTotal.innerText = grandPrice;
                    
                    // Hide the input field After gaining
                    const hideInput = document.getElementById('to-hide-input');
                    hideInput.classList.add('hidden');
                }
            });
        }


        // Enter to success
        const next = document.getElementById('next');
        next.addEventListener('click', function() {
            const success = document.getElementById('success');
            success.classList.remove('hidden');

            if(success) {
                success.scrollIntoView({behavior : 'smooth'})
            }
        });

        const phoneNumber = document.getElementById('phone');
        phoneNumber.addEventListener('keydown', function(e) {

            // const phoneUndefined = e.key === 'string';
            // console.log(phoneUndefined)
            
        });

        if(clickedBtn > 0 ) {
            const disabledBtn = document.getElementById('next-container');
            const enable = disabledBtn.children[0];
            enable.classList.remove('btn-disable');
        }
        

        
        

    });

    
};

