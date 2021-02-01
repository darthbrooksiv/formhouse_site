import { useEffect } from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../styles/SamplePage.module.css'

function SamplePage ({ isLoading, setIsLoading, children }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  return (
    <div className={styles.samplePage}>
      <h2 className={styles.title}>
        {children}
      </h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <FHImage image="bird" height={1500} width={2000} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <FHImage image="bird" height={1500} width={2000} />
          </Col>
          <Col xs={12} md={6}>
            <FHImage image="bird" height={1500} width={2000} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function FHImage ({ image, height, width }) {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={`/${image}.png`}
        quality={100}
        height={height}
        width={width}
        priority={true}
        layout="responsive"
        />
    </div>
  )
}

function Loading () {
  return (
    <div className={styles.loading}>
      LOADING!
    </div>
  )
}

export default SamplePage