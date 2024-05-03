import { Loader } from "lucide-react";

function loading() {
  return (
    <div className="flex justify-center pt-32">
      <Loader className="size-14 animate-spin" />
    </div>
  );
}

export default loading;
