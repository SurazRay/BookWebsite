//Accessing the book name element

let bookNameEl = document.querySelector("h3");

//storing the img element

let bookImgEl = document.querySelector("#book-details div");

//Accessing the review element

let bookReviewEl = document.querySelector(".reviews");

//Accessing the book Rate element

let bookRateEl = document.querySelector(".rate");

//Deciphering data from previous page's redirection
//Function to get query parameters by name

function QueryParam(dataName) {

    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(dataName);

}

var bookImg = QueryParam("data1");
var bookName = QueryParam("data2");
var bookRate = QueryParam("data3");
var bookReview = QueryParam("data4");

//Assigning new  data

bookImgEl.innerHTML = bookImg;
bookNameEl.innerText = bookName;
bookRateEl.innerText = bookRate;
bookReviewEl.innerText = bookReview;

//Adding alert messages to buy now and add to cart buttons

document.querySelector(".buy-now").addEventListener("click",()=>{
    alert("Order placed\nYour order details will be emailed to your email address.\nThanks! - Suraj");
});

document.querySelector(".add-to-cart").addEventListener("click",()=>{
    alert("Item added to cart\nThanks! - Suraj");
});
