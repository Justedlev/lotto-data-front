import { Card, CardActions, CardContent, Chip, CircularProgress, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import './TicketView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicketAction } from '../../store/actions/tickets-actions';
import { Ticket } from '../../models/Ticket';
import { ReducersType } from '../../store/redusers-combiner';
import Loading from '../../models/Loading';
import { loading } from '../../store/selectors';

type Props = {
	key: number,
	ticket: Ticket
};

const useStyles = makeStyles((theme: Theme) => createStyles({
	margin: {
		margin: theme.spacing(1),
	},
	root: {
		maxWidth: 345
	},
	media: {
		height: 140,
	},
}));

const TicketView: React.FC<Props> = (props: Props) => {

	const classes = useStyles();
	const dispatch = useDispatch();
	const loadingDeleted: boolean = useSelector<ReducersType, Loading>(loading).isLoadingDeleteTicket;

	return (
		<Card key={props.key} className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Билет лотереи №{props.ticket.numberOfTicket}
				</Typography>
				<Typography gutterBottom variant="h6" component="h2">
					Дата игры: {props.ticket.date}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="div">
					<Chip color="primary" label={props.ticket.combination.first} />&nbsp;
					<Chip color="primary" label={props.ticket.combination.second} />&nbsp;
					<Chip color="primary" label={props.ticket.combination.third} />&nbsp;
					<Chip color="primary" label={props.ticket.combination.fourth} />&nbsp;
					<Chip color="primary" label={props.ticket.combination.fifth} />&nbsp;
					<Chip color="primary" label={props.ticket.combination.sixth} />&nbsp;
					<Chip color="secondary" label={props.ticket.combination.strong} />
				</Typography>
			</CardContent>
			<CardActions>
				{
					loadingDeleted ? <CircularProgress /> : <IconButton edge="end" aria-label="delete" onClick={() => {
						dispatch(deleteTicketAction(props.ticket.numberOfTicket));
					}}>
						<DeleteIcon />
					</IconButton>
				}

			</CardActions>
		</Card>
	);

}

export default TicketView;