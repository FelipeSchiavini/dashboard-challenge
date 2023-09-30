export const formattedNumber = (number: number) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(number);
