import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useRef } from 'react'

import { locations } from '#constants'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'

gsap.registerPlugin(Draggable)

const Home = () => {
  const { setActiveLocation } = useLocationStore()
  const { openWindow } = useWindowStore()
  const foldersRef = useRef([])

  useGSAP(() => {
    foldersRef.current.forEach((folder) => {
      if (folder) {
        Draggable.create(folder, {
          bounds: 'main',
          inertia: true
        })
      }
    })
  }, [])

  const handleDoubleClick = (folder) => {
    setActiveLocation(folder)
    openWindow('finder', folder)
  }

  return (
    <div className='absolute inset-0 pointer-events-none'>
      <div className='relative w-full h-full p-4'>
        {locations.work.children.map((folder, index) => (
          <div
            key={folder.id}
            ref={(el) => (foldersRef.current[index] = el)}
            onDoubleClick={() => handleDoubleClick(folder)}
            className={`absolute flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/10 cursor-pointer pointer-events-auto transition-colors w-32 ${folder.position}`}>
            <img
              src='/images/folder.png'
              alt={folder.name}
              className='w-16 h-16 object-contain'
            />
            <p className='text-white text-[13px] font-medium text-center shadow-sm px-1 rounded-sm line-clamp-2 leading-tight bg-black/20'>
              {folder.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
