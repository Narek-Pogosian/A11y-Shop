import SortingSelect from "./sorting-select";
import FiltersDialog from "./filters-dialog";

function Filters() {
  return (
    <section
      className="mb-8 flex flex-col gap-4 xs:flex-row"
      aria-label="Filters"
    >
      <div>
        <FiltersDialog />
      </div>
      <div>
        <SortingSelect />
      </div>
    </section>
  );
}

export default Filters;
