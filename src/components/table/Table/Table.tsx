import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Table.module.scss";
import { api } from "../../../api/api";
import { useFenching } from "../../../hooks/useFenching";
import { QueryResponseAllHoroscopes } from "../../../types/types";
import { Icon } from "../../ui/Icon/Icon";
import { LangContext } from "../../../App";
import { SIGN_NAME, SIGN_PERIOD, SIGN_TRANSLATE } from "../../../utils/const";

interface TableProps extends ComponentPropsWithoutRef<"div"> {}

export const Table = ({ className, ...props }: TableProps): JSX.Element => {
  const [lang] = useContext(LangContext);

  const [items, setItems] = useState<
    QueryResponseAllHoroscopes["horoscope"] | null
  >(null);

  const get = async () => {
    const res = await api.getAll({ language: lang, period: "today" });
    if (res) setItems(res.data.horoscope);
  };

  const { fetch, isLoading } = useFenching(get);

  useEffect(() => {
    if (lang) fetch();
  }, [lang]); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      {!!isLoading && <p>{lang === "original" ? "загрузка" : "loading"}</p>}
      <div className={styles.table}>
        {!!items &&
          Object.keys(items).map((sign) => (
            <Link className={styles.button} to={`/${sign}`} key={sign}>
              <p className={styles.icon}>
                <Icon name={SIGN_NAME[sign]} />
              </p>
              <p className={styles.signName}>
                {
                  (lang === "original" ? SIGN_TRANSLATE : SIGN_NAME)[
                    SIGN_NAME[sign]
                  ]
                }
              </p>
              <p className={styles.period}>{SIGN_PERIOD[SIGN_NAME[sign]]}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};
