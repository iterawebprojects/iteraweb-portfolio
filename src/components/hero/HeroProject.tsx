import styled from 'styled-components'

const HeroProjectStyled = styled('article')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(1rem, 1vw, 2rem);
  `

const HeroProjectRedirect = styled('a')`
  overflow: hidden;
  width: 100%;
  border-radius: 0.75rem;
`
const HeroProjectImage = styled('img')`
  aspect-ratio: 2 / 1;
  object-fit: contain;
  transition: opacity 500ms, transform 500ms ease-in-out;
  border-radius: clamp(1rem, 1vw, 2rem);
  transform: scale(1.25);
  

  &:hover {
    transform: scale(1);
    opacity: 0.5;
  }
`
const HeroProjectTitle = styled('h2')`
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
`
const HeroProjectCategory = styled('h3')`
  color: var(--text-two);
  font-size: clamp(1rem, 1vw, 2rem);
`

interface Props {
  image: string
  category: string
  title: string
  to: string
}

const HeroProject = ({ to, image, title, category }: Props): JSX.Element => {
  return (
    <HeroProjectStyled>
      <HeroProjectRedirect href={`/project/${to}`}><HeroProjectImage src={image} alt={title} loading='lazy' /></HeroProjectRedirect>
      <HeroProjectTitle>{title}</HeroProjectTitle>
      <HeroProjectCategory>{category}</HeroProjectCategory>
    </HeroProjectStyled>
  )
}

export { HeroProject }
