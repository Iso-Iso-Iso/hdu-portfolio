import MainScreen from "@/app/components/MainScreen/MainScreen";
import MySkills from "@/app/components/MySkills/MySkills";
import MyCareer from "@/app/components/MyCareer/MyCareer";
import ContactMe from "@/app/components/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <MainScreen />
      <MySkills />
      <MyCareer />
      <ContactMe />
    </>
  );
}
