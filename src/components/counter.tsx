import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function Counter({ count, decrement, increment }: CounterProps) {
  return (
    <section className="flex gap-2">
      <Button
        onClick={decrement}
        variant="outline"
        size="icon"
        className="size-7 rounded-full"
      >
        <Minus className="size-4" />
        <span className="sr-only">decrement</span>
      </Button>

      <div
        aria-live="assertive"
        className="flex w-6 items-center justify-center"
      >
        <span className="sr-only">Current count is</span>
        {count}
      </div>

      <Button
        onClick={increment}
        variant="outline"
        size="icon"
        className="size-7 rounded-full"
      >
        <Plus className="size-4" />
        <span className="sr-only">increment</span>
      </Button>
    </section>
  );
}

export default Counter;
