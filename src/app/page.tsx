import Topo from "./_components/topo"
import Apresentacao from "./_components/apresentacao"
import Skills from "./_components/skills"
import Footer from "./_components/footer"
import Projetos from "./_components/projetos"
import Certificados from "./_components/certificados"

export default function Home() {
  return(
    <main>
      <Topo />
      <Apresentacao />
      <Skills />
      <Projetos />
      <Certificados />
      <Footer />
    </main>
  )
}