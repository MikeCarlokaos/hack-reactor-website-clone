export default function Article(props) {
  return (
    <article className="px-5 md:px-36">
      <div className="flex flex-col items-center justify-center shadow-custom2 md:flex-row ">
        <div className="block  h-80 md:w-80 md:h-36">
          <img
            src={props.coverImg}
            alt="article"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start px-6 w-full">
          <h1 className="text-xl font-serif mb-2">{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="px-10 py-5 md:px-6">
          <button className="w-40 border-solid border border-cerulean-500 text-cerulean-500  px-10 py-2  whitespace-nowrap hover:bg-cerulean-500 ease-in hover:text-white ease-in md:px-8">
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}
