const productRow = document.querySelector("[data-target=productRow]");
const productItemsLinks = document.querySelectorAll(".product-item-link");
const productItems = document.querySelectorAll("[data-product=item]");
const productItem = document.querySelector("[data-product=item]");

/* moving item sliders by clicking */

const btnLeft = document.querySelector("[data-arrow=btnLeft]");
const btnRight = document.querySelector("[data-arrow=btnRight]");

const productRowWidth = productRow.offsetWidth;
const itemStyle = productItem.currentStyle || window.getComputedStyle(productItem);
const itemMarginRight = Number(itemStyle.marginRight.match(/\d+/g)[0]);
const itemWidth = Number(itemStyle.width.match(/\d+/g)[0]);

const itemCount = productRow.querySelectorAll("[data-product=item]").length;
const itemWidthT = productRow.querySelector("[data-product=item]").offsetWidth;

let offset = 0;

const check = Math.round(productRowWidth / (itemWidthT + itemMarginRight)); // how many items in a row
const maxX = -((itemCount / check) * productRowWidth + (itemMarginRight * (itemCount / check)) - productRowWidth - itemMarginRight);


btnLeft.addEventListener("click", function () {
    if (offset !== 0) {
        offset += itemWidthT + itemMarginRight;

        productRow.style.transform = `translateX(${offset}px)`;
    }
});



btnRight.addEventListener("click", function () {
    if (offset >= maxX) {
        offset -= itemWidthT + itemMarginRight;

        productRow.style.transform = `translateX(${offset}px)`;
    }
})

