interface PageTitleProps {
  children: string;
}

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="pb-6 pt-4 text-2xl font-extrabold text-brand-500 dark:text-brand-400">
      {children}
    </h1>
  );
}

export default PageTitle;
