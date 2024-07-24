/**
 *  @module gameOver.ts Обрабатывает событие окончания игры
 *     @function gameOver Выполняет закрытие текущей игры и запуск новой
 */
import { useMenuStore } from "../../store/menuStore";
import { stopTimer } from "../time/isTimer";
import { getProtocol } from "./protocol";
/**
 * Выводит сообщение, помещает протокол в хранилище и перезапускает игру
 * @param value параметр окончания игры: истекло время или кончились жизни
 */
function gameOver(value: string): void {
  const { isVisible, toggleModal, selectTitleMenu } = useMenuStore.getState();
  stopTimer();

  let titleMenu = "";
  if (value === "no moves") titleMenu = "No moves";
  if (value === "time limit") titleMenu = "Time limit";

  if (!isVisible) {
    toggleModal();
    selectTitleMenu(`Game over! ${titleMenu}! Press OK to replay...`);
  }
  localStorage.setItem("protocol", JSON.stringify(getProtocol()));
}

export default gameOver;
