import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-32 text-center">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">404</h1>
      <p className="mt-6 text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-10">
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
