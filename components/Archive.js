import { useEffect, useState } from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SwitchTransition, CSSTransition } from "react-transition-group";


import styles from '../styles/Archive.module.css'

const images = [
  {
    imgSrc: 'frame_mod.png',
    description: 'Frame Mod'
  },
  {
    imgSrc: 'front_hero.jpg',
    description: 'PCR Front'
  },
  {
    imgSrc: 'KING_First_Print_Draft.jpg',
    description: 'King First Print'
  },
  {
    imgSrc: 'rear_quarter1.jpg',
    description: 'PCR Back'
  },
  {
    imgSrc: 'sacsummer1.jpg',
    description: 'Coke 1'
  },
  {
    imgSrc: 'sacsummer2.jpg',
    description: 'Coke 2'
  },
  {
    imgSrc: 'sentinel_cover_mock.jpg',
    description: 'Sentinel Cover'
  },
  {
    imgSrc: 'ZZ T-Shirt Mock Front 1.jpg',
    description: 'LN Pizza Shirt'
  },
]

function Archive ({ isLoading, setIsLoading, children }) {
  const [showArchive, setShowArchive] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [key, setKey] = useState(images[0]['imgSrc'])

  useEffect(() => {
    const el = document.getElementById("imageContainer")
    if (el) {
      el.scrollIntoView({behavior: "smooth"})
    }
  }, [key])

  const handleChangeImage = (evt) => {
    if (!showArchive) {
      setShowArchive(true)
    }

    const newIndex = (activeImageIndex+1)%images.length
    setActiveImageIndex(newIndex)
    setKey(images[newIndex]['imgSrc'])
  }

  return (
    <div>
      <div className={styles.ALogo} onClick={handleChangeImage}>A</div>
      {
        showArchive
        ? (
          <SwitchTransition>
            <CSSTransition
              key={key}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames='fade'
            >
              <Container id="imageContainer">
                <Row className="justify-content-md-center">
                  <Col>
                    <FHImage imgSrc={key} height={750} width={1000} />
                  </Col>
                </Row>
              </Container>
            </CSSTransition>
          </SwitchTransition>
        ) : null
      }
    </div>
  )
}

function FHImage ({ imgSrc, height, width }) {
  const ghpLoader = ({ src, width, quality }) => {
    return `${window.location.origin}${src}`
  }

  return (
    <div className={styles.imageWrapper}>
      <Image
        src={`/${imgSrc}`}
        height={height}
        width={width}
        loader={ghpLoader}
        />
    </div>
  )
}

// function Loading () {
//   return (
//     <div className={styles.loading}>
//       LOADING!
//     </div>
//   )
// }

export default Archive