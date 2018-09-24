let items = {};
let itemCount = 0;
let subtotal = 0;
let tax = 0;
let total = 0;

let facts = [
    '“Motown” derives its name from “Motor City”, the nickname for Detroit where the label was founded. At the time the biggest car manufacturer, Ford was based here. Berry Gordy Jr, the label’s founder once worked for the Ford plant',
    'Artists who recorded under Motown included <strong>The Temptations, The Supremes and Diana Ross, The Commodore and Lionel Ritchie, Martha Reeve &amp; The Vandellas, Smokey Robinson &amp; The Miracles, Marvin Gaye, The Four Tops, The Contours, The Jackson 5, Boyz II Men</strong> and <strong>Stevie Wonder</strong>. Stevie Wonder is the only artist from Motown’s heyday still signed to the label.',
    'The first headquarters for “Tamla Records” (later incorporated into Motown Record Corporation) was a property bought by Gordy in Detroit and known as “Hitsville USA”. The Gordy family lived on the first floor',
    'Originally, Gordy wanted to call the record label “Tammy Records” after the hit Debbie Reynolds song. Unfortunately, the name was taken, so he chose “Tamla Records” instead.',
    'Outside of the US, the label operated under the name “Tamla Motown”',
    'AS well as record label owner, Berry Gordy is a prolific songwriter, penning a catalogue of classics including: Do You Love Me <strong>(The Contours/Brian Poole &amp; The Tremloes)</strong>, I Want You Back (<strong>The Jackson 5</strong>) Reet Petite (<strong>Jackie Wilson</strong>), Jump (<strong>Kriss Kross</strong>), and Money (That’s What I Want (<strong>Barrett Strong/The Beatles/ The Flying Lizards</strong>)',
    'In 1961, Motown had their first US No 1 with The Marvelettes Please Mr Postman',
    'Martha Reeves initially worked for Motown as secretary. However, she did not stay in the job long, and was soon signed to the label with her backing group The Vandellas. They became one of the label’s hottest acts.',
    'Motown artists were primarily African American and were encouraged to act and dress like royalty so they could be ambassadors for other black artists and break into the white popular music scene. To help them with this, Motown had a special department dedicated to developing the skills, grace and poise needed.',
    'The backing band on almost all of the Motown recordings are a group of highly dedicated and tight-knit group of musicians called <strong>The Funk Brothers</strong>. The surviving members received The Grammy Legend Award in 2004 and were induced into The Musicians Hall of Fame in Nashville in 2007',
    'Motown was the first commercial US record label to be owned by an African American',
    'Gordy sold Motown to MCA and Boston Ventures in 1988. It was then sold to Polygram in 1994, before being transferred over to Universal Music Group when it acquired Polydor in 1999. Motown now operates under The Capitol Music Group, out of Capitol Tower in Los Angeles',
    'Smokey Robinson, one of the artists under the Motown label called his daughter Tamla and his son Berry after the label and founder.',
    'Between 1961 and 1971, Motown produced 110 US top 10 hits',
    'Most of Motown’s greatest hits were written by songwriting trio, <strong>Holland–Dozier–Holland</strong>. The songwriters and Motown parted ways in 1967, and due a legal dispute with Motown, they wrote songs under the pseudenomyn Edythe Wayne until 1972',
    'The duo <strong>LMFAO</strong> is made up of Berry Gordy Jr’s youngest son and one of his grandsons',
    'A stage show about the label called Motown: The Musical, written by Gordy opened on Broadway in 2013 to rather mixed reviews and closed in 2015. The show is now playing in London’s West End.',
    'Motown is credited with helping break down race relation barriers. Smokey Robinson recalls: “Into the \'60s, I was still not of a frame of mind that we were not only making music, we were making history. But I did recognize the impact because acts were going all over the world at that time. I recognized the bridges that we crossed, the racial problems and the barriers that we broke down with music. I recognized that because I lived it. I would come to the South in the early days of Motown and the audiences would be segregated. Then they started to get the Motown music and we would go back and the audiences were integrated and the kids were dancing together and holding hands.” ',
]

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


$(".plus").on("click", function () {
    itemName = $(this).siblings()[0].innerText
    itemCount++
    items[itemCount + itemName] = {
        amount: $(this).siblings()[1].innerText,
        name: $(this).siblings()[0].innerText,
        description: $('#' + $(this).siblings()[0].className).html()
    }
    $('.items').append('<li>' + items[itemCount + itemName]['name'] + '</li>')
    subtotal += parseFloat(items[itemCount + itemName]['amount'].trim().substring(1));
    $('.preTax').text('Subtotal: $' + subtotal);
    tax = parseFloat((subtotal * 0.06)).toFixed(2);
    $('.afterTax').text('Tax: $' + tax);
    total = parseFloat(subtotal + parseFloat(tax)).toFixed(2);
    $('.total').text('Total: $' + total);
    $('#owed').html('$' + total);
})

$('#review').hide();

$('#checkout').on("click", function () {
    $('#review').toggle();
})

$('#cashPay').hide();
$('#creditPay').hide();

$('.calculate').on('click', function () {
    let provide = document.getElementById('provided').value;
    let due = parseFloat($('#owed').text().replace('$', ''));
    let change = parseFloat((provide - due)).toFixed(2);
    alert(`Customer is due back ${change} in change`);
});

$('#submit').on('click', function () {
    let receipt = 'Thank you for making music with us! \n\n';
    receipt += ' Did you know? ' + facts[Math.floor(Math.random() * (17 - 1 + 1)) + 1] + '\n';
    for (let k in items) {
        if (items.hasOwnProperty(k)) {
            receipt += items[k].name + '-----' + items[k].amount + '\n'
        }
    }
    receipt += 'Subtotal: $' + subtotal + '\n'
    receipt += 'Tax: $' + tax + '\n'
    receipt += 'Total: $' + total + '\n'
    receipt += 'Payment Method: ' + paymentMethod + '\n'
    window.alert(receipt)
});

$('.receipt').on('click', function () {
    window.alert(`${order}`);
});

$('.removeItem').on('click', function () {
    $('li:current').detach();

});

$('#payCash').on('click', function () {
    paymentMethod = 'cash';
    $('#cashPay').toggle();
});

$('#payCredit').on('click', function () {
    paymentMethod = 'credit';
    $('#creditPay').toggle();
});