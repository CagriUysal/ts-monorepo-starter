export type MeaningOfLife = number;

export function isMeaningOfLife(arg: any): arg is MeaningOfLife {
  if (arg === 42) return true;

  return false;
}
