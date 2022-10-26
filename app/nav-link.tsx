"use client"

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`
  return <Link className={active && 'text-blue-700' || ''} href={href}>{children}</Link>
}
