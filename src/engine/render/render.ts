/**
 * @module render.ts Выполняет рендер игрового поля
 *    @function render Выводит на экран игру и информационное табло
 */
import { renderComplete } from "./isRender";
// import renderPlayground from "./renderPlayGround";
import renderInfo from "./renderInfo";
/**
 * Выводит на экран все объекты игры
 */
function render(): void {
  // renderPlayground();
  renderInfo();
  renderComplete();
}

export default render;
