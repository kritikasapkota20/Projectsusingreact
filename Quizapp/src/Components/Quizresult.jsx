import React from 'react'

const Quizresult = (props) => {
  return (
    <div className='score'>
      Your Score:{props.score}<br/>
      Total Question:{props.total}
    </div>
  )
}

export default Quizresult
