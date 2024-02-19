import css from './Feedback.module.css';

export default function Feedback({
  values: { good, neutral, bad },
  totalValue,
  positiveValue,
}) {
  return (
    <ul className={css.list}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {totalValue}</p>
      </li>
      <li>
        <p>Positive: {positiveValue}%</p>
      </li>
    </ul>
  );
}
