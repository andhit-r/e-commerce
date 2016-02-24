(function () {
    'use strict';
    openerp.Tour.register({
        id:   'website_test_uom',
        name: "Test if the UoM appears on every user",
        path: '/shop',
        mode: 'test',
        steps: [
            {
                title:  "search ipod",
                element: 'form:has(input[name="search"]) a.a-submit',
                onload: function() {
                    $('input[name="search"]').val("ipod");
                }
            },
            {
                title:     "select ipod",
                waitFor:    "div.product_price span:contains(Unit(s))",
                waitNot:    "section a:contains(iPad Retina Display)",
                content:    "This step checks that after searching the unit of measure appears on the div that contains the ipod",
                element:   '.oe_product_cart a:contains("iPod")',
            },
            {
                title:     "Click iPod",
                content:    "This step checks that after clicking on the ipod that the price is displayed correctly and finishes the test",
                waitFor:    "section#product_detail div.product_price span:contains(Unit(s))",
                element:    'label:contains(32 GB) input',
            },
            {
                title:      "Add to chart",
                content:    "TODO",
                waitFor:    'label:contains(32 GB) input[checked]',
                element:    'form[action^="/shop/cart/update"] .btn',
            },
            {
                title:      "Checkout",
                content:    "TODO",
                waitFor:    "span:contains(Unit(s))",
                element:    'a[href="/shop/checkout"]',
            },
            {
                title:     "test without input error",
                element:   'form[action="/shop/confirm_order"] .btn:contains("Confirm")',
                onload: function (tour) {
                    if ($("input[name='name']").val() === "")
                        $("input[name='name']").val("website_sale-test-shoptest");
                    if ($("input[name='email']").val() === "")
                        $("input[name='email']").val("website_sale_test_shoptest@websitesaletest.odoo.com");
                    $("input[name='phone']").val("123");
                    $("input[name='street2']").val("123");
                    $("input[name='city']").val("123");
                    $("input[name='zip']").val("123");
                    $("select[name='country_id']").val("21");
                },
            },
            {
                title:      "Finish",
                content:    "TODO",
                waitFor:    "span:contains(Unit(s))",
            },
        ]
    });

}());
