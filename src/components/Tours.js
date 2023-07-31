import React from 'react'
import Card from './Card';
function Tours({tours,removeTour}) {
  return (
    <div className='plan-tour'>
        <div className='title'>
            Plan With Love
        </div>
        <div className='cards'>
            {
                tours.map((tour) =>{
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  )
}

export default Tours