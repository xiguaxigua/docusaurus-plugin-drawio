/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { FC, memo, useEffect, useRef, useState } from 'react'
import './index.css'

interface DrawioProps {
  content: string
  /** page to be displayed */
  page?: number
  /** I don't know the meaning of this configuration，the default value is false */
  forceCenter?: boolean
  /** I don't know the meaning of this configuration，the default value is false */
  center?: boolean
  /** The toolbar can be configured through this property, for example: "zoom layers tags lightbox" */
  toolbar?: string
  /** I don't know the meaning of this configuration，the default value is false */
  responsive?: boolean
  /** page to be displayed */
  pageId?: string
  /** I don't know the meaning of this configuration */
  border?: any
  /** I don't know the meaning of this configuration */
  move?: any
  /** I don't know the meaning of this configuration */
  nav?: boolean
  /** set zoom ratio */
  zoom?: number
  /** I don't know the meaning of this configuration */
  tooltips?: any
  /** I don't know the meaning of this configuration */
  resize?: boolean
  /** I don't know the meaning of this configuration */
  layers?: any
  /** I don't know the meaning of this configuration */
  layerIds?: any
  /** I don't know the meaning of this configuration */
  target?: any
  /** I don't know the meaning of this configuration */
  highlight?: string
  /** I don't know the meaning of this configuration */
  lightbox?: any
  /** I don't know the meaning of this configuration */
  editable?: any
  /** I don't know the meaning of this configuration */
  edit?: any
  /** I don't know the meaning of this configuration */
  editFunc?: any
  /** the max height of graph */
  maxHeight?: number
  /** I don't know the meaning of this configuration */
  autoFit?: any
  /** I don't know the meaning of this configuration */
  autoCrop?: any
  /** I don't know the meaning of this configuration */
  autoOrigin?: any
  /** I don't know the meaning of this configuration */
  allowZoomOut?: any
  /** I don't know the meaning of this configuration */
  allowZoomIn?: any
  /** I don't know the meaning of this configuration */
  checkVisibleState?: any
  /** I don't know the meaning of this configuration */
  toolbarPosition?: any
  /** I don't know the meaning of this configuration */
  toolbarNohide?: any
  /** I don't know the meaning of this configuration */
  toolbarButtons?: any
}

const Drawio: FC<DrawioProps> = ({
  content,
  maxHeight,
  autoFit,
  autoCrop,
  autoOrigin,
  allowZoomOut,
  allowZoomIn,
  checkVisibleState,
  toolbarPosition,
  toolbarNohide,
  toolbarButtons,
  ...restConfig
}) => {
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
      'max-height': maxHeight,
      'auto-fit': autoFit,
      'auto-crop': autoCrop,
      'auto-origin': autoOrigin,
      'allow-zoom-out': allowZoomOut,
      'allow-zoom-in': allowZoomIn,
      'check-visible-state': checkVisibleState,
      'toolbar-position': toolbarPosition,
      'toolbar-nohide': toolbarNohide,
      'toolbar-buttons': toolbarButtons,
      ...restConfig,
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

const Wrapper: FC<DrawioProps> = (props) => {
  return (
    <BrowserOnly fallback={<>loading...</>}>
      {() => <Drawio {...props} />}
    </BrowserOnly>
  )
}

export default memo(Wrapper)
