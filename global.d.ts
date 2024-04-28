interface PageProps<T extends string | string[] = void> {
  params: Record<T extends string[] ? T[number] : T, string>;
  searchParams: Record<string, string | string[] | undefined>;
}
