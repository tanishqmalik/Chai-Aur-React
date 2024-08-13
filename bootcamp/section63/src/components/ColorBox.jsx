import React from 'react'
import ColorBoxList from './ColorBoxList'

const ColorBox = ({colors}) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[500px] h-[452px] border border-black flex flex-col '>
        <div className='flex w-[500px] '>
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        </div>
        <div className='flex w-[500px]'>
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        </div>
        <div className='flex w-[500px]'>
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        </div>
        <div className='flex w-[500px]'>
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        </div>
        <div className='flex w-[500px]'>
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        <ColorBoxList colors={colors} />
        </div>
      </div>
    </div>
  )
}

export default ColorBox
