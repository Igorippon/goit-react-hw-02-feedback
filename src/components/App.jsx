import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from "./Section/Section.js";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.js";
import { Statistics } from "./Statistics/Statistics.js";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good !== 0) {
      return Math.round(100 / (this.state.good + this.state.neutral + this.state.bad) * this.state.good);
    };
    return 0;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
        <GlobalStyle />
      </Layout>

    );
  }

};
