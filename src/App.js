import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <div className="">
      <div className="z-50 sticky top-0 bg-white">
        <Header />
      </div>
      <div className="relative">
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;
