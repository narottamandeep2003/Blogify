import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <span>Not Found</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero omnis possimus nobis ducimus perferendis quidem ipsa eaque consequatur, magni labore ut dignissimos consectetur nostrum cupiditate ratione animi maxime! <Link to="/">home</Link></p>
    </div>
  )
}
