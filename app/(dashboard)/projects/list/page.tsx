import Link from 'next/link'

export default function Projects() {
  return (
    <main>
      <h1>Project List</h1>

      <ul>
        <li>
          <Link href="/projects/jan">
            jan
          </Link>
        </li>
        <li>
          <Link href="/projects/car">
            car
          </Link>
        </li>
        <li>
          <Link href="/projects/bar">
            bar
          </Link>
        </li>
      </ul>
    </main>
  )
}
