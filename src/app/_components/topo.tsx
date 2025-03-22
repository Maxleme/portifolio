import Link from "next/link"

export default function Topo() {
    return (
        <header className="container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                <h1 data-aos="fade-down" className="text-center font-bold text-2xl">MAXMILIANO SILVA LEME</h1>
                <div data-aos="fade-down" className="flex items-end justify-center gap-4 mt-8 md:mt-0">
                    <Link href="https://github.com/Maxleme" target="_blank"><i className='bx bxl-github text-3xl hover:rotate-12 text-gray-500 hover:text-[#008584]' ></i></Link>
                    <Link href="https://www.linkedin.com/in/max-leme-74477815b" target="_blank"><i className='bx bxl-linkedin text-3xl hover:rotate-12 text-gray-500 hover:text-[#008584]' ></i></Link>
                    <Link href="https://www.salesforce.com/trailblazer/ud4nu8ti9x2ckgcof4" target="_blank"><i className='bx bxs-landscape text-3xl hover:rotate-12 text-gray-500 hover:text-[#008584]'></i></Link>
                </div>
            </div>
        </header>
    )
}