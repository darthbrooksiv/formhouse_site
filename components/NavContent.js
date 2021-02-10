import { useContext, useRef, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import AccordionContext from 'react-bootstrap/AccordionContext'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'

import styles from '../styles/NavContent.module.css'

// import SamplePage from './SamplePage.js'
import Archive from './Archive.js'
import Chevron from './icons/Chevron.js'
import Saddle from './icons/Saddle.js'
import TBTC from './icons/TBTC.js'
import LNPizza from './icons/LNPizza.js'

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
        <ContactItem />
        <ScrollToTop />
      </Accordion>
      <Archive />
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

function ContactItem({}) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()

    const copyText = document.getElementById("hiddenInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    },8000)
  }

  return (
    <div className={styles.navContentItem}>
      <input type="text" value="mike@formhouse.co" readOnly="readonly" id="hiddenInput" className={styles.hiddenInput} onChange={(evt) => {return evt}}></input>
      <div className={styles.navItem}>
        <div className={styles.navItemInner} onClick={copy}>
          Contact
          <div className={isCopied ? styles.contactCopied : styles.contactNotCopied}>&nbsp;</div>
          {
            isCopied
            ? <div className={styles.isCopiedText}>Email Address is Copied!</div>
            : null
          }
        </div>
      </div>
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