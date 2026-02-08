import { WindowControls } from '#components'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile.data

  if (!data) return null

  const { name, subtitle, image, description } = data

  return (
    <div className='flex flex-col h-full bg-white select-text'>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2 className='text-sm font-medium opacity-70'>{name}</h2>
      </div>

      <div className='flex-1 overflow-y-auto p-8'>
        <div className='max-w-3xl mx-auto'>
          {image && (
            <img
              src={image}
              alt={name}
              className='w-full h-auto rounded-xl mb-8 shadow-sm'
            />
          )}

          {subtitle && (
            <h1 className='text-3xl font-bold mb-6 text-black'>{subtitle}</h1>
          )}

          <div className='space-y-4'>
            {description?.map((para, index) => (
              <p
                key={index}
                className='text-lg leading-relaxed text-gray-700 font-normal'>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const TextWindow = windowWrapper(Text, 'txtfile')

export default TextWindow
