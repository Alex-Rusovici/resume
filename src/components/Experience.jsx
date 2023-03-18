const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8';
const h4Css = 'text-2xl font-light mt-8';
const h5Css = 'text-xl text-amber-500 mb-4';

export const Experience = () => {
  return (
    <div>
      <h3 className={h3Css}>Architecture work experience</h3>

      {/* start - team-lead - VEGO */}
      <h4 className={h4Css}>Team Lead - Infrastructure and Development</h4>

      <h5 className={h5Css}>VEGO - Architecture and urban planning firm</h5>

      <p className="text-sm font-bold">February/2022 - February/2023</p>
      <p className="text-sm font-bold">Bucharest, B</p>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Led a team of three to develop urban regeneration and infrastructure
            modernization projects.
          </p>
        </li>

        <li>
          <p>
            Had project management responsabilities that involved allocating
            resources, keeping in touch with clients and the municipality,
            managing external contractors, and helping with technical
            difficulties.
          </p>
        </li>
      </ul>
      {/* end - team-lead - VEGO */}

      {/* start - architecture - consultant - VEGO */}
      <h4 className={h4Css}>Architecture consultant- road infrastructure</h4>

      <h5 className={h5Css}>VEGO - Architecture and urban planning firm</h5>

      <p className="text-sm font-bold">November/2020 - February/2023</p>
      <p className="text-sm font-bold">Bucharest, B</p>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Consulting the architecture department regarding how the vehicle and
            pedestrian infrastructure must be designed.
          </p>
        </li>

        <li>
          <p>
            Advocacy for Architecture projects in local committees that regarded
            road or pedestrian infrastructure.
          </p>
        </li>

        <li>
          <p>
            Mediating relationships between the architects, municipality, and
            clients regarding different infrastructure issues.
          </p>
        </li>
      </ul>
      {/* end - architecture - consultant - VEGO */}

      {/* start - urban planner - VEGO */}
      <h4 className={h4Css}>Urban planner</h4>

      <h5 className={h5Css}>VEGO - Architecture and urban planning firm</h5>

      <p className="text-sm font-bold">August/2018 - February/2023</p>
      <p className="text-sm font-bold">Bucharest, B</p>

      <ul className="flex flex-col gap-2 mt-4">
        <li>
          <p>
            Analyzed the opportunity of constructing residential or commercial
            buildings on different plots in different cities.
          </p>
        </li>

        <li>
          <p>
            Designed urban design concepts for residential or commercial
            buildings.
          </p>
        </li>

        <li>
          <p>
            Elaborated plans and regulation documents for a plethora of
            different projects.
          </p>
        </li>
      </ul>
      {/* end - urban planner - VEGO */}
    </div>
  );
};
