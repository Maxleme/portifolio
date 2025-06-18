
import Image from 'next/image'
import Link from "next/link"
import certificacoesLg from '../_objetos/listaCertificacoes'

export default function Projetos() {
    return(
        <section id='projetos' className="overflow-hidden">
            <div className="space-y-6 mt-20">
                <h2 className="text-center font-bold text-4xl">Licenças e certificados</h2>
                <div className="w-full md:w-6xl mx-auto">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 m-4">
                        { certificacoesLg.map((item, index) => (
                                <li key={index} className="flex">
                                    <Link href={item.link} target='_blank'><h3 className='font-bold text-center mt-5'><i className='bx bx-detail text=2xl text-[#008584]'></i> {item.titulo}</h3></Link>                                           
                                </li>
                            ))}                        
                                               
                    </div>
                </div>
            </div>           
        </section>
    )
}