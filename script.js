$("img").attr("draggable","false")
$(".h3").css("display", "none")
$(".m-main").css("display", "none")
$(".c-main").css("display", "none")
$(".br").css("display", "none")
$(".m22").css("display","none")
$(".m33").css("display","none")
$(".z-main").css("display", "none")

$(".a-item").css("position","relative").css("opacity","0%")
        setTimeout(() => {
            $(".a-item").css("position","relative").css("opacity","100%")
        }, 250);

$(".h-item").css("position","relative").css("opacity","0%")
        setTimeout(() => {
            $(".h-item").css("position","relative").css("opacity","100%")
        }, 250);

function btn1() {
    $(".m-main").css("position","absolute").css("opacity","0%")
        setTimeout(() => {
            $(".m-main").css("position","absolute").css("opacity","100%")
        }, 150);
        $(".m-main").css("display", "flex")
        $(".h2").css("display", "none")
        $(".h3").css("display", "flex")
        $(".h3").css("position", "relative").css("right", "13px")
}
function btn2() {
    $(".m-main").css("position","absolute").css("opacity","0%")
    setTimeout(() => {
        $(".m-main").css("display", "none")
        $(".h2").css("display", "flex")
        $(".h3").css("display", "none")
    }, 150);
}
function btn3() {
    $(".c-main").css("position","fixed").css("opacity","0%")
        setTimeout(() => {
            $(".c-main").css("position","fixed").css("opacity","100%")
        }, 150);
    $(".c-main").css("display", "flex")
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
}
function btn4() {
    $(".c-main").css("position","fixed").css("opacity","0%")
        setTimeout(() => {
            $(".c-main").css("position","fixed").css("opacity","100%")
        }, 150);
    $(".c-main").css("display", "none")
    $(".br").css("display", "flex")
    $(".eng").css("display", "none")
}
function btn6() {
    $(".z-main").css("position","fixed").css("opacity","0%")
        setTimeout(() => {
            $(".z-main").css("position","fixed").css("opacity","100%")
        }, 150);
    $(".z-main").css("display", "flex")
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
}
function btn5() {
    $(".c-main").css("position","fixed").css("opacity","0%")
        setTimeout(() => {
            $(".c-main").css("fixed","fixed").css("opacity","100%")
        }, 150);
    $(".c-main").css("display", "none")
    $(".br").css("display", "none")
    $(".eng").css("display", "flex")
}
function btnc() {
    $(".c-main").css("position","fixed").css("opacity","0%")
        setTimeout(() => {
            $(".c-main").css("position","fixed").css("opacity","100%")
        }, 150);
        $(".m-main").css("position","absolute").css("opacity","0%")
        setTimeout(() => {
            $(".m-main").css("position","absolute").css("opacity","100%")
        }, 150);
    $(".c-main").css("display", "none")
    $(".m-main").css("display", "none")
    $(".h2").css("display", "flex")
    $(".h3").css("display", "none")
    $(".z-main").css("display", "none")
}
function prja1() {
    $(".prj-main1").css("height","55%").css("width","32%").css("cursor","pointer")
    $(".prj1").css("filter","brightness(110%)").css("bottom","3.2vw")
    $(".prj2").css("color","white")
    $(".prj3").css("color","white")
    $(".e2").css("color","rgb(201, 47, 47)")
}
function prjf1() {
    $(".prj-main1").css("height","50%").css("width","30%")
    $(".prj1").css("filter","brightness(30%)").css("bottom","2.4vw").css("filter","blur(1px)")
    $(".prj2").css("color","gray")
    $(".prj3").css("color","gray")
    $(".e2").css("color","rgb(126, 46, 46)")
}
function prja2() {
    $(".prj-main2").css("height","55%").css("width","32%").css("cursor","pointer")
    $(".prj4").css("filter","brightness(110%)").css("bottom","3.2vw")
    $(".prj5").css("color","white")
    $(".prj6").css("color","white")
    $(".e3").css("color","rgb(201, 47, 47)")
}
function prjf2() {
    $(".prj-main2").css("height","50%").css("width","30%")
    $(".prj4").css("filter","brightness(30%)").css("bottom","2.4vw").css("filter","blur(1px)")
    $(".prj5").css("color","gray")
    $(".prj6").css("color","gray")
    $(".e3").css("color","rgb(126, 46, 46)")
}


console.log("Made with ❤️ by Rat Dev | Todos os direitos reservados ©")