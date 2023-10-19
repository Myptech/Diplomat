document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navigation = document.querySelector(".navigation");
  const close = document.querySelector(".close");
  const logo = document.querySelector(".logo");

  // Функция для открытия меню
  function openMenu() {
    navigation.classList.add("active");
    close.classList.add("active");
    burgerMenu.style.display = "none"; // Скрываем бургер-меню
    logo.style.display = "none"; // Скрываем логотип
    document.body.style.overflow = "hidden"; // Останавливаем скроллинг
  }

  // Функция для закрытия меню
  function closeMenu() {
    navigation.classList.remove("active");
    close.classList.remove("active");
    burgerMenu.style.display = "block"; // Показываем бургер-меню
    logo.style.display = "flex"; // Показываем логотип
    document.body.style.overflow = "auto"; // Возобновляем скроллинг
  }

  // При клике на бургер-меню или крестик, открываем или закрываем меню
  burgerMenu.addEventListener("click", function () {
    if (!navigation.classList.contains("active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  close.addEventListener("click", function () {
    closeMenu();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const leftBtn = document.getElementById("left_btn");
  const rightBtn = document.getElementById("right_btn");
  const otzivCards = document.querySelectorAll(".otziv_card");
  const indicators = document.querySelectorAll(".indicator_1");
  const cardsPerPage = 3;
  let currentPage = 0; // Текущая страница

  // Функция для отображения карточек на текущей странице
  function showCards() {
    otzivCards.forEach((card, index) => {
      if (
        index >= currentPage * cardsPerPage &&
        index < (currentPage + 1) * cardsPerPage
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });

    // Устанавливаем класс .active для соответствующего индикатора
    indicators.forEach((indicator, index) => {
      if (index === currentPage) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Обработчик клика на кнопку "Вперед"
  rightBtn.addEventListener("click", () => {
    const maxPage = Math.ceil(otzivCards.length / cardsPerPage) - 1;
    if (currentPage < maxPage) {
      currentPage++;
      showCards();
    }
  });

  // Обработчик клика на кнопку "Назад"
  leftBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showCards();
    }
  });

  // Начальное отображение карточек
  showCards();
});

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreButton");
  const stopMoreButton = document.getElementById("stopMoreButton");
  const hiddenCards = document.querySelectorAll(".otziv_card:nth-child(n+5)");

  function showHiddenCards() {
    hiddenCards.forEach(function (card) {
      card.style.display = "block";
    });

    showMoreButton.style.display = "none";
    stopMoreButton.style.display = "block";
  }

  function hideAdditionalCards() {
    hiddenCards.forEach(function (card) {
      card.style.display = "none";
    });

    showMoreButton.style.display = "block";
    stopMoreButton.style.display = "none";
  }

  showMoreButton.addEventListener("click", showHiddenCards);
  stopMoreButton.addEventListener("click", hideAdditionalCards);

  // Начнем с скрытия дополнительных карточек, если экран больше 875px
  if (window.innerWidth <= 875) {
    hideAdditionalCards();
  } else {
    showMoreButton.style.display = "none";
    stopMoreButton.style.display = "none";
  }

  // Добавим слушатель изменения размера окна, чтобы активировать/деактивировать функциональность
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 875) {
      hideAdditionalCards();
    } else {
      showMoreButton.style.display = "none";
      stopMoreButton.style.display = "none";
    }
  });
});
