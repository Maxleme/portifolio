import radarImg from '../../../public/radar.png'
import epscImg from '../../../public/epsc.png'
import ppImg from '../../../public/pp.png'
import mczImg from '../../../public/mcz.png'
import okumuraImg from '../../../public/okumura.png'
import arcadasImg from '../../../public/arcadas.png'
import Image from 'next/image'
import Link from "next/link"

export default function Projetos() {
    return(
        <section id='projetos' className="overflow-hidden">
            <div className="space-y-6 mt-20">
                <h2 className="text-center font-bold text-4xl">Projetos</h2>
                <div className="w-full md:w-full mx-auto">
                    <div className="grid grid-cols-3 lg:grid-cols-3 gap-2">                        
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='https://radardomarketing.com.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={radarImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site da radar do marketing"/></Link>
                            <Link href='https://radardomarketing.com.br/' target='_blank'><h3 className='font-bold text-center mt-5'>Radar do Marketing</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> Laravel, Bootstrap 3</p>
                            <p className='text-center'>Site institucional com área admin para inserção de portifolio, clientes e blog</p>
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='https://epsc.com.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={epscImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site da radar do marketing"/></Link>
                            <Link href='https://epsc.com.br/' target='_blank'><h3 className='font-bold text-center mt-5'>EPSC</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> React, Bootstrap 3</p>
                            <p className='text-center'>Site institucional</p>
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='https://pereirapulici.com.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={ppImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site da radar do marketing"/></Link>
                            <Link href='https://pereirapulici.com.br/' target='_blank'><h3 className='font-bold text-center mt-5'>Pereira Pulici</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> Laravel, Bootstrap 3</p>
                            <p className='text-center'>Site institucional com área admin para inserção de noticias, area de atuação e equipe</p>
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='http://malgueirocampos.com.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={mczImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site Malgueiro Campos"/></Link>
                            <Link href='http://malgueirocampos.com.br/' target='_blank'><h3 className='font-bold text-center mt-5'>Malgueiro Campos</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> Wordpress</p>
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='https://okumurasa.com.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={okumuraImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site da radar do marketing"/></Link>
                            <Link href='https://okumurasa.com.br/' target='_blank'><h3 className='font-bold text-center mt-5'>Okumura Sociedade de Advogados</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> Laravel, bootstrap 3</p>
                            <p className='text-center'>Site institucional com área admin para inserção de noticias e equipe</p>
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4">
                            <Link href='https://www.fundacaoarcadas.org.br/' target='_blank'><Image  data-aos="zoom-out-down"  src={arcadasImg} className="w-150 h-60" quality={100} alt="Print da tela inicial do site da radar do marketing"/></Link>
                            <Link href='https://www.fundacaoarcadas.org.br/' target='_blank'><h3 className='font-bold text-center mt-5'>Fundação Arcadas</h3></Link>
                            <p className='text-center'><b>Tecnologias:</b> Laravel, bootstrap 3</p>
                            <p className='text-center'>Site institucional com área admin para criação de eventos, editais, cursos, memorias, diretoria, etc </p>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    )
}