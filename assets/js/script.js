'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// Get elements
const openBtnTop = document.getElementById('openBookingBtnTop');

const openBtnMain = document.getElementById('openBookingBtnMain');
const openBtnWF = document.getElementById('openBookingBtnWF');
const openBtnCT = document.getElementById('openBookingBtnCT');
const openBtnF = document.getElementById('openBookingBtnF');
const modal = document.getElementById('bookingModal');
const closeBtn = document.getElementById('closeBookingBtn');

// Open modal when button clicked
openBtnTop.addEventListener('click', () => {
  modal.style.display = 'flex'; // flex to center content
});
// Open modal when button clicked
openBtnMain.addEventListener('click', () => {
  modal.style.display = 'flex'; // flex to center content
});
// Open modal when button clicked
openBtnWF.addEventListener('click', () => {
  modal.style.display = 'flex'; // flex to center content
});
// Open modal when button clicked
openBtnCT.addEventListener('click', () => {
  modal.style.display = 'flex'; // flex to center content
});
// Open modal when button clicked
openBtnF.addEventListener('click', () => {
  modal.style.display = 'flex'; // flex to center content
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Also close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
document.getElementById('book-now-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form values
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const selectedTour = document.getElementById('selected-tour').value;
  const numberOfPeople = document.getElementById('people').value;
  const totalPrice = document.getElementById('total-price').value;
  const date = document.getElementById('date').value;

  // Prepare the params object
  const templateParams = {
    full_name: fullName,
    email: email,
    phone: phone,
    selected_tour: selectedTour,
    number_of_people: numberOfPeople,
    total_price: totalPrice,
    preferred_date: date
  };

  // Send the email
  emailjs.send('service_270r1v8', 'template_ez8z8wu', templateParams)
    .then(function() {
      alert('Booking sent successfully!');
      document.getElementById('book-now-form').reset();
    }, function(error) {
      alert('Failed to send booking. Please try again.');
      console.log('FAILED...', error);
    });
});


const tourSelect = document.getElementById('selected-tour');
const peopleInput = document.getElementById('people');
const totalPriceField = document.getElementById('total-price');

// Tour prices
const tourPrices = {
  "Waterfront": 400,
  "City Sightseeing Cape Town Tours": 600,
  "Table Mountain": 500,
  "Campsbay": 500
};

function updateTotalPrice() {
  const selectedTour = tourSelect.value;
  const numPeople = parseInt(peopleInput.value) || 0;
  const pricePerPerson = tourPrices[selectedTour] || 0;
  const total = numPeople * pricePerPerson;

  totalPriceField.value = `R${total}`;
}

// Add event listeners
tourSelect.addEventListener('change', updateTotalPrice);
peopleInput.addEventListener('input', updateTotalPrice);


