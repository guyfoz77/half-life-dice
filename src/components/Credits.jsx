import githubImage from '../assets/github-mark.svg'

export function Credits() {
  return (
    <div className="creditsComponent component">
      <a
        className='githubLinkContainer component'
        href='https://github.com/guyfoz77'
        target='_blank'
        rel='noreferrer'
      >
        <img src={githubImage} aria-description='github mark' />
        <p>
          <i>G Foster</i>
        </p>
      </a>
    </div>
  )
}