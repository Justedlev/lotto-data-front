import React from "react";
import classes from "./Navbar.module.css";
import LottoTicketIcon from "../../assets/ticket-ico.png";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import { PATH_ADD_TICKET, PATH_HOME, PATH_REPEATABLE } from "../../config/menu";
import TableViewIcon from '@mui/icons-material/TableView';
import AddIcon from '@mui/icons-material/Add';

type Props = {
    items: { path: string, label: string }[]
}

const NavbarComponent: React.FC<Props> = (props: Props) => {

    const history = useHistory();

    // function getLinks(): JSX.Element[] {
    //     return props.items.map((item, index) =>
    //         <NavLink className={classes.link_style} to={item.path} exact key={index}>{item.label}</NavLink>
    //     )
    // }

    return (
        <AppBar position="static">
            <Toolbar>
                <a className={classes.logo} href={PATH_HOME}>
                    <img className={classes.logo_icon} src={LottoTicketIcon} alt="lotto-icon" />
                    <span className={classes.logo_title}>ЛоттоБилеты</span>
                </a>
                <div className={classes.menu}>
                    <IconButton color="inherit" onClick={() => history.push(PATH_ADD_TICKET) } aria-label="upload picture" component="span">
                        <AddIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => history.push(PATH_REPEATABLE) } aria-label="upload picture" component="span">
                        <TableViewIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavbarComponent;
