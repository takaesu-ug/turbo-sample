export function Code({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <>
      <p className="text-5xl font-bold underline">Hello world!!!!</p>
      <code className={className}>{children}</code>;
    </>
  )
}
