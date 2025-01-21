import React, { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren & { id: string }> = ({ children, id }) => {
  return (
    <section className="mb-6" id={id}>
      {children}
    </section>
  );
};

export default Section;
