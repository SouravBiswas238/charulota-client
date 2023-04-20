import MobileSideBarMenu from "./MobileSideBarMenu";

export default function MobileSideBar({ menuState, setMenuState }) {
  return (
    <div
      className={`fixed ${
        menuState ? "left-0" : "left-[-48rem]"
      } top-0  z-50 h-screen w-screen flex duration-300 ease-in-out`}
    >
      <div className="bg-white flex-grow">
        <MobileSideBarMenu menuState={menuState} setMenuState={setMenuState} />
      </div>
      <div className="bg-black flex-grow opacity-20	"></div>
    </div>
  );
}
