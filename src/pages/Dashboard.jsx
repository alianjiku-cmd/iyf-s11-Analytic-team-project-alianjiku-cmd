
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ActivityList from "../components/ActivityList";


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
    <div className="min-h-screen bg-slate-100 p-6">

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

        {/* Total Users */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                1,250
              </h2>

              <p className="mt-2 text-sm text-green-600">
                ↑ 12% this month
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              👥
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Active Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                890
              </h2>

              <p className="mt-2 text-sm text-green-600">
                ↑ 8% this month
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              🟢
            </div>
          </div>
        </div>

        {/* Total Skills */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Skills
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                35
              </h2>

              <p className="mt-2 text-sm text-blue-600">
                5 new skills
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
              🎯
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Reports
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                120
              </h2>

              <p className="mt-2 text-sm text-purple-600">
                18 generated this week
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              📊
            </div>
          </div>
        </div>

      </div>

      {/* Analytics Section */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* User Growth Chart */}
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

        {/* Platform Overview */}
        <div className="rounded-xl bg-blue-900 p-6 text-white shadow-sm">

          <h2 className="text-xl font-bold">
            Platform Overview
          </h2>

          <p className="mt-2 text-sm text-blue-200">
            Current platform statistics
          </p>

          <div className="mt-8 space-y-6">

            {/* Active Users */}
            <div>
              <div className="mb-2 flex justify-between">
                <span>Active Users</span>
                <span>71%</span>
              </div>

              <div className="h-2 rounded-full bg-blue-700">
                <div className="h-2 w-[71%] rounded-full bg-yellow-400"></div>
              </div>
            </div>

            {/* Skills Completed */}
            <div>
              <div className="mb-2 flex justify-between">
                <span>Skills Completed</span>
                <span>64%</span>
              </div>

              <div className="h-2 rounded-full bg-blue-700">
                <div className="h-2 w-[64%] rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Profile Completion */}
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

      {/* Platform Status */}
      <div className="mt-8 rounded-xl bg-blue-600 p-6 text-white shadow-sm">

        <h2 className="text-xl font-bold">
          Platform Status
        </h2>

        <p className="mt-2 text-blue-100">
          Your Community Skills Development Platform is running successfully.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;


