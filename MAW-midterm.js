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

$('.calculate').on('click', function(){
    let provide = document.getElementById('provided').value;
    let due = document.getElementById('owed').value; 
    let change = parseFloat((provide - due)); 
    window.alert(`Customer is due back $${change} in change`);
});

$('.submit').on('click', function(){
    window.alert('Thank you for your payment'); 
//    if time add error messages for incorrect inputs
});

$('.receipt').on('click', function(){
    window.alert(`${order}`); 
});

const jazzClub = 9.50;
const fries = 4.24;
const water = 2;
const taxs =.06;

function add(a, b, c){
   return a + b + c;
    
}

function sum() {
    var n = 0;
    for (var i=0; i < arguments.length; i++) {
        n += arguments[i];
    }
    return n;
}//function to add



let brown = add(jazzClub,fries, water);

$('.removeItem').on('click', function(){
    $('li:current').detach();

});

$('#checkout').one('click', function(){
    $('.subTotal').append("  ", brown);
    $('.total').append("  ", brown * taxs + brown);
    $('.tax').append(" ", brown * taxs);
});//checkout button that adds and multiplies totals

$('#cash').on('click', function(){
    $('cash').hide();
});




$.get('http://www.flyingmusic.com/archives/2015-2014/know-facts-motown/'), (data) => {
  
    console.log(data.ul);
  };//error cors


// $('.removeItem').on('click', function(){
//     $('li').$(this).slideToggle().hide();
    
// });

let addItem;

let removeItem;
