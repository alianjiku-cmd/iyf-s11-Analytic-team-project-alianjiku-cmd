
```jsx
import React from "react";

const teamMembers = [
  {
    name: "Pius",
    role: "Project Lead & Backend Developer",
    responsibilities:
      "Backend infrastructure, APIs, authentication, database, security and system architecture.",
    technology:
      "Node.js, Express.js, PostgreSQL, Prisma, JWT, Socket.IO",
  },
  {
    name: "Judy",
    role: "UI/UX Designer & Frontend Developer",
    responsibilities:
      "UI design, login and registration, home page, navigation, reusable components and responsive design.",
    technology:
      "React, Tailwind CSS, React Router, React Hook Form",
  },
  {
    name: "Edwin",
    role: "Search & Discovery Developer",
    responsibilities:
      "Search, skill filters, category filters, location search, Google Maps and search suggestions.",
    technology:
      "React, Tailwind CSS, React Router, Google Maps API",
  },
  {
    name: "Emma",
    role: "Profile & Skills Management",
    responsibilities:
      "User profiles, skills management, portfolios, certificates, profile pictures and profile settings.",
    technology:
      "React, Tailwind CSS, React Hook Form",
  },
  {
    name: "Alice",
    role: "Dashboard & Analytics Developer",
    responsibilities:
      "Admin dashboard, user statistics, charts, reports, activity monitoring, skill analytics and exports.",
    technology:
      "React, Tailwind CSS, React Router, Recharts",
  },
  {
    name: "Hilda",
    role: "Messaging & Notifications",
    responsibilities:
      "Chat interface, inbox, conversations, notifications, real-time messaging and read receipts.",
    technology:
      "React, Tailwind CSS, React Router",
  },
  {
    name: "Nancy",
    role: "Community Engagement & Support",
    responsibilities:
      "Volunteer opportunities, mentorship, community events, help center, FAQs and feedback.",
    technology:
      "React, Tailwind CSS, React Hook Form, React Router",
  },
];

function TeamMembers() {
  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          ISDP Development Team
        </h2>

        <p className="mt-2 text-slate-500">
          Our team members and their responsibilities in the Community Skills
          Development Platform.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {member.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  {member.name}
                </h3>

                <p className="text-sm font-medium text-blue-600">
                  {member.role}
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              {member.responsibilities}
            </p>

            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Technology
              </p>

              <p className="mt-1 text-sm text-slate-700">
                {member.technology}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
```
