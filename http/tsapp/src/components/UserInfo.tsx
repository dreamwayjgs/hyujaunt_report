import React, { Fragment } from 'react';
import { IUserProps as IProps } from '../libs/User'
import './UserInfo.css'


const UserInfo: React.FC<IProps> = ({ user }) => {

    return (
        <Fragment>
            <div className={user.isValid ? "userinfo" : 'userinfo usererror'}>
                <div className="userhead">{user.isValid ? "사용자정보" : "사용자 정보 없음"}</div>
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
