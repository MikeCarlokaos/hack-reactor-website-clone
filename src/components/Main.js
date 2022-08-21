export default function Main() {
  return (
    <main>
      <section className="p-3 md:ml-32 ">
        <div className="flex flex-col md:flex-row">
          <div className="space-y-5 content-center pt-10 pr-2">
            <p className="text-2xl font-serif font-light">Why Hack Reactor?</p>
            <p>
              Our coding bootcapms are challenging, life-changing, and designed
              to fit your schedule and skill level. We train students usong a
              computer science and coding curriculum that models the exciting
              work being done in the software engineering industry. We'll help
              you launch the career you crave.
            </p>
            <p>
              Led by passionate and experienced instructors, engineers, and
              career advisors, our graduates become software engineers that
              companies around the world want to hire.
            </p>
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
        </div>
      </section>
    </main>
  );
}
