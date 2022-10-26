export default function Page({params}: any) {
  return <div className="grid place-items-center h-screen"><p>Movie {params.id}</p></div>
}