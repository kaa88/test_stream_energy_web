import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
import cn from "classnames";
import styles from "./Card.module.scss";
import { api } from "../../../api/api";
import { LangContext } from "../../../App";
import { useFenching } from "../../../hooks/useFenching";
import { Icon } from "../../ui/Icon/Icon";
import { useParams } from "react-router";
import { SIGN_NAME } from "../../../utils/const";
import { useTelegram } from "../../../hooks/useTelegram";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const Card = ({ className, ...props }: CardProps): JSX.Element => {
  const { sign } = useParams();
  const [lang] = useContext(LangContext);
  const [content, setContent] = useState("");

  const get = async () => {
    if (sign) {
      const res = await api.get({ sign, language: lang, period: "today" });
      if (res) setContent(res.data.horoscope);
    }
  };

  const { fetch, isLoading } = useFenching(get);

  useEffect(() => {
    if (lang) fetch();
  }, [lang]); // eslint-disable-line

  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [content]); // eslint-disable-line

  const iconName = !!sign && SIGN_NAME[sign];

  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.icon}>
        {!!iconName && <Icon name={iconName} />}
      </div>
      {!!isLoading && <p>{lang === "original" ? "загрузка" : "loading"}</p>}
      <p className={styles.content}>{!isLoading && content}</p>
    </div>
  );
};
