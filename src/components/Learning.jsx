import {
  SiRedux,
  SiNodedotjs,
  SiTypescript,
  SiMaterialdesign,
} from 'react-icons/si';

const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const wrapper = 'border w-28 py-2 border-zinc-300 rounded-lg';
const flexItems = 'flex flex-col items-center gap-2';
const subtext = 'text-sm font-bold';

export const Learning = () => {
  return (
    <div>
      <h3 className={h3Css}>Learning about</h3>

      <div className="flex justify-between flex-wrap text-6xl gap-3">
        <div className={wrapper}>
          <p className={flexItems}>
            <SiTypescript></SiTypescript>
            <span className={subtext}>Typescript</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiMaterialdesign></SiMaterialdesign>
            <span className={subtext}>Material design</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiNodedotjs></SiNodedotjs>
            <span className={subtext}>Node.js</span>
          </p>
        </div>

        <div className={wrapper}>
          <p className={flexItems}>
            <SiRedux></SiRedux>
            <span className={subtext}>Redux</span>
          </p>
        </div>
      </div>
    </div>
  );
};
