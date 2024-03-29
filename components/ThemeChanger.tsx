import { useEffect, useRef, useState } from "react";
import { MainContext, useContext } from "context";
import classNames from "classnames";
import { DownArrow } from "lib/icons";

export default function ThemeChanger() {
  const menuRef = useRef(null);
  const menuButton = useRef(null);
  const { theme, themeValues, setTheme } = useContext(MainContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.onclick = (e) => {
      if (!e.composedPath().includes(menuRef.current) && !e.composedPath().includes(menuButton.current)) {
        showMenu === true ? setShowMenu(false) : "";
      }
    };
  }, [showMenu]);

  return (
    <div className="relative select-none transition duration-300">
      <div
        ref={menuButton}
        className={`flex items-center gap-2 border border-3a px-3 py-0 min-h-[32px] rounded-full cursor-pointer group transition duration-300`}
        onClick={() => setShowMenu((prev) => !prev)}>
        <div className={`${themeValues[theme]?.bg} transition-all w-[17px] h-[17px] rounded-full`}></div>
        <div className="text-cc leading-none tracking-tight flex items-center justify-between pr-2 text-sm gap-2 transition duration-300 group-hover:text-white w-28">
          {themeValues[theme]?.name}
          <DownArrow />
        </div>
      </div>
      <div
        className={classNames(
          "absolute z-[1000] -left-[18px] top-11 p-1 bg-[#090909] backdrop-blur-md border border-[#2c2c2c] rounded-[3px] transition-opacity duration-500 w-[200px] overflow-hidden",
          {
            "-translate-y-[200%] opacity-0 unvisible": !showMenu,
          }
        )}>
        <ul className="flex flex-col" ref={menuRef}>
          <li
            className="text-bb
             tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] rounded-[4px] text-sm cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(1);
              setShowMenu(false);
              localStorage.setItem("theme", "1");
            }}>
            <div className="w-[17px] h-[17px] westBg rounded-full"></div>
            Magic Sunset
          </li>
          <li
            className="text-bb tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] text-sm rounded-[4px] cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(2);
              setShowMenu(false);
              localStorage.setItem("theme", "2");
            }}>
            <div className="w-[17px] h-[17px] spaceBg rounded-full"></div>
            Glacier Blue
          </li>

          <li
            className="text-bb tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] text-sm rounded-[4px] cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(3);
              setShowMenu(false);
              localStorage.setItem("theme", "3");
            }}>
            <div className="w-[17px] h-[17px] greenBg rounded-full"></div>
            Alien Green
          </li>
        </ul>
      </div>
    </div>
  );
}
