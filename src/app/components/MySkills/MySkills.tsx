import React from "react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Card, CardBody } from "@nextui-org/card";
import Section from "@/components/Section/Section";
import { Icon, IconName } from "@/components/Icon/Icon";

type Skill = {
  icon: IconName;
  name: string;
};

const skills: Skill[] = [
  { icon: "react", name: "React" },
  { icon: "reactNative", name: "React Native" },
  { icon: "nextJs", name: "Next Js" },
  { icon: "redux", name: "Redux" },
  { icon: "zustand", name: "Zustand" },
  { icon: "reactQuery", name: "React Query" },
  { icon: "reactRouter", name: "React Router" },
  { icon: "highcharts", name: "Highcharts" },
  { icon: "internationalization", name: "i18next" },
  { icon: "tailwind", name: "Tailwind" },
  { icon: "bootstrap", name: "Bootstrap" },
  { icon: "nestJs", name: "Nest Js" },
  { icon: "sequelize", name: "Sequelize" },
  { icon: "git", name: "Git" },
  { icon: "storybook", name: "Storybook" },
];

const MySkills = () => {
  return (
    <Section id="skills">
      <SectionTitle
        title="My Skills"
        subtitle="Not just typing on keyboard... 🙄"
      />
      <div className="xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 grid gap-6 auto-rows-[180px]">
        {skills.map((item, index) => (
          <Card key={index}>
            <CardBody className="flex flex-col justify-center items-center gap-4">
              <Icon name={item.icon} />
              <span>{item.name}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MySkills;
