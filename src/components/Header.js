import logo from "../image/hacker-reactor-logo.svg";

export default function Header() {
  return (
    <header className="block mx-32">
      <nav className="flex flex-row justify-between items-center ">
        <div className="flex shrink-0">
          <img src={logo} alt="Hacker Reactor Logo" />
        </div>
        <div className="flex flex-row ">
          <ul className="lg:flex flex-row items-center md:hidden sm:hidden">
            <li>
              <button>Bootcamps</button>
            </li>
            <li>
              <a href="#">Prepare</a>
            </li>
            <li>
              <button>Outcomes</button>
            </li>
            <li>
              <button>Events</button>
            </li>
          </ul>
          <button>Apply Now</button>
        </div>
      </nav>
    </header>
  );
}
