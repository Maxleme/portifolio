import Link from "next/link"

export default function Footer() {
    return(
        <footer className="w-full mx-auto mt-20 lg:px-[10%] p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-2xl font-bold">Maxmiliano Silva Leme</h4>
                    <p className="mt-4">Desenvolvedor Full Stack focado em criar experiências web incríveis e intuitivas.</p>
                    <div className="flex gap-4 mt-4">
                        <Link href="https://github.com/Maxleme" target="_blank"><i className='bx bxl-github text-3xl text-gray-500 hover:text-[#008584]' ></i></Link>
                        <Link href="https://www.linkedin.com/in/max-leme-74477815b" target="_blank"><i className='bx bxl-linkedin text-3xl text-gray-500 hover:text-[#008584]' ></i></Link>
                        <Link href="https://www.salesforce.com/trailblazer/ud4nu8ti9x2ckgcof4" target="_blank"><i className='bx bxs-landscape text-3xl text-gray-500 hover:text-[#008584]'></i></Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">Links</h4>
                    <ul className="mt-4 space-y-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projetos">Projetos</Link></li>
                        <li><Link href="">Download CV</Link></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Contato</h4>
                    <p className="mt-4">Vamos trabalhar juntos? entre em contato</p>
                    <Link href="mailto:maxleme0@gmail.com"><i className='bx bx-envelope text-[#008584]'></i> maxleme0@gmail.com</Link>
                </div>
            </div>
        </footer>
    )
}