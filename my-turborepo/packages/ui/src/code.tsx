export function Code({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <>
      <p className="text-5xl pb-4 pt-8 border-4 underline">Hello world!!!!</p>
      <code className={className}>{children}</code>;
    </>
  )
}
