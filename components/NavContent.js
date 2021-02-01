import { useContext, useRef } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import AccordionContext from 'react-bootstrap/AccordionContext'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'

import styles from '../styles/NavContent.module.css'

import SamplePage from './SamplePage.js'
import Chevron from './icons/Chevron.js'
import Saddle from './icons/Saddle.js'
import TBTC from './icons/TBTC.js'
import LNPizza from './icons/LNPizza.js'

const navItemsOLD = [
  {
    title: 'Trash Can',
    Content: ({ ...props }) => <SamplePage {...props}>Trash Can</SamplePage>
  },
  {
    title: 'Design Systems',
    Content: ({ ...props }) => <SamplePage {...props}>Design Systems</SamplePage>
  },
  {
    title: 'Another Section',
    Content: () => <div>TEST</div>
  }
]

const navItems = [
  {
    title: 'Saddle.finance',
    icon: Saddle,
    description: 'Brand + UX/UI',
    link: 'https://saddle.finance'
  },
  {
    title: 'tbtc.network',
    icon: TBTC,
    description: 'UX/UI',
    link: 'https://tbtc.network'
  },
  {
    title: 'ln.pizza',
    icon: LNPizza,
    description: 'Brand + UX/UI',
    link: 'https://ln.pizza'
  },
]

function NavContent({ isLoading, setIsLoading }) {
  return (
    <div className={styles.navContent}>
      <Accordion>
        {navItems.map((navItem, i) => (
          <NavContentItem
            key={navItem.title}
            title={navItem.title}
            icon={navItem.icon}
            description={navItem.description}
            link={navItem.link}
            active={false}
            eventKey={i.toString()}
            isLoading={isLoading}
            setIsLoading={setIsLoading} />
        ))}
        <ScrollToTop />
      </Accordion>
    </div>
  )
}

function NavContentItemOLD({ title, Content, eventKey, isLoading, setIsLoading }) {
  return (
    <div className={styles.navContentItem}>
      <NavItem eventKey={eventKey} setIsLoading={setIsLoading}>
        {title}
      </NavItem>
      <AccordionCollapse eventKey={eventKey}>
        <div className={styles.contentItemOLD}>
          {Content({ isLoading, setIsLoading })}
        </div>
      </AccordionCollapse>
    </div>
  )
}

function NavContentItem({ title, icon, description, link, eventKey, isLoading, setIsLoading  }) {
  const currentEventKey = useContext(AccordionContext)
  const isCurrentEventKey = currentEventKey === eventKey

  return (
    <div className={styles.navContentItem}>
      <NavItem eventKey={eventKey} isCurrentEventKey={isCurrentEventKey} setIsLoading={setIsLoading}>
        {title}
      </NavItem>
      <AccordionCollapse eventKey={eventKey}>
        <div className={isCurrentEventKey ? styles.contentItemActive : styles.contentItem}>
          <div className={styles.contentItemIcon}>
            {icon({height:100, width:100})}
          </div>
          <div className={styles.contentItemDescription}>
            {description}
          </div>
          <div className={styles.contentItemDetails}>
            <a href={link} target="_blank">
              Details
            </a>
          </div>
          <div className={styles.contentItemLink}>
            <a href={link} target="_blank">
              go to {title}
            </a>
          </div>
        </div>
      </AccordionCollapse>
    </div>
  )
}

function NavItem({ children, eventKey, isCurrentEventKey, callback, setIsLoading }) {
  // const currentEventKey = useContext(AccordionContext)
  const currentEl = useRef(null)

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {
      callback && callback(eventKey)
    },
  )

  // const isCurrentEventKey = currentEventKey === eventKey

  // const wrappedDecoratedOnClick = (evt) => {
  //   if (!isCurrentEventKey) {
  //     setIsLoading(true)

  //     console.log("TOP!: ", 200 + (50 * parseInt(eventKey)))
  //     setTimeout(() => {
  //       window.scrollTo({
  //         left: 0,
  //         top: 200 + (50 * parseInt(eventKey)),
  //         behavior: 'smooth'
  //       })
  //     }, 400)
  //   } else {
  //     setIsLoading(false)
  //   }
  
  //   decoratedOnClick(evt)
  // }

  return (
    <div ref={currentEl} className={isCurrentEventKey ? styles.navItemActive : styles.navItem} onClick={decoratedOnClick}>
      <div className={styles.navItemInner}>
        {children}
        <div className={isCurrentEventKey ? styles.navItemChevronActive : styles.navItemChevron}>
          <Chevron width={14} height={14} />
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  return null

  const currentEventKey = useContext(AccordionContext)

  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  if (currentEventKey === null) {
    return null
  }

  return (
    <div className={styles.scrollToTop} onClick={handleClick} style={{animation: 'fadeIn 1500ms'}}>
      ^ Scroll to Top ^
    </div>
  )
}

export default NavContent