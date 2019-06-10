import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'
import MapView from '../components/MapView'
import Survey from '../components/Survey'
import UserInfo from '../components/UserInfo'
import User from '../libs/User'
import GeoUtils from '../libs/GeoUtils'

const Report = (props: RouteComponentProps<{ userId: string, LatLng: string }>) => {
    let user: User
    console.log("Matches", props.match.params)
    // Google Type LatLng (@lat,lng)
    if (props.match.params.LatLng) {
        let latLng = GeoUtils.parseCoord(props.match.params.LatLng)
        user = new User(props.match.params.userId, latLng[0], latLng[1])
    }
    // Others
    // Daum: Lat, Lng
    // Korea Govern: MapY, MapX
    else if (props.match.params.userId) {
        const query = queryString.parse(props.location.search)
        console.log("QUERY", query)
        let latLng = GeoUtils.parseCoord(query)
        user = new User(props.match.params.userId, latLng[0], latLng[1])        
    }
    else {
        console.log("유저에러")
        user = new User("UserError",undefined, undefined, false)
    }
    return (
        <div>
            <MapView lat={user.currentLat} lng={user.currentLng} />
            <UserInfo user={user} />
            <Survey user={user} />
        </div>
    );
};

export default Report;