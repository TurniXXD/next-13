import params from 'next'

export default function Page({params}: any) {
  return <p>Movie {params.id}</p>
}