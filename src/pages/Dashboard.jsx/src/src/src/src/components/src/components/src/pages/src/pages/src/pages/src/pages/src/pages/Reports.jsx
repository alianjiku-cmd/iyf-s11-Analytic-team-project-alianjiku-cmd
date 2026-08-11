import { useState } from "react";
import {
  FileText,
  Download,
  Users,
  Activity,
  Award,
} from "lucide-react";

const reportData = [
  {
    id: 1,
    name: "Monthly User Report",
    type: "Users",
    date: "August 10, 2026",
    records: 2543,
  },
  {
    id: 2,
    name: "Activity Report",
    type: "Activity",
    date: "August 9, 2026",
    records: 8421,
  },
  {
    id: 3,
    name: "Skills Report",
    type: "Skills",
    date: "August 8, 2026",
    records: 342,
  },
];

function Reports() {
  const [reports] = useState(reportData);

  const exportCSV = () => {
    const headers = [
      "Report Name",
      "Type",
      "Date",
      "Records",
    ];

    const rows = reports.map((report) => [
      report.name,
      report.type,
      report.date,
      report.records,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "admin-dashboard-reports.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 pt-20 md:p-8 md:pt-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Reports
          </h1>

          <p className="mt-1 text-slate-500">
            Generate and export platform reports.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          <Download size={20} />
          Export CSV
        </button>
      </div>

      {/* Report cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Users size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                User Records
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                2,543
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <Activity size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Activity Records
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                8,421
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <Award size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Skill Records
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                342
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Reports table */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <FileText size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Available Reports
            </h2>

            <p className="text-sm text-slate-500">
              Download generated reports
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                  Report
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                  Type
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                  Date
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                  Records
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-4 py-4 font-semibold text-slate-800">
                    {report.name}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {report.type}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {report.date}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {report.records.toLocaleString()}
                  </td>

                  <td className="px-4 py-4">
                    <button
                      onClick={exportCSV}
                      className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
                    >
                      <Download size={17} />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;