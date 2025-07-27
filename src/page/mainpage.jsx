import { Navbar } from "../component/navbar";
import { CategoriesSection } from "../component/mainpagecomponent/cetegeriesSection";
import { SalePoster } from "../component/mainpagecomponent/saleposter";
import { ElectronicSection } from "../component/mainpagecomponent/electronicsection";

export function MainPage() {
  return (
    <div>
      <Navbar />
      <CategoriesSection />
      <SalePoster />
      <ElectronicSection />
    </div>
  );
};
