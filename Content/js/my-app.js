var $$ = Dom7;
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Pandora',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
        swipeActiveArea: 400,
    },
    // Add default routes
    routes: [
        {
            path: '/intrn/:idp',
            pageName: 'internal',
            on: {
                pageAfterIn: function (e, page) {
                    
                    //--------------------------------

                    $('.product-view-details').hover(
             function () {
                 $('.product-view-add-bg').css('height', '0%');
                 $('.product-view-add-bg').find('.product-view-add-cart').css('opacity', '0');
                 $(this).next('.product-view-add-bg').css('height', '100%');
                 $(this).next('.product-view-add-bg').find('.product-view-add-cart').css('opacity', '1');
             });
                    //---------------------------------
                    $('.product-view-add-bg').hover(
            function () { },
             function () {
                 $(this).css('height', '0%');
                 $(this).find('.product-view-add-cart').css('opacity', '0');
             }
             );
                    //--------------------------------
                    //--------------------------------
                    $('.icon-layout-grid').click(function (event) {
                        $('.icon-layout-grid').removeClass('active');
                        $(this).addClass('active');
                        $('.prds').css('display', 'flex');
                        if ($(this).hasClass('dt_fill')) {
                            $('.fullwide').css('display','none');                            
                        } else {
                            $('.wide3').css('display', 'none');
                        }
                    });
                    //--------------------------------
                    //--------------------------------
                    $('.product-sizes a').click(function (event) {
                        //var cl = $(this).parent().attr('class');
                        $(event.target).closest('.product-sizes').find('a').removeClass('selected');
                        //alert(cl);
                        $(this).addClass('selected');
                    });
                },
            }
        },
        {
            path: '/home/',
            pageName: 'home',
            on: {
                pageAfterIn: function (e, page) { },
            }
        },
    {

        path: '/detail/',
        pageName: 'detail',
        on: {
            pageAfterIn: function (e, page) {
                var photoURL = new Array();
                $('.photoBrowser').find('img').each(function () {
                    var ur = $(this).attr('src');
                    //alert(ur);
                    photoURL.push(ur);
                });

                var photoBrowser = app.photoBrowser.create({
                    photos: photoURL,
                    theme: 'dark',
                });


                $$('.photoBrowser img').on('click', function () {
                    //alert(photoURL);
                    photoBrowser.open();
                });

                //---------------------------------------
                $('.pa-product-colors li a').click(function (event) {
                    //alert(11);
                    $('.pa-product-colors li a').removeClass('line-over');
                    //alert(11);
                    $(this).addClass('line-over');
                });
                //--------------------------------
                $('.pa-product-size-wrap li a').click(function (event) {
                    //alert(11);
                    $('.pa-product-size-wrap li a').removeClass('selected');
                    //alert(11);
                    $(this).addClass('selected');
                });
                
            },

            
        }
    },
    {
        path: '/about/',
        pageName: 'about',
        on: {
            pageAfterIn: function (e, page) {
                
                //--------------------------------
            },
          
        }
    },
    {
        path: '/contact/',
        pageName: 'contact',
        on: {
            pageAfterIn: function (e, page) {

                //--------------------------------
            },

        }
    },
    {
        path: '/shopping/',
        pageName: 'Shopping',
        on: {
            pageAfterIn: function (e, page) {
                app.panel.close(true);
                //shopping
                $(function () {

                    $(".qnt > div").append('<div class="inc qntbtn">+</div><div class="dec qntbtn">-</div>');

                });
                $(".qntbtn").on("click", function () {
                    //alert(9);s
                    var $button = $(this);
                    var oldValue = $button.parent().find("input").val();

                    if ($button.text() == "+") {
                        var newVal = parseFloat(oldValue) + 1;
                    } else {
                        // Don't allow decrementing below zero
                        if (oldValue > 1) {
                            var newVal = parseFloat(oldValue) - 1;
                        } else {
                            newVal = 1;
                        }
                    }

                    $button.parent().find("input").val(newVal);

                });
                //--------------------------------
                $(".remove_itm").on("click", function () {
                    var $button = $(this);
                    $button.parent("li").remove();
                    if ($('#prditm ul li').length == 0) {
                        //alert(00);
                        $('.Shopping-bk').html('<h2 class="text-center shopempty">BASKET IS EMPTY</h2><a href="#" class="link col button button-fill btn-bg-gr">CONTINUE SHOPPING</a>');
                        //router.back();
                    }
                });
            },

        }
    },
    {
        path: '/login/',
        pageName: 'login',
        on: {
            pageAfterIn: function (e, page) { },
        }
    },
    {
        path: '/register/',
        pageName: 'register',
        on: {
            pageAfterIn: function (e, page) { },
        }
    }, 
    {
        path: '/delivery/',
        pageName: 'delivery',
        on: {
            pageAfterIn: function (e, page) {
                $('.shep li').click(function (event) {
                    //alert(11);
                    $('.shep li').removeClass('active');
                    $('.content-delivery .delivery_adr > a').css('display', 'none');
                    $('.stndrd').css('display', 'block');
                    //alert(11);
                    $(this).addClass('active');
                    if ($('.maping').hasClass('active')) {
                        $('.stndrd').css('display', 'none');
                        $('.content-delivery .delivery_adr > a').css('display', 'block');
                    }
                });
            },
        }
    },
    {
        path: '/payment/',
        pageName: 'payment',
        on: {
            pageAfterIn: function (e, page) {
                $('.payment_lst li').click(function (event) {
                    //alert(11);
                    $('.payment_lst li').removeClass('active');
                    $('.content-payment .delivery_adr > p').css('display', 'none');
                    $('.bnk_lst').css('display', 'block');
                    $('.content-payment .delivery_adr .title-tunnel').html('انتخاب بانک');
                    //alert(11);
                    $(this).addClass('active');
                    if ($('.maping').hasClass('active')) {
                        $('.content-payment .delivery_adr .title-tunnel').html('درب منزل');
                        $('.bnk_lst').css('display', 'none');
                        $('.content-payment .delivery_adr .title-tunnel').after('<p style="margin-top: 35px;">اگر شما درب منزل پرداخت می کنید نیازی به ارائه اطلاعات بیشتر ندارید</p>');
                    }
                });
            },
        }
    },
    {
        path: '/factor/',
        pageName: 'factor',
        on: {
            pageAfterIn: function (e, page) { },
        }
    },
    {
            path: '/blog/',
            pageName: 'blog',
            on: {
                pageAfterIn: function (e, page) { },
            }
    },
    {
        path: '/readmore/',
        pageName: 'readmore',
        on: {
            pageAfterIn: function (e, page) { },
        }
    },
    {
        path: '/backbank/',
        pageName: 'backbank',
        on: {
            pageAfterIn: function (e, page) { },
        }
    },

    {
        path: '(.*)',
        pageName: 'home',

    },

    
    ],
    
    // ... other parameters
});
//function rightCat() {

var mainView = app.views.create('.view-main', {
    stackPages: true
});
// slider
var mySwiper = new Swiper('.myslider .swiper-container', {
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
    },
});

var mySwiper2 = new Swiper('.swiper2', {
    pagination: '.swiper2 .swiper-pagination',
    lazyLoading: true,
    spaceBetween: 20,
    slidesPerView: 3
});


//searchbar  
var mrdb = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
var autocompleteDropdownExpand = app.autocomplete.create({
    inputEl: '#autocomplete-dropdown-expand',
    openIn: 'dropdown',
    expandInput: true, // expand input
    source: function (query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Find matched items
        for (var i = 0; i < mrdb.length; i++) {
            if (mrdb[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(mrdb[i]);
        }
        // Render items by passing array with result items
        render(results);
    }
});

//store search
var store = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
var autocompleteDropdownSimple = app.autocomplete.create({
    inputEl: '#autocomplete-dropdown',
    openIn: 'dropdown',
    source: function (query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Find matched items
        for (var i = 0; i < store.length; i++) {
            if (store[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(store[i]);
        }
        // Render items by passing array with result items
        render(results);
    }
});

