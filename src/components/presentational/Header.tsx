import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import Fastfood from '@material-ui/icons/Fastfood';
import { css } from 'emotion';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { auth } from '../../core/Auth';
import { history } from '../../core/store';

// import theme from '../../core/theme';
// import { IconBox } from './IconBox';

export interface HeaderProps {
    title?: string;
}

const LinkHome = (props: Partial<LinkProps>) => <Link to="/" {...props} />;

export default class Header extends React.PureComponent<HeaderProps> {
    public render() {
        const authButton = auth.isAuthenticated() ? (
            <Button
                variant="contained"
                color="primary"
                mini={true}
                onClick={() => {
                    auth.logout();
                }}
            >
                Logout
            </Button>
        ) : (
            <Button
                variant="contained"
                color="secondary"
                mini={true}
                onClick={() => {
                    auth.login();
                }}
            >
                Login
            </Button>
        );

        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Home" component={LinkHome}>
                        <Fastfood />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={css({ flexGrow: 1 })}
                        noWrap
                    >
                        {this.props.title}
                    </Typography>
                    {authButton}
                    &nbsp;
                    <Button
                variant="contained"
                color="secondary"
                mini={true}
                onClick={() => {
                    history.push("/about");
                }}
            >
                About This App
            </Button>
                </Toolbar>
            </AppBar>
        );
    }
}
