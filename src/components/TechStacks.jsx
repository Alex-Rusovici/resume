import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNpm,
  SiGithub,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';

const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const wrapper = 'border w-32 py-2 border-zinc-300 rounded-lg';
const flexItems = 'flex flex-col items-center gap-2';
const subtext = 'text-sm font-bold';

export const TechStacks = () => {
  return (
    <div>
      <h3 className={h3Css}>Tech Stacks</h3>

      <div className="flex justify-between flex-wrap text-6xl gap-3">
        <div className={wrapper}>
          <p className={flexItems}>
            <SiHtml5></SiHtml5>
            <span className={subtext}>HTML</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiCss3></SiCss3>
            <span className={subtext}>CSS</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiJavascript></SiJavascript>
            <span className={subtext}>JavaScript</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiReact></SiReact>
            <span className={subtext}>ReactJS</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiJquery></SiJquery>
            <span className={subtext}>jQuery</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiTailwindcss></SiTailwindcss>
            <span className={subtext}>Tailwind CSS</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiBootstrap></SiBootstrap>
            <span className={subtext}>Bootstrap</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiSass></SiSass>
            <span className={subtext}>Sass</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiNpm></SiNpm>
            <span className={subtext}>npm</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiGithub></SiGithub>
            <span className={subtext}>Github</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiVercel></SiVercel>
            <span className={subtext}>Vercel</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiNetlify></SiNetlify>
            <span className={subtext}>Netlify</span>
          </p>
        </div>
      </div>
    </div>
  );
};
