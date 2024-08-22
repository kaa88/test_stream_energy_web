import cn from "classnames";
import styles from "./Table.module.scss";

export const Table = ({ className, children = null, ...props }) => {
  return (
    <div className={cn([className, styles._])} {...props}>
      Table
    </div>
  );
};
