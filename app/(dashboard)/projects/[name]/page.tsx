interface Params {
  name: string
}
export default function Project({params}: { params: Params }) {
  return (
    <main>
      <h1>Project {params.name}</h1>
    </main>
  )
}
