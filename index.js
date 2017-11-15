const slideShow = [
    {
        img_url:
            'https://asyncinterview.com/wp-content/uploads/2014/09/Real-Estate-Agent.jpg',
        description: 'Selling home to recent married couples'
    },
    {
        img_url:
            'http://media.beam.usnews.com/be/0d/94d77cf94380b5e5b5cc7fdd12e0/141107-realestateagent-stock',
        description: 'Buy home for you and your family'
    }
];
function SlideShow(show) {
    var html =
        '<br><img class="mySlides" style="display: none;" src="' +
        show.img_url +
        '"  height="400" width="600">';
    html += '<p id="description">' + show.description + '</p>';
    return html;
}

function showSlideShow() {
    var html = slideShow
        .map(function(show) {
            return SlideShow(show);
        })
        .join('');
    $('#slideshow').html(html);
    console.log(html);
}
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

function main() {
    showSlideShow();
    carousel();
}

$(main);
