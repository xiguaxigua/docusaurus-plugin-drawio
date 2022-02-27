/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { FC, memo, useEffect, useRef, useState } from 'react'
import './index.css'

interface DrawioProps {
  content: string
}

const Drawio: FC<DrawioProps> = ({ content }) => {
  console.log('content', content)
  const [tip, setTip] = useState('loading...')
  const el = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const GraphViewer = (window as any).GraphViewer
  useEffect(() => {
    if (!GraphViewer) {
      setTip('GraphViewer is not loaded')
      return
    }

    if (!content) {
      setTip('drawio file is empty')
      return
    }

    const data = {
      editable: '_blank',
      highlight: '#0000ff',
      nav: true,
      resize: true,
      toolbar: 'zoom lightbox',
      xml: content,
    }

    const json = JSON.stringify(data)
    el.current!.dataset.mxgraph = json
    setTip('')
    setTimeout(() => {
      GraphViewer.createViewerForElement(el.current!)
    }, 0)
  }, [])
  return (
    <div className="docusaurus-plugin-drawio">
      <div className="docusaurus-plugin-drawio__content" ref={el}>
        {tip}
      </div>
    </div>
  )
}

const Wrapper: FC<DrawioProps> = ({ content }) => {
  return (
    <BrowserOnly fallback={<>loading...</>}>
      {() => <Drawio content={content} />}
    </BrowserOnly>
  )
}

export default memo(Wrapper)
