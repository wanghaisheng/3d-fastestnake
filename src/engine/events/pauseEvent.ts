/**
 *  @module pauseEvent.ts Управляет остановкой игры на паузу
 *     @var isPause Фиксирует остановку игры на паузу и прерывание паузы
 *     @function checkPause Возвращает состояние игры
 *     @function swapPause Изменяет указатель паузы "isPause" на обратный
 *     @function keyboardPauseEvent Отрабатывает нажатие клавиши "Space"
 *     @function touchPauseEvent Отрабатывает касание экрана
 */
import { useMenuStore, usePauseStore } from "../../store/menuStore";
import { stopTimer } from "../time/isTimer";
/**
 * При значении true - игра на паузе, false - нет
 */
let isPause = false;
/**
 * Возвращает true, если игра на паузе, и false, если нет
 * @returns isPause
 */
export function checkPause(): boolean {
  return isPause;
}
/**
 * Изменяет boolean-значение "isPause" на противоположное
 */
export function swapPause() {
  isPause = !isPause;
}
/**
 * При нажатии клавиши "Space" изменяет режим игры на паузу и обратно
 * @param e событие нажатия клавиши
 * @returns true если игра останавливается на паузу  и false если нет
 */
export function keyboardPauseEvent(e: KeyboardEvent): boolean {
  if (e.code === "Space") {
    const { togglePause } = usePauseStore.getState();
    const { toggleModal, selectTitleMenu } = useMenuStore.getState();
    toggleModal();
    selectTitleMenu("Pause");
    togglePause();
    swapPause();
    stopTimer();
  }

  return isPause;
}
/**
 * При одиночном касании экрана изменяет режим игры на паузу и обратно
 * @return true если игра останавливается на паузу  и false если нет
 */
export function touchPauseEvent() {
  // swapPause();
  // stopTimer();
}
