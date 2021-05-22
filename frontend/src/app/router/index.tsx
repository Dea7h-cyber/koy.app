import { Route, Switch } from 'react-router-dom'

export const Router = () => {
  return (
    <Switch>
      <Route path='/' exact>{`route 1`}</Route>
      <Route path='/2' exact>{`route 2`}</Route>
    </Switch>
  )
}
