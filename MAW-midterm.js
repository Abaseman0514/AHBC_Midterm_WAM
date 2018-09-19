$(".blues").on("click", () => {
	$("#blues").toggle();
})

$(".jazz").on("click", () => {
	$("#jazz").toggle();
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