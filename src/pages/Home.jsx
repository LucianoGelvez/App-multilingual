
import { FormattedMessage, FormattedDate } from 'react-intl'
import Grid from '../components/Grid'


const Home = () => {
  return (
    <div>

      <div className="main">
        <h1>
          <FormattedMessage id='app.welcome' defaultMessage="Welcome" values={{
            name: "Calos Arturo"
          }} />
        </h1>
        <p className="subtitulo"> <FormattedDate
          value={Date.now()}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
        </p>

        <Grid />
      </div>
    </div>
  )
}

export default Home