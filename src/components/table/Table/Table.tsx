import { ComponentPropsWithoutRef, useContext } from "react";
import cn from "classnames";
import styles from "./Table.module.scss";
import { Icon } from "../../ui/Icon/Icon";
import { LangContext } from "../../../App";
import { SIGN_NAME, SIGN_PERIOD, SIGN_TRANSLATE } from "../../../utils/const";
import { Link } from "react-router-dom";

interface TableProps extends ComponentPropsWithoutRef<"div"> {}

export const Table = ({ className, ...props }: TableProps): JSX.Element => {
  const [lang] = useContext(LangContext);
  const items = Object.values(SIGN_NAME);

  return (
    <div className={cn([className, styles._])} {...props}>
      {items.map((sign) => (
        <Link className={styles.button} to={`/${sign}`} key={sign}>
          <p className={styles.icon}>
            <Icon name={sign} />
          </p>
          <p className={styles.signName}>
            {(lang === "original" ? SIGN_TRANSLATE : SIGN_NAME)[sign]}
          </p>
          <p className={styles.period}>{SIGN_PERIOD[sign]}</p>
        </Link>
      ))}
    </div>
  );
};
