import { useEffect } from "react";
import { Router } from "./router/Router";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []); // eslint-disable-line

  return <Router />;
};
