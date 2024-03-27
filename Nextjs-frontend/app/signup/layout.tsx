export default function signupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Signup Page Header</div>
      {children}
    </div>
  );
}
