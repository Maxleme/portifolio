import Topo from "./_components/topo"
import Apresentacao from "./_components/apresentacao"
import Skills from "./_components/skills"
import Footer from "./_components/footer"
import Projetos from "./_components/projetos"

export default function Home() {
  return(
    <main>
      <Topo />
      <Apresentacao />
      <Skills />
      <Projetos />
      <Footer />
    </main>
  )
}