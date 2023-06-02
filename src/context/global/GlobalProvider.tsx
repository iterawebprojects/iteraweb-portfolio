import { GlobalContext } from '@/context'
import { IGlobalContext } from '@/models'

interface Props {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: Props): JSX.Element => {
  const data: IGlobalContext = {
    header: {
      email: 'iterawebservices@gmail.com',
    },
    hero: {
      title: 'Iteraweb',
      description: 'Unleash Your Digital Potential.  Empowering Businesses with Results-Driven Web Development',
      projects: [
        {
          id: 1,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/apollonftflyer_yjqihv.webp',
          title: 'Animated NFT Galery',
          category: 'Website - Modern Design',
          to: 'nft-galery'
        },
        {
          id: 2,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/jordanstoreflyer_wjb9vc.webp',
          title: 'Jordan Ecomerce',
          category: 'Website - Store',
          to: 'jordan-ecomerce'
        },
        {
          id: 3,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/chatboxflyer_anrzst.webp',
          title: 'chatbox',
          category: 'Web App - Landingpage',
          to: 'chatbox'
        },
        {
          id: 4,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/bliztflyer_h1ialg.webp',
          title: 'BLITZ',
          category: 'Website - Art',
          to: 'blitz'
        }
      ]
    },
    clients: {
      title: 'Clients'
    },
    services: {
      title: 'Services',
      items: [
        {
          id: 1,
          title: 'Art Direction',
          description: 'We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.'
        },
        {
          id: 2,
          title: 'Branding',
          description: 'We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.'
        },
        {
          id: 3,
          title: 'Web Desing',
          description: 'We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.'
        },
        {
          id: 4,
          title: '3D Desing',
          description: 'We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.'
        }
      ]
    },
    about: {
      title: 'About',
      description: 'We are a small team of innovators, designers, artists, and creators, who are exploring visual ways to convey ideas. We are focusing on the intersection of artistic exploration and design — specialised in art direction, visual identity, 3D and web design.'
    },
    careers: {
      title: 'Our Team',
      items: [
        {
          id: 1,
          job: 'Tech Lead',
          country: 'Argentina'
        },
        {
          id: 2,
          job: 'UX / UI Designer',
          country: 'Argentina'
        },
        {
          id: 3,
          job: 'Frontend Developer',
          country: 'Argentina'
        },
        {
          id: 4,
          job: 'Backend Developer',
          country: 'Colombia'
        }, 
        {
          id: 5,
          job: 'Product Manager',
          country: 'Argentina'
        }
      ]
    },
    social: {
      email: 'iterawebservices@gmail.com',
      networks: [
        {
          id: 1,
          social: 'Instagram',
          to: 'https://www.instagram.com/davidmedev/'
        },
        {
          id: 2,
          social: 'Linkedin',
          to: 'https://www.linkedin.com/in/davidmedev/'
        },
        {
          id: 3,
          social: 'Behance',
          to: 'https://www.behance.net/'
        },
        {
          id: 4,
          social: 'Tiktok',
          to: 'https://www.tiktok.com/'
        }
      ]
    },
    footer: {
      copyright: 'Agency © 2023'
    }
  }
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
