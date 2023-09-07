import { Component } from 'react';
import { FeedbackStyle } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NotificationMassage } from './NotificationMassage/NotificationMassage';
import { Section } from './Section/Section';

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
        <Section title={'Please leave your feedback'} />
        <Section>
          <FeedbackOptions
            options={options}
            onChooseFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <NotificationMassage message={'There is no feedback'} />
          )}
        </Section>
      </FeedbackStyle>
    );
  }
}

export default Feedback;
