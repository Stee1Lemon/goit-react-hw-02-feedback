import { OptionButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onChooseFeedback }) => {
  return options.map(option => {
    return (
      <OptionButton
        key={option}
        type="button"
        onClick={() => onChooseFeedback(option)}
      >
        {option}
      </OptionButton>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChooseFeedback: PropTypes.func.isRequired,
};
