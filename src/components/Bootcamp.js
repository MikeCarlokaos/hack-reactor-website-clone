export default function BootCamp(props) {
  return (
    <article className="box-border w-96 px-16 flex flex-col items-center p-10">
      <div className="shadow-custom1">
        <div className="block w-80 h-80 ">
          <img
            src={props.coverImg}
            alt="artcle image"
            className="h-full bg-cover box-content bg-center object-cover"
          />
        </div>
        <div className="text-center mt-8 px-5">
          <h1 className="text-2xl">{props.title}</h1>
          <br />
          <p className="text-left">{props.description}</p>
          <button className="border-solid border border-cerulean-500 text-cerulean-500 px-16 py-2 mt-6 mb-10 hover:bg-cerulean-500 ease-in hover:text-white ease-in">
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}
