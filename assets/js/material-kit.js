/*! =========================================================
 *
 * Material Kit PRO - v2.0.0
 *
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-pro
 * Available with purchase of license from http://www.creative-tim.com/product/material-kit-pro
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * License Creative Tim (https://www.creative-tim.com/license)
 *
 * ========================================================= */

var big_image;

$(document).ready(function() {
    BrowserDetect.init();

    // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
    $('body').bootstrapMaterialDesign();

    window_width = $(window).width();

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    $navbar_collapse = $('.navbar').find('.navbar-collapse');

    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();


    // FileInput
    $('.form-file-simple .inputFileVisible').click(function() {
        $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function() {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function() {
        $(this).parent().parent().find('.inputFileHidden').trigger('click');
        $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function() {
        var names = '';
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            if (i < $(this).get(0).files.length - 1) {
                names += $(this).get(0).files.item(i).name + ',';
            } else {
                names += $(this).get(0).files.item(i).name;
            }
        }
        $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function() {
        $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function() {
        $(this).parent().siblings().trigger('focusout');
    });

    //    Activate bootstrap-select
    if ($(".selectpicker").length != 0) {
        $(".selectpicker").selectpicker();
    }

    // Activate Popovers
    $('[data-toggle="popover"]').popover();

    // Active Carousel
    $('.carousel').carousel({
        interval: 3000
    });

    //Activate tags
    // we style the badges with our colors
    var tagClass = $('.tagsinput').data('color');
    $('.tagsinput').tagsinput();
    $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');

    if ($('.navbar-color-on-scroll').length != 0) {
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar);
    }

    materialKit.checkScrollForTransparentNavbar();

    if (window_width >= 768) {
        big_image = $('.page-header[data-parallax="true"]');
        if (big_image.length != 0) {
            $(window).on('scroll', materialKitDemo.checkScrollForParallax);
        }

    }
});

$(window).on("load", function() {
    //initialise rotating cards
    materialKit.initRotateCard();

    //initialise colored shadow
    materialKit.initColoredShadows();
});

$(document).on('click', '.card-rotate .btn-rotate', function() {
    var $rotating_card_container = $(this).closest('.rotating-card-container');

    if ($rotating_card_container.hasClass('hover')) {
        $rotating_card_container.removeClass('hover');
    } else {
        $rotating_card_container.addClass('hover');
    }
});

$(document).on('click', '.navbar-toggler', function() {
    $toggle = $(this);

    if (materialKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        materialKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function() {
            $toggle.removeClass('toggled');
        }, 550);

        $('html').removeClass('nav-open-absolute');
    } else {
        setTimeout(function() {
            $toggle.addClass('toggled');
        }, 580);


        div = '<div id="bodyClick"></div>';
        $(div).appendTo("body").click(function() {
            $('html').removeClass('nav-open');

            if ($('nav').hasClass('navbar-absolute')) {
                $('html').removeClass('nav-open-absolute');
            }
            materialKit.misc.navbar_menu_visible = 0;
            $('#bodyClick').remove();
            setTimeout(function() {
                $toggle.removeClass('toggled');
            }, 550);
        });

        if ($('nav').hasClass('navbar-absolute')) {
            $('html').addClass('nav-open-absolute');
        }

        $('html').addClass('nav-open');
        materialKit.misc.navbar_menu_visible = 1;
    }
});

$(window).on('resize', function() {
    materialKit.initRotateCard();
});

materialKit = {
    misc: {
        navbar_menu_visible: 0,
        window_width: 0,
        transparent: true,
        colored_shadows: true,
        fixedTop: false,
        navbar_initialized: false,
        isWindow: document.documentMode || /Edge/.test(navigator.userAgent)
    },

    initColoredShadows: function() {
        if (materialKit.misc.colored_shadows == true) {
            if (!(BrowserDetect.browser == 'Explorer' && BrowserDetect.version <= 12)) {
                $('.card:not([data-colored-shadow="false"]) .card-header-image').each(function() {
                    $card_img = $(this);

                    is_on_dark_screen = $(this).closest('.section-dark, .section-image').length;

                    // we block the generator of the colored shadows on dark sections, because they are not natural
                    if (is_on_dark_screen == 0) {
                        var img_source = $card_img.find('img').attr('src');
                        var is_rotating = $card_img.closest('.card-rotate').length == 1 ? true : false;
                        var $append_div = $card_img;

                        var colored_shadow_div = $('<div class="colored-shadow"/>');

                        if (is_rotating) {
                            var card_image_height = $card_img.height();
                            var card_image_width = $card_img.width();

                            $(this).find('.back').css({
                                'height': card_image_height + 'px',
                                'width': card_image_width + 'px'
                            });
                            $append_div = $card_img.find('.front');
                        }

                        colored_shadow_div.css({
                            'background-image': 'url(' + img_source + ')'
                        }).appendTo($append_div);

                        if ($card_img.width() > 700) {
                            colored_shadow_div.addClass('colored-shadow-big');
                        }

                        setTimeout(function() {
                            colored_shadow_div.css('opacity', 1);
                        }, 200);
                    }

                });
            }
        }
    },

    initRotateCard: debounce(function() {
        $('.rotating-card-container .card-rotate').each(function() {
            var $this = $(this);

            var card_width = $(this).parent().width();
            var card_height = $(this).find('.front .card-body').outerHeight();

            $this.parent().css({
                'height': card_height + 'px',
                'margin-bottom': 30 + 'px'
            });

            $this.find('.front').css({
                'height': card_height + 35 + 'px',
                'width': card_width + 'px',
            });

            $this.find('.back').css({
                'height': card_height + 35 + 'px',
                'width': card_width + 'px',
            });
        });
    }, 50),

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > scroll_distance) {
            if (materialKit.misc.transparent) {
                materialKit.misc.transparent = false;
                $('.navbar-color-on-scroll').removeClass('navbar-transparent');
            }
        } else {
            if (!materialKit.misc.transparent) {
                materialKit.misc.transparent = true;
                $('.navbar-color-on-scroll').addClass('navbar-transparent');
            }
        }
    }, 17)
};
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer"
        },
        {
            string: navigator.userAgent,
            subString: "Trident",
            identity: "Explorer"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "Safari"
        },
        {
            string: navigator.userAgent,
            subString: "Opera",
            identity: "Opera"
        }
    ]

};

var better_browser = '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>';
