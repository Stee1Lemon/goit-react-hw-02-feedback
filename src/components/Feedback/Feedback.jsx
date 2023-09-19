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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  onLeaveFeedback = option => {
    this.setState(prev => ({
      [option]: prev[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

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
          {totalFeedback ? (
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
