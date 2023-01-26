import {IoIosFitness} from 'react-icons/io';
import { IoIosBrush } from 'react-icons/io';
import {FaGlobeEurope} from 'react-icons/fa';
import {GiConsoleController} from 'react-icons/gi';

const container = 'container mx-auto p-6'

export const Passions = () => {
  return <div className={container}>
    <h3>Passions</h3>

    <div>
      <div>
        <IoIosFitness></IoIosFitness>
        <p>Fitness</p>
      </div>

      <div>
        <FaGlobeEurope></FaGlobeEurope>
        <p>Internation Cuisine</p>
      </div>

      <div>
        <GiConsoleController></GiConsoleController>
        <p>E-sports</p>
      </div>

      <div>
        <IoIosBrush></IoIosBrush>
        <p>UI / UX Design</p>
      </div>
    </div>
  </div>
}
