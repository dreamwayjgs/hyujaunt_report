import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="item">홈</Link>
            <Link to="/report" className="item">리포트</Link>
            <Link to="/" className="item">내 정보</Link>                        
        </div>
    );
};

export default Header;