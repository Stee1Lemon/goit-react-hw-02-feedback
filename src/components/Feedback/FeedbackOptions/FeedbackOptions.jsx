export const FeedbackOptions = ({ options, onChooseFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        type="button"
        onClick={() => onChooseFeedback(option)}
      >
        {option}
      </button>
    );
  });
};
