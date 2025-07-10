export const afterDiscount = ({ price, discountPercentage }: any) => {
  return Math.floor(price * (1 - discountPercentage / 100));
};

export const multiplyEmoji = (emoji: string, count: number): string => {
  return emoji.repeat(count);
};
