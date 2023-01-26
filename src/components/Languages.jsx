import { css } from '@emotion/css'

const h3Css = 'text-2xl uppercase border-b-2 border-zinc-900 mb-8'
const h4CssNoMargin = 'text-2xl font-light'

const skillAcquired = css`
    height: 8px;
    width: 8px;
    background-color: rgb(249 115 22);
    border-radius: 50%;
`

const skillToBeAcquired = css`
  height: 8px;
  width: 8px;
  background-color: rgb(251 191 36);
  border-radius: 50%;
`

export const Languages = () => {
  return <div>
    <h3 className={h3Css}>Languages</h3>

    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h4 className={h4CssNoMargin}>English</h4>

        <div className="flex flex-row gap-2">
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillToBeAcquired}></div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <h4 className={h4CssNoMargin}>Romanian</h4>

        <div className="flex flex-row gap-2">
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
          <div className={skillAcquired}></div>
        </div>
      </div>
    </div>

  </div>
}
