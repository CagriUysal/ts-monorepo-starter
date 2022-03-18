export type MeaningOfLife = number;

export function isMeaningOfLife(arg: any): arg is MeaningOfLife {
  if (arg === 42) return true;

  // some change here, some other change here
  return false;
}
