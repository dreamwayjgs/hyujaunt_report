import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import queryString from 'query-string'
import MapView from '../components/MapView'
import Survey from '../components/Survey'
import UserInfo from '../components/UserInfo'
import User from '../lib/User'

const Report = (props: RouteComponentProps<{userId: string}>) => {           
    if(props.match.params.userId){        
        const query = queryString.parse(props.location.search)
        console.log("QUERY", query, query.lat, query.lng)        
        const user: User = new User(props.match.params.userId, Number(query.lat), Number(query.lng))
        const lat = user.currentLat
        const lng = user.currentLng
        console.log(user.id, user.currentLat, user.currentLng)

        return (
            <div>
                <MapView lat={lat} lng={lng}/>            
                <UserInfo user={user}/>            
                <Survey />
            </div>
        );
    }
    else{        
        return (
            <div>                
                <p>유저 정보가 없습니다</p>
            </div>
        );
    }

    
};

export default Report;