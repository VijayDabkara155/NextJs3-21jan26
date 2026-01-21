import React from 'react'

export default function layout({ children }) {
  return (
    <>
        <header className="obpHeader">header</header>
        <main className="obpMain">{children}</main>
        <footer className="obpFooter">footer</footer>
    </>
  )
}
