import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./MainPage.module.scss";
import { Table } from "../../components/table/Table/Table";
import { Header } from "../../components/header/Header/Header";
import { Container } from "../../components/ui/Container/Container";

interface MainPageProps extends ComponentPropsWithoutRef<"div"> {}

export const MainPage = ({
  className,
  ...props
}: MainPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <Container>
        <Header />
        <Table className={styles.table} />
      </Container>
    </div>
  );
};
