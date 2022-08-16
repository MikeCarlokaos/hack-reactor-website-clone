export default function Main() {
  return (
    <main>
      <section className="flex flex-col px-5 gap-x-5 md:flex-row">
        <div>
          <h2 className="text-xl font-bold">Why Hack Reactor</h2>
          <br />
          <p>
            Our coding bootcapms are challenging, life-changing, and designed to
            fit your schedule and skill level. We train students usong a
            computer science and coding curriculum that models the exciting work
            being done in the software engineering industry. We'll help you
            launch the career you crave.
          </p>
          <br />
          <p>
            Led by passionate and experienced instructors, engineers, and career
            advisors, our graduates become software engineers that companies
            around the world want to hire.
          </p>
          <br />
          <p>Explore our programs below.</p>
        </div>

        <div className="flex justify-items-center">
          <iframe
            loading="lazy"
            src="https://player.vimeo.com/video/329678340"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen=""
            title="Video about Hack Reactor bootcamp"
            data-vimeo-tracked="true"
            data-ready="true"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
