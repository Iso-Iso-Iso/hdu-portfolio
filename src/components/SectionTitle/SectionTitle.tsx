import React, { FC } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-center text-font-primary-active font-semibold uppercase tracking-wider mb-4">
        {title}
      </h2>
      {subtitle && <h3 className="text-center font-serif text-2xl font-thin mb-4">{subtitle}</h3>}
    </>
  );
};

export default SectionTitle;
