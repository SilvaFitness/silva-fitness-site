import Header from '#/components/Header'
import Hero from '#/components/Hero'
import AuthorityMarquee from '#/components/AuthorityMarquee'
import OurMethod from '#/components/OurMethod'
import SocialProof from '#/components/SocialProof'
import ExperimentalTraining from '#/components/ExperimentalTraining'
import GroupTraining from '#/components/GroupTraining'
import GoogleReviews from '#/components/GoogleReviews'
import Location from '#/components/Location'
import Footer from '#/components/Footer'
import GsapContext from '#/components/GsapContext'
import { fetchGoogleReviews } from '#/lib/reviews'
import { createFileRoute } from '@tanstack/react-router'
import Scheduling from '#/components/Scheduling'

export const Route = createFileRoute('/')({
  component: App,
  loader: () => fetchGoogleReviews(),
})

function App() {
  const { reviews, error } = Route.useLoaderData()

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      <GsapContext>
        <Header />
        <Hero />
        <AuthorityMarquee />
        <OurMethod />
        <SocialProof />
        <ExperimentalTraining />
        <GoogleReviews reviews={reviews} error={error} />
        <GroupTraining />
        <Scheduling />
        <Location />
        <Footer />
      </GsapContext>
    </div>
  )
}
