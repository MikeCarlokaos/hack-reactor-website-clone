import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import BootCamp from "./components/BootCamp";
import bootcamps from "./data/bootcamps";
import BootCampArticle from "./components/BootCampArticle";
import Quote from "./components/Quote";
import qoutes from "./data/quotes";
import Awards from "./components/Awards";
import ISA from "./components/ISA";
import Story from "./components/Story";
import stories from "./data/stories";
import Article from "./components/Article";
import articles from "./data/articles";
import Footer from "./components/Footer";

function App() {
  const BootData = bootcamps.map((bootcamp) => {
    return <BootCamp key={bootcamp.id} {...bootcamp} />;
  });

  const QuotesData = qoutes.map((qoute) => {
    return <Quote key={qoute.id} {...qoute} />;
  });

  const StoryData = stories.map((story) => {
    return <Story key={story.id} {...story} />;
  });

  const ArticleData = articles.map((article) => {
    return <Article key={article.id} {...article} />;
  });

  return (
    <div className="">
      <div className="z-50 sticky top-0 bg-white">
        <Header />
      </div>
      <div>
        <div className="mb-10 mt-0">
          <Hero />
        </div>
        <Main />
        <section className="flex flex-col items-center justify-center mt-10 ">
          <h1 className="text-3xl font-bold mb-10 ">Our Coding Bootcamps</h1>
          <div className="flex flex-col gap-x-5 md:flex-row">{BootData}</div>
        </section>
        <section className="flex items-center justify-center">
          <BootCampArticle />
        </section>

        <section className="flex flex-col items-center justify-center items-stretch p-5 md:flex-row gap-7">
          <div className="grid grid-cols-1 gap-5">{QuotesData}</div>
          <div>
            <Awards />
          </div>
        </section>
        <section className="flex items-center justify-center">
          <ISA />
        </section>
        <section className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Alumni Stories</h1>
          <div className="gap-x-5 md:flex">{StoryData}</div>
        </section>
        <section className="grid gap-5 mt-10">{ArticleData}</section>

        <section className="mt-10">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
