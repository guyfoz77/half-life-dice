import githubImage from '../assets/github-mark.svg'

export function Credits() {
  return (
    <a
      className='githubLinkContainer component'
      href='https://github.com/guyfoz77'
      target='_blank'
      rel='noreferrer'
    >
      <img src={githubImage} aria-description='github mark' />
      <p>
        <i>Made by Guy Foster</i>
      </p>
    </a>
  )
}