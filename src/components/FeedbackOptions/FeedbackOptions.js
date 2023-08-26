import { Btn, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <List>
            {options.map(option => (
                <li key={option}><Btn type="button" onClick={() => onLeaveFeedback(option)}>{option}</Btn></li>
            ))}
        </List>
    );
};