export const loanCalculator = (suma: number, days: number) => {
  const dobandaPePerioada = suma * (49.64 / 100) * (days / 365);
  const rambursare = suma + dobandaPePerioada;
  return { rambursare, dobandaPePerioada };
};
