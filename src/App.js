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
      <div className="relative">
        <Hero />
        <Main />
        <section>
          <h1>Our Coding Bootcamps</h1>
          {BootData}
        </section>
        <BootCampArticle />
        <section>
          {QuotesData}
          <Awards />
        </section>
        <ISA />
        <section>
          <h1>Alumni Stories</h1>
          {StoryData}
        </section>
        <section>{ArticleData}</section>
      </div>
    </div>
  );
}

export default App;
