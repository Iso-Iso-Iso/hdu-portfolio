import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Card, CardBody } from "@nextui-org/card";

const skills = Array(12).fill(null);

const MySkills = () => {
  return (
    <section>
      <SectionTitle
        title="My Skills"
        subtitle="Not just typing on keyboard... 🙄"
      />
      <div className="grid-cols-5 grid gap-6 auto-rows-[180px]">
        {skills.map((item) => (
          <Card>
            <CardBody></CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
