export default function ListDetailLayout({
  children,
  detail = null,
}: {
  children: React.ReactNode;
  detail?: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {detail}
    </div>
  );
}
