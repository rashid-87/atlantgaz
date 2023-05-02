const btn = document.querySelectorAll(".wrapp");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".overlay__img");

const scrollContr = {
  disScroll() {
    document.body.style.cssText = `
  overflow: hidden;
  `;
  },
  enabScroll() {
    document.body.style.cssText = "";
  },
};

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay.style.display = "block";
    scrollContr.disScroll();

    close.addEventListener("click", function () {
      overlay.style.display = "none";
      scrollContr.enabScroll();
    });
  });
});

const button = document.querySelector(".benefits__button");
const cards = document.querySelectorAll(".benefits__row");

button.addEventListener("click", function () {
  for (let card of cards) {
    card.style.display = "flex";
  }
  button.style.display = "none";
});

const tabsBtn = document.querySelectorAll(".tabs__list");
  const tabsItems = document.querySelectorAll(".tabs__wrapper");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });
        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }
  document.querySelector(".tabs__list").click();

const accordins = document.querySelectorAll(".accordion__wrapp");

accordins.forEach( function(items) {
    items.children[0].addEventListener("click", () => {
        items.classList.toggle('accordion__active')
    });
});