import { Component } from 'react';
import { FeedbackStyle } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good / (good + neutral + bad)) * 100);

  onLeaveFeedback = option => {
    this.setState(prev => ({
      [option]: prev[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback({ good, neutral, bad });
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage({
      good,
      neutral,
      bad,
    });

    return (
      <FeedbackStyle>
        <h2>Please leave your feedback</h2>
        <div>
          <FeedbackOptions
            options={options}
            onChooseFeedback={this.onLeaveFeedback}
          />
        </div>
        <p>Statistics</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positiveFeedbackPercentage}%</li>
        </ul>
      </FeedbackStyle>
    );
  }
}

export default Feedback;
