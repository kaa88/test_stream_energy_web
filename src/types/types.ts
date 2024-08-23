export type Sign =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type Language = "original" | "translated";

export interface QueryGetAllHoroscopes {
  language: Language;
  period: string;
}
export interface QueryResponseAllHoroscopes extends QueryGetAllHoroscopes {
  horoscope: { [key in Sign]: string };
}

export interface QueryGetHoroscope extends QueryGetAllHoroscopes {
  sign: string;
}
export interface QueryResponseHoroscope extends QueryGetHoroscope {
  horoscope: string;
}
