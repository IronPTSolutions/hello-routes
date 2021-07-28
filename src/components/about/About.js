import React from 'react'

function About(props) {
  const params = new URLSearchParams(props.location.search)

  return <div>
    Hello {params.get('name')}
  </div>
}

export default About
