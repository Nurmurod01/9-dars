import "antd/dist/reset.css";

import SelectUi from "./components/select";
import SwitchUi from "./components/switch";
import AvatarUi from "./components/avatar";
import BadgeUi from "./components/badge";
import CardUi from "./components/card";
import CollapseUi from "./components/collapse";
import ImageUi from "./components/image";
import PopoverUi from "./components/popover";
import TourUi from "./components/tour";
import TooltipUi from "./components/tooltip";
import MessageUi from "./components/message";
import ResultUi from "./components/result";
import CalendarUi from "./components/calendar";

function App() {
  return (
    <>
      <div className="m-24">
        <SwitchUi></SwitchUi>
        <div className="grid grid-cols-4 gap-24 mt-10">
          <SelectUi></SelectUi>
          <AvatarUi></AvatarUi>
          <div>
            <TourUi></TourUi>
          </div>
          <BadgeUi></BadgeUi>
          <CardUi></CardUi>
          <TooltipUi></TooltipUi>
          <PopoverUi></PopoverUi>
          <ImageUi></ImageUi>
          <CollapseUi></CollapseUi>
          <MessageUi></MessageUi>

          <ResultUi></ResultUi>
        </div>
        <CalendarUi></CalendarUi>
      </div>
    </>
  );
}

export default App;
