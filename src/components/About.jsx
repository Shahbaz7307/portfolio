import React from "react";
import AboutMe from "../assets/about-me.png";

function About() {
  return (
    <section id="about">
      <div className="about bg-mainContent">
        <div className="sm:flex block gap-10 justify-between items-center sm:max-w-[70%] max-w-[90%] m-auto py-24 border-b">
          <div className="sm:mb-0 mb-20">
            <img src={AboutMe} alt="About Me" />
          </div>
          <div className=" text-themeWhite max-w-[450px] ">
            <h3
              className="animation-circle relative mb-8 font-light text-3xl tracking-[6px] uppercase 
            before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
            after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px]"
            >
              About Me.
            </h3>
            <h2 className="text-3xl font-medium tracking-wider mb-5">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience.
            </h2>
            <p className="text-base mb-6 text-gray-400">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
            <div className="flex sm:flex-row flex-col gap-10 mb-10">
              <div className="flex items-center gap-3">
                <div className="text-5xl font-extrabold">5k</div>
                <div className="text-sm">Project Completed.</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-5xl font-extrabold">5k</div>
                <div className="text-sm">Project Completed.</div>
              </div>
            </div>
            <button className="bg-themeColor inline-block sm:w-44 w-full sm:mb-0 mb-3 sm:mr-10 mr-0 transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              Contact Me
            </button>
            <button className="bg-themeColor inline-block sm:w-44 w-full transition duration-500 ease-in-out text-sm tracking-widest font-semibold  py-3 shadow-[4px_4px_#fff] hover:bg-themeWhite hover:text-themeColor hover:shadow-[4px_4px_#2fbf71]">
              Portfolio
            </button>
          </div>
        </div>
        <div className="py-24 sm:max-w-[70%] max-w-[90%] m-auto text-themeWhite">
          <h3
            className="animation-circle relative mb-8 font-light text-3xl tracking-[6px] uppercase 
            before:absolute before:w-16 before:h-[1px] before:bg-themeColor before:-bottom-2 
            after:absolute after:w-2 after:h-2 after:rounded-full after:bg-themeColor after:-bottom-[11.4px] after:left-[63px]"
          >
            EDUCATION & SKILLS
          </h3>
          <div className="lg:flex gap-10 justify-between">
            <div className="lg:w-2/5 w-full lg:mb-0 mb-5">
              <div className="bg-sidebar relative border-b border-gray-400 lg:max-w-xs p-8">
                <span className="badge absolute top-3 -left-2 bg-themeColor px-2 py-1">
                  2010-2012
                </span>
                <h2 className="font-bold mt-8">WordPress Developer</h2>
                <p className="text-gray-400">International Design Institute</p>
              </div>
              <div className="bg-sidebar relative border-b border-gray-400 lg:max-w-xs p-8">
                <span className="badge absolute top-3 -left-2 bg-themeColor px-2 py-1">
                  2010-2012
                </span>
                <h2 className="font-bold mt-8">WordPress Developer</h2>
                <p className="text-gray-400">International Design Institute</p>
              </div>
              <div className="bg-sidebar relative border-b border-gray-400 lg:max-w-xs p-8">
                <span className="badge absolute top-3 -left-2 bg-themeColor px-2 py-1">
                  2010-2012
                </span>
                <h2 className="font-bold mt-8">WordPress Developer</h2>
                <p className="text-gray-400">International Design Institute</p>
              </div>
            </div>
            <div className="lg:w-3/5">
              <h2 className="text-3xl mb-5 font-medium">My Skills</h2>
              <p className="text-gray-400 mb-10">
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="flex items-center gap-2">
                <h2 className="w-32">React Js:</h2>
                <div className="progress bg-mainContent border rounded overflow-hidden my-4 w-full">
                  <div
                    className="progress-bar progress-bar-striped w-[60%] bg-themeColor  text-center"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="w-32">Vue Js:</h2>
                <div className="progress bg-mainContent border rounded overflow-hidden my-4 w-full">
                  <div
                    className="progress-bar progress-bar-striped w-[80%] bg-themeColor  text-center"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="w-32">Html:</h2>
                <div className="progress bg-mainContent border rounded overflow-hidden my-4 w-full">
                  <div
                    className="progress-bar progress-bar-striped w-[95%] bg-themeColor  text-center"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="w-32">CSS:</h2>
                <div className="progress bg-mainContent border rounded overflow-hidden my-4 w-full">
                  <div
                    className="progress-bar progress-bar-striped w-[89%] bg-themeColor  text-center"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    89%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="w-32">TailwindCSS:</h2>
                <div className="progress bg-mainContent border rounded overflow-hidden my-4 w-full">
                  <div
                    className="progress-bar progress-bar-striped w-[90%] bg-themeColor  text-center"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
