import Crosshair from './components/Crosshair'
import Rail from './components/Rail'
import Masthead from './components/Masthead'
import Brief from './components/Brief'
import Ledger from './components/Ledger'
import Work from './components/Work'
import Matrix from './components/Matrix'
import Signals from './components/Signals'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="atmos" aria-hidden="true" />
      <Crosshair />
      <Rail />

      <div className="shell">
        <main>
          <Masthead />
          <Brief />
          <Ledger />
          <Work />
          <Matrix />
          <Signals />
        </main>
        <Contact />
      </div>
    </>
  )
}
