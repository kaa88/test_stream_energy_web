import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Router } from "./router/Router";
import { useTelegram } from "./hooks/useTelegram";
import { Language } from "./types/types";

// вместо Redux:
export const LangContext = createContext<
  [Language, Dispatch<SetStateAction<Language>> | null]
>(["translated", null]);

export const App = () => {
  const { tg } = useTelegram();

  const defaultLang: Language =
    tg.initDataUnsafe.user?.language_code === "ru" ? "original" : "translated";

  const [lang, setLang] = useState<Language>(defaultLang);

  useEffect(() => {
    tg.ready();
  }, []); // eslint-disable-line

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <Router />;
    </LangContext.Provider>
  );
};
