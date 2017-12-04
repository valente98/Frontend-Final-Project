//*************************** Cleats inventory *********************/
var CART = {
    total: 0,
    items: []
};

var BRANDS = {
    nike: {
        cleat: [
            {
                id: 0,
                img_url: './assets/photos/redHypervenom.jpg',
                name: 'Nike Hypervenom Phantom III DF',
                price: '299.99'
            },
            {
                id: 1,
                img_url: './assets/photos/redMagista.jpg',
                name: 'Nike Magista Onda II Dynamic FIT FG',
                price: '299.99'
            },
            {
                id: 2,
                img_url: './assets/photos/redsuperfly.webp',
                name: 'Nike Mercurial Superfly V FG',
                price: '299.99'
            },
            {
                id: 3,
                img_url: './assets/photos/redtiempo.webp',
                name: 'Nike Tiempo Legend VII FG',
                price: '229.99'
            },
            {
                id: 4,
                img_url: './assets/photos/blueHypervenom.jpg',
                name: 'Nike Hypervenom Phantom III DF FG',
                price: '299.99'
            },
            {
                id: 5,
                img_url: './assets/photos/blueMagista.jpg',
                name: 'Nike Magista Obra II FG',
                price: '299.99'
            },
            {
                id: 6,
                img_url: './assets/photos/blueSuperfly.jpg',
                name: 'Nike Mercurial Superfly V FG',
                price: '299.99'
            },
            {
                id: 7,
                img_url: './assets/photos/bluetiempo.webp',
                name: 'Nike Tiempo Legend VII FG',
                price: '229.99'
            }
        ],
        Clothing: [
            {
                id: 0,
                img_url: './assets/photos/academypants.jpg',
                name: "Nike Dry Academy: Men's Soccer Pants",
                price: '45'
            },
            {
                id: 1,
                img_url: './assets/photos/stikepants.jpg',
                name: "Nike Dry Strike: Men's Soccer Pants",
                price: '45'
            },
            {
                id: 2,
                img_url: './assets/photos/squadpants.jpg',
                name: "Nike Dry Squad: Men's Soccer Pants",
                price: '70'
            },
            {
                id: 3,
                img_url: './assets/photos/CR7T-Shirt.jpg',
                name: "Nike Dry CR7: Men's Long Sleeve T-Shirt",
                price: '40'
            },
            {
                id: 4,
                img_url: './assets/photos/academyHoodie.jpg',
                name: "Nike Dry Academy: Men's Pullover Soccer Hoodie",
                price: '40'
            },
            {
                id: 5,
                img_url: './assets/photos/BarcaJersey.jpg',
                name: "2017/18 FC Barcelona Stadium Home: Men's Soccer Jersey",
                price: '90'
            },
            {
                id: 6,
                img_url: './assets/photos/psg.jpg',
                name:
                    "2017/18 Paris Saint-Germain Stadium Home: Men's Soccer Jersey",
                price: '90'
            },
            {
                id: 7,
                img_url: './assets/photos/U.Sjacket.jpg',
                name: "U.S. Authentic N98: Men's Track Jacket",
                price: '105'
            }
        ],
        Gear: [
            {
                id: 0,
                img_url: './assets/photos/nikeball.jpg',
                name: 'Nike Primier League Magia: Soccer Ball',
                price: '65'
            },
            {
                id: 1,
                img_url: './assets/photos/nikeglove.jpg',
                name: 'Nike HyperWarm Field Player: Soccer glove',
                price: '30'
            },
            {
                id: 2,
                img_url: './assets/photos/nikebackpack.jpg',
                name: 'Nike Club Team Swoosh: Backpack',
                price: '50'
            },
            {
                id: 3,
                img_url: './assets/photos/nikeshinguard.jpg',
                name: 'Nike Mecurial Lite: Soccer Shin-Guards',
                price: '22'
            },
            {
                id: 4,
                img_url: './assets/photos/nikekeeperglove.jpg',
                name: 'Nike Vapor Grip3 Goalkeeper: Soccer Gloves',
                price: '120'
            },
            {
                id: 5,
                img_url: './assets/photos/nikesoccersock.jpg',
                name: 'NikeGrip Strike Over-the-Calf: Soccer Socks',
                price: '36'
            },
            {
                id: 6,
                img_url: './assets/photos/BarcaBeanie.jpg',
                name: 'FC Barcelona: Beanie',
                price: '30'
            },
            {
                id: 7,
                img_url: './assets/photos/nikepump.jpg',
                name: 'Nike 3: Ball Pump',
                price: '10'
            }
        ]
    },
    adidas: {
        cleat: [
            {
                id: 0,
                img_url: './assets/photos/ACE17.jpg',
                name: 'ACE 17+ PURECONTROL FIRM GROUND CLEATS:',
                price: '300'
            },
            {
                id: 1,
                img_url: './assets/photos/NEMEZIZ17.jpg',
                name: 'NEMEZIZ 17+ 360 AGILITY FIRM GROUND CLEATS',
                price: '320'
            },
            {
                id: 2,
                img_url: './assets/photos/NEMEZIZ17.3.jpg',
                name: 'NEMEZIZ MESSI TANGO 17.3 TURF SHOES',
                price: '80'
            },
            {
                id: 3,
                img_url: './assets/photos/ACE17FIFA.jpg',
                name: 'ACE 17+ PURECONTROL FIFA CONFEDERATIONS CUP FIRM',
                price: '300'
            },
            {
                id: 4,
                img_url: './assets/photos/copa17.3.jpg',
                name: 'COPA 17.3 FIRM GROUND CLEATS',
                price: '70'
            },
            {
                id: 5,
                img_url: './assets/photos/copaMundial.jpg',
                name: 'COPA MUNDIAL CLEATS',
                price: '150'
            },
            {
                id: 6,
                img_url: './assets/photos/ACETurf.jpg',
                name: 'ACE TANGO 17+ PURECONTROL TURF SHOES',
                price: '153'
            },
            {
                id: 7,
                img_url: './assets/photos/copaTurf.jpg',
                name: 'COPA TANGO 17.3 TURF SHOES',
                price: '60'
            }
        ],
        Clothing: [
            {
                id: 0,
                img_url: './assets/photos/tiro17.jpg',
                name: 'TIRO 17 TRAINING PANTS',
                price: '45'
            },
            {
                id: 1,
                img_url: './assets/photos/tangohoodie.jpg',
                name: 'TANGO CAGE HOODIE',
                price: '60'
            },
            {
                id: 2,
                img_url: './assets/photos/tangosweatshirt.jpg',
                name: 'TANGO FUTURE SWEATSHIRT',
                price: '75'
            },
            {
                id: 3,
                img_url: './assets/photos/tirorainjacket.jpg',
                name: 'TIRO 17 RAIN JACKET',
                price: '90'
            },
            {
                id: 4,
                img_url: './assets/photos/tangopogba.jpg',
                name: 'TANGO PAUL POGBA GRAPHIC TEE',
                price: '55'
            },
            {
                id: 5,
                img_url: './assets/photos/tangotrainingjacket.jpg',
                name: 'TIRO 17 TRAINING JACKET',
                price: '65'
            },
            {
                id: 6,
                img_url: './assets/photos/tangohybrid.jpg',
                name: 'TANGO FUTURE HYBRID TOP',
                price: '75'
            },
            {
                id: 7,
                img_url: './assets/photos/tangostadium.jpg',
                name: 'TANGO STADIUM ICON TRACK JACKET',
                price: '60'
            }
        ],
        Gear: [
            {
                id: 0,
                img_url: './assets/photos/FIFABALL.jpg',
                name: 'FIFA WORlD CUP OFFICIAL GAME BALL',
                price: '165'
            },
            {
                id: 1,
                img_url: './assets/photos/adidassock.jpg',
                name: 'TEAM SPEED SOCCER SOCK 1 PAIR',
                price: '16'
            },
            {
                id: 2,
                img_url: './assets/photos/adidasbag.jpg',
                name: 'X 17.1 TEAM BAG',
                price: '70'
            },
            {
                id: 3,
                img_url: './assets/photos/adidasglove.jpg',
                name: 'ACE TRANS PRO GLOVE',
                price: '115'
            },
            {
                id: 4,
                img_url: './assets/photos/adidasgloves.jpg',
                name: 'FIELDPLAYERGLOVES',
                price: '25'
            },
            {
                id: 5,
                img_url: './assets/photos/adidasshinguard.jpg',
                name: 'GHOST GRAPHIC MAGNETIC STORM SHIN GUARDS',
                price: '25'
            },
            {
                id: 6,
                img_url: './assets/photos/madridScarf.jpg',
                name: 'REAL MADRID SCARF',
                price: '25'
            },
            {
                id: 7,
                img_url: './assets/photos/manchesterscarf.jpg',
                name: 'MANCHESTER UNITED SCARF',
                price: '25'
            }
        ]
    },
    pumas: {
        cleat: [
            {
                id: 0,
                img_url: './assets/photos/pumaone.jpg',
                name: "PUMA ONE Chrome FG Men's Soccer Cleats",
                price: '275'
            },
            {
                id: 1,
                img_url: './assets/photos/pumaevo.jpg',
                name: 'EvoPower Vigor 1 Graphic FG',
                price: '220'
            },
            {
                id: 2,
                img_url: './assets/photos/pumaevo4jpg',
                name: 'EvoPower vigor 4 Graphic TT',
                price: '65'
            },
            {
                id: 3,
                img_url: './assets/photos/pumaevotouch.jpg',
                name: 'EvoTOUCH PRO FG',
                price: '220'
            },
            {
                id: 4,
                img_url: './assets/photos/copa17.3.jpg',
                name: 'King Top Italian Firm Ground Soccer Cleats',
                price: '155'
            },
            {
                id: 5,
                img_url: './assets/photos/pumaevotouch3.jpg',
                name: 'EvoTOUCH 3 FG',
                price: '35'
            },
            {
                id: 6,
                img_url: './assets/photos/pumaevospeed.jpg',
                name: 'EvoSPEED SL II Graphic FG',
                price: '120'
            },
            {
                id: 7,
                img_url: './assets/photos/pumaNETFIT.jpg',
                name: '365 NETFIT CT',
                price: '80'
            }
        ],
        Clothing: [
            {
                id: 0,
                img_url: './assets/photos/Evowintertop.jpg',
                name: 'EvoTRG Winter Top',
                price: '60'
            },
            {
                id: 1,
                img_url: './assets/photos/evothermaljacket.jpg',
                name: 'EvoTRG Thermo Jacket',
                price: '55'
            },
            {
                id: 2,
                img_url: './assets/photos/evotrackjacket.jpg',
                name: 'EvoTRG Soccer Track Jacket',
                price: '65'
            },
            {
                id: 3,
                img_url: './assets/photos/evotrainingpants.jpg',
                name: 'EvoTRG Soccer Training Pants',
                price: '50'
            },
            {
                id: 4,
                img_url: './assets/photos/evotechpants.jpg',
                name: 'EvoTRG Tech Soccer Training Pants',
                price: '65'
            },
            {
                id: 5,
                img_url: './assets/photos/evotechshorts.jpg',
                name: 'EvoTRG Tech Soccer Training Shorts',
                price: '20'
            },
            {
                id: 6,
                img_url: './assets/photos/evowintervest.jpg',
                name: 'EvoTRG Winter Vest',
                price: '60'
            },
            {
                id: 7,
                img_url: './assets/photos/evotraininghoodie.jpg',
                name: 'EvoTRG Soccer Training Hoodie',
                price: '65'
            }
        ],
        Gear: [
            {
                id: 0,
                img_url: './assets/photos/pumasbackpack.jpg',
                name: 'Formation 2.0 Soccer Ball Backpack',
                price: '35'
            },
            {
                id: 1,
                img_url: './assets/photos/pumasmatchball.jpg',
                name: 'EvoPower 2.3 Match Soccer Ball',
                price: '60'
            },
            {
                id: 2,
                img_url: './assets/photos/pumastrainingball.jpg',
                name: 'Powercamp 2.0 Training Soccer Ball',
                price: '30'
            },
            {
                id: 3,
                img_url: './assets/photos/adidasglove.jpg',
                name: 'EvoPOWER Super 3 Goalkeeper Gloves',
                price: '90'
            },
            {
                id: 4,
                img_url: './assets/photos/adidasgloves.jpg',
                name: 'EvoPower 1.3 Slip Shin Guards',
                price: '25'
            },
            {
                id: 5,
                img_url: './assets/photos/pumasblackoutball.jpg',
                name: 'Black Out Training Soccer Ball',
                price: '17'
            },
            {
                id: 6,
                img_url: './assets/photos/madridScarf.jpg',
                name: 'Arsenal Performance Backpack',
                price: '30'
            },
            {
                id: 7,
                img_url: './assets/photos/manchesterscarf.jpg',
                name: 'Arsenal Striped Socks',
                price: '18'
            }
        ]
    }
};

//**************************** image slide function ******************/
var myIndex = 0;

function carousel() {
    var i;
    var x = $('.mySlides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = 'block';
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
//********************** nike cleats product ************************/
function product(x, brand, type) {
    console.log(type);
    var html = '<p><img src="' + x.img_url + '" width="225" height="225"/></p>';
    html += '<p>' + x.name + '</p>';
    html += '<p>$' + x.price + '</p>';
    html +=
        '<br><button id="buy" onclick="shopping_cart(' +
        x.id +
        ",'" +
        brand +
        "', '" +
        type +
        '\')">Add to Cart</button><br>';
    return html;
}
function brandproduct(brand) {
    $('#total').attr('hidden', false);
    $('#gear').attr('hidden', false);
    $('#clothing').attr('hidden', false);
    $('#cleats').attr('hidden', false);
    $('#view-product').attr('hidden', true);
    $('#images').attr('hidden', true);
    var cleat =
        '<h2> Cleats</h2>' +
        BRANDS[brand].cleat.map(function(y) {
            return product(y, brand, 'cleat');
        });
    $('#cleats').html(cleat);
    var clothing =
        '<h2> Clothing </h2>' +
        BRANDS[brand].Clothing.map(function(y) {
            return product(y, brand, 'Clothing');
        });
    $('#clothing').html(clothing);
    var gear =
        '<h2> Clothing </h2>' +
        BRANDS[brand].Gear.map(function(y) {
            return product(y, brand, 'Gear');
        });
    $('#gear').html(gear);
}
//********************** shoping cart **********/
var item = [];
function shopping_cart(id, brand, type) {
    CART.items.push(BRANDS[brand][type][id]);
    CART.total += parseInt(BRANDS[brand][type][id].price);
    item.push(1);
    var sum_item = item.reduce(add, 0);
    var html = '<button class="btn" id="cart" onclick="cart()">';
    html +=
        '<span>' +
        sum_item +
        '</span><i class="fa fa-shopping-cart" aria-hidden="true"></i>';
    html += '($' + (CART.total * 1.07).toFixed(2) + ')';
    $('#total').attr('hidden', false);
    $('#total').html(html);
}
function add(a, b) {
    return a + b;
}
//********************** view item ************************/
function deleted(items, price) {
    item.pop();
    CART.items.splice(items, 1);
    CART.total -= price;
    cart();
}
function view_cart(x, i) {
    var html =
        '<br><br><button onclick="deleted(' +
        i +
        ',' +
        x.price +
        ')"><i class="fa fa-times" aria-hidden="true"></i></button>';
    html +=
        '&nbsp; <img src="' + x.img_url + '" width="100" height="100">&nbsp; ';
    html += x.name;
    html += '<p id="price2">Price: $' + x.price;
    html += '<hr>';
    return html;
}
function cart() {
    $('#total').attr('hidden', true);
    $('#gear').attr('hidden', true);
    $('#clothing').attr('hidden', true);
    $('#cleats').attr('hidden', true);
    var html = '<h1>Cart</h1>';
    html += CART.items.map(function(x, i) {
        return view_cart(x, i);
    });
    html += '<p id="back-info">CLick on a Brand to keep shoping</p>';
    html += '<br><p id="item">Items: ' + CART.items.length + '</p>';
    html += '<br><br><p id="tax"> Total: $' + CART.total.toFixed(2) + '</p>';
    html += '<br><br><p id="tax"> Taxes: $1.07</p> ';
    html +=
        '<br><br><p id="price">Total Price: $' + (CART.total * 1.07).toFixed(2);
    $('#view-product').attr('hidden', false);
    $('#view-product').html(html);
}
//********************** Main *********************************/
function main() {
    carousel();
}

$(main);
