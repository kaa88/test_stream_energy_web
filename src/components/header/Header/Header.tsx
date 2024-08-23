import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { LangSwitch } from "../LangSwitch/LangSwitch";

interface HeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <LangSwitch />
    </div>
  );
};
