import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CareerItem from "@/app/components/MyCareer/components/CareerItem";
import { CAREER } from "@/app/components/MyCareer/constants/career";
import Section from "@/components/Section/Section";

const MyCareer = () => {
  return (
    <Section>
      <SectionTitle title="My Career" subtitle="A lot of stories 🤓" />
      {CAREER.map((item, index) => (
        <CareerItem
          key={index}
          number={index + 1}
          description={item.description}
          companyName={item.companyName}
          timeOfWork={item.timeOfWork}
        />
      ))}
    </Section>
  );
};

export default MyCareer;
