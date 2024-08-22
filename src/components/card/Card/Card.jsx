import cn from "classnames";
import styles from "./Card.module.scss";

export const Card = ({ className, children = null, ...props }) => {
  return (
    <div className={cn([className, styles._])} {...props}>
      Card
    </div>
  );
};
