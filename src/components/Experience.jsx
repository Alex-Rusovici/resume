const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8'
const h4Css = 'text-2xl font-light mt-8'
const h5Css = 'text-xl text-amber-500 mb-4'

export const Experience = () => {
  return <div>
  <h3 className={h3Css}>Experience</h3>

  {/* start - web-dev during bootcamp */}
  <h4 className={h4Css}>Web Developer</h4>

  <h5 className={h5Css}>During Bootcamp</h5>

  <p className="text-sm font-bold">08/2022 - Ongoing</p>
  <p className="text-sm font-bold">Bucharest, B</p>

  <ul className="flex flex-col gap-2 mt-4">
    <li>
      <p>
      Followed a strict layout desing and created the websites using Next.js, using HTML,
      SASS and Bootstrap. Used CI/CD to host them online using Netlify.
      </p>
    </li>

    <li>
      <p>
      At the moment I am working on fully developing an e-commerce website using an API
      and ReactJS, with all the functionalities necessary for a basic experience.
      </p>
    </li>

    <li>
      <p>Projects developed:</p>

      <ul className="list-disc pl-8">
        <li>
          <p>
            Monochrome - <a
            href="https://inspiring-donut-e90771.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Monochrome - Live website"
            >
              Live version
            </a> - <a
            href="https://github.com/Alex-Rusovici/monochrome"
            target="_blank"
            rel="noreferrer"
            title="Monochrome - Repository"
            >
              Repository
            </a>
          </p>
        </li>

        <li>
          <p>
            Thread affair - <a
            href="https://lustrous-stroopwafel-8c22a9.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Thread affair - Live website"
            >
              Live version
            </a> - <a
            href="https://github.com/Alex-Rusovici/thread-affair"
            target="_blank"
            rel="noreferrer"
            title="Thread Affair - Repository"
            >
              Repository
            </a>
          </p>
        </li>
      </ul>
    </li>
  </ul>
  {/* end - web-dev during bootcamp */}

  {/* start - web-dev self study */}
  <h4 className={h4Css}>Web Developer</h4>

  <h5 className={h5Css}>Self Study</h5>

  <p className="text-sm font-bold">05/2022 - Ongoing</p>
  <p className="text-sm font-bold">Bucharest, B</p>

  <ul className="flex flex-col gap-2 mt-4">
    <li>
      <p>
      Outside the Bootcamp I focus on learning about new technologies and ways to further
      develop as a Frontend Engineer.
      </p>
    </li>

    <li>
      <p>
      In order to still use my designing capabilities developed in my formal education, I learn
      about UI / UX Design and how a developer can make a great experience for the end user.
      </p>
    </li>

    <li>
      <p>
      At the moment I am working on my Portfolio website.
      </p>
    </li>

    <li>
      <p>
        Projects developed
      </p>

      <ul className="list-disc pl-8">
        <li>
          <p>
            Time app - <a
            href="https://magnificent-fudge-e6b4cd.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Time app - Live website"
            >
              Live version
            </a> - <a
            href="https://github.com/Alex-Rusovici/just-a-clock"
            target="_blank"
            rel="noreferrer"
            title="Time app - Repository"
            >
              Repository
            </a>
          </p>
        </li>
      </ul>

    </li>
  </ul>
  {/* end - web-dev self study */}

  {/* start - team-lead - VEGO */}
  <h4 className={h4Css}>Team Lead - Infrastructure and Development</h4>

  <h5 className={h5Css}>VEGO</h5>

  <p className="text-sm font-bold">11/2020 - 01/2023</p>
  <p className="text-sm font-bold">Bucharest, B</p>

  <ul className="flex flex-col gap-2 mt-4">
    <li>
      <p>
      Led a team of three into developing multiple urban development projects.
      </p>
    </li>

    <li>
      <p>
      Project management duties - designing a roadmap of the projects, allocating necessary
      resources to finish the tasks on schedule, keeping in contact with external collaborators,
      and constantly communicating with the beneficiary of the project.
      </p>
    </li>
  </ul>
  {/* end - team-lead - VEGO */}

  {/* start - urban planner - VEGO */}
  <h4 className={h4Css}>Urban planner</h4>

  <h5 className={h5Css}>VEGO</h5>

  <p className="text-sm font-bold">08/2018 - 01/2023</p>
  <p className="text-sm font-bold">Bucharest, B</p>

  <ul className="flex flex-col gap-2 mt-4">
    <li>
      <p>
      Analyzing the local construction regulations and elaborating a clear concept for the new
      development.
      </p>
    </li>

    <li>
      <p>
      Interacting with the local authorities and advocating in the local committees for the
      project to be implemented.
      </p>
    </li>
  </ul>
  {/* end - urban planner - VEGO */}
</div>
}
