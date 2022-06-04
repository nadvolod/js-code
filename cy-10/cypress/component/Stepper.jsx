import { useState } from "react";

export default function Stepper({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <div data-testid="stepper">
      <button aria-label="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      {count}
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
