import logo from "../image/hacker-reactor-logo.svg";
import menu from "../image/hamburger-menu.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCamp, setShowCamp] = useState(false);
  const [showOutcome, setShowOutcome] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleCamp() {
    setShowCamp(!showCamp);
  }

  function toggleOutcome() {
    setShowOutcome(!showOutcome);
  }

  function toggleEvent() {
    setShowEvent(!showEvent);
  }

  return (
    <header className="py-5 lg:mx-32 md:mx-20 sm:mx-3.5 ">
      <nav className=" ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex shrink-0">
            <img src={logo} alt="Hacker Reactor Logo" />
          </div>

          <div className="flex flex-row items-center space-x-5 ">
            <ul className="lg:flex flex-row items-center space-x-5 md:flex flex-row items-center space-x-5 sm:hidden">
              <li className="relative">
                <button className="flex flex-row items-center justify-center gap-2">
                  Bootcamps
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>

                <div className="absolute hidden w-50 h-20 translate-y-5 translate-x-6 whitespace-nowrap bg-white p-5  ">
                  <ul>
                    <li className="">12-Week Software Engineering Immersive</li>
                    <li>36-Week Software Engineering Immersive Part-Time</li>
                    <li>
                      19-Week Software Engineering with JavaScript and Phython
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Prepare</a>
              </li>

              <li className="relative group ">
                <button className="flex flex-row items-center justify-center gap-2">
                  Outcomes
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>
                <div className="absolute hidden w-50 h-20 translate-y-5 translate-x-6 whitespace-nowrap bg-white p-5 group-hover:block ">
                  <ul>
                    <li>Student Outcomes</li>
                    <li>Student Projects</li>
                    <li>Hire Our Grads</li>
                  </ul>
                </div>
              </li>

              <li className="relative group ">
                <button className="flex flex-row items-center justify-center gap-2">
                  Events
                  <div className="w-0 h-0 border-t-cerulean-500 border-t-[5px] border-r-transparent border-r-[4px] border-l-transparent border-l-[4px]"></div>
                </button>
                <div className="absolute hidden w-50 h-20 translate-y-5 translate-x-6 whitespace-nowrap bg-white p-5 group-hover:block ">
                  <ul>
                    <li>Workshops & Events</li>
                    <li>Webinars</li>
                  </ul>
                </div>
              </li>
            </ul>

            <button className="bg-cerulean-500 text-white py-2.5 px-5 rounded-sm align-center whitespace-nowrap">
              Apply Now
            </button>

            <div className="space-y-2" onClick={toggleMenu}>
              <img
                src={menu}
                alt="Hamburger Menu"
                className="h-8 lg:hidden md:hidden "
              />
            </div>
          </div>
        </div>

        {showMenu && (
          <div>
            <ul className="lg:hidden flex flex-col  space-y-5 mt-10  ">
              <li className="space-y-5">
                <button
                  className="flex flex-row items-center justify-between w-full px-5"
                  onClick={toggleCamp}
                >
                  Bootcamps
                  <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                </button>

                {showCamp && (
                  <div className="flex flex-row items-center justify-between w-full px-5 ">
                    <ul className="space-y-5">
                      <li className="">
                        12-Week Software Engineering Immersive
                      </li>
                      <li>36-Week Software Engineering Immersive Part-Time</li>
                      <li>
                        19-Week Software Engineering with JavaScript and Phython
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#"
                  className="flex flex-row items-center justify-between w-full px-5"
                >
                  Prepare
                </a>
              </li>

              <li className="space-y-5">
                <button
                  className="flex flex-row items-center justify-between w-full px-5"
                  onClick={toggleOutcome}
                >
                  Outcomes
                  <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                </button>

                {showOutcome && (
                  <div className="flex flex-row items-center justify-between w-full px-5 ">
                    <ul className="space-y-5">
                      <li>Student Outcomes</li>
                      <li>Student Projects</li>
                      <li>Hire Our Grads</li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="space-y-5">
                <button
                  className="flex flex-row items-center justify-between w-full px-5"
                  onClick={toggleEvent}
                >
                  Events
                  <div className="w-0 h-0 border-l-cerulean-500 border-l-[5px] border-t-transparent border-t-[4px] border-b-transparent border-b-[4px]"></div>
                </button>

                {showEvent && (
                  <div className="flex flex-row items-center justify-between w-full px-5 ">
                    <ul className="space-y-5">
                      <li>Workshops & Events</li>
                      <li>Webinars</li>
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
