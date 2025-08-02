import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Halaman tidak ditemukan</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Kembali ke Beranda
      </Link>
    </div>
  )
}
