
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back, Admin! Here's what's happening on your platform.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Users */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                1,250
              </h2>

              <p className="mt-2 text-sm font-medium text-green-600">
                ↑ 12% this month
              </p>
            </div>

            <div className="rounded-full bg-blue-100 p-4 text-2xl">
              👥
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                890
              </h2>

              <p className="mt-2 text-sm font-medium text-green-600">
                ↑ 8% this month
              </p>
            </div>

            <div className="rounded-full bg-green-100 p-4 text-2xl">
              🟢
            </div>
          </div>
        </div>

        {/* Total Skills */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Skills
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                35
              </h2>

              <p className="mt-2 text-sm font-medium text-blue-600">
                5 new skills
              </p>
            </div>

            <div className="rounded-full bg-yellow-100 p-4 text-2xl">
              🎯
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Reports
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                120
              </h2>

              <p className="mt-2 text-sm font-medium text-purple-600">
                18 generated this week
              </p>
            </div>

            <div className="rounded-full bg-purple-100 p-4 text-2xl">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* User Growth */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              User Growth
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              New registered users over the last six months
            </p>
          </div>

          {/* Simple Growth Chart */}
          <div className="flex h-64 items-end justify-between gap-4 border-b border-gray-200 px-4">

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "35%" }}
              ></div>
            </div>

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "48%" }}
              ></div>
            </div>

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "55%" }}
              ></div>
            </div>

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "68%" }}
              ></div>
            </div>

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "78%" }}
              ></div>
            </div>

            <div className="flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-blue-500"
                style={{ height: "90%" }}
              ></div>
            </div>
          </div>

          {/* Chart Labels */}
          <div className="mt-3 flex justify-between px-4 text-sm text-gray-500">
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>

        {/* Platform Overview */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800">
            Platform Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current platform statistics
          </p>

          <div className="mt-8 space-y-7">

            {/* Active Users */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-gray-700">
                  Active Users
                </span>

                <span className="font-semibold text-blue-600">
                  71%
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-blue-500"
                  style={{ width: "71%" }}
                ></div>
              </div>
            </div>

            {/* Skills Completed */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-gray-700">
                  Skills Completed
                </span>

                <span className="font-semibold text-green-600">
                  64%
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-500"
                  style={{ width: "64%" }}
                ></div>
              </div>
            </div>

            {/* Profile Completion */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-gray-700">
                  Profile Completion
                </span>

                <span className="font-semibold text-purple-600">
                  82%
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-purple-500"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Platform Status */}
      <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
            🟢
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Platform Status
            </h2>

            <p className="mt-1 text-gray-600">
              Your Community Skills Development Platform is running
              successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

