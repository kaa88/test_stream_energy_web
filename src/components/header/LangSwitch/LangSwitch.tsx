import { ComponentPropsWithoutRef, useContext } from "react";
import cn from "classnames";
import styles from "./LangSwitch.module.scss";
import { LangContext } from "../../../App";

interface LangSwitchProps extends ComponentPropsWithoutRef<"div"> {}

export const LangSwitch = ({
  className,
  ...props
}: LangSwitchProps): JSX.Element => {
  const [lang, setLang] = useContext(LangContext);

  return (
    <div className={cn([className, styles._])} {...props}>
      <button
        className={cn(styles.button, lang === "original" && styles.active)}
        type="button"
        onClick={() => {
          if (setLang) setLang("original");
        }}
      >
        RU
      </button>
      <button
        className={cn(styles.button, lang === "translated" && styles.active)}
        type="button"
        onClick={() => {
          if (setLang) setLang("translated");
        }}
      >
        EN
      </button>
    </div>
  );
};
