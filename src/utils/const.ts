import { Sign } from "../types/types";

export const SIGN_NAME: { [key: string]: Sign } = {
  aries: "aries",
  taurus: "taurus",
  gemini: "gemini",
  cancer: "cancer",
  leo: "leo",
  virgo: "virgo",
  libra: "libra",
  scorpio: "scorpio",
  sagittarius: "sagittarius",
  capricorn: "capricorn",
  aquarius: "aquarius",
  pisces: "pisces",
};

export const SIGN_TRANSLATE: { [key in Sign]: string } = {
  aries: "овен",
  taurus: "телец",
  gemini: "близнецы",
  cancer: "рак",
  leo: "лев",
  virgo: "дева",
  libra: "весы",
  scorpio: "скорпион",
  sagittarius: "стрелец",
  capricorn: "козерог",
  aquarius: "водолей",
  pisces: "рыбы",
};

export const SIGN_PERIOD: { [key in Sign]: string } = {
  aries: "21.03 - 19.04",
  taurus: "20.04 - 20.05",
  gemini: "21.05 - 20.06",
  cancer: "21.06 - 22.07",
  leo: "23.07 - 22.08",
  virgo: "23.08 - 22.09",
  libra: "23.09 - 22.10",
  scorpio: "23.10 - 21.11",
  sagittarius: "22.11 - 21.12",
  capricorn: "22.12 - 19.01",
  aquarius: "20.01 - 18.02",
  pisces: "19.02 - 20.03",
};
