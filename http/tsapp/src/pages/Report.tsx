import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'

type TParams = {userid: string}

const Report = (props: RouteComponentProps<TParams>) => {
    console.log(props)
    const query = queryString.parse(props.location.search)

    return (
        <div>
            User: {props.match.params.userid}
            <h2>
                Report Your Status!                
            </h2>
            lat: {query.lat}
            lng: {query.lng}
        </div>
    );
};

export default Report;