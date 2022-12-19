import React from 'react'

function NoticeBoardCards() {
  return (
    <div className='Cards'>
        <div className='Cards_container'>
            <div className='Cards_wrappper'>
                <ul className='Cards_items'>
                <NoticeBoardItems
                    src='images/img-9.jpg'
                    text='Explore the last course avaible with Code Nation'
                    label='Latest aviable course'
                    />
                </ul>

            </div>
        </div>
    </div>
  )
}

export default NoticeBoardCards 