function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full md:grid md:grid-cols-2">
      <div className="hidden bg-brand-600 md:block"></div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
