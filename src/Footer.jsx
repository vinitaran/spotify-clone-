import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import RepeatIcon from "@material-ui/icons/Repeat"
import { PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src="https://pbs.twimg.com/media/EeB8o3NWkAUygGZ.jpg" alt="" className="footer_albumLogo"/>
                <div className="footer_songInfo">
                    <h4>Yeah</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
