import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
