
import Grid from './Grid'
import { FormattedMessage } from 'react-intl'

const Explore = () => {
  return (
    <div>
      <div className="main">
        <h1 className="titulo">
          <FormattedMessage
            id='explore.tittle'
            defaultMessage="Explore"
          />
        </h1>

        <Grid />
      </div>
    </div>
  )
}

export default Explore