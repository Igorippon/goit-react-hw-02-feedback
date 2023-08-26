import { Btn, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
        <List>
            <li><Btn type="button" name={option[0]} onClick={onLeaveFeedback}>Good</Btn></li>
            <li><Btn type="button" name={option[1]} onClick={onLeaveFeedback}>Neutral</Btn></li>
            <li><Btn type="button" name={option[2]} onClick={onLeaveFeedback}>Bad</Btn></li>
        </List>
    );
};