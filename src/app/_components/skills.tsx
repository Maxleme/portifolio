import skillsLg from "../_objetos/listaSkills"
import expList from "../_objetos/listaExperiencias"


export default function Skills() {
    return(
        <section className="overflow-hidden">
            <div className="space-y-6 mt-20">
                <h2 className="text-center font-bold text-4xl">Skills & Experiência</h2>
                <div className="w-full md:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">                        
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-4 md:p-8 rounded-2xl mx-4 md:mx-0">
                            <h3 className="text-3xl text-black font-bold"><i className='bx bx-code-alt text-[#008584] text-3xl bg-[#51c774]/10 p-4 rounded-md'></i> Skills Técnicas</h3>
                            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                            { skillsLg.map((item, index) => (
                                <li key={index} className="flex items-center bg-[#e9e9e9] w-fit mx-auto rounded-2xl hover:bg-[#008584] group">
                                    <div className="p-2 lg:p-3">
                                        <i className={`${item.icon} text-[#008584] text-4xl group-hover:text-white`} ></i>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-black font-semibold group-hover:text-white">{ item.title }</h3>
                                        <div>
                                            { Array.from({ length: item.estrelas }, (_, i) => (
                                                <i key={`filled-${i}`} className="bx bxs-star text-[#008584] group-hover:text-white"></i>
                                            ))}                                                           
                                            { Array.from({ length: 5 - item.estrelas }, (_, i) => (
                                                <i key={`filled-${i}`} className="bx bxs-star text-gray-500 group-hover:text-gray-800"></i>
                                            ))}                                                         
                                        </div>
                                    </div>                                        
                                </li>
                            ))}
                            </ul>                                
                        </div>
                        <div className="space-y-6 shadow-lg border-gray-100 border bg-white p-8 rounded-2xl mx-4 md:mx-0">
                            <h3 className="text-3xl text-black font-bold"><i className='bx bx-briefcase-alt-2 text-[#008584] bg-[#51c774]/10 p-4 rounded-md'></i> Experiência</h3>
                            { expList.map((item, index) => (
                            <div key={index} className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                                <div className="relative before:content-[''] before:absolute before:left-[-1.25rem] sm:before:left-[-2rem] before:top-2 before:w-3 sm:before:w-4 before:h-3 sm:before:h-4 before:bg-[#008584] before:rounded-full before:shadow-lg">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{item.empresa}</h4>
                                    <p className="text-xs sm:text-sm text-[#008584] mb-2">{item.periodo}</p>
                                    <p className="text-sm sm:text-base text-gray-600">{item.descricao}</p>
                                </div>                                    
                            </div>
                            ))}                                
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}