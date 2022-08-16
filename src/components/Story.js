export default function Story(props) {
  return (
    <article>
      <div>
        <img src={props.coverImg} alt="story image" />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>Learn More</button>
      </div>
    </article>
  );
}
