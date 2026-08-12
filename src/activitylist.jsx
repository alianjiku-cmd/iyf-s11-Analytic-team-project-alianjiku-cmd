
const activities = [
  {
    name: "Alice",
    action: "Updated dashboard analytics",
    time: "5 minutes ago",
    icon: "📊",
  },
  {
    name: "Pius",
    action: "Updated backend services",
    time: "20 minutes ago",
    icon: "⚙️",
  },
  {
    name: "Judy",
    action: "Updated the user interface",
    time: "45 minutes ago",
    icon: "🎨",
  },
  {
    name: "Edwin",
    action: "Updated search functionality",
    time: "1 hour ago",
    icon: "🔍",
  },
  {
    name: "Emma",
    action: "Updated user skills",
    time: "2 hours ago",
    icon: "👤",
  },
];

function ActivityList() {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest activities from the development platform.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={`${activity.name}-${activity.time}`}
            className="flex items-center gap-4 rounded-lg border border-slate-100 p-4 hover:bg-slate-50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg">
              {activity.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">
                {activity.name}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.action}
              </p>
            </div>

            <span className="hidden text-xs text-slate-400 sm:block">
              {activity.time}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ActivityList;

