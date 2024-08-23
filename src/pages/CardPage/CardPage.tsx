import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./CardPage.module.scss";
import { Card } from "../../components/card/Card/Card";
import { Header } from "../../components/header/Header/Header";
import { Container } from "../../components/ui/Container/Container";

interface CardPageProps extends ComponentPropsWithoutRef<"div"> {}

export const CardPage = ({
  className,
  ...props
}: CardPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <Container>
        <Header />
        <Card className={styles.card} />
      </Container>
    </div>
  );
};
