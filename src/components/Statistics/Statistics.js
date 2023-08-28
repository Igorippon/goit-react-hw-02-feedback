import { List, Span, Paragraph } from "./Statistics.styled"


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (

        <List>
            <li><Paragraph>Good:<Span>{good}</Span></Paragraph></li>
            <li><Paragraph>Neutral:<Span>{neutral}</Span></Paragraph></li>
            <li><Paragraph>Bad:<Span>{bad}</Span></Paragraph></li>
            <li><Paragraph>Total:<Span>{total}</Span></Paragraph></li>
            <li><Paragraph>Positive feedback:<Span>{positivePercentage}</Span>%</Paragraph></li>
        </List>

    );
}