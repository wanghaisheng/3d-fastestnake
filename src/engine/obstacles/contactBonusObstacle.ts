/**
 * @module contactBonusObstacle.ts Управляет контактом препятствий с бонусом
 *    @function contactBonusObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import { getBonusCoord } from "../bonuses/bonus";
import { getBonusAvailability } from "../bonuses/bonusAvailableState";
import { getBonusCatchingStatus } from "../bonuses/bonusCatchingState";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий с бонусом меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description
 * @returns измененный шаг препятствия, коснувшегося бонуса
 */
function contactBonusObstacle(props: obstacleContactProps): number {
  const { i, step } = props;
  if (!getBonusCatchingStatus().isBonusCaught && getBonusAvailability())
    step[i] = obstacleBounce({ ...props, cell: getBonusCoord() });

  return step[i];
}

export default contactBonusObstacle;
