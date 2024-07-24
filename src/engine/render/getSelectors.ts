/**
 * @module getSelectors.ts Передает в js ссылки на элементы html-разметки
 *    @function getSelectors Возвращает объект со ссылками на DOM-элементы
 */
import { GameElements } from "../../types/htmlElements";
/**
 * Устанавливает связь между игрой и DOM-элементами для рендера
 * @returns объект со ссылками на все DOM-элементы
 */
function getSelectors(): GameElements {
  const elements: GameElements = {
    playBoard: document.querySelector(".play-board"),
    scoreElement: document.querySelector(".fa-wallet"),
    leftToEatElement: document.querySelector(".fa-carrot"),
    timeElement: document.querySelector(".fa-clock"),
    levelElement: document.querySelector(".fa-stairs"),
    lifeElement: document.querySelector(".fa-heart"),
    speedElement: document.querySelector(".fa-gauge-high"),
    controls: document.querySelectorAll(".controls i"),
    bonusElement: document.querySelector(".fa-gift"),
  };

  return elements;
}

export default getSelectors;
