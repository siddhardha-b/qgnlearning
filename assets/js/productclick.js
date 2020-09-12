let allProducts = getAllProducts();
let breadCrumb = document.querySelector('#bread-crumb');
let heading = document.querySelector('#heading');
let carouselImg1Location = document.querySelector('#carousel-1');
let carouselImg2Location = document.querySelector('#carousel-2');
let carouselImg3Location = document.querySelector('#carousel-3');
let category =document.querySelector('#category');
let clientName=document.querySelector('#client-name');
let ratingBar=document.querySelector('#rating-bar');
let priceTag=document.querySelector('#price-tag');
let productDetails=document.querySelector('#details');
let productDescription=document.querySelector('#description');
let singleProduct = document.querySelector('#main1');
let everyProduct = document.querySelector('#main');
let viewAllProductsButton = document.querySelector('#view-all-prod');
let allProductsDisplayed = true;

/*All Books*/

let mathematicsBook1 = document.querySelector('#maths-1');
let mathematicsBook2 = document.querySelector('#maths-2');
let mathematicsBook3 = document.querySelector('#maths-3');
let hindiBook1 = document.querySelector('#hindi-1');
let hindiBook2 = document.querySelector('#hindi-2');
let hindiBook3 = document.querySelector('#hindi-3');
let alphabetBook1 = document.querySelector('#alphabets-1');
let alphabetBook2 = document.querySelector('#alphabets-2');
let alphabetBook3 = document.querySelector('#alphabets-3');
let colorBook = document.querySelector('#color-1');
let rhymeBook = document.querySelector('#rhymes-1');

//display book area function which will display all the information related to books

let displayBook = (itemNumber) => {
    breadCrumb.innerText = allProducts[itemNumber].heading;
    heading.innerText = allProducts[itemNumber].heading;
    carouselImg1Location.setAttribute('src',allProducts[itemNumber].carouselOne);
    carouselImg2Location.setAttribute('src',allProducts[itemNumber].carouselTwo);
    carouselImg3Location.setAttribute('src',allProducts[itemNumber].carouselThree);
    category.innerText = allProducts[itemNumber].category;
    clientName.innerText = allProducts[itemNumber].clientName;
    ratingBar.innerText = allProducts[itemNumber].ratingBar;
    priceTag.innerText = allProducts[itemNumber].priceTag;
    productDetails.innerText = allProducts[itemNumber].details;
    productDescription.innerText = allProducts[itemNumber].description;
};

//checking what to display

let whatToDisplay = () => {
    if (allProductsDisplayed)
    {
        everyProduct.classList.remove('d-none');
        singleProduct.classList.add('d-none');
    }
    else
    {
        singleProduct.classList.remove('d-none');
        everyProduct.classList.add('d-none');
    }
};

// all products button clicked

viewAllProductsButton.addEventListener('click',function () {
    allProductsDisplayed=true;
    whatToDisplay();
});


// on click for maths books
mathematicsBook1.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(0);
});
mathematicsBook2.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(1);
});
mathematicsBook3.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(2);
});

// on click for Hindi books
hindiBook1.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(3);
});
hindiBook2.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(4);
});
hindiBook3.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(5);
});

// on click for Alphabets books
alphabetBook1.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(6);
});
alphabetBook2.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(7);
});
alphabetBook3.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(8);
});

// on click for other books
colorBook.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(9);
});
rhymeBook.addEventListener('click',function () {
    allProductsDisplayed=false;
    whatToDisplay();
    displayBook(10);
});




