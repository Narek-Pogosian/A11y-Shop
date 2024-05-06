"use client";

/**
 * @returns a string with full pathname and query params, can be used with router.push and Link
 */
export function setSearchQueries(
  values: Record<string, null | string | number | Array<number | string>>,
) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("page");

  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      searchParams.delete(key);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value.join(","));
      }
    } else {
      searchParams.set(key, value.toString());
    }
  });

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setPage(page: number) {
  const searchParams = new URLSearchParams(window.location.search);

  if (page <= 1) {
    searchParams.delete("page");
  }
  if (page > 1) {
    searchParams.set("page", page.toString());
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setNextPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  return setPage(currentPage ? Number(currentPage) + 1 : 2);
}

export function setPreviousPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get("page");

  return setPage(currentPage ? Number(currentPage) - 1 : 1);
}
