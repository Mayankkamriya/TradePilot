export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex">
      {/* Sidebar goes here later */}
      <main className="flex-1 w-full h-full">
        {children}
      </main>
    </div>
  );
}
