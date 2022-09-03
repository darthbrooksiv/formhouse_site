import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'
import FH from './icons/FH.js'

function Header({ isLoading }) {
  const [headerLogoStyles, setHeaderLogostyles] = useState(styles.headerLogoInit)

  const onAction = (evt) => {
    setHeaderLogostyles(styles.headerLogoFinal)
  }

  return (
    <div className={styles.header} onMouseMove={onAction} onMouseDown={onAction} onTouchStart={onAction}>
      <div className={headerLogoStyles}>
        {/* <FH height={60} /> */}
        <span className={styles.headerText}>formhouse</span>
      </div>
    </div>
  )
}

export default Header