
export default function SignOutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<div className="h-screen grid place-content-center">{children}</div>
    )}