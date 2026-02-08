import { WindowControls } from '#components'
import { socials } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import { ExternalLink } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col h-full bg-white'>
      <div id='window-header'>
        <WindowControls target='contact' />
        <h2 className='text-sm font-medium opacity-70 text-center'>
          Contact Me
        </h2>
      </div>

      <div className='flex-1 overflow-y-auto p-8'>
        <div className='max-w-xl mx-auto flex flex-col items-center text-center'>
          <div className='relative mb-8'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl'>
              <img
                src='/images/adrian.jpg'
                alt='Adrian'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Adrian Hajdin
          </h1>
          <p className='text-xl text-gray-500 mb-12 font-medium'>
            Web Developer & Educator
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative flex items-center p-4 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden'>
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110 shadow-inner'
                  style={{ backgroundColor: social.bg }}>
                  <img
                    src={social.icon}
                    alt={social.text}
                    className='w-6 h-6 invert-0 brightness-0 primary-icon'
                  />
                </div>
                <div className='text-left'>
                  <p className='text-sm font-semibold text-gray-900'>
                    {social.text}
                  </p>
                  <p className='text-xs text-gray-400'>Connect with me</p>
                </div>
                <ExternalLink className='w-4 h-4 ml-auto text-gray-300 group-hover:text-gray-600 transition-colors' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactWindow = windowWrapper(Contact, 'contact')

export default ContactWindow
