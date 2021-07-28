import React from 'react'

function UserDetail(props) {
  return <div>UserDetail ID: {props.match.params.id}!</div>
}

export default UserDetail
