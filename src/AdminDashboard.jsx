
import React from "react";
import TeamMembers from "./TeamMembers";
import ActivityList from "./ActivityList";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      change: "12%",
      description: "from last month",
    },
    {
      title: "Active Users",
      value: "986",
      change: "8%",
      description: "from last month",
    },
    {
      title: "Skills Listed",
      value: "2,450",
      change: "15%",
      description: "from last month",
    },
    {
      title: "Reports Generated",
      value: "342",
      change: "10%",
      description: "from last month",
    },
  ];

  const chartData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 520 },
    { month: "Mar", users: 610 },
    { month: "Apr", users: 720 },
    { month: "May", users: 850 },
    { month: "Jun", users: 980 },
    { month: "Jul", users: 1120 },
    { month: "Aug", users: 1250 },
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

      {/* Statistics Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-medium text-slate-500">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              {stat.value}
            </h2>

            <p className="mt-2 text-sm">
              <span className="font-semibold text-green-600">
                ↑ {stat.change}
              </span>{" "}
              <span className="text-slate-400">
                {stat.description}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              User Growth
            </h2>

            <p className="text-sm text-slate-500">
              Total registered users over the past months.
            </p>
          </div>

          <div className="flex h-72 items-end gap-3 border-b border-l border-slate-200 px-4 pb-2">
            {chartData.map((item) => {
              const height = (item.users / 1250) * 100;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <span className="mb-2 text-xs font-medium text-slate-500">
                    {item.users}
                  </span>

                  <div
                    className="w-full max-w-10 rounded-t-lg bg-blue-600 transition hover:bg-blue-700"
                    style={{ height: `${height}%` }}
                  ></div>

                  <span className="mt-2 text-xs text-slate-500">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Analytics */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Skill Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Most popular skills on the platform.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Web Development
                </span>
                <span className="text-slate-500">78%</span>
              </div>

              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[78%] rounded-full bg-blue-600"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Graphic Design
                </span>
                <span className="text-slate-500">65%</span>
              </div>

              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[65%] rounded-full bg-green-500"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Digital Marketing
                </span>
                <span className="text-slate-500">52%</span>
              </div>

              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[52%] rounded-full bg-yellow-500"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Photography
                </span>
                <span className="text-slate-500">44%</span>
              </div>

              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[44%] rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity */}
      <ActivityList />

      {/* Team Members */}
      <TeamMembers />
    </div>
  );
}

export default AdminD

