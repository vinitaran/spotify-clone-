import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from './DataLayer';
import "./Header.css";

const Header = () => {
    const [{ user }] = useDataLayerValue();
    console.log(user)
    return (
        <div className="header">
            <div className="header_left">
                <Search />
                <input placeholder="Search for Artists, Songs, Album" type="text" />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
