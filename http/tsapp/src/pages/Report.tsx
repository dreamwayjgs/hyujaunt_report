import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'
import MapView from '../components/MapView'

type TParams = {userid: string}

const Report = (props: RouteComponentProps<TParams>) => {
    console.log(props)
    const query = queryString.parse(props.location.search)

    return (
        <div>
            <div className="userinfo">
            User: {props.match.params.userid}            
            lat: {query.lat}
            lng: {query.lng}
            </div>
            <MapView />
        </div>
    );
};

export default Report;