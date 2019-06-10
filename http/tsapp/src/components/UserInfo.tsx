import React, { Fragment } from 'react';
import { IUserProps as IProps } from '../lib/User'
import './UserInfo.css'


const UserInfo: React.FC<IProps> = ({ user }) => {

    return (
        <Fragment>            
            <div className="userinfo">
                <div className="userhead">사용자정보</div>
                <div className="userbody">
                    <div className="useritem">ID: {user.id}</div>
                    <div className="useritem">{user.currentLat}</div>
                    <div className="useritem">{user.currentLng}</div>
                </div>
            </div>            
        </Fragment >
    )
}

export default UserInfo;
