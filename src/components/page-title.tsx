interface PageTitleProps {
  children: string;
}

function PageTitle({ children }: PageTitleProps) {
  return <h1 className="mb-8 text-2xl font-bold">{children}</h1>;
}

export default PageTitle;
