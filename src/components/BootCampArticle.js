export default function BootCampArticle() {
  return (
    <article className="box-border flex flex-col items-center justify-center p-10 md:px-36">
      <h1 className="hidden md:block text-3xl font-bold mb-8">
        Which bootcamp are you?
      </h1>

      <div className="shadow-custom2 flex flex-col items-center md:flex-row">
        <div className="block w-full h-72 md:h-48">
          <img
            src="https://images.ctfassets.net/yr4qj72ki4ky/2ote5W5QfYwb1puPWAfkK5/8eb87da9b3f544d922298ef091adb000/Understand_Why.png?fm=webp&q=72"
            alt="article image"
            className=" h-full w-full box-content object-cover"
          />
        </div>
        <div className="p-5 flex flex-col items-center md:p-2">
          <h1 className="text-xl font-bold mb-4">
            Comparing our Software Engineering Immersives
          </h1>
          <br />
          <p>
            No matter which of our programs you choose, the outcome will be the
            same: You'll graduate as a job-ready full-stack software engineer.
            But how do you know which is right for you? Read through some course
            differentiators, including program timing and pacing, needed
            incoming skill level, learning style, and curriculum.
          </p>
        </div>
        <div className="px-16 py-5 md:px-8">
          <button className="border-solid border border-cerulean-500 text-cerulean-500 px-16 py-2 whitespace-nowrap  hover:bg-cerulean-500 ease-in hover:text-white ease-in md:px-8">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}
