import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../styles/ImageGrid.module.css'

const images = [
  {
    imgSrc: 'automaton.png',
    href: 'https://www.amazon.com/Automaton-T-R-Hudson/dp/B09PM84KV3/ref=sr_1_4?keywords=automaton&qid=1662221910&sr=8-4'
  },
  {
    imgSrc: 'beowulf.png',
    href: 'https://www.raweggnationalist.com/work'
  },
  {
    imgSrc: 'first_sentinel.png',
    href: 'https://www.barnesandnoble.com/w/the-first-sentinel-w-d-vinson/1137664295'
  },
  {
    imgSrc: 'hyponeirisms.png',
    href: 'https://www.amazon.com/Hyponeirisms-Konstantin-Kanelleas/dp/0646862820/ref=sr_1_1?crid=1RF67HFT3WZU0&keywords=hyponeirisms&qid=1662221954&sprefix=hyponeirisms%2Caps%2C73&sr=8-1'
  },
]

function ImageGrid () {
  return (
    <div>
      <Container id="imageContainer">
        <Row className="justify-content-md-center">
          <Col lg="12">
            <div className={styles.imageGrid}>
              {
                images.map(image => (
                  <div key={image.imgSrc} className={styles.imageWrapper}>
                    <a href={image.href} target="_blank">
                      <img src={image.imgSrc} className={styles.image} />
                    </a>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ImageGrid