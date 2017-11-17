//*************************** Cleats inventory *********************/
var BRANDS = {
    nike: [
        {
            cleat: [
                {
                    img_url: './assets/photos/redHypervenom.jpg',
                    name:
                        'Nike Hypervenom Phantom III DF Soccer Cleat-University',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/redMagista.jpg',
                    name:
                        'Nike Magista Obra II FG Soccer Cleat-Black/White/Hyper',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/redSuperfly.jpg',
                    name:
                        'Nike Mercurial Superfly V FG Soccer Cleat - Bright Crimson/Black/University Red/Hyper Crimson ',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/redTiempo.jpg',
                    name:
                        'Nike Tiempo Legend VII FG Soccer Cleat - Univeristy Red/White/Black/Bright Crimson',
                    price: '229.99'
                },
                {
                    img_url: './assets/photos/blueHypervenom.jpg',
                    name:
                        'Nike Hypervenom Phantom III DF FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/blueMagista.jpg',
                    name:
                        'Nike Magista Obra II FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/blueSuperfly.jpg',
                    name:
                        'Nike Mercurial Superfly V FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                    price: '299.99'
                },
                {
                    img_url: './assets/photos/blueTiempo.jpg',
                    name:
                        'Nike Tiempo Legend VII FG Soccer Cleat - Gamma Blue/White/Obsidian/Glacier Blue',
                    price: '229.99'
                }
            ],
            Clothing: [
                {
                    img_url: './assets/photos/academypants.jpg',
                    name: "Nike Dry Academy: Men's Soccer Pants",
                    price: '45'
                },
                {
                    img_url: './assets/photos/stikepants.jpg',
                    name: "Nike Dry Strike: Men's Soccer Pants",
                    price: '45'
                },
                {
                    img_url: './assets/photos/squadpants.jpg',
                    name: "Nike Dry Squad: Men's Soccer Pants",
                    price: '70'
                },
                {
                    img_url: './assets/photos/CR7T-Shirt.jpg',
                    name: "Nike Dry CR7: Men's Long Sleeve T-Shirt",
                    price: '40'
                },
                {
                    img_url: './assets/photos/academyHoodie.jpg',
                    name: "Nike Dry Academy: Men's Pullover Soccer Hoodie",
                    price: '40'
                },
                {
                    img_url: './assets/photos/BarcaJersey.jpg',
                    name:
                        "2017/18 FC Barcelona Stadium Home: Men's Soccer Jersey",
                    price: '90'
                },
                {
                    img_url: './assets/photos/psg.jpg',
                    name:
                        "2017/18 Paris Saint-Germain Stadium Home: Men's Soccer Jersey",
                    price: '90'
                },
                {
                    img_url: './assets/photos/U.Sjacket.jpg',
                    name: "U.S. Authentic N98: Men's Track Jacket",
                    price: '105'
                }
            ],
            Gear: [
                {
                    img_url: './assets/photos/nikeball.jpg',
                    name: 'Nike Primier League Magia: Soccer Ball',
                    price: '65'
                },
                {
                    img_url: './assets/photos/nikeglove.jpg',
                    name: 'Nike HyperWarm Field Player: Soccer glove',
                    price: '30'
                },
                {
                    img_url: './assets/photos/nikebackpack.jpg',
                    name: 'Nike Club Team Swoosh: Backpack',
                    price: '50'
                },
                {
                    img_url: './assets/photos/nikeshinguard.jpg',
                    name: 'Nike Mecurial Lite: Soccer Shin-Guards',
                    price: '22'
                },
                {
                    img_url: './assets/photos/nikekeeperglove.jpg',
                    name: 'Nike Vapor Grip3 Goalkeeper: Soccer Gloves',
                    price: '120'
                },
                {
                    img_url: './assets/photos/nikesoccersock.jpg',
                    name: 'NikeGrip Strike Over-the-Calf: Soccer Socks',
                    price: '36'
                },
                {
                    img_url: './assets/photos/BarcaBeanie.jpg',
                    name: 'FC Barcelona: Beanie',
                    price: '30'
                },
                {
                    img_url: './assets/photos/nikepump.jpg',
                    name: 'Nike 3: Ball Pump',
                    price: '10'
                }
            ]
        }
    ],
    Addidas: [
        {
            cleat: [
                {
                    img_url: './assets/photos/ACE17.jpg',
                    name: 'ACE 17+ PURECONTROL FIRM GROUND CLEATS:',
                    price: '300'
                },
                {
                    img_url: './assets/photos/NEMEZIZ17.jpg',
                    name: 'NEMEZIZ 17+ 360 AGILITY FIRM GROUND CLEATS',
                    price: '320'
                },
                {
                    img_url: './assets/photos/NEMEZIZ17.3.jpg',
                    name: 'NEMEZIZ MESSI TANGO 17.3 TURF SHOES',
                    price: '80'
                },
                {
                    img_url: './assets/photos/ACE17FIFA.jpg',
                    name: 'ACE 17+ PURECONTROL FIFA CONFEDERATIONS CUP FIRM',
                    price: '300'
                },
                {
                    img_url: './assets/photos/copa17.3.jpg',
                    name: 'COPA 17.3 FIRM GROUND CLEATS',
                    price: '70'
                },
                {
                    img_url: './assets/photos/copaMundial.jpg',
                    name: 'COPA MUNDIAL CLEATS',
                    price: '150'
                },
                {
                    img_url: './assets/photos/ACETurf.jpg',
                    name: 'ACE TANGO 17+ PURECONTROL TURF SHOES',
                    price: '153'
                },
                {
                    img_url: './assets/photos/copaTurf.jpg',
                    name: 'COPA TANGO 17.3 TURF SHOES',
                    price: '60'
                }
            ],
            Clothing: [
                {
                    img_url: './assets/photos/tiro17.jpg',
                    name: 'TIRO 17 TRAINING PANTS',
                    price: '45'
                },
                {
                    img_url: './assets/photos/tangohoodie.jpg',
                    name: 'TANGO CAGE HOODIE',
                    price: '60'
                },
                {
                    img_url: './assets/photos/tangosweatshirt.jpg',
                    name: 'TANGO FUTURE SWEATSHIRT',
                    price: '75'
                },
                {
                    img_url: './assets/photos/tirorainjacket.jpg',
                    name: 'TIRO 17 RAIN JACKET',
                    price: '90'
                },
                {
                    img_url: './assets/photos/tangopogba.jpg',
                    name: 'TANGO PAUL POGBA GRAPHIC TEE',
                    price: '55'
                },
                {
                    img_url: './assets/photos/tangotrainingjacket.jpg',
                    name: 'TIRO 17 TRAINING JACKET',
                    price: '65'
                },
                {
                    img_url: './assets/photos/tangohybrid.jpg',
                    name: 'TANGO FUTURE HYBRID TOP',
                    price: '75'
                },
                {
                    img_url: './assets/photos/tangostadium.jpg',
                    name: 'TANGO STADIUM ICON TRACK JACKET',
                    price: '60'
                }
            ],
            Gear: [
                {
                    img_url: './assets/photos/FIFABALL.jpg',
                    name: 'FIFA WORlD CUP OFFICIAL GAME BALL',
                    price: '165'
                },
                {
                    img_url: './assets/photos/adidassock.jpg',
                    name: 'TEAM SPEED SOCCER SOCK 1 PAIR',
                    price: '16'
                },
                {
                    img_url: './assets/photos/adidasbag.jpg',
                    name: 'X 17.1 TEAM BAG',
                    price: '70'
                },
                {
                    img_url: './assets/photos/adidasglove.jpg',
                    name: 'ACE TRANS PRO GLOVE',
                    price: '115'
                },
                {
                    img_url: './assets/photos/adidasgloves.jpg',
                    name: 'FIELDPLAYERGLOVES',
                    price: '25'
                },
                {
                    img_url: './assets/photos/adidasshinguard.jpg',
                    name: 'GHOST GRAPHIC MAGNETIC STORM SHIN GUARDS',
                    price: '25'
                },
                {
                    img_url: './assets/photos/madridScarf.jpg',
                    name: 'REAL MADRID SCARF',
                    price: '25'
                },
                {
                    img_url: './assets/photos/manchesterscarf.jpg',
                    name: 'MANCHESTER UNITED SCARF',
                    price: '25'
                }
            ]
        }
    ],
    Pumas: [
        {
            cleat: [
                {
                    img_url: './assets/photos/pumaone.jpg',
                    name: "PUMA ONE Chrome FG Men's Soccer Cleats",
                    price: '275'
                },
                {
                    img_url: './assets/photos/pumaevo.jpg',
                    name: 'EvoPower Vigor 1 Graphic FG',
                    price: '220'
                },
                {
                    img_url: './assets/photos/pumaevo4jpg',
                    name: 'EvoPower vigor 4 Graphic TT',
                    price: '65'
                },
                {
                    img_url: './assets/photos/pumaevotouch.jpg',
                    name: 'EvoTOUCH PRO FG',
                    price: '220'
                },
                {
                    img_url: './assets/photos/copa17.3.jpg',
                    name: 'King Top Italian Firm Ground Soccer Cleats',
                    price: '155'
                },
                {
                    img_url: './assets/photos/pumaevotouch3.jpg',
                    name: 'EvoTOUCH 3 FG',
                    price: '35'
                },
                {
                    img_url: './assets/photos/pumaevospeed.jpg',
                    name: 'EvoSPEED SL II Graphic FG',
                    price: '120'
                },
                {
                    img_url: './assets/photos/pumaNETFIT.jpg',
                    name: '365 NETFIT CT',
                    price: '80'
                }
            ],
            Clothing: [
                {
                    img_url: './assets/photos/Evowintertop.jpg',
                    name: 'EvoTRG Winter Top',
                    price: '60'
                },
                {
                    img_url: './assets/photos/evothermaljacket.jpg',
                    name: 'EvoTRG Thermo Jacket',
                    price: '55'
                },
                {
                    img_url: './assets/photos/evotrackjacket.jpg',
                    name: 'EvoTRG Soccer Track Jacket',
                    price: '65'
                },
                {
                    img_url: './assets/photos/evotrainingpants.jpg',
                    name: 'EvoTRG Soccer Training Pants',
                    price: '50'
                },
                {
                    img_url: './assets/photos/evotechpants.jpg',
                    name: 'EvoTRG Tech Soccer Training Pants',
                    price: '65'
                },
                {
                    img_url: './assets/photos/evotechshorts.jpg',
                    name: 'EvoTRG Tech Soccer Training Shorts',
                    price: '20'
                },
                {
                    img_url: './assets/photos/evowintervest.jpg',
                    name: 'EvoTRG Winter Vest',
                    price: '60'
                },
                {
                    img_url: './assets/photos/evotraininghoodie.jpg',
                    name: 'EvoTRG Soccer Training Hoodie',
                    price: '65'
                }
            ],
            Gear: [
                {
                    img_url: './assets/photos/FIFABALL.jpg',
                    name: 'FIFA WORlD CUP OFFICIAL GAME BALL',
                    price: '165'
                },
                {
                    img_url: './assets/photos/adidassock.jpg',
                    name: 'TEAM SPEED SOCCER SOCK 1 PAIR',
                    price: '16'
                },
                {
                    img_url: './assets/photos/adidasbag.jpg',
                    name: 'X 17.1 TEAM BAG',
                    price: '70'
                },
                {
                    img_url: './assets/photos/adidasglove.jpg',
                    name: 'ACE TRANS PRO GLOVE',
                    price: '115'
                },
                {
                    img_url: './assets/photos/adidasgloves.jpg',
                    name: 'FIELDPLAYERGLOVES',
                    price: '25'
                },
                {
                    img_url: './assets/photos/adidasshinguard.jpg',
                    name: 'GHOST GRAPHIC MAGNETIC STORM SHIN GUARDS',
                    price: '25'
                },
                {
                    img_url: './assets/photos/madridScarf.jpg',
                    name: 'REAL MADRID SCARF',
                    price: '25'
                },
                {
                    img_url: './assets/photos/manchesterscarf.jpg',
                    name: 'MANCHESTER UNITED SCARF',
                    price: '25'
                }
            ]
        }
    ]
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
//********************** Main *********************************/
function main() {
    carousel();
}

$(main);
