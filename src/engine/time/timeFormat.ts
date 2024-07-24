/**
 * @module timeFormat.ts Преобразует формат времени
 *    @function timeFormat Возвращает время в формате "минуты : секунды"
 */
/**
 * Конвертирует формат времени из "миллисекунды" в "минуты : секунды".
 * @param milliseconds время в миллисекундах
 * @description вычисляет количество полных минут, полных секунд, отбрасывает остаток и добавляет ноль перед цифрами 1-9
 * @returns время в формате "минуты : секунды"
 */
function timeFormat(milliseconds: number): string {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  const timeFormat = minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;

  return timeFormat;
}

export default timeFormat;
