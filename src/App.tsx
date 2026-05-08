import { ThemeProvider } from '@/components/layout/Header/ThemeContext'
import { SkipLink } from '@/components/ui/SkipLink/SkipLink'
import { Header } from '@/components/layout/Header/Header'
import { Sommaire } from '@/components/layout/Sommaire/Sommaire'
import { Footer } from '@/components/layout/Footer/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { Edito } from '@/components/sections/Edito/Edito'
import { QuiSommesNous } from '@/components/sections/QuiSommesNous/QuiSommesNous'
import { ContexteCrise } from '@/components/sections/ContexteCrise/ContexteCrise'
import { ChiffresCles } from '@/components/sections/ChiffresCles/ChiffresCles'
import { Missions } from '@/components/sections/Missions/Missions'
import { Gouvernance } from '@/components/sections/Gouvernance/Gouvernance'
import { AxesStrategiques } from '@/components/sections/AxesStrategiques/AxesStrategiques'
import { FaitsMarquants } from '@/components/sections/FaitsMarquants/FaitsMarquants'
import { MediasPresse } from '@/components/sections/MediasPresse/MediasPresse'
import { FocusProjets } from '@/components/sections/FocusProjets/FocusProjets'
import { Temoignages } from '@/components/sections/Temoignages/Temoignages'
import { Galerie } from '@/components/sections/Galerie/Galerie'
import { BilanFinancier } from '@/components/sections/BilanFinancier/BilanFinancier'
import { Perspectives } from '@/components/sections/Perspectives/Perspectives'
import { Rejoindre } from '@/components/sections/Rejoindre/Rejoindre'
import { Annexes } from '@/components/sections/Annexes/Annexes'

export function App() {
  return (
    <ThemeProvider>
      <SkipLink />
      <Header />
      <Sommaire />

      <main id="contenu-principal" tabIndex={-1} className="pt-14">
        <Hero />
        <Edito />
        <QuiSommesNous />
        <ContexteCrise />
        <ChiffresCles />
        <Missions />
        <Gouvernance />
        <AxesStrategiques />
        <FaitsMarquants />
        <MediasPresse />
        <FocusProjets />
        <Temoignages />
        <Galerie />
        <BilanFinancier />
        <Perspectives />
        <Rejoindre />
        <Annexes />
      </main>

      <Footer />
    </ThemeProvider>
  )
}