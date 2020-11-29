import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
    const [{ discover_weekly }] = useDataLayerValue();
    console.log(discover_weekly)
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
            <img src={discover_weekly?.images[0]?.url} alt="PL" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item =>
                    <SongRow track={item.track} />
                )}
            </div>
        </div>
    )
}

export default Body
