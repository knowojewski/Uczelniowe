import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './css/nav.module.css';

class Navigation extends Component {
    render() {
        return (
            <nav className={classes.Nav}>
                <Link to="/" className={classes.Logo}>AoS Armies</Link>
                <ul className={classes.Navlist}>
                    <li className={classes.ListItem}><Link to="/" className={classes.ListLink}>Units</Link></li>
                    <li className={classes.ListItem}><Link to="/create" className={classes.ListLink}>Create Unit</Link></li>
                    <li className={classes.ListItem}><Link to="/army" className={classes.ListLink}>Armies</Link></li>
                    <li className={classes.ListItem}><Link to="/army/create" className={classes.ListLink}>Create Army</Link></li>
                    <li className={classes.ListItem}><Link to="/user" className={classes.ListLink}>Create User</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;