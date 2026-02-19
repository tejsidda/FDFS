import ShellWrapper from "./ShellWrapper"

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShellWrapper>{children}</ShellWrapper>
}
