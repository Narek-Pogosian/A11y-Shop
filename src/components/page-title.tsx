interface PageTitleProps {
  children: string;
}

function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-brand-500 dark:text-brand-400 mb-6 text-2xl font-extrabold">
      {children}
    </h1>
  );
}

export default PageTitle;
