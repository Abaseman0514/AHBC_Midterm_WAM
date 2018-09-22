$(".jazz").on("click", () => {
    $("#jazz").toggle();
})

$(".blues").on("click", () => {
    $("#blues").toggle();
})

$(".country").on("click", () => {
    $("#country").toggle();
})

$(".motown").on("click", () => {
    $("#motown").toggle();
})

$(".folk").on("click", () => {
    $("#folk").toggle();
})

$(".fountain").on("click", () => {
    $("#fountain").toggle();
})

$(".canned").on("click", () => {
    $("#canned").toggle();
})

$(".fries").on("click", () => {
    $("#fries").toggle();
})

$(".onion").on("click", () => {
    $("#onion").toggle();
})

$(".tots").on("click", () => {
    $("#tots").toggle();
})

let subtotal = 0;
$(".plus").on("click", function () {
   $('.items').append($(this).siblings()[0].innerText);
   subtotal += parseFloat($(this).siblings()[1].innerText.trim().substring(1)); 
   $('.preTax').append(subtotal);
})



    // if (event.target.className === "plus") {
    //     const li = document.createElement('li');
    //     li.innerHTML = `${orderList.value} <button class = "remove">Remove</button>`
    //     ul.appendChild(li);
    //     orderList.value = "";
    // }
// })
//        });

//if item shows aka true, add remove button to menu on item

//^^^^HOW TO MAKE THIS A LIST^^^

// document.body.addEventListener("click", (event) => {
//  if(event.target.className === "remove"){
//    event.target.parentNode.remove();
//  }

//  }
// });
// $('#itemsAdded').hide();

$('#review').hide(); 

$('#checkout').on("click", function(){
    $('#review').toggle();
})

$('#cashPay').hide();
$('#creditPay').hide();

// $('#submit').on('click', function () {
//     $('#itemsAdded').show();
// // $('.overall').hide();

// $('#checkout').on('click', function () {
//     $('.overall').show();
// });

$('.calculate').on('click', function () {
    let provide = document.getElementById('provided').value;
    let due = document.getElementById('owed').value;
    let change = parseFloat((provide - due));
    window.alert(`Customer is due back $${change} in change`);
});

$('.submit').on('click', function () {
    window.alert('Thank you for your payment');
    //    if time add error messages for incorrect inputs
});

$('.receipt').on('click', function () {
    window.alert(`${order}`);
});



$('.removeItem').on('click', function () {
    $('li:current').detach();

});

// $('#checkout').one('click', function () {
//     $('.subTotal').append("  ", brown);
//     $('.total').append("  ", brown * taxs + brown);
//     $('.tax').append(" ", brown * taxs);
// }); //checkout button that adds and multiplies totals

$('#payCash').on('click', function () {
    $('#cashPay').toggle();
});

$('#payCredit').on('click', function () {
    $('#creditPay').toggle();
});





$.get('http://www.flyingmusic.com/archives/2015-2014/know-facts-motown/'), (data) => {

    console.log(data.ul);
}; //error cors


// $('.removeItem').on('click', function(){
//     $('li').$(this).slideToggle().hide();

// });

let addItem;

let removeItem;