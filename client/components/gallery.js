import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GHeader from './Gallery-header'

import { photos } from './photos'

// Custom image component for blur-up effect
function BlurUpImage({ photo, margin, onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div style={{ margin, position: 'relative', cursor: 'pointer' }} onClick={onClick}>
      <img
        src={photo.placeholder} // low-res or base64
        style={{
          width: photo.width,
          height: photo.height,
          filter: loaded ? 'none' : 'blur(20px)',
          transition: 'filter 0.3s ease',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        alt={photo.title}
        aria-hidden='true'
      />
      <img
        src={photo.src} // full-res
        srcSet={photo.srcSet}
        style={{
          width: photo.width,
          height: photo.height,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          position: 'relative'
        }}
        onLoad={() => setLoaded(true)}
        alt={photo.title}
      />
    </div>
  )
}

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <GHeader />
      <Gallery photos={photos} onClick={openLightbox} renderImage={BlurUpImage} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <p className='pt-4 text-gray-600 text-sm font-sans font-thin text-center'>
        Copyright © 2020 Levshenkov Inc. All rights reserved.
      </p>
    </div>
  )
}

App.propTypes = {}

export default App
