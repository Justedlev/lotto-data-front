import React from 'react';
import './TicketView.module.css';
import { useDispatch } from 'react-redux';
import { deleteTicketAction, editTicketAction } from '../../store/actions/tickets-actions';
import { Ticket } from '../../models/Ticket';
import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classes from './TicketView.module.css';

type Props = {
	key: number,
	ticket: Ticket
};

const TicketView: React.FC<Props> = (props: Props) => {

	const dispatch = useDispatch();

	return (
		<Card className={classes.ticket} key={props.key}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Билет №{props.ticket.id}
				</Typography>
				<Typography gutterBottom variant="h6" component="h2">
					Дата игры: {props.ticket.date}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="div">
					{
						props.ticket.combination.sixNumbers.map((n, i) => <><Chip key={i} color="primary" label={n} />&nbsp;</>)
					}
					<Chip color="secondary" label={props.ticket.combination.strong} />
				</Typography>
			</CardContent>
			<CardActions className={classes.icon_button}>
				<Button variant="outlined" onClick={() => {
					dispatch(editTicketAction(props.ticket));
				}}>
					<EditIcon />
				</Button>
				<Button variant="outlined" color="error" onClick={() => {
					dispatch(deleteTicketAction(props.ticket.id));
				}}>
					<DeleteIcon />
				</Button>
			</CardActions>
		</Card>
	);

}

export default TicketView;