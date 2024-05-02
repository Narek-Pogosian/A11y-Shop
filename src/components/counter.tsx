import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// TODO: Fix screen reader support.
function Counter({ count, decrement, increment }: CounterProps) {
  return (
    <div className="flex gap-2">
      <h3 id="amount" className="sr-only">
        Edit amount, currently set to {count}
      </h3>
      <Button
        onClick={decrement}
        variant="outline"
        size="icon"
        className="size-8
         rounded-full"
      >
        <Minus className="size-4" aria-hidden />
        <span className="sr-only">decrement</span>
      </Button>

      <div role="region" aria-live="assertive" className="sr-only">
        Current count is {count}
      </div>
      <span
        className="flex w-6 items-center justify-center font-medium"
        aria-hidden
      >
        {count}
      </span>

      <Button
        onClick={increment}
        variant="outline"
        size="icon"
        className="size-8
         rounded-full"
      >
        <Plus className="size-4" aria-hidden />
        <span className="sr-only">increment</span>
      </Button>
    </div>
  );
}

export default Counter;
