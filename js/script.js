const openMenu = document.querySelector('.hamCheck');
const hamMenu = document.querySelector('.hamburger-menu');
const hamItem = document.querySelectorAll('.hamburger-item');

openMenu.addEventListener('click', (e) => {
    hamMenu.classList.toggle('active');
})

hamItem.forEach((item) => {
    item.addEventListener('click', e => {
        hamMenu.classList.toggle('active')
        openMenu.checked = false;
    })
})

$('#phone').mask("+7 (999) 999-9999");

$('form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: "./mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input').val('')
        $('form').trigger('reset')
    });
    return false;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.page-up').fadeIn();
    } else {
        $('.page-up').fadeOut();
    }
});