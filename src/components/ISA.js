export default function ISA() {
  return (
    <article className="p-5 md:px-36">
      <h1 className="hidden md:block text-center text-3xl font-bold mb-8">
        Learn about our student-friendly ISA
      </h1>
      <div className="flex flex-col items-center justify-center shadow-custom2 md:flex-row ">
        <div
          className="box-border w-[423px] 
        h-[278px] md:w-80 h-auto"
        >
          <img
            src="https://images.ctfassets.net/yr4qj72ki4ky/5Bbzr2HJjlgdOJCs3t6sqJ/f380203d24cc93f37961d11ca7369646/isa.png?fm=webp&q=72"
            alt="article profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start px-6 w-full">
          <h1 className="text-xl font-bold font-serif mb-2">
            How you can pay tuition after you're hired
          </h1>

          <p>
            The Galvanize Income Share Agreement Allows students to deter
            tuition payment(after a $100 deposit) until they're making at least
            $60k/year. By removing the hurdle of affordability, we can focus on
            training students from a wide variety of backgrounds.
          </p>
        </div>
        <div className="px-10 py-5 md:px-6">
          <button className="w-40 border-solid border border-cerulean-500 text-cerulean-500  px-10 py-2 hover:bg-cerulean-500 ease-in hover:text-white ease-in md:px-8">
            Learn how it works
          </button>
        </div>
      </div>
    </article>
  );
}
