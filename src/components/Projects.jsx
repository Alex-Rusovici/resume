import Link from 'next/link';

const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const h4Css = 'text-2xl font-light mt-8';
const secondaryButton =
  'border border-zinc-300 rounded-md px-2 py-1 hover:transition-colors hover:bg-zinc-600 hover:text-zinc-200';

export const Projects = () => {
  return (
    <div>
      <h3 className={h3Css}>Projects</h3>

      {/* start - monochrome */}
      <h4 className={h4Css}>Monochrome</h4>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Created an e-commerce website for a fictitious watch shop that has a
            responsive design and different layout designs for desktop and
            mobile versions.
          </p>
        </li>

        <li>
          <p>
            The main purpose of building this website was to learn the proper
            use of barrel files and create a proper style guide.
          </p>
        </li>

        <li>
          <p>
            Used Next.js to build the website, Netlify for CI/CD, and used Sass
            to style it.
          </p>
        </li>

        <li className="flex flex-row gap-4">
          <a
            href="https://inspiring-donut-e90771.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Monochrome - Live version"
            className={secondaryButton}
          >
            Live Version
          </a>

          <a
            href="https://github.com/Alex-Rusovici/monochrome"
            target="_blank"
            rel="noreferrer"
            title="Monochrome - Repository"
            className={secondaryButton}
          >
            Repository
          </a>
        </li>
      </ul>
      {/* end - monochrome */}

      {/* start - time app */}
      <h4 className={h4Css}>Time app</h4>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Created time-based applications in a website with a responsive
            design in which you can tell time, set a timer, and use a stopwatch.
          </p>
        </li>

        <li>
          <p>
            The main purpose of building this website was to learn how to add
            functionality to a website and how to manipulate the DOM using
            vanilla JavaScript.
          </p>
        </li>

        <li>
          <p>
            Used Next.js to build the website, Netlify for CI/CD, and used Sass
            to style it.
          </p>
        </li>

        <li className="flex flex-row gap-4">
          <a
            href="https://magnificent-fudge-e6b4cd.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Time app - Live version"
            className={secondaryButton}
          >
            Live Version
          </a>

          <a
            href="https://github.com/Alex-Rusovici/just-a-clock"
            target="_blank"
            rel="noreferrer"
            title="Time app - Repository"
            className={secondaryButton}
          >
            Repository
          </a>
        </li>
      </ul>
      {/* end - time app */}
    </div>
  );
};
