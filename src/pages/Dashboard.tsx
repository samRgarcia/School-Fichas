import React, {ReactNode, useEffect, useMemo} from 'react'
import {Box, Container, useTheme,} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PaymentIcon from '@material-ui/icons/Payment';
//import MoneyIcon from '@material-ui/icons/Money';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import PanToolIcon from '@material-ui/icons/PanTool';
import {useHistory } from 'react-router-dom'
import {useSideBarContext} from "../Provider/SideBarProvider";



type Props = {
    children?: ReactNode;
    title?: string;
    window?: () => Window;
    appBarTitle?: string;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing(0),
    },
}));



const Layout = ({children, title = 'This is the default title', appBarTitle = 'Reinscripciones', window}: Props) => {


    const {isOpen: openDesktopDrawer, setOpen: setOpenDesktopDrawer} = useSideBarContext();
    const router=useHistory()

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [opens, setOpen] = React.useState(false);



    const isUpSmall = useMemo(() => {
        return !isDownSmall;
    }, [isDownSmall]);

    const handleDrawerOpen = () => {
        setOpenDesktopDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDesktopDrawer(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLButtonElement & EventTarget>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button onClick={() => router.push('/inicio')}>
                    <ListItemText primary='Tramite'/>
                </ListItem>
                {/*<List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItem title="Después de realizar el pago, podrá descargar su horario en esta misma opción"
                                  button onClick={() => router.push('/inscripcion')}>
                            <ListItemText primary='Solisitar ficha'/>
                        </ListItem>
                    </ListItem>
                </List>*/}
                <Divider/>

                    <ListItem button onClick={() => router.push('/ficha')}>
                        <ListItemText primary='Solicitar ficha'/>
                    </ListItem>
                <Divider/>


                {/*<ListItem button onClick={() => setOpen(!opens)}>
                    <ListItemIcon><PanToolIcon/></ListItemIcon>
                    <ListItemText primary="Trámites"/>
                    {opens ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                    <Collapse in={opens} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                    <ListItem button onClick={() => router.push('/reinscripcion-pago')}>
                    <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
                    <ListItemText primary='Renscripción/Horario'/>
                    </ListItem>
                    </ListItem>
                    </List>

                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                    <ListItem button onClick={() => router.push('/pagos-servicios')}>
                    <ListItemIcon><PaymentIcon/></ListItemIcon>
                    <ListItemText primary='Pago de servicios'/>
                    </ListItem>
                    </ListItem>
                    </List>
                    </Collapse>*/}
            </List>
        </div>
    );



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <Container maxWidth="xl" className={classes.root}>
                <Box display='flex'>
                    <CssBaseline/>
                    <AppBar

                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: openDesktopDrawer,
                        })}
                    >
                        <Toolbar variant="dense" style={{background:"white",color:"black"} }>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => {
                                    console.log(isUpSmall,"open")
                                    isUpSmall ? handleDrawerOpen() : handleDrawerToggle();
                                }}
                                className={clsx(classes.menuButton, openDesktopDrawer && classes.hide)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <ThemeProvider theme={responsiveFontSizes(theme)}>
                                <Typography variant="h6" className={classes.title}>
                                    {appBarTitle}
                                </Typography>
                            </ThemeProvider>
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                                    <MenuItem >Cerrar sesión</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                className={classes.drawer}
                                variant="persistent"
                                anchor="left"
                                open={openDesktopDrawer}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                <div className={classes.drawerHeader}>
                                    <IconButton onClick={handleDrawerClose}>
                                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                                    </IconButton>
                                </div>
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                </Box>
                <Box flexGrow={1}>
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: !openDesktopDrawer,
                        })}
                    >
                        <div className={classes.drawerHeader}/>
                        {children}
                    </main>
                </Box>
            </Container>
        </React.Fragment>
    )
}




export default Layout