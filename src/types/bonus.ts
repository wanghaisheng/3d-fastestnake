export type BonusProps = {
  type: string;
  value: string | number;
  startFood: number;
  endFood: number;
};
export type BonusesPerLevel = BonusProps[];
export type BonusCatchingState = {
  isBonusCaught: boolean;
  caughtFoodNumber: number;
};
