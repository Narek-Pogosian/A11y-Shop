import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { announce } from "@react-aria/live-announcer";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function Counter({ count, decrement, increment }: CounterProps) {
  function handleIncrement() {
    if (count < 100) {
      increment();
      announce(`Incremented count to ${count + 1}`, "assertive");
    } else {
      announce("Maximum count reached", "assertive");
    }
  }

  function handleDecrement() {
    if (count > 1) {
      decrement();
      announce(`Decremented count to ${count - 1}`, "assertive");
    } else {
      announce("Minimum count reached", "assertive");
    }
  }

  return (
    <section className="flex gap-2" aria-labelledby="counter-info">
      <h2 id="counter-info" className="sr-only">
        Choose amount, currently set to {count}
      </h2>
      <Button
        onClick={handleDecrement}
        variant="outline"
        size="icon"
        className="size-8
         rounded-full"
      >
        <Minus className="size-4" aria-hidden />
        <span className="sr-only">decrement</span>
      </Button>

      <span
        className="flex w-6 items-center justify-center font-medium"
        aria-hidden
      >
        {count}
      </span>

      <Button
        onClick={handleIncrement}
        variant="outline"
        size="icon"
        className="size-8
         rounded-full"
      >
        <Plus className="size-4" aria-hidden />
        <span className="sr-only">increment</span>
      </Button>
    </section>
  );
}

export default Counter;
