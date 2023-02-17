import {
  RiMailFill,
  RiPhoneFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri';

const headerContainer =
  'container mx-auto p-6 bg-gradient-to-r from-zinc-800 border border-zinc-800 rounded-xl b shadow-md shadow-zinc-500 flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between lg:items-center';
const h1Css = 'text-3xl uppercase font-light';
const secondaryButton =
  'border border-zinc-300 rounded-md px-2 py-4 hover:transition-colors hover:bg-zinc-200 hover:text-zinc-600 lg:text-center';

export const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <div className="personal-info flex flex-col gap-4">
          <h1 className={h1Css}>Alexandru Rusovici</h1>

          <h2 className="text-xl text-amber-500 font-bold">
            Frontend focused developer with a passion for minimalistic design
          </h2>

          {/* start personal info */}
          <div className="contact flex flex-col gap-4">
            <div className="text-l font-light">
              <a
                href="mailto:alex.rusovici@yahoo.com"
                className="inline-flex flex-row gap-4 items-center"
                title="Mail me"
              >
                <RiMailFill></RiMailFill>
                alex.rusovici@yahoo.com
              </a>
            </div>
            {/* end personal info */}

            {/* start contact */}
            <div className="text-l font-light">
              <a
                href="tel:+40747089434"
                className="inline-flex flex-row gap-4 items-center"
                title="Call me"
              >
                <RiPhoneFill className=""></RiPhoneFill>+40 747 089 434
              </a>
            </div>

            <div className="text-l font-light">
              <a
                href="https://github.com/Alex-Rusovici"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-row gap-4 items-center"
                title="Check out my github"
              >
                <RiGithubFill className=""></RiGithubFill>
                github.com/Alex-Rusovici
              </a>
            </div>

            <div className="text-l font-light">
              <a
                href="https://www.linkedin.com/in/alexrusovici/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-row gap-4 items-center"
                title="Check out my LinkedIn"
              >
                <RiLinkedinBoxFill className=""></RiLinkedinBoxFill>
                linkedin.com/in/alexrusovici
              </a>
            </div>
          </div>
          {/* end contact */}
        </div>

        {/* start CV */}
        <div className="flex flex-col gap-4">
          <a
            href="/public/resume/resume-rusovici-english.pdf"
            className={secondaryButton}
            download
          >
            <button>Download English Resume</button>
          </a>

          <a
            href="/public/resume/resume-rusovici-romanian.pdf"
            className={secondaryButton}
            download
          >
            <button>Download Romanian Resume</button>
          </a>
        </div>
        {/* end CV */}
      </div>
    </header>
  );
};
