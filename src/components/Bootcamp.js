export default function BootCamp(props) {
  return (
    <article className="place-item-stretch">
      <div className="relative flex flex-col items-center shadow-custom2 h-full">
        <div className="block w-72 h-80 ">
          <img
            src={props.coverImg}
            alt="BootCamps"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center w-72 p-2">
          <h1 className="text-2xl">{props.title}</h1>
          <br />
          <p className="text-left">{props.description}</p>
        </div>
        <div className="">
          <button className="border-solid border border-cerulean-500 text-cerulean-500 px-16 py-2 mt-6 mb-10 hover:bg-cerulean-500 ease-in hover:text-white ease-in">
            Learn More
          </button>
        </div>
      </div>
    </article>
  );
}
