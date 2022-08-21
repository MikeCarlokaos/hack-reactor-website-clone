import { useState } from "react";

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCamp, setShowCamp] = useState(false);
  const [showOutcome, setShowOutcome] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  return (
    <header className=" py-4 mx-3.5 md:mx-36 md:py-0">
      <nav>
        <div className="flex justify-between items-center text-sm w-full">
          <div className="flex shrink-0">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjQ3IiB2aWV3Qm94PSIwIDAgMTc1IDQ3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDx0aXRsZT5Mb2dvOiBIYWNrIFJlYWN0b3I8L3RpdGxlPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aCBkPSJNMTkuODMgNS45NEExOC4wNyAxOC4wNyAwIDAwNS40IDIzLjU0YTE4LjEgMTguMSAwIDAwMTYuOSAxNy45NFYzMy41YTEwLjEgMTAuMSAwIDAxLTguODYtOS45NmMwLTUuMSAzLjg3LTkuMzMgOC44NS05Ljk3di0yLjQ2YTEyLjU3IDEyLjU3IDAgMDAtMTEuMzIgMTIuNDNjMCA1LjU4IDMuNzIgMTAuMzIgOC44NSAxMS45MnYzLjE3YTE1LjYxIDE1LjYxIDAgMDEtMTEuOTQtMTUuMWMwLTguMTMgNi4zNS0xNC44MiAxNC40MS0xNS40OVYuMjJDOS45LjkgMCAxMS4xIDAgMjMuNTRjMCAxMi40MyA5Ljg5IDIyLjYzIDIyLjMgMjMuMzFWNDQuNGMtMTEuMDUtLjY4LTE5LjgzLTkuNzctMTkuODMtMjAuODZBMjEgMjEgMCAwMTE5LjgzIDIuOTgiIGZpbGw9IiMzNjM0MkUiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZD0iTTI0LjkyIDB2Mi40N0EyMS4xOSAyMS4xOSAwIDAxNDQuODggMjMuNWEyMS4xNiAyMS4xNiAwIDAxLTE3LjQ3IDIwLjcydi0yLjk4QTE4LjIxIDE4LjIxIDAgMDA0MS45MyAyMy41YzAtOS41Ni03LjUyLTE3LjQxLTE3LTE4LjF2OC4wNWM1LjAxLjY1IDguOSA0LjkgOC45IDEwLjA1IDAgNS4xNC0zLjg5IDkuNC04LjkgMTAuMDV2Mi40OGM2LjM5LS42NiAxMS40LTYuMDMgMTEuNC0xMi41MyAwLTUuNjMtMy43Ni0xMC40LTguOTItMTIuMDJWOC4zQTE1LjczIDE1LjczIDAgMDEzOS40MyAyMy41YzAgOC4yLTYuNCAxNC45NS0xNC41IDE1LjYyVjQ3YzEyLjQ5LS42OCAyMi40NC0xMC45NiAyMi40NC0yMy41UzM3LjQyLjY5IDI0LjkyIDAiIGZpbGw9IiMyRDgyQjgiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZmlsbD0iIzNEMzkzNSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNjguMzUgMTkuMzh2LTcuOTZoLTkuNDd2Ny45NmgtMy4yVjEuMmgzLjJWOC42aDkuNDdWMS4yaDMuMnYxOC4xOGgtMy4yTTgyLjYyIDQuMzlsLTMuMjcgOC42N2g2LjU0bC0zLjI3LTguNjd6bTUuNTEgMTVsLTEuMzQtMy41MmgtOC4zNGwtMS4zMyAzLjUxaC0zLjYzTDgwLjYzIDEuMmgzLjk4bDcuMTQgMTguMThoLTMuNjJ6TTkyLjA1IDEwLjNjMC01LjYyIDQuMTctOS40IDkuNTQtOS40YTguMTUgOC4xNSAwIDAxNy4yOCA0LjA1bC0yLjcgMS40MmE1LjM3IDUuMzcgMCAwMC00LjU4LTIuNjRjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc5IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45NCAwIDMuNy0xLjE0IDQuNTgtMi42NGwyLjcyIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgtOS41NC05LjM5TTEyMi4zIDE5LjM4bC02LjA3LTcuNjktMS42IDEuODl2NS44aC0zLjJWMS4yaDMuMnY4LjY0bDcuMS04LjY0aDMuOTVsLTcuMzggOC41NiA3Ljk2IDkuNjJoLTMuOTVNNjYuMzUgMzMuMzZjMC0xLjc0LTEuMy0yLjg2LTMuMS0yLjg2aC00LjM4djUuNzhoNC4zOGMxLjggMCAzLjEtMS4xNSAzLjEtMi45MnptLS4zIDEyLjUybC00LTYuOGgtMy4xOHY2LjhoLTMuMTlWMjcuNjloNy45OGMzLjU5IDAgNS45NiAyLjMyIDUuOTYgNS43YTUuMTIgNS4xMiAwIDAxLTQuMzMgNS4zNGw0LjQ2IDcuMTVoLTMuN3pNNzIuNzUgNDUuODhWMjcuNjloMTIuNXYyLjgxaC05LjN2NC42OWg5LjF2Mi44aC05LjF2NS4wOGg5LjN2Mi44aC0xMi41TTk2LjAyIDMwLjg4bC0zLjI3IDguNjdoNi41NGwtMy4yNy04LjY3em01LjUgMTVsLTEuMzMtMy41MmgtOC4zNGwtMS4zMyAzLjUyaC0zLjYzbDcuMTQtMTguMTloMy45OGw3LjE0IDE4LjE5aC0zLjYyek0xMDUuNDUgMzYuODZjMC01LjYgNC4xNy05LjQgOS41NC05LjRhOC4xNSA4LjE1IDAgMDE3LjI3IDQuMDZsLTIuNyAxLjQyQTUuMzcgNS4zNyAwIDAwMTE1IDMwLjNjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc4IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45MyAwIDMuNy0xLjE0IDQuNTctMi42NGwyLjczIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgxLTkuNTQtOS40TTEyOS4zIDQ1Ljg4VjMwLjVoLTUuNTF2LTIuOEgxMzh2Mi44aC01LjUydjE1LjM4aC0zLjE5TTE1NC4yNyAzNi44NmMwLTMuNzYtMi4zNi02LjU2LTYuMDEtNi41Ni0zLjY3IDAtNi4wMiAyLjgtNi4wMiA2LjU2IDAgMy43MyAyLjM1IDYuNTYgNi4wMiA2LjU2IDMuNjUgMCA2LjAxLTIuODMgNi4wMS02LjU2em0tMTUuMyAwYzAtNS40MiAzLjg1LTkuNCA5LjI5LTkuNCA1LjQyIDAgOS4yOCAzLjk4IDkuMjggOS40cy0zLjg2IDkuNC05LjI4IDkuNGMtNS40NCAwLTkuMjgtMy45OC05LjI4LTkuNHpNMTcxLjI4IDMzLjM2YzAtMS43NC0xLjMxLTIuODYtMy4xLTIuODZoLTQuMzl2NS43OGg0LjM4YzEuOCAwIDMuMS0xLjE1IDMuMS0yLjkyem0tLjMgMTIuNTJsLTQtNi44aC0zLjE5djYuOGgtMy4xOFYyNy42OWg3Ljk3YzMuNiAwIDUuOTYgMi4zMiA1Ljk2IDUuN2E1LjEyIDUuMTIgMCAwMS00LjMyIDUuMzRsNC40NiA3LjE1aC0zLjd6Ii8+CiAgPC9nPgo8L3N2Zz4K"
              alt="Hacker Reactor Logo"
            />
          </div>

          <div className="flex items-center space-x-5">
            <ul className="hidden md:flex flex-row items-center space-x-5">
              <li className="relative group py-1">
                <button
                  className="flex items-center justify-center gap-2 h-full py-7 hover:text-cerulean-500 ease-in-out delay-75 duration-75"
                  onClick={() => setShowCamp((prev) => !prev)}
                >
                  Bootcamps
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>

                <div
                  className={`absolute w-96 h-36 border-cerulean-500 border-t-2 rounded translate-y-1 translate-x-6  bg-white p-5 ${
                    showCamp
                      ? " "
                      : "hidden group-hover:block ease-in-out delay-75 duration-300"
                  }`}
                >
                  <ul className="space-y-4">
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      12-Week Software Engineering Immersive
                    </li>
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      36-Week Software Engineering Immersive Part-Time
                    </li>
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      19-Week Software Engineering with JavaScript and Phython
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-cerulean-500 ease-in-out delay-75 duration-75"
                >
                  Prepare
                </a>
              </li>

              <li className="relative group py-1">
                <button
                  className="flex flex-row items-center justify-center gap-2 py-7  hover:text-cerulean-500 ease-in-out delay-75 duration-75"
                  onClick={() => setShowOutcome((prev) => !prev)}
                >
                  Outcomes
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>

                <div
                  className={`absolute w-96 h-36 border-cerulean-500 border-t-2 rounded translate-y-1 translate-x-6  bg-white p-5 ${
                    showOutcome
                      ? " "
                      : "hidden group-hover:block ease-in-out delay-75 duration-300"
                  }`}
                >
                  <ul className="space-y-4">
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      Student Outcomes
                    </li>
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      Student Projects
                    </li>
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      Hire Our Grads
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group py-1">
                <button
                  className="flex flex-row items-center justify-center gap-2 py-7 hover:text-cerulean-500 ease-in-out delay-75 duration-75"
                  onClick={() => setShowEvent((prev) => !prev)}
                >
                  Events
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>

                <div
                  className={`absolute w-96 h-36 border-cerulean-500 border-t-2 rounded translate-y-1 translate-x-6  bg-white p-5 ${
                    showEvent
                      ? " "
                      : "hidden group-hover:block ease-in-out delay-75 duration-300"
                  }`}
                >
                  <ul className="space-y-4">
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      Workshops & Events
                    </li>
                    <li className="cursor-pointer hover:translate-x-3 ease-in-out delay-75 duration-300">
                      Webinars
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <button className="bg-cerulean-500 text-white text-base py-2.5 px-7 rounded-sm align-center whitespace-nowrap  md:text-sm px-5 hover:bg-cerulean-300 ease-in-out delay-75 duration-100">
              Apply Now
            </button>

            {/* Hamburger Menu */}

            <div onClick={() => setShowMenu((prev) => !prev)}>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='50' viewBox='0 0 80 50'%3E%3Cg fill='%230090DA' fill-rule='evenodd'%3E%3Crect y='40' width='80' height='10' rx='5'/%3E%3Crect y='20' width='80' height='10' rx='5'/%3E%3Crect width='80' height='10' rx='5'/%3E%3C/g%3E%3C/svg%3E"
                alt="Hamburger Menu"
                className="h-8 cursor-pointer md:hidden "
              />
            </div>
          </div>
        </div>

        {showMenu && (
          <div>
            <ul className="flex flex-col mt-5 text-sm font-semibold md:hidden">
              <li>
                <button
                  className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100"
                  onClick={() => setShowCamp((prev) => !prev)}
                >
                  Bootcamps
                  {showCamp ? (
                    <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                  )}
                </button>

                {showCamp && (
                  <div className="flex flex-row items-center justify-between w-full px-5">
                    <ul className="w-full font-normal">
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        12-Week Software Engineering Immersive
                      </li>
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        36-Week Software Engineering Immersive Part-Time
                      </li>
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        19-Week Software Engineering with JavaScript and Phython
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100"
                >
                  Prepare
                </a>
              </li>

              <li>
                <button
                  className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100"
                  onClick={() => setShowOutcome((prev) => !prev)}
                >
                  Outcomes
                  {showOutcome ? (
                    <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                  )}
                </button>

                {showOutcome && (
                  <div className="flex flex-row items-center justify-between w-full px-5 ">
                    <ul className="w-full font-normal">
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        Student Outcomes
                      </li>
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        Student Projects
                      </li>
                      <li className="border-b border-lightGray-300 py-3 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        Hire Our Grads
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="flex flex-row items-center justify-between w-full px-5  py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100"
                  onClick={() => setShowEvent((prev) => !prev)}
                >
                  Events
                  {showEvent ? (
                    <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                  )}
                </button>

                {showEvent && (
                  <div className="flex flex-row items-center justify-between w-full px-5 ">
                    <ul className="w-full font-normal">
                      <li className=" py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        Workshops & Events
                      </li>
                      <li className=" py-3 border-b border-lightGray-300 hover:text-cerulean-500 ease-in-out delay-75 duration-100">
                        Webinars
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
