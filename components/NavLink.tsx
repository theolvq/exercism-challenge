import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  text: string
  svg?: SVGElement
  isActive?: boolean
}

const NavLink: React.FC<Props> = ({ href, text, svg, isActive }) => {
  return (
    <li>
      <Link href={href}>
        <a>
          {svg ? <svg /> : null}
          {text}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
