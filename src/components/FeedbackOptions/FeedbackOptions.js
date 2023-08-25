import { Btn, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <List>
            <li><Btn onClick={() => onLeaveFeedback(1)}>Good</Btn></li>
            <li><Btn onClick={() => onLeaveFeedback(2)}>Neutral</Btn></li>
            <li><Btn onClick={() => onLeaveFeedback(3)}>Bad</Btn></li>
        </List>
    );
};