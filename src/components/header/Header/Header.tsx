import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { LangSwitch } from "../LangSwitch/LangSwitch";
import { useNavigate, useParams } from "react-router";
import { Icon } from "../../ui/Icon/Icon";

interface HeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const { sign } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.backButtonBox}>
        {/* {!!sign && (
          <button type="button" onClick={goBack}>
            <Icon name="chevron" />
          </button>
        )} */}
      </div>
      <LangSwitch />
    </div>
  );
};
