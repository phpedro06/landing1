$("img").attr("draggable","false")
$(".h3").css("display", "none")
$(".m-main").css("display", "none")
$(".c-main").css("display", "none")
$(".br").css("display", "none")

function btn1() {
    $(".m-main").css("display", "flex")
    $(".h2").css("display", "none")
    $(".h3").css("display", "flex")
}
function btn2() {
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
}
function btn3() {
    $(".c-main").css("display", "flex")
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
}
function btn4() {
    $(".c-main").css("display", "none")
    $(".br").css("display", "flex")
    $(".eng").css("display", "none")
}
function btn5() {
    $(".c-main").css("display", "none")
    $(".br").css("display", "none")
    $(".eng").css("display", "flex")
}
function btnc() {
    $(".c-main").css("display", "none")
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
}
function cann() {
    $(".an-main").css("display", "none")
}

console.log("Made with ❤️ by Rat Dev | Todos os direitos reservados ©")
