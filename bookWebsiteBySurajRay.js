let parentDiv;

//Accessing the Homepage by its Body tag's id name then accessing all buttons

let btns = document.querySelectorAll(`#home-page button`);

btns.forEach(element => {
    element.addEventListener("click", (e) => {


        // Accessing the tpped buttons' grandparent parent by class which is same as buttons's id

        parentDiv = document.querySelector(`.${e.target.id}`);
        getData(parentDiv);  // 1


    });
});

function getData(parentDiv) { //  1

    //Accessiing book details

    let innerDiv = parentDiv.querySelectorAll("div");

    //book photo
    const bookImg = innerDiv[0].innerHTML;

    //book name

    const bookName = innerDiv[1].innerText;

    //Reviews

    const bookReview = innerDiv[2].innerText;

    //book rate
    const bookRate = innerDiv[3].innerText;


    //Redirecting to book details page with data as query parameters

    window.location.href = "book-details-card-by-suraj-ray.html?data1=" + encodeURIComponent(bookImg) + "&data2=" + encodeURIComponent(bookName) + "&data3=" + encodeURIComponent(bookRate) + "&data4=" + encodeURIComponent(bookReview);


}
//index or home page code ends