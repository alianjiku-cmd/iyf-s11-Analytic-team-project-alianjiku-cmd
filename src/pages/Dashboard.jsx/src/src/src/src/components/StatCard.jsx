function StatCard({
  title,
  value,
  change,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h3>

          <p className="mt-2 text-sm text-green-600">
            ↑ {change} from last month
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            colors[color]
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;