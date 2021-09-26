document.querySelectorAll('a[href^="#"]').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});

$(".link").mouseenter(function() {
    $(".main-info").css("background-image", 'url("./images/pureidealogy3.jpg")');
    $(".intro").hide();
});

$(".link").mouseleave(function() {
    $(".main-info").css("background-image", 'url("./images/thought.jpg")');
    $(".intro").show();
});

$("#coffee").typer({
    strings: [
    "Кафе без сметана не е същото като кафе без мляко!"
    ],
    typeSpeed: 150,
    backspaceSpeed: 200000000000000000000000,
    backspaceDelay: 1111800,
    repeatDelay: 1000,
    repeat: false,
    autoStart: true,
    startDelay: 100,
    useCursor: false
});

var comments_arr_1 = [
    "Мааамка му! Този е по-горещ от Оги Секса!",
    "По-проницателен е дори от Кобрата в 3-ти рунд!",
    "По-върл комунист е и от Корнелия Нинова!",
    "По-влиятелен е от Туийт на Елън Мъск"
]
    
function get_users(results, jquery_selector_for_location, comments_arr){
    $.ajax({
        url: 'https://randomuser.me/api/?results='+results,
        dataType: 'json',
        success: function(data) {
            console.log(data);
            users = data.results;
            if (users){
                $(jquery_selector_for_location).html('');
                for(var i=0; i < users.length; i++){
                    var current_user = users[i];
                    var template = $('#comment_template').clone(true);
                    template.removeAttr('id');
                    template.find('.user_photo').attr('src', current_user.picture.large);
                    template.find('.user_name').text(current_user.name.first + " " + current_user.name.last);
                    if (comments_arr[i]){
                        template.find('.user_comment').text(comments_arr[i]);
                    } else {
                        template.find('.user_comment').text(comments_arr[Math.floor(Math.random() * comments_arr.length)]);
                    }
                    $(jquery_selector_for_location).append(template);
                    template.show();
                }
            }
        }
    });
}

$(document).ready(function(){
    get_users(5, '.comments_1', comments_arr_1);
});

var originalString = $("#jokeArt").html();
console.log(originalString);
$("#jokeButton").click(function(){
    if ($("#jokeArt").html() == originalString){
        $("#jokeArt").html("<p>В добрите стари дни на 'действително съществуващия социализъм' <br/> на всеки ученик се повтаряше отново и отново как Ленин е чел постоянно и ненаситно, <br/> и как е съветвал младите хора : 'Учете! Учете! Учете!'. <br/> Но една класическа шега от Социализма използва това мото за приятен подривен ефект в неочакван контекст.<br/> Маркс, Енгелс и Ленин били попитани какво предпочитат - жена или любовница? <br/>Маркс, известен със своя консерватизъм в интимната сфера отговорил : -Жена!; Енгелс, който знаел как да се наслаждава на живота отговорил, разбира се: - Любовница!,<br> Но изненадата дошла от Ленин, който казал : - И двете! И жена, и любовница!. Дали е бил посветен на тайно преследване на прекомерни сексуални удоволствия?<br>  Не, тъй като той побързал да обясни: По този начин, човек може да каже на любовницата си, че е с жена си, и на жена си, че ще посети любовницата си...<br> Но какво ще направи той в действителност?Ще отиде на уединено място... И ще учи, ще учи, ще учи!!!</p>");
    }
    else {
        $("#jokeArt").html(originalString);
    }
});


