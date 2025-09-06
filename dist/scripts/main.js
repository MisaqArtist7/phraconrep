"use strict";
const copyWriteYear = document.querySelector("#copyWriteYear");
const windowContainer = document.querySelector(".window");
const menuContainer = document.querySelector("#menuContainer");
if (windowContainer) {
    const closeMenuContainer = menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.querySelector("#closeMenuContainer");
    const menuHeaderShow = document.querySelector("#menuHeaderShow");
    const menuLis = menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.querySelectorAll("ul > .menuLiItems ");
    // window close && open
    windowContainer.addEventListener("click", function (e) {
        if (windowContainer === e.target)
            windowContainer.classList.remove("active");
    });
    closeMenuContainer === null || closeMenuContainer === void 0 ? void 0 : closeMenuContainer.addEventListener("click", () => {
        windowContainer.classList.remove("active");
    });
    menuHeaderShow === null || menuHeaderShow === void 0 ? void 0 : menuHeaderShow.addEventListener("click", () => {
        windowContainer.classList.add("active");
    });
    // menu nav lis
    menuLis === null || menuLis === void 0 ? void 0 : menuLis.forEach((item) => {
        item.addEventListener("click", (e) => {
            var _a, _b, _c;
            menuLis.forEach((it) => {
                var _a, _b, _c;
                if (it === item)
                    return;
                (_a = it.querySelector(".menuDropDown")) === null || _a === void 0 ? void 0 : _a.classList.add("h-0");
                (_b = it.querySelector(".menuDropDown")) === null || _b === void 0 ? void 0 : _b.classList.add("opacity-0");
                (_c = it.querySelector("svg")) === null || _c === void 0 ? void 0 : _c.classList.remove("rotate-180");
            });
            (_a = item.querySelector(".menuDropDown")) === null || _a === void 0 ? void 0 : _a.classList.toggle("h-0");
            (_b = item.querySelector(".menuDropDown")) === null || _b === void 0 ? void 0 : _b.classList.toggle("opacity-0");
            (_c = item.querySelector("svg")) === null || _c === void 0 ? void 0 : _c.classList.toggle("rotate-180");
        });
    });
}
if (copyWriteYear) {
    copyWriteYear.textContent = String(new Date().getFullYear());
}
  const searchBtn = document.querySelector('.searchBtn');
  const modal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearchModal');

  searchBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // بستن با زدن ESC یا کلیک بیرون از مودال
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };