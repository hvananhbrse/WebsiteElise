import React from 'react'
import Search from '../../../assets/img/icon-search.png'

const BoxSearch = () => {
  return (
    <div className='all-center gap-[0.5vw]'>
        <span className='font-bold text-[1vw]'>Tìm Kiếm</span>
        <input type="search" className='input-Search w-[10vw]' />
        <img src={Search} alt="Search" className='w-[1vw] hover-items' />
    </div>
  )
}

export default BoxSearch