import heroimage from "../image/heroimageHackReactor.jpg";

export default function Hero() {
  return (
    <div>
      <section className="bg-[url({heroimage})]">
        <h1>
          The Industry's Best Coding Bootcamps For Aspiring Software Engineers
        </h1>
      </section>
      <section>
        <div>
          <p>Rated Best Coding Bootcamp</p>
          {/* img */}
        </div>
        <div>
          <p>Quora Review</p>
          {/* img */}
        </div>
        <div>
          <p>Rated Best ISA BootCamp</p>
          {/* img */}
        </div>
        <div>
          <p>Over 7,000 Alumni Including 97 at</p>
          {/* img */}
        </div>
      </section>
      <section>
        <h1>Grads hired by companies around the world</h1>
        <div>{/* img */}</div>
      </section>
    </div>
  );
}
