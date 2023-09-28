import { faker } from "@faker-js/faker";

export const formattedNumber =(number: number)=> new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(number);


export const generateRandomStringsArray = (length = 10) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(faker.lorem.word());
  }
  return result;
}