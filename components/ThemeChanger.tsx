import { useState } from "react";
import { MainContext, useContext } from "context";
import classNames from "classnames";

export default function ThemeChanger() {
  const { theme, themeValues, setTheme } = useContext(MainContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative select-none">
      <div
        className={`${themeValues[theme]?.bg} transition-all  w-8 h-8 rounded-full border-a2 border-[2px] cursor-pointer`}
        onClick={() => setShowMenu((prev) => !prev)}></div>
      <div
        className={classNames(
          "absolute  left-0 -translate-x-[84px] top-[50px] p-2 bg-13/[.9] backdrop-blur-md border-[1px] border-3a rounded-lg transition-opacity duration-500 w-[200px] overflow-hidden",
          {
            "-translate-y-[200%] opacity-0 unvisible": !showMenu,
          }
        )}>
        <ul className="flex flex-col">
          <li
            className="text-white/[0.7] tracking-tight font-medium w-full flex items-center gap-2 p-3 hover:bg-a2/[0.6] rounded-lg cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(1);
              setShowMenu(false);
              localStorage.setItem("theme", "1");
            }}>
            <div className="w-4 h-4 greenBg rounded-full"></div>
            Modern Green
          </li>
          <li
            className="text-white/[0.7] tracking-tight font-medium w-full flex items-center gap-2 p-3 hover:bg-a2/[0.6] rounded-lg cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(2);
              setShowMenu(false);
              localStorage.setItem("theme", "2");
            }}>
            <div className="w-4 h-4 spaceBg rounded-full"></div>
            Space Blue
          </li>
          <li
            className="text-white/[0.7] tracking-tight font-medium w-full flex items-center gap-2 p-3 hover:bg-a2/[0.6] rounded-lg cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(3);
              setShowMenu(false);
              localStorage.setItem("theme", "3");
            }}>
            <div className="w-4 h-4 westBg rounded-full"></div>
            West Sun
          </li>
        </ul>
      </div>
    </div>
  );
}
