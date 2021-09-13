import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
    items: { path: string, label: string }[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link: {
            margin: 20,
            textDecoration: "none",
            color: "#fff"
        }
    }),
);

const Navigator: React.FC<Props> = (props: Props) => {

    const classes = useStyles();

    function getLinks(): JSX.Element[] {
        return props.items.map((item, index) =>
            <NavLink to={item.path} exact key={index} className={classes.link}>{item.label}</NavLink>
        )
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Лоттерейные билеты</Typography>
                {getLinks()}
            </Toolbar>
        </AppBar>
    )
}
export default Navigator;
