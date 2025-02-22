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

// let linkIcon = $('<link>').attr('rel','icon').attr('type','image/png').attr('href', 'favicon_light.ico');
// $('head').append(linkIcon);
// 0 == modeType_dark
// ? ((modeType_dark = !0), $('link[rel="icon"]').attr('href', 'favicon_light.ico'))
// : 1 == modeType_dark
// ? ((modeType_dark = !1), $('link[rel="icon"]').attr('href', 'favicon_dark.ico'))
// : ($('link[rel="icon"]').removeAttr("href"), console.log("Favicons removido!"));
