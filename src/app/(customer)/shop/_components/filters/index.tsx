import SortingSelect from "./sorting-select";
import FiltersDialog from "./filters-dialog";

function Filters() {
  return (
    <div className="mb-4 flex flex-col gap-4 xs:flex-row">
      <div>
        <FiltersDialog />
      </div>
      <div>
        <SortingSelect />
      </div>
    </div>
  );
}

export default Filters;
