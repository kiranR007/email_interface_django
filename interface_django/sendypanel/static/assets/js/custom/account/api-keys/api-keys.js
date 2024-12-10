"use strict";
var KTAccountAPIKeys = {
    init: function () {
        KTUtil.each(document.querySelectorAll('#kt_api_keys_table [data-action="copy"]'), (function (e) {
            var t = e.closest("tr"),
                s = KTUtil.find(t, '[data-bs-target="license"]');
            new ClipboardJS(e, {
                target: s,
                text: function () {
                    return s.innerHTML
                }
            }).on("success", (function (t) {
                var c = e.querySelector(".ki-copy"),
                    i = e.querySelector(".ki-check");
                i || ((i = document.createElement("i")).classList.add("ki-solid"), i.classList.add("ki-check"), i.classList.add("fs-2"), e.appendChild(i), s.classList.add("text-success"), c.classList.add("d-none"), setTimeout((function () {
                    c.classList.remove("d-none"), e.removeChild(i), s.classList.remove("text-success")
                }), 3e3))
            }))
        }))
    }
};
KTUtil.onDOMContentLoaded((function () {
    KTAccountAPIKeys.init()
}));