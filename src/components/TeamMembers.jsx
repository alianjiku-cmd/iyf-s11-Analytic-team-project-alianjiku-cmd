

```jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import StatCard from "../components/StatCard";
import ActivityList from "../components/ActivityList";
import TeamMembers from "../components/TeamMembers";

function Dashboard() {
  const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 150 },
    { month: "Apr", users: 230 },
    { month: "May", users: 280 },
    { month: "Jun", users: 320 },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Admin! Here's what's happening on your platform.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,250"
          description="Registered users"
          icon="👥"
        />

        <StatCard
          title="Active Users"
          value="890"
          description="Users active this month"
          icon="🟢"
        />

        <StatCard
          title="Total Skills"
          value="35"
          description="Skills available"
          icon="🎯"
        />

        <StatCard
          title="Reports"
          value="120"
          description="Reports generated"
          icon="📄"
        />
      </div>

      {/* Chart + Quick Stats */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              User Growth
            </h2>

            <p className="text-sm text-slate-500">
              New registered users over the last six months
            </p>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userGrowthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="users"
                  fill="#2563eb"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick overview */}
        <div className="rounded-xl bg-blue-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold">Platform Overview</h2>

          <p className="mt-2 text-sm text-blue-200">
            Current platform statistics
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-2 flex justify-between">
                <span>Active Users</span>
                <span>71%</span>
              </div>

              <div className="h-2 rounded-full bg-blue-700">
                <div className="h-2 w-[71%] rounded-full bg-yellow-400"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span>Skills Completed</span>
                <span>64%</span>
              </div>

              <div className="h-2 rounded-full bg-blue-700">
                <div className="h-2 w-[64%] rounded-full bg-green-400"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span>Profile Completion</span>
                <span>82%</span>
              </div>

              <div className="h-2 rounded-full bg-blue-700">
                <div className="h-2 w-[82%] rounded-full bg-pink-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="mt-8">
        <ActivityList />
      </div>

      {/* ISDP Development Team */}
      <TeamMembers />
    </div>
  );
}

export default Dashboard;
```
