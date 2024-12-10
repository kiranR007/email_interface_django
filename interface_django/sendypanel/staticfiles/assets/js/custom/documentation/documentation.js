"use strict";
var KTLayoutDocumentation = function () {
    var e, t, n, o;
    return {
        init: function (i) {
            var c;
            e = document.querySelector("#kt_docs_aside_menu_wrapper"), t = document.querySelector("#kt_docs_keenicons_listing"),
                function (e) {
                    var t = e;
                    if (void 0 === t && (t = document.querySelectorAll(".highlight")), t && t.length > 0)
                        for (var n = 0; n < t.length; ++n) {
                            var o = t[n].querySelector(".highlight-copy");
                            if (o) new ClipboardJS(o, {
                                target: function (e) {
                                    var t = e.closest(".highlight"),
                                        n = t.querySelector(".tab-pane.active");
                                    return null == n && (n = t.querySelector(".highlight-code")), n
                                }
                            }).on("success", (function (e) {
                                var t = e.trigger.innerHTML;
                                e.trigger.innerHTML = "copied", e.clearSelection(), setTimeout((function () {
                                    e.trigger.innerHTML = t
                                }), 2e3)
                            }))
                        }
                }(i), e && (c = e.querySelector(".menu-link.active")) && !0 !== KTUtil.isVisibleInContainer(c, e) && e.scroll({
                    top: KTUtil.getRelativeTopPosition(c, e),
                    behavior: "smooth"
                }), t && (function () {
                    function e(e) {
                        return null == e ? "" : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
                    } [].slice.call(document.querySelectorAll('[data-kt-keenicons-style-toggle="true"]')), KTUtil.on(document.body, '[data-kt-keenicons-style-toggle="true"]:checked', "click", (function (e) {
                        var n = this.value;
                        t.classList.remove("keenicons-solid"), t.classList.remove("keenicons-duotone"), t.classList.remove("keenicons-outline"), t.classList.add("keenicons-" + n)
                    })), KTUtil.on(document.body, '[data-kt-icon-use="true"]', "click", (function (t) {
                        var i = document.querySelector('[data-kt-keenicons-style-toggle="true"]:checked').value,
                            c = this.closest('[data-kt-icon-preview="true"]').querySelector('[data-kt-icon-name="true"]');
                        if (n = c.innerHTML, "duotone" === i) {
                            const t = parseInt(this.getAttribute("data-kt-icon-paths"));
                            o = e('<i class="ki-duotone ki-' + n + '">');
                            for (let n = 1; n <= t; n++) o += e('\n <span class="path' + n + '"></span>');
                            o += e("\n</i>")
                        } else o = e('<i class="ki-' + i + " ki-" + n + '"></i>');
                        new bootstrap.Modal("#kt_keenicons_use").show()
                    })), document.getElementById("kt_keenicons_use").addEventListener("show.bs.modal", (e => {
                        document.querySelector("#kt_keenicons_use_title").innerHTML = n, document.querySelector("#kt_keenicons_use_code").innerHTML = o
                    }))
                }(), function () {
                    const e = document.getElementById("kt_keenicons_use_code"),
                        t = document.getElementById("kt_keenicons_use_code_copy");
                    new ClipboardJS(t, {
                        target: e,
                        text: function (e) {
                            return e.innerText
                        }
                    }).on("success", (function (e) {
                        t.classList.add("active"), t.querySelector(".ki-copy").classList.add("d-none"), t.querySelector(".ki-check").classList.remove("d-none"), setTimeout((function () {
                            t.classList.remove("active"), t.querySelector(".ki-copy").classList.remove("d-none"), t.querySelector(".ki-check").classList.add("d-none")
                        }), 3e3)
                    }))
                }())
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTLayoutDocumentation.init()
}));