var modeType_dark = !1;
$(function () {
    $("document").ready(function () {
        $("#buttonMode").attr("title", "Ativar DARK MODE nativo"),
            $("#buttonMode").click(function () {
                0 == modeType_dark
                    ? ((modeType_dark = !0), $("#buttonMode").attr("title", "Ativar LIGHT MODE nativo"))
                    : 1 == modeType_dark
                    ? ((modeType_dark = !1), $("#buttonMode").attr("title", "Ativar DARK MODE nativo"))
                    : ($("#buttonMode").removeAttr("title"), console.log("Title removido!"));
            });
    });
});
