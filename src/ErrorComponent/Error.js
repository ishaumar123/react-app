import React from 'react'

const ErrorComponent = ( { error } ) => {
  return (
    <div className='text-center mt-5 text-uppercase'>
     {error}
    </div>
  )
}

export default ErrorComponent

