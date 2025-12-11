interface ProductCardProps {
  name: string;
  description: string;
  status: "In Development" | "Live" | "Coming Soon";
}

export default function ProductCard({
  name,
  description,
  status,
}: ProductCardProps) {
  const statusStyles = {
    "In Development": "bg-yellow-100 text-yellow-800",
    Live: "bg-green-100 text-green-800",
    "Coming Soon": "bg-blue-100 text-blue-800",
  };

  return (
    <div className="border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold">{name}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </div>
  );
}
