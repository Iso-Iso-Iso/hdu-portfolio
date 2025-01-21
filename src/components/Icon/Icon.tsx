"use client";
import React, { FC } from "react";
import { FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa6";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandStorybook,
} from "react-icons/tb";
import { RiBearSmileLine } from "react-icons/ri";
import {
  SiI18Next,
  SiNestjs,
  SiReactquery,
  SiReactrouter,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";
import { LuChartSpline } from "react-icons/lu";

const iconMap = {
  react: FaReact,
  reactNative: TbBrandReactNative,
  nextJs: TbBrandNextjs,
  redux: TbBrandRedux,
  zustand: RiBearSmileLine,
  reactRouter: SiReactrouter,
  highcharts: LuChartSpline,
  internationalization: SiI18Next,
  tailwind: SiTailwindcss,
  reactQuery: SiReactquery,
  nestJs: SiNestjs,
  bootstrap: FaBootstrap,
  sequelize: SiSequelize,
  git: FaGitAlt,
  storybook: TbBrandStorybook,
};

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
};

export const Icon: FC<IconProps> = ({ name }) => {
  const IconRenderer = iconMap[name];

  return <IconRenderer size={64} />;
};
