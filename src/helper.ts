export const fortmatString = (str: string) => {
  return str
    .split(" ")
    .map((text) => text.charAt(0).toUpperCase() + text.substring(1))
    .join(" ");
};
