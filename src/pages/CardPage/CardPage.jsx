import cn from "classnames";
import styles from "./CardPage.module.scss";
import { Card } from "../../components/card/Card/Card";

export const CardPage = ({ className, children = null, ...props }) => {
  return (
    <div className={cn([className, styles._])} {...props}>
      CardPage
      <Card />
    </div>
  );
};
