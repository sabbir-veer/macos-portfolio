import { WindowControls } from '#components'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile.data

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <div className='flex flex-col h-full bg-white'>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2 className='text-sm font-medium opacity-70'>{name}</h2>
      </div>

      <div className='flex-1 overflow-hidden p-2 flex items-center justify-center bg-[#f0f0f0]'>
        <img
          src={imageUrl}
          alt={name}
          className='max-w-full max-h-full object-contain shadow-lg'
        />
      </div>
    </div>
  )
}

const ImageWindow = windowWrapper(Image, 'imgfile')

export default ImageWindow
