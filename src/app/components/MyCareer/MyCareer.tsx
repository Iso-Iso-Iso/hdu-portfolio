import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CareerItem from "@/app/components/MyCareer/components/CareerItem";
import { CAREER } from "@/app/components/MyCareer/constants/career";

const MyCareer = () => {
  return (
    <section>
      <SectionTitle title="My Career" subtitle="A lot of stories 🤓" />
      {CAREER.map((item, index) => (
        <CareerItem
          number={index + 1}
          description={item.description}
          companyName={item.companyName}
          timeOfWork={item.timeOfWork}
        />
      ))}
    </section>
  );
};

export default MyCareer;
