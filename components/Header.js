import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'
import FH from './icons/FH.js'

function Header({ isLoading }) {
  const [headerLogoStyles, setHeaderLogostyles] = useState(styles.headerLogoInit)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHeaderLogostyles(styles.headerLogoFinal)
  //   }, 2000)
  // })

  return (
    <div className={styles.header} onMouseEnter={() => {setHeaderLogostyles(styles.headerLogoFinal)}}>
      <div className={headerLogoStyles}>
        <FH height={60} />
      </div>
    </div>
  )
}

export default Header