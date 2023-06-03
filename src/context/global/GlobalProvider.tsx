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
      description: 
      `Unleash Your Digital Potential: 
      Empowering Businesses with Results-Driven Web Development`,
      projects: [
        {
          id: 1,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/apollonftflyer_yjqihv.webp',
          title: 'Animated NFT Galery',
          category: 'Website - Landing Page',
          to: 'nft-galery'
        },
        {
          id: 2,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/jordanstoreflyer_wjb9vc.webp',
          title: 'Jordan Store',
          category: 'Website - Ecommerce',
          to: 'jordan-ecomerce'
        },
        {
          id: 3,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/chatboxflyer_anrzst.webp',
          title: 'Chatbox',
          category: 'Web App - Landing Page',
          to: 'chatbox'
        },
        {
          id: 4,
          image: 'https://res.cloudinary.com/di2cxicmm/image/upload/v1685569980/portfolio/flyers/bliztflyer_h1ialg.webp',
          title: 'Blitz',
          category: 'Website - Landing Page',
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
          title: 'Website Development',
          description: 'Unleash the Power of Creativity - Let our expert team craft visually stunning and functional websites tailored to your brand and business goals.'
        },
        {
          id: 2,
          title: 'Responsive Web Design',
          description: 'Seamlessly Engage Your Audience - We create mobile-friendly websites that adapt flawlessly to every screen size, ensuring an exceptional user experience across all devices.'
        },
        {
          id: 3,
          title: 'E-commerce Development',
          description: 'Unlock Your Online Potential - From secure payment gateways to user-friendly shopping carts, we build robust e-commerce platforms that drive sales and maximize conversions.'
        },
        {
          id: 4,
          title: 'UI/UX Design',
          description: 'Elevate User Experiences - Our skilled designers combine aesthetics with intuitive interfaces, creating captivating user experiences that keep visitors engaged and coming back for more.'
        },
        {
          id: 5,
          title: 'Search Engine Optimization (SEO)',
          description: 'Rise Above the Competition - Dominate search engine rankings with our strategic SEO techniques, optimizing your website for maximum visibility and driving targeted organic traffic.'
        }, 
        {
          id: 6,
          title: 'Ongoing Maintenance and Support',
          description: 'We provide comprehensive technical assistance and support to ensure the smooth and uninterrupted operation of your website, allowing you to focus on what truly matters - growing your business'
        }
      ]
    },
    about: {
      title: 'About',
      description: `At Iteraweb, we take immense pride in our web development portfolio. Our unwavering commitment to customer satisfaction drives us to deliver exceptional results with every project. 
      
      With a passion for perfectionism, we meticulously craft websites that not only meet your expectations but exceed them. From the initial concept to the final launch, we pour our expertise, creativity, and attention to detail into every aspect of our work. 
      
      Trust us to bring your vision to life and create digital experiences that leave a lasting impression.`
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
          to: 'https://www.instagram.com/iteraweb/'
        },
        {
          id: 2,
          social: 'Linkedin',
          to: 'https://www.linkedin.com/in/davidmedev/'
        },
        {
          id: 3,
          social: 'Twitter',
          to: 'https://twitter.com/iterawebsocial'
        },
        {
          id: 4,
          social: 'Tiktok',
          to: 'https://www.tiktok.com/@iteraweboficial'
        }
      ]
    },
    footer: {
      copyright: 'IteraWeb © 2023'
    }
  }
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
