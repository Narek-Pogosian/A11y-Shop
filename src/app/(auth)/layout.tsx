function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center max-lg:pt-20">
        <div className="w-full max-w-xl px-4">{children}</div>
      </div>
      <div className="hidden bg-brand-600 lg:block"></div>
    </div>
  );
}

export default layout;
