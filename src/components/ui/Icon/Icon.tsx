import styles from "./Icon.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import {
  CgArrowLeftR,
  CgChevronLeft,
  CgSpinner,
  CgClose,
} from "react-icons/cg";

import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";

export const icons = {
  aries: <GiAries />,
  taurus: <GiTaurus />,
  gemini: <GiGemini />,
  cancer: <GiCancer />,
  leo: <GiLeo />,
  virgo: <GiVirgo />,
  libra: <GiLibra />,
  scorpio: <GiScorpio />,
  sagittarius: <GiSagittarius />,
  capricorn: <GiCapricorn />,
  aquarius: <GiAquarius />,
  pisces: <GiPisces />,

  arrow_square: <CgArrowLeftR />,
  chevron: <CgChevronLeft />,
  spinner: <CgSpinner />,
  cross: <CgClose />,
};

export type IconName = keyof typeof icons;

interface IconProps extends ComponentPropsWithoutRef<"div"> {
  name: IconName;
  children?: undefined;
}

export const Icon = memo(
  ({ className, name, ...props }: IconProps): JSX.Element => {
    return (
      <i className={cn(className, styles._)} {...props}>
        {icons[name]}
      </i>
    );
  }
);
