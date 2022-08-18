export default function Quote(props) {
  return (
    <article className="">
      <div className="grid grid-cols-[8rem_30rem] gap-2 content-center jusfity-items-center shadow-custom2">
        <div className="w-32 h-full ">
          <img
            src={props.coverImg}
            alt="quote"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 w-80 md:w-full ">
          <p className="mb-3">{props.description}</p>
          <p className="text-italic text-sm">{props.title}</p>
        </div>
      </div>
    </article>
  );
}
