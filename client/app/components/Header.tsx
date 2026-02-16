import Link from "next/link"

export default function Header(){
    return(
        <header>
          <div className="container items-center flex justify-between py-4 px-6 mx-auto my-4">
          <Link href={'/'} className="font-bold text-2xl">Job board</Link>

          <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
          <Link href={'/login'} className="bg-gray-200">Login</Link>
          <Link className="bg-blue-600 text-white " href={'/new-listing'}>Post a Job</Link>
        </nav>
        </div>
        </header>
    )
}