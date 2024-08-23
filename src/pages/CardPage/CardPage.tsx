import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./CardPage.module.scss";
import { Card } from "../../components/card/Card/Card";
import { Header } from "../../components/header/Header/Header";
import { Container } from "../../components/ui/Container/Container";
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from "react-router";

interface CardPageProps extends ComponentPropsWithoutRef<"div"> {}

export const CardPage = ({
  className,
  ...props
}: CardPageProps): JSX.Element => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  tg.BackButton.show();

  useEffect(() => {
    tg.BackButton.show();
    return () => {
      tg.BackButton.hide();
    };
  }, []); // eslint-disable-line

  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };
  const onTouchMove = (e: TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchEndRef.current > touchStartRef.current + 100)
      window.history.back(); //navigate(-1);
  };

  useEffect(() => {
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []); // eslint-disable-line

  return (
    <div className={cn([className, styles._])} {...props}>
      <Container>
        <Header />
        <Card className={styles.card} />
      </Container>
    </div>
  );
};
