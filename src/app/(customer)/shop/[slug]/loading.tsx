import { Loader } from "lucide-react";

function loading() {
  return (
    <div className="pt-20 text-center">
      <Loader className="size-14 animate-spin" />
    </div>
  );
}

export default loading;
