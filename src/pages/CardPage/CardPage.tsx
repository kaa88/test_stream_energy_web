import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    tg.BackButton.onClick(() => navigate(-1));
    tg.BackButton.show();
    return () => {
      tg.BackButton.hide();
    };
  }, []); // eslint-disable-line

  const [startPos, setStartPos] = useState(0);
  const [pos, setPos] = useState(0);

  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    const x = e.changedTouches[0].screenX;
    setStartPos(x);
    touchStartRef.current = x;
  };
  const onTouchMove = (e: TouchEvent) => {
    const x = e.changedTouches[0].screenX;
    setPos(x);
    touchEndRef.current = x;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchEndRef.current > touchStartRef.current + 100) navigate(-1);
    setPos(0);
    touchEndRef.current = 0;
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
        <Card
          className={styles.card}
          style={{
            transform: `translateX(${
              pos - startPos > 0 ? pos - startPos : 0
            }px)`,
          }}
        />
      </Container>
    </div>
  );
};
