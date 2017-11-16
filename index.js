//*************************** Cleats inventory *********************/
var CLEATS = [
    {
        nike: [
            {
                fireAndIce: [
                    {
                        img_url: '/assets/photos/redHypervenom.jpg',
                        name:
                            'Nike Hypervenom Phantom III DF Soccer Cleat-University',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/redMagista.jpg',
                        name:
                            'Nike Magista Obra II FG Soccer Cleat-Black/White/Hyper',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/redSuperfly.jpg',
                        name:
                            'Nike Mercurial Superfly V FG Soccer Cleat - Bright Crimson/Black/University Red/Hyper Crimson ',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/redTiempo.jpg',
                        name:
                            'Nike Tiempo Legend VII FG Soccer Cleat - Univeristy Red/White/Black/Bright Crimson',
                        price: '229.99'
                    },
                    {
                        img_url: '/assets/photos/blueHypervenom.jpg',
                        name:
                            'Nike Hypervenom Phantom III DF FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/blueMagista.jpg',
                        name:
                            'Nike Magista Obra II FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/blueSuperfly.jpg',
                        name:
                            'Nike Mercurial Superfly V FG Soccer Cleat - Thunder Blue/Glacier Blue/Gamma Blue/White',
                        price: '299.99'
                    },
                    {
                        img_url: '/assets/photos/blueTiempo.jpg',
                        name:
                            'Nike Tiempo Legend VII FG Soccer Cleat - Gamma Blue/White/Obsidian/Glacier Blue',
                        price: '229.99'
                    }
                ]
            }
        ]
    }
];
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
