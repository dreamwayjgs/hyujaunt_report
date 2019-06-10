import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

const UserStatus = (props: RouteComponentProps<{ userId: string }>) => {
    
    return (
        <div>
            유저 정보
        </div>
    );
};

export default UserStatus;