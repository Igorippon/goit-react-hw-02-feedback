import { Btn, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({title,onLeaveFeedback}) => {
    return( 
    <>
    <h2>{title}</h2>
    <List>
    <li><Btn onClick={()=>onLeaveFeedback(1)}>Good</Btn></li>
    <li><Btn onClick={()=>onLeaveFeedback(2)}>Neutral</Btn></li>
    <li><Btn onClick={()=>onLeaveFeedback(3)}>Bad</Btn></li>
    </List> 
    </> );
};