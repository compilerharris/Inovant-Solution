$( document ).ready(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $('.header').outerHeight();
    var scrollTop = $('.slider-1').outerHeight() - $('.home-sub-nav').outerHeight() - headerHeight;
    var subheaderHeight = $('.sub_header').outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        } 
    });
    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > headerHeight) {
            $('.header, .nri-heading').removeClass('nav-down').addClass('header--hidden');
            $('.home-sub-nav').removeClass('nav-down').addClass('home-sub-nav--hidden');
            $('#burger').removeClass('burger').addClass('header--hidden');
        } else {
            if (st + $(window).height() < $(document).height() && st > headerHeight) {
                $('.header, .nri-heading').removeClass('header--hidden').addClass('nav-down');
                $('.home-sub-nav').removeClass('home-sub-nav--hidden').addClass('nav-down');
                $('#burger').removeClass('header--hidden').addClass('burger');
            }
        } if (st < headerHeight) {
            $('.header, .nri-heading').removeClass('nav-down')
        }
        // } if (st <= scrollTop) {
        //     $(".home-sub-nav").removeClass("nav-down");
        // }
        lastScrollTop = st;
    }

      // slider-1
    $('.home-banner-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        mouseDrag: true,
        touchDrag: false,
        items:1
    });

    $('.inner-page-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:false,
        mouseDrag: false,
        touchDrag: false,
        items:1
    });

    /** contact */
    $('.contact-banner-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:false,
        mouseDrag: false,
        touchDrag: false,
        items:1
    });

    /** about us */

        /** about */
        $('.main-banner-slider').owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            dots:false,
            mouseDrag: false,
            touchDrag: false,
            items:1
        });

        /** profile */
        $('.about-banner-slider').owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            dots:false,
            mouseDrag: false,
            touchDrag: false,
            items:1
        });

     // slider-2
    $('.project-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        mouseDrag: false,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            480:{
                items:2,
                margin:10,
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

     // slider-3
    // $('.three-box-slider').owlCarousel({
    //     loop:false,
    //     margin:50,
    //     nav:true,
    //     dots:false,
    //     // onInitialized:counter,
    //     // onTranslated:counter,
    //     responsive:{
    //         0:{
    //             items:1,
    //             margin:10
    //         },
    //         600:{
    //             items:2,
    //             margin:20
    //         },
    //         1000:{
    //             items:3,
    //             margin:30
    //         },
    //         1025:{
    //             items:3,
    //             margin:50
    //         }
    //     }
    // });

    // progressbar slider
    $('.three-box-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:50,
        nav:true,
        dots:false,
        // onInitialized:counter,
        // onTranslated:counter,
        items:1,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive:{
            0:{
                items:1,
                margin:10
            },
            600:{
                items:2,
                margin:20
            },
            1000:{
                items:3,
                margin:30
            },
            1025:{
                items:3,
                margin:50
            }
        }
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
          width: "100%",
          transition: "width 5000ms"
        });
    }
      
    function resetProgressBar() {
        $(".slide-progress").css({
          width: 0,
          transition: "width 0s"
        });
    }

    // slider-2
    $('.work-culture-slider').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        dots:false,
        mouseDrag: true,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            480:{
                items:1,
                margin:10,
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    // function counter(event) {
    //     var element = event.target;
    //     var items = event.item.count;
    //     var item = event.item.index + 1;
    //     var sldtxt = $('.active .ivySlideTxt').html();
    //     var sldWidth = 100;
    //     var sldPercent = sldWidth * item / items;
    //     $('#counter').html("0"+item+" / 0"+items);
    //     $('.slTxt').html(sldtxt);
    //     $('.slideState span').css("width", sldPercent + "%");
    //     $('.slideState span').html(sldPercent + "%")
    // }
    
    $('.project-detail-banner-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:false,
        mouseDrag: false,
        touchDrag: false,
        items:1
    });

    $('.feature-slider').owlCarousel({
        loop:false,
        margin:50,
        nav:true,
        dots:false,
        center:true,
        responsive:{
            0:{
                items:1,
                margin:20
            },
            768:{
                items:2,
                margin:30
            },
            1000:{
                items:3,
                margin:30
            },
            1025:{
                items:3,
                margin:50
            }
        }
    });

    $('.about-glance-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        mouseDrag: true,
        touchDrag: true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.about-practice-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        mouseDrag: true,
        touchDrag: true,
        items:1
    });

    // house-plan-slider
    $('.house-plan-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        mouseDrag: true,
        touchDrag: true,
        items:1
    });

    // eligibility calculator
    $('.eligibility-project-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 0,
        nav: true,
        dots: false,
        mouseDrag: false,
        responsive : {
        0 : {
                items: 1
        },
        768 : {
                items: 2
        },
        1024 : {
                items: 3
        },
        1025 : {
                items: 3
        }
        }
        // animateOut: 'fadeOut',
    });
    // });

    $('.loan-month-label').click(function(){
        $('#sliderTenureValue').focus();
    });

    $(document).on('input', '#sliderLoanAmount', function() {
        $('#sliderLoanAmountValue').val(currencyformat(Math.round($(this).val())));
    });

    $(document).on('input', '#sliderTenure', function() {
        $('#sliderTenureValue').val($(this).val());
    });

    $(document).on('input', '#sliderInterestRate', function() {
        $('#sliderInterestRateValue').val($(this).val()+'%');
    });

    $(document).on('input', '#sliderLoanAmount1', function() {
        $('#sliderLoanAmountValue1').val(currencyformat(Math.round($(this).val())));
    });

    function currencyformat(x)
    {
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        return res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    }

    // pop up

    const popup = document.querySelector('.popup');

    $(document).ready(function(){
        setTimeout(function(){

            popup.style.display = "flex"
        }, 3000); 
        
    });
            

    $(".close-popup").click(function(event) {
        event.preventDefault();
        popup.style.display = "none";
        console.log('close')
    })

    // content height
    var project_content_height = $('.content-section .content').innerHeight();
    $('.content-section .content').css('height', '90px');
    console.log(project_content_height)

    // Expand div on click
    $(".add-image").click(function() {
        if($('.add-image').hasClass('show-content')){
            console.log('add');
            $(this).removeClass("show-content");
            $('.content-section .content').css('height', project_content_height);
        }else{
            console.log('remove')
            $(this).addClass("show-content");
            $('.content-section .content').css('height', '90px');
        }
    });

// form error validation

$("#categories_form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
        name : {
            required: true,
            minlength: 3
        },
        phone: {
            required: true,
            number: true,
            // min: 10,
            // max:10
        },
        email: {
            required: true,
            email: true
        },
        project: {
            required: true,
        }
    },
    messages : {
        name: {
            minlength: "Name should be at least 3 characters"
        },
        phone: {
            required: "Please enter your Contact number",
            // number: "Please enter your contact detail as a numerical value",
            // min: "You must enter minimum 10 digit",
            // max: "You must enter maximum 10 digit"
        },
        email: {
            email: "The email should be in the format: abc@domain.tld"
        },
        project: {
            required: "Please select an option from the list, if none are appropriate please select 'Other'",
        }
    },
});

// carrer upload
$("#btnUpload").click(function () {
    var allowedFiles = [".doc", ".docx", ".pdf"];
    var fileUpload = $("#fileUpload");
    var lblError = $("#lblError");
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    if (!regex.test(fileUpload.val().toLowerCase())) {
        lblError.html("Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.");
        return false;
    }
    lblError.html('');
    return true;
});

// search From 
$("#homepage_searh_project_form_button").click(function (e) {
    e.preventDefault();
    let projectType=$('#search_project_type').val();
    projectStatus='ongoing'
    if(projectType==null||projectType==''){
        projectType=document.getElementById('search_project_type')[1].value.toLowerCase();
        document.getElementById('search_project_type').value=document.getElementById('search_project_type')[1].value;
    }else{
        projectType=projectType.toLowerCase();
    }
    var url = 'search'+"/"+projectType+"/all/"+projectStatus;

    $("#search_project_form").attr("action",url).submit();
});

// filter From 
$("#filter_project_form_button").click(function (e) {
    e.preventDefault();
    let projectType;
    $("input[name='project_type']:checked").each(function() {
        projectType=$(this).val().toLowerCase();
   });
    let projectStatus;
    $("input[name='project_status']:checked").each(function() {
        projectStatus=$(this).val().toLowerCase();
    });
    if(projectStatus==''){
        projectStatus='ongoing'
    }
    

    
    
    let cities=[];
    $("input[name='cities[]']:checked").each(function() {
        cities.push($(this).val());
   });
    
    if(cities.length>1){
        var url = '/search'+"/"+projectType+"/cities/"+projectStatus;
    }else{
        var url = '/search'+"/"+projectType+"/"+cities[0].toLowerCase()+"/"+projectStatus;
    }

    $("#filter_project_form").attr("action",url).submit();
    
});


    // search-bar map
    function initAutocomplete() {
        const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap",
        });
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);
    
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
        });
    
        let markers = [];
    
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
    
        if (places.length == 0) {
            return;
        }
    
        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
    
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
    
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
            }
    
            const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
            };
    
            // Create a marker for each place.
            markers.push(
            new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
            })
            );
            if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
            } else {
            bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        });
    }

    // vedio-btn
    $('.vedio-section .play-btn').click(function(){
        $('.vedio-section').addClass('active');
		$('.video-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		// $('.slider-3-1.owl-carousel .owl-item .slider-3-play-button').addClass('active');
    })
	$('.pause-button').click(function(){
		$(this).siblings('.video-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.vedio-section').removeClass('active');
	});

    // Home Great Vibe section
    // $('.tabcontent').hide()
    $('.tab-wrp .tab').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('tab-data');

        $(this).closest('.tab-wrp').siblings('.tabcontent').hide();
        $('#' + target).fadeIn();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    // Home Loan
    $('.home-loan-button').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('tab-data');
        $('#'+target).toggleClass('active').slideToggle();
        $(this).toggleClass('active');
        $('.plus-minus-wrp').toggleClass('open');
    })

    // click on tab scroll to that section
    $(".home-sub-nav a, .nri-heading a").click(function(t) {
        t.preventDefault();
        var e = $(this).attr("data-tab");
        $("html, body").animate({
            scrollTop: $('#'+e).offset().top - $("header").innerHeight() - 2
        }, 500), $(this).addClass("active").siblings().removeClass("active");
    })

    //HamBurger
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".burger-navigation").toggleClass("is-active");
        $('.form-main-wrp').removeClass('active header-form-active')
        $('.header').removeClass('header-form-active')
    });
    

     // Accordion
    $('.tab-accordion .accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('data-href');

        if($(e.target).is('.active')) {
            $(this).removeClass('active');
            $(this).siblings().slideUp(1000).removeClass('open');
        }else {
            $(this).parent().siblings().children('.accordion-section-title').removeClass('active');
            $(this).parent().siblings().children('.accordion-section-content').slideUp(1000).removeClass('open');

            $(this).addClass('active');
            $('#'+currentAttrValue).slideDown(1000).addClass('open');
        }
    });
    
    // Mobile Dropdown
    $(window).load(function(){
        $('.mob-dropdown').each(function(){
            var tab_val = $(this).children('.mob-tab.active').text();
            console.log(tab_val)
            $(this).attr('data-before', 'Select');
            // $(this).attr('data-before', tab_val);
        })
        setTimeout(function(){
            $('a[data-src="#down_broch"]').fancybox().trigger('click');
        }, 5000)
    })
    if($(window).width()<900){
        $('.mob-dropdown').on('click',function(){
            $(this).toggleClass('open')
        });
        // $('.mob-dropdown').addClass('open');
    }

    (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();

    // Footer Open Close
    $('.footer-more').on('click',function(){
        $(this).toggleClass('open')
        $('.footer-link-section').slideToggle();
        $('html,body').animate({
            scrollTop:$(this).offset().top
        })
        if($('.footer-more').hasClass('open')){
            $('.footer-more .text').text('Less');
        }else{
            $('.footer-more .text').text('More');
        }
    });

    // Form Open Close
    $('.header .enquire-button').on('click',function(){
        if($(window).width()>767){
            $('.form-main-wrp').toggleClass('active header-form-active')
            $('.header').toggleClass('header-form-active')
            $(".navbar-burger").removeClass("is-active");
            $(".burger-navigation").removeClass("is-active");
        }else{
            $('.form-main-wrp').addClass('active')
            $('.form-main-wrp').removeClass('header-form-active')
            $('.header').removeClass('header-form-active')
        }
        $('#header_enquire_form .cs-placeholder').text('Select Project');
    });
    $('.enq-btn-click').on('click',function(){
        $('.form-main-wrp').addClass('active')
        $('.form-main-wrp').removeClass('header-form-active')
        $('.header').removeClass('header-form-active')
    });
    $('.close-btn, .overlay').on('click',function(){
        $('.form-main-wrp').removeClass('active')
    });

    // load-more-wrapper filter
    var load_more_wrapper_height = $('.load-more-wrapper').innerHeight();
    setTimeout(function(){
        $('.load-more-wrapper').css('height', '190px');
    }, 100)
    $('.load-more-btn').on('click',function(){
        if ( $(this).hasClass("loaded") ) {
            $('.load-more-btn').text('+More');
            $(".load-more-wrapper").animate({height:"190px"}, 300);              
        } else {
            $('.load-more-btn').text('-Less');
            $(".load-more-wrapper").animate({height:load_more_wrapper_height}, 300);
        }
        $(this).toggleClass("loaded");
    });

    // Filter Button
    $('.search-result-page > .container > .columns > .column:first-child .filter-btn').on('click',function(){
        $('.search-result-page > .container > .columns > .column:first-child').toggleClass('active')
    });
    // $('.close-btn, .overlay').on('click',function(){
    //     $('.form-main-wrp').removeClass('active')
    // });


    // Upload file
    const inputs = document.querySelectorAll('.upload-file-wrp input');

    for(let input of inputs) {
    const label = input.nextElementSibling;
    const labelVal = label.innerHTML;
    
    input.addEventListener('change', (e) => {
        let fileName = '';
        if(input.files && input.files.length > 1) {
        fileName = (input.getAttribute('data-multiple-caption') || '').replace('{count}', input.files.length);
        } else {
        fileName = e.target.value.split('\\').pop();
        }
        
        if(fileName) {
        label.querySelector('p').innerHTML = fileName;
        } else {
        label.innerHTML = labelVal;
        }
    })
    }



    // animation
    function anim_r_t_l_wrp(){
        $('.anim_r_t_l_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_r_t_l');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_l_t_r_wrp(){
        $('.anim_l_t_r_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_l_t_r');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_b_wrp(){
        $('.anim_t_t_b_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_b');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_b_t_t_wrp(){
        $('.anim_b_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_b_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_t_wrp(){
        $('.anim_t_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 80 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    $(window).scroll(function() { 
    
        anim_r_t_l_wrp();
        anim_l_t_r_wrp();
        anim_t_t_b_wrp();
        anim_b_t_t_wrp();
        anim_t_t_t_wrp();
    }).scroll();

    /** on project click in listing get the clicked peoject and select it in enquire form */
    $('.listingProjectEnqClick').click(function(){
        var id = $(this).attr("data-id");
        console.log(id);
        $('#selectedProject option').removeAttr('selected', 'selected');
        $('#selectedProject option[value='+id+']').attr('selected', 'selected');
        
        $('#selectedProject li').removeClass('cs-selected');
        $('#selectedProject li[data-value='+id+']').addClass('cs-selected');
        
        var selectedProjectCSPlaceholder = $('#selectedProject option[value='+id+']').text();
        $('#selectedProject .cs-placeholder').text(selectedProjectCSPlaceholder);

        $('.form-main-wrp').addClass('active')
        $('.form-main-wrp').removeClass('header-form-active')
        $('.header').removeClass('header-form-active')  
    });

    /** to close toast */
    window.setTimeout(function() {
        $("#alert-success").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
        $("#alert-danger").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 5000);
});

$(document).on('click', '.mob-dropdown .mob-tab', function(){
    var tab_val = $(this).text();
    $(this).parent('.mob-dropdown').attr('data-before', tab_val);
    console.log(tab_val)
});