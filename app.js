
let productsCount = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-card");

addToCartBtns.forEach((item) => {
    item.addEventListener("click", function () {
        let prevProductsCount = +productsCount.textContent;
        productsCount.textContent = prevProductsCount + 1;
    });
});

// like button
let btn = document.querySelectorAll(".like-icon");
btn.forEach((item) =>  {
    item.addEventListener("click", function () {
        item.classList.toggle("liked");
    });
});
// 
let modal = document.querySelector(".modal");
let moreDetails = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");
// 
//function
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
  
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }

moreDetails.forEach((item) => {
    item.addEventListener("click", openModal)});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();
    }
});


$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
 // modal window after 50% scroll height
 function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight / 2) {
      openModal();
      //видаляєм подію після того як її показали
    window.removeEventListener("scroll", showModalByScroll);
    }
  }
  
  window.addEventListener("scroll", showModalByScroll);

// initialise aos
  // AOS.init();

//change product quality

let incrementBtns = document.querySelectorAll(".increment");
let decrementBtns = document.querySelectorAll(".decrement");
let productsQuantity = document.querySelectorAll(".product-quantity input");


function Counter(
  incrementButton,
   decrementButton,
    inputField,
    minCount = 1,
    maxCount = 5
) {
  // записали дані в обєкт дом реф
  this.domRefs = {
    incrementButton,
    decrementButton,
    inputField
  };
  this.toggleButtonState = function () {
    // визначаєм зміну count, яка рівна значенню value в input
    let count = this.domRefs.inputField.value;
    // якщо декремент(-) дорінюює true, то кнопка декремент перестає працювати
    this.domRefs.decrementButton.disabled = count <= minCount;
    // якщо інкремент(+) дорінюює true, то кнопка інкремент перестає працювати
    this.domRefs.incrementButton.disabled = count >= maxCount;
  }
  // запускаэм функцію
  this.toggleButtonState();
  
  this.increment = function() {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  }

  this.decrement = function() {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  }
  this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}

  //робим так, щоб можна використати для counter для всіх товарів
let counters = [];
productsQuantity.forEach(
  (item, i) => (counters[i] = new Counter(incrementBtns[i],decrementBtns[i], item)))