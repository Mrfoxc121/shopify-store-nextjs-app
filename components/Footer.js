import Link from "next/link"

const navigation = [
    {name: "Home", href: "/"},
    {name: "T&Cs", href: "#"},
    {name: "Contact", href: "#"},
    {name: "About", href: "#"}
]

export default function Footer() {
  return (
    <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center">
                {
                    navigation.map((item, i) => (
                        <div key={i} className="px-6 py-2">
                            <a href={item.href} className="text-gray-600 hover:text-rose-500">
                                {item.name}
                            </a>
                        </div>
                    ))
                }
            </nav>
            <div className="flex items-center justify-center space text-gray-400 mt-4">
               <p className="copyright">Copyright &copy; 2023 - All rights reserved - <Link className="hover:text-rose-700" href="http://www.jamesjensonwebsolutions.space" target="_blank">www.jamesjensonwebsolutions.space</Link></p> 
            </div>
        </div>
    </footer>
  )
}

