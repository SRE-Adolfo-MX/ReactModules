import React from 'react'

const Like = ({like, onLikeClick}) => {
  return (
    <div onClick={onLikeClick} style={{cursor: 'pointer'}}>
      {like ? '♥️' : '🤍'}
    </div>
  )
}

export default Like
