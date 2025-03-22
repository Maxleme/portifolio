import Image from "next/image"
import maxImg from "../../../public/max.jpg"
import { Button } from "@/components/ui/button"
import skillsLg from "../_objetos/listaSkills"

export default function Apresentacao() {
    return (
        <section>
            <div className="relative mt-10 md:mt-20 space-y-10">
                <div className="flex items-center justify-center">
                    <Image  data-aos="zoom-out-down"  src={maxImg} className="rounded-full w-70 h-70 border-[#008584] border-4" quality={100} alt="foto Max"/>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="space-y-6">
                    <h2 className="text-center mt-8 text-4xl font-bold">Desenvolvedor Full Stack</h2>                    
                    <div className="w-full lg:w-1/2 m-auto">
                        <ul className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mx-4">
                            {skillsLg.map((item, index) => (
                                <li key={index} className="flex items-center gap-1 bg-[#e9e9e9] px-3 py-2 w-fit rounded-2xl m-auto"><i className={`${item.icon} ${item.cor} text-2xl`} ></i> {item.title}</li>
                            ))}                            
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-4">
                        <Button className="w-fit m-auto hover:bg-[#008584] bg-[#e9e9e9] text-md  p-6 md:p-8 border-[#008584] border-2 text-[#008584] hover:text-white"><i className='bx bx-download text-xl' ></i> Download CV</Button>
                        <Button className="w-fit m-auto hover:bg-[#008584] bg-[#e9e9e9] text-md p-6 md:p-8 border-[#008584] border-2 text-[#008584] hover:text-white"><i className='bx bxs-show text-xl'></i> Ver Projetos</Button>    
                    </div>
                </div>                
            </div>
        </section>
    )
}