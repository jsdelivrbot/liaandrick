
$(document).ready(function () {

    /**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
    (function (a) { (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

    //Add mobile to body for later checks
    if (jQuery.browser.mobile) {
        $('body').addClass('mobile');
    }

    //Don't allow intro banner's innerheight to resize when the URL bar shows/hides on mobile.
    if (jQuery.browser.mobile) {
        var viewportHeight = $('.intro').height();
        $('.intro').css({ height: viewportHeight });
        $('.header').css({ height: viewportHeight });
        $('.jumbotron').css({ height: viewportHeight });
    }

    $(window).on('scroll resize load', function () {
        if (!jQuery.browser.mobile) {
            var viewportHeight = $(window).height();
            $('.intro').css({ height: viewportHeight });
            $('.header').css({ height: viewportHeight });            
            $('.jumbotron').css({ height: viewportHeight });            
        }
    });

    /* ======= Fixed page nav when scrolled ======= */
    // var menu = $('.navbar');
    // var origOffsetY = menu.offset().top;
    // $(window).on('scroll resize load', function () {
    //     var $menuToTopHeight;

    //     if ($('body').hasClass('mobile')) {
    //         $menuToTopHeight = origOffsetY;
    //     } else {
    //         $menuToTopHeight = origOffsetY - menu.height() - 16;
    //     }

    //     if ($(window).scrollTop() >= $menuToTopHeight) {
    //         menu.addClass('fixed');
    //         $('body').addClass('sticky-page-nav');
    //     } else {
    //         menu.removeClass('fixed');
    //         $('body').removeClass('sticky-page-nav');
    //         $('#navbarText').removeClass('show');
    //     }
    // });

    //scroll body to target on click
    $('.scroll-up, .scroll-down').click(function () {
        var target = $(this).data("target");

        $('body,html').animate({
            scrollTop: $(target).offset().top - 85,
        }, 800);
        return false;
    });

    $(window).on('orientationchange', function () {
        var viewportHeight = $(window).height();
        $('.intro').css({ height: viewportHeight });
    });


    //Google maps api integration
    $(window).on('load', function() {
        var location = new google.maps.LatLng(39.2494977,-77.1893159);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 9,
            panControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f7f7f2"
                    }
                  ]
                },
                {
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#425370"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "color": "#3f2837"
                    },
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ]
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        //Linganore pin
        var linganore = {
            url: 'assets/images/wedding_icon-01.png', // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(25,50) // anchor
        };
        var linganoreLocation = new google.maps.LatLng(39.423381,-77.192645);   
        var venue = new google.maps.Marker({
            position: linganoreLocation,
            map: map,
            icon: linganore,
            title: 'The Venue'
          });

        //BWI pin
        var bwi = {
            url: 'assets/images/bwi-01.png', // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(25,25) // anchor
        };
        var bwiLocation = new google.maps.LatLng(39.177404,-76.668392);   
        var venue = new google.maps.Marker({
            position: bwiLocation,
            map: map,
            icon: bwi,
            title: 'BWI Airport'
          });

        //Dulles pin
        var bwi = {
            url: 'assets/images/bwi-01.png', // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(25,25) // anchor
        };
        var dullesLocation = new google.maps.LatLng(38.9531,-77.4565);   
        var venue = new google.maps.Marker({
            position: dullesLocation,
            map: map,
            icon: bwi,
            title: 'Dulles Airport'
          });

        var hotel = {
            url: 'assets/images/hotel-01.png', // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(15,15) // anchor
        };
        //Fairfield pin
        var fairfieldLocation = new google.maps.LatLng(39.379075, -77.412595);   
        var fairfield = new google.maps.Marker({
            position: fairfieldLocation,
            map: map,
            icon: hotel,
            title: 'Fairfield Inn & Suites'
          });
        //Hampton ping
        var hamptonLocation = new google.maps.LatLng(39.378852,-77.408380);   
        var fairfield = new google.maps.Marker({
            position: hamptonLocation,
            map: map,
            icon: hotel,
            title: 'Hampton Inn'
          });
    });
      var imageCount = $('.carousel-inner').children().length;
      var randomItemIndex = Math.ceil(Math.random() * imageCount);
      $(`.carousel-item:nth-child(${randomItemIndex})`).addClass('active');
      $(`.carousel-indicators:nth-child(${randomItemIndex})`).addClass('active');
    
    [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    });
  });
 