import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <header className="travelHeader">header</header>
        <main className="travelMain">{children}</main>
        <footer className="travelFooter">footer</footer>
    </>
  )
}
