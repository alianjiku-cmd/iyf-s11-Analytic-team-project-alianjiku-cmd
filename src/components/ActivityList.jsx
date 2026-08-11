import {
  UserPlus,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

function ActivityList() {
  const activities = [
    {
      icon: UserPlus,
      title: "New user registered",
      description: "Brian joined the platform",
      time: "10 minutes ago",
    },
    {
      icon: FileText,
      title: "Report generated",
      description: "Monthly user report was created",
      time: "45 minutes ago",
    },
    {
      icon: BarChart3,
      title: "Analytics updated",
      description: "Skill analytics were updated",
      time: "2 hours ago",
    },
    {
      icon: Settings,
      title: "System settings changed",
      description: "Administrator updated settings",
      time: "4 hours ago",
    },
  ];

  return (
    <div className="space-y-5">
      {activities.map((activity, index) => {
        const Icon = activity.icon;

        return (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Icon size={18} />
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold text-slate-800">
                {activity.title}
              </h4>

              <p className="text-sm text-slate-500">
                {activity.description}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityList;