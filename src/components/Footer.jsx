import React from 'react'

const date = new Date();
const currentTime = date.getFullYear()

const Footer = () => {
  return (
    <section>
    <footer>
        <p>Copyright © Mr. Rolbot {currentTime}</p>
    </footer>
    </section>
  )
}

export default Footer