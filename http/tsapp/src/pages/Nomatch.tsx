import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

const Nomatch = (props: RouteComponentProps<any>) => (
    <div>
        <h1>404 Not Found</h1>
        <h3>No match for <code>{props.location.pathname}</code></h3>
    </div>
  )

export default Nomatch;