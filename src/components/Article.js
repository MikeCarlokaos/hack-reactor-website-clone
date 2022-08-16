export default function Article(props) {
  return (
    <article>
      <div>
        <img src={props.coverImg} alt="article image" />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>Learn More</button>
      </div>
    </article>
  );
}
