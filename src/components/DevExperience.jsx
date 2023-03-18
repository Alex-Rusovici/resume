const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const h4Css = 'text-2xl font-light mt-8';
const h5Css = 'text-xl text-amber-500 mb-4';

export const DevExperience = () => {
  return (
    <div>
      <h3 className={h3Css}>Software Developer Experience</h3>

      {/* start - software developer - VEGO */}
      <h4 className={h4Css}>Junior Sotftware Developer</h4>

      <h5 className={h5Css}>VEGO - Architecture and urban planning firm</h5>

      <p className="text-sm font-bold">February/2022 - Present</p>
      <p className="text-sm font-bold">Bucharest, B</p>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Developed multiple functionalities within the internal time
            management and budgeting app, that helped employees to have a better
            understanding of what deliverables they have to focus on, by
            updating the existing database, sending the information, developing
            connectors, and presenting that information in the web app.
          </p>
        </li>

        <li>
          <p>
            Developed a GIS app using the ArcGIS platform, for a visual
            representation of multiple urban development solutions.
          </p>
        </li>
      </ul>
      {/* end - software developer - VEGO */}
    </div>
  );
};
