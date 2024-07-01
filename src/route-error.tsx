import { useRouteError } from 'react-router-dom'
import { get } from 'lodash'

const RouteError = () => {
  const error = useRouteError()

  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ get(error, 'statusText') || get(error, 'message') }</i>
      </p>
    </div>
  )
}

export default RouteError
