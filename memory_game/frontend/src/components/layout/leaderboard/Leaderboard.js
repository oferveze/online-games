import React, {Fragment, useEffect, useState} from 'react'
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getPlayers } from '../../../actions/players';

function Leaderboard(props) {
    useEffect(() => {
        console.log("Leaderboard is asking for players")
        console.log("props: ", props);
        props.getPlayers();
    }, [])

    const players = props.players.sort((a,b) => a.flips < b.flips)
    return (
        <Fragment>
            <h1>Leaderboard!</h1>
            <div className="leaderboard-table-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Flips</th>
                            <th>Game Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="leaderboard-table-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {props.players.map((player, index) => (
                            <tr key={player.id}>
                                <td>{index + 1}</td>
                                <td>{player.username}</td>
                                <td>{player.flips}</td>
                                <td>{player.game_time}</td>
                                <td>{player.finish_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

Leaderboard.propTypes = {
    players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    players: state.playersReducers.players
});

export default connect(mapStateToProps, { getPlayers })(Leaderboard);
