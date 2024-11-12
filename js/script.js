function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

$(window).resize(throttle(adaptive_function, 200));

let originalParent, originalIndex;

function adaptive_header(w) {
    const headerMenu = $('.menu-body');
    const headerContacts = $('.actions-header__region');

    // Запоминаем исходное местоположение headerContacts при первой загрузке
    if (!originalParent) {
        originalParent = headerContacts.parent();
        originalIndex = headerContacts.index();
    }

    // Логика адаптации
    if (w < 800) {
        if (!headerContacts.hasClass('done')) {
            headerContacts.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerContacts.hasClass('done')) {
            headerContacts.removeClass('done');

            // Возвращаем headerContacts на исходное место
            if (originalParent && originalIndex >= 0) {
                originalParent.children().eq(originalIndex).before(headerContacts);
            }
        }
    }
}

function adaptive_function() {
    const w = $(window).outerWidth();
    adaptive_header(w);
}

// Initialize on load
adaptive_function();

// $(window).resize(function () {
//     adaptive_function()
// })
// function adaptive_header(w, h) {
//     let headerMenu = $('.menu-body')
//     let headerContacts = $('.actions-header__region')
//     if (w < 769) {
//         if (!headerContacts.hasClass('done')) {
//             headerContacts.addClass('done').appendTo(headerMenu)
//         }
//     } else {
//         if (headerContacts.hasClass('done')) {
//             headerContacts.removeClass('done').prependTo($('.header-top'))
//         }
//     }
//     if (w < 767) {
//         if (!$('.menu-body').hasClass('done')) {
//             $('.menu-body').addClass('done').prependTo(headerMenu)
//         }
//     } else {
//         $.each($('.header__actions'), function (index, val) {
//             if ($(this).hasClass('actions-header__region')) {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').appendTo($(".header__actions").eq(0))
//                 }
//             } else {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').prependTo($(".header__actions").eq(2))
//                 }
//             }
//         })

//     }
// }

// function adaptive_function() {
//     var w = $(window).outerWidth()
//     var h = $(window).outerHeight()
//     adaptive_header(w, h)
// }
// adaptive_function()

$('.header-menu__icon').click(function () {
    $(this).toggleClass('active');
    $('.menu-body').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop())
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body, html').scrollTop(parseInt($('body').data('scroll')))
    }
})


let arr = document.querySelectorAll('.header-top-item');
console.log(arr);

arr.forEach(item => {
    item.onclick = () => {
        // Remove 'active-lang' class from all items
        arr.forEach(i => i.classList.remove('active-lang'));
        // Add 'active-lang' class to the clicked item
        item.classList.add('active-lang');
    }
});

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
        }
    })
}
ibg();

let user_icon = document.querySelector('.user-header__icon ');
let user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener('click', function (e) {
    user_menu.classList.toggle('_active')

})
user_icon.addEventListener('mouseover', function (e) {
    user_menu.classList.add('_active')

})
user_icon.addEventListener('mouseout', function (e) {
    user_menu.classList.remove('_active')

})
user_icon.addEventListener('touchstart', function (e) {
    user_menu.classList.add('_active')

})
user_icon.addEventListener('touchend', function (e) {
    user_menu.classList.remove('_active')

})

document.addEventListener('click', function (e) {
    if (!e.target.closest('.actions-header__user')) {

        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active')
    }
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".control-main-slider__arrow__next",
        prevEl: ".control-main-slider__arrow__prew",
    },
    loop: true,
    autoHeight: false
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    },
    spaceBetween: 0,
    autoHeight: true,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    },
});
var swiper = new Swiper(".mySwiper3", {
    effect: 'fade',
    navigation: {
        nextEl: ".circle-block",
        //prevEl: ".control-main-slider__arrow__prew",
    },
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    observer: true,
    //observeParents: true, 
    speed: 1000
});

//GOTO
let goto_links = document.querySelectorAll('.goto')
console.log(goto_links);

// if (goto_links) {
//     for (let i = 0; i < goto_links.length; i++) {
//         let goto_link = goto_links[i]
//         goto_link.addEventListener('click', function (e) {
//             let target_block_class = goto_link.getAttribute('href').replace('#', '')
//             let target_block = document.querySelector('.' + target_block_class)
//             goto(target_block, 300)
//         })

//     }
// }
// function goto(target_block, speed, offset = 0) {
//     let header = ''
//     //OffsetHeader

//     header = 'header'

//     let options = {
//         speedAsDuration: true,
//         speed: speed,
//         header: header,
//         offset: offset
//     }
//     let src = new SmoothScroll()
//     src.animateScroll(target_block, '', options)
// }



$(window).scroll(function (params) {
    var s = $(this).scrollTop() / 2
    $('.mainblock__image').css('transform', 'tanslate3d(0,' + s + 'px,0)')
})

let link = document.querySelector('.goto-block')
if (link) {
    let blocks = []
    for (let i = 0; i < link.length; i++) {
        const element = link[i];
        let blockName = element.getAttribute('href').replace('#', '')
        if (blockName != '' & !~blocks.indexOf(blockName)) {
            blocks.push(blockName)
        }
        element.addEventListener('click', function (e) {
            let targetBlokcClass = element.getAttribute('href').replace('#', '')
            let target_block = document.querySelector('.' + targetBlokcClass)
        })
    }
}