import SortingSelect from "./sorting-select";
import FiltersDialog from "./filters-dialog";

function Filters() {
  return (
    <div className="mb-4 flex flex-col gap-4 xs:flex-row">
      <FiltersDialog />
      <SortingSelect />
    </div>
  );
}

export default Filters;
