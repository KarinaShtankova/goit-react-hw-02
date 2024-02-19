import css from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export default function App() {
  const [ratings, setRatings] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback !== 0
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;
  const positiveFeedback = Math.round(
    ((ratings.good + ratings.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(ratings));
  }, [ratings]);

  const updateFeedback = feedbackType => {
    setRatings({
      ...ratings,
      [feedbackType]: ratings[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setRatings({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          values={ratings}
          totalValue={totalFeedback}
          positiveValue={positiveFeedback}
        />
      )}
    </div>
  );
}
