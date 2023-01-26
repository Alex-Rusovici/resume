import { RiMailFill } from 'react-icons/ri';
import { RiPhoneFill } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';

const headerContainer = 'container mx-auto p-6 bg-gradient-to-r from-zinc-800 border border-zinc-800 rounded-xl b shadow-md shadow-zinc-500'
const h1Css = 'text-3xl uppercase font-light';

export const Header = () => {
  return <header>
  <div className={headerContainer}>
    <div className="personal-info flex flex-col gap-4 mb-8">
      <h1 className={h1Css}>
        Alexandru Rusovici
      </h1>

      <h2 className="text-xl text-amber-500 font-bold">
        Frontend focused developer with a passion for minimal design
      </h2>
    </div>

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
          className="inline-flex flex-row gap-4 items-center"
          title="Check out my github"
        >
          <RiGithubFill className=""></RiGithubFill>
          github.com/Alex-Rusovici
        </a>
      </div>
    </div>
    {/* end contact */}
  </div>
</header>
}
