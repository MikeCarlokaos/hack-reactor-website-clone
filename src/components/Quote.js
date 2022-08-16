export default function Quote(props) {
  return (
    <article>
      <div>
        <img src={props.coverImg} alt="quote image" />
      </div>
      <div>
        <p>{props.description}</p>
        <p>{props.title}</p>
      </div>
    </article>
  );
}
