import cn from "classnames";
import styles from "./MainPage.module.scss";
import { Table } from "../../components/table/Table/Table";
import { useTelegram } from "../../hooks/useTelegram";

export const MainPage = ({ className, children = null, ...props }) => {
  const { tg } = useTelegram();

  console.log(tg.initData);
  console.log(tg.initDataUnsafe);

  return (
    <div className={cn([className, styles._])} {...props}>
      MainPage
      <Table />
    </div>
  );
};
