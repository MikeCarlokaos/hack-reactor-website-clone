export default function Hero() {
  return (
    <div>
      <section className="bg-alto-500">
        {/* part1 */}
        <div>
          <div className="bg-[url('https://images.ctfassets.net/yr4qj72ki4ky/1Qm1FWaixBp2nbrIH5ocP6/084e35ebb847dcfc07fb1062417a9332/heroimageHackReactor.jpg?q=72')] flex flex-col w-full h-96 bg-no-repeat bg-cover bg-center object-none items-center justify-center text-center text-white font-serif md:h-screen px-30 bg-left">
            <h1 className="text-[1.75rem] pt-40 px-2 leading-10 tracking-tight md:text-[2.875rem]  md:px-36 md:pt-0 leading-normal mb-5">
              The Industry's Best Coding Bootcamps For Aspiring Software
              Engineers
            </h1>
            <p className="invisible md:visible text-xl font-sans">
              Since 2012, Hack Reactor has developed over 8,000+ job-ready
              software engineers.
            </p>
            <p className="invisible md:visible text-xl font-sans mt-5">
              Reinvent your career with us.
            </p>
          </div>
        </div>
        <div className="grid bg-alto-500 grid-cols-2 p-4 font-sans text-gray-600 text-sm md:grid-cols-4 gap-y-4 md:mx-28">
          <div className="flex flex-col items-center">
            <p>Rated Best Coding Bootcamp</p>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/sksuV6uf7Dk7BuJAO6jzh/ea76164dc3dbc774e2de7d5900793105/coures_report_and_switchup.svg?fm=webp&q=72"
              alt="Course report"
              className="mt-5 h-16 w-fit flex justify-center"
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Quora Review</p>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/7KZf31h4YbcuK9PSoQv64y/0c762b131b5364c11a6d06158e0f3dc7/reviews.svg?fm=webp&q=72"
              alt="Reviews"
              className="mt-5 h-16 w-fit flex justify-center"
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Rated Best ISA BootCamp</p>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/68mq7WCZ3J4lJouASZGQTV/245dc03ba4179461dbe6c6569951d0f6/best_isa.svg?fm=webp&q=72"
              alt="Best ISA"
              className="mt-5 h-16 w-fit flex justify-center"
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Over 7,000 Alumni Including 97 at</p>
            <img
              src="https://images.ctfassets.net/yr4qj72ki4ky/1iq8A0Ybl4vZ3NaFf73YCs/d725df79ba9b7d54491ef25756268320/google.svg?fm=webp&q=72"
              alt="Google logo"
              className="mt-5 h-16 w-fit flex justify-center"
            />
          </div>
        </div>
      </section>

      {/* part2 */}
      <section>
        <div className="flex flex-col items-center  justify-center text-center  font-serif mt-14 text-3xl">
          <h1>Grads hired by companies around the world</h1>

          <div
            className="hidden md:block text-[17px] font-sans mt-6 
          px-[140px] space-y-5 leading-normal tracking-loose"
          >
            <p>
              We've proudly trained thousands of software engineers now working
              for 2,500+ companies around the world &#8211; from major
              corporations to startups and non-profits and beyond.
            </p>

            <p>
              "The best coding bootcamps simulate a real-world software
              environment for their students. These grads are so well prepared,
              they come in and hit the ground running. That&#39;s really what
              we&#39;re looking for."
              <span className="italic">
                - Dustin Beltramo, Director of UX Shared Services,Customer
                Experience at Cisco
              </span>
            </p>
          </div>
          <div
            className="grid grid-cols-3 gap-x-6 justify-items-center mt-5
         md:grid-cols-5 md:gap-x-12 gap-y-6"
          >
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/5Nfk5OaSE3gl7eF15Q88sx/c688984f7704e7bc384bf91b8cff3299/facebook__3_.gif?fm=webp&q=72"
                alt="Facebook logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/5DjOZWGeSY3iqaJFr1EdG4/ebb27abec3094d5ffed0c1dcacde10f2/google__2_.gif?fm=webp&q=72"
                alt="Google logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/1dhW9B7iIXQVxmzl9U1mbV/083031d45f8031ee7e0d82a883bbd7c7/paypal__2_.gif?fm=webp&q=72"
                alt="Paypal logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/4M3e9OIxGzqnMLtihq4RFO/9978fc7c45161506953957c7d0e55e13/apple__2_.gif?fm=webp&q=72"
                alt="Apple logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/12ZLRyRL4BfLDIV0obG50g/26187e847fa7f3f1e744beb5231ee79e/amazon__2_.gif?fm=webp&q=72"
                alt="Amazon logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/4cL5TFRmG9EeyV5gDPKr6h/04296590e10d879fdd0047fea7473c09/capital-one.gif?fm=webp&q=72"
                alt="CapitalOne logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/75PpgmULXpuEHNiNi1Jn7A/769a40529599d3e6ac0c6315af59de95/microsoft__2_.gif?fm=webp&q=72"
                alt="Microsoft logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/3wc9qonpCWCqjMxjoeSQAj/39b36b6dd19735e145e46f8996906f4d/visa.gif?fm=webp&q=72"
                alt="Visa logo"
              />
            </div>
            <div className="w-36 md:w-40">
              <img
                src="https://images.ctfassets.net/yr4qj72ki4ky/2kSIaK5gTF6VeBHaCrnBVY/11d8c9f548079e3e07af8c8707895be4/accenture.gif?fm=webp&q=72"
                alt="accenture logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
