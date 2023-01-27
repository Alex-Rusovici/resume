const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8'

export const TechStacks = () => {
  return <div>
    <h3 className={h3Css}>Tech Stacks</h3>

    <div className="flex flex-wrap text-lg">
      <span className="after:content-['|'] after:mx-2">HTML</span>
      <span className="after:content-['|'] after:mx-2">CSS</span>
      <span className="after:content-['|'] after:mx-2">JavaScript</span>
      <span className="after:content-['|'] after:mx-2">Github</span>
      <span className="after:content-['|'] after:mx-2">SASS</span>
      <span className="after:content-['|'] after:mx-2">Bootstrap</span>
      <span className="after:content-['|'] after:mx-2">ReactJS</span>
      <span className="after:content-['|'] after:mx-2">Tailwind CSS</span>
      <span className="after:content-['|'] after:mx-2">Netlify</span>
      <span className="after:content-['|'] after:mx-2">Vercel</span>
    </div>
  </div>
}
