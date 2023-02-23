import { IoIosFitness } from 'react-icons/io';
import { IoIosBrush } from 'react-icons/io';
import { FaGlobeEurope } from 'react-icons/fa';
import { GiConsoleController, GiRaceCar } from 'react-icons/gi';

const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const passionsLayout = 'text-lg flex flex-row items-center gap-2';

export const Passions = () => {
  return (
    <div>
      <h3 className={h3Css}>Passions</h3>

      <div className="flex flex-col gap-4">
        <div className={passionsLayout}>
          <IoIosFitness></IoIosFitness>
          <p>Fitness</p>
        </div>

        <div className={passionsLayout}>
          <GiRaceCar></GiRaceCar>
          <p>Formula 1</p>
        </div>

        <div className={passionsLayout}>
          <FaGlobeEurope></FaGlobeEurope>
          <p>Internation Cuisine</p>
        </div>

        <div className={passionsLayout}>
          <GiConsoleController></GiConsoleController>
          <p>E-sports</p>
        </div>

        <div className={passionsLayout}>
          <IoIosBrush></IoIosBrush>
          <p>UI / UX Design</p>
        </div>
      </div>
    </div>
  );
};
