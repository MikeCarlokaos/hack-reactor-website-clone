export default function Story(props) {
  return (
    <article className="place-item-stretch">
      <div className="flex flex-col items-center justify-center shadow-custom2 h-full">
        <div className="w-72 h-80">
          <img
            src={props.coverImg}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center w-72 p-2 ">
          <h1 className="text-3xl font-bold">{props.title}</h1>
          <p>{props.description}</p>
          <div className="px-16 py-5 md:px-8">
            <button className="border-solid border border-cerulean-500 text-cerulean-500 px-16 py-2 whitespace-nowrap  hover:bg-cerulean-500 ease-in hover:text-white ease-in md:px-8">
              Read More
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
