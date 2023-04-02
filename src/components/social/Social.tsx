import { IconArrowRight } from '@/components'
import { useGlobalProvider } from '@/hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SocialStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`
const SocialEmail = styled(Link)`
  font-size: clamp(1.5rem, 2.5vw, 5rem);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(.5rem, .5vw, 1rem);

  & svg {
    fill: var(--i-component-one);
    width: clamp(1.25rem, 1.5vw, 2rem);
    transform: rotate(-45deg);
  }
`
const SocialList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: clamp(2rem, 2vw, 4rem) 0;
`
const SocialNetworkRedirect = styled(Link)`
  font-size: clamp(1rem, 2vw, 4rem);
  flex-basis: 50%;
`
const Social = (): JSX.Element => {
  const { social } = useGlobalProvider()

  return (
    <SocialStyled>
      <SocialEmail to='mailto:davidmedev@gmail.com'>{social.email}<IconArrowRight />
      </SocialEmail>
      <SocialList>
        {social.networks.map((network) => {
          const { id, social, to } = network
          return <SocialNetworkRedirect key={id} to={to}>{social}</SocialNetworkRedirect>
        })}
      </SocialList>
    </SocialStyled>
  )
}

export { Social }