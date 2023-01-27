const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8'
const h4Css = 'text-2xl font-light mt-8'
const h5CssEducation = 'text-xl text-amber-500'

export const Education = () => {
  return <div>
    <section>
      <h3 className={h3Css}>Education</h3>

      <h4 className={h4Css}>React Developer Bootcamp</h4>

      <h5 className={h5CssEducation}>PixelLab Romania</h5>

      <p className="text-sm font-bold">11/2022 - Ongoing</p>
    </section>

    <section>
      <h4 className={h4Css}>Frontend Developer Bootcamp</h4>

      <h5 className={h5CssEducation}>PixelLab Romania</h5>

      <p className="text-sm font-bold">08/2022 - Ongoing</p>
    </section>

    <section>
      <h4 className={h4Css}>Architecture and Urban Planning</h4>

      <h5 className={h5CssEducation}>Ion Mincu University of Architecture and Urban Planning</h5>

      <p className="text-sm font-bold">2014 - 2020</p>
    </section>
  </div>
  }
