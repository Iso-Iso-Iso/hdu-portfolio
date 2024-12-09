import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Card, CardBody } from "@nextui-org/card";
import Section from "@/components/Section/Section";

const skills = Array(12).fill(null);

const MySkills = () => {
  return (
    <Section>
      <SectionTitle
        title="My Skills"
        subtitle="Not just typing on keyboard... 🙄"
      />
      <div className="xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 grid gap-6 auto-rows-[180px]">
        {skills.map((_, index) => (
          <Card key={index}>
            <CardBody></CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MySkills;
