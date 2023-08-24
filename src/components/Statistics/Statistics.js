import { List, Span } from "./Statistics.styled"
import { Notification } from "../Notification/Notification"

export const Statistics = ({title,good,neutral,bad,total,positivePercentage}) => {
    return (
        <>
            <h2>{title}</h2>
           {total === 0 ? <Notification  message="There is no feedback"/> : <List>
                <li><p>Good:<Span>{good}</Span></p></li>
                <li><p>Neutral:<Span>{neutral}</Span></p></li>
                <li><p>Bad:<Span>{bad}</Span></p></li>
                <li><p>Total:<Span>{total}</Span></p></li>
                <li><p>Positive feedback:<Span>{positivePercentage}</Span>%</p></li>
            </List>}
        </>
    );
}