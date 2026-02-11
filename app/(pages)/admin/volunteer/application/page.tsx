'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { demoVolunteerApplications } from '@/app/demo/demoData';

type ApplicationSummary = {
  id: string;
  createdAt: string;
  legalName: string;
  preferredName: string | null;
  email: string;
  phoneNumber: string;
  educationLevel: string;
  accepted: boolean;
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationSummary[]>([]);

  useEffect(() => {
    const apps = demoVolunteerApplications.map((app) => ({
      id: app.id,
      createdAt: new Date().toISOString(),
      legalName: app.legalName,
      preferredName: app.preferredName || null,
      email: app.email,
      phoneNumber: app.phoneNumber,
      educationLevel: app.educationLevel,
      accepted: app.accepted,
    }));
    setApplications(apps);
  }, []);

  const toggleAccepted = async (id: string, accepted: boolean) => {
    setApplications(apps =>
      apps.map(app => (app.id === id ? { ...app, accepted: !accepted } : app))
    );
  };

  const rejectApplication = async (id: string) => {
    // Disabled in demo mode
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Volunteer Applications</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Preferred Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Education</th>
            <th className="p-2">Accepted</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id} className="border-t">
              <td className="p-2">{app.legalName}</td>
              <td className="p-2">{app.preferredName || '-'}</td>
              <td className="p-2">{app.email}</td>
              <td className="p-2">{app.phoneNumber}</td>
              <td className="p-2">{app.educationLevel}</td>
              <td className="p-2">{app.accepted ? 'Yes' : 'No'}</td>
              <td className="p-2 space-x-2">
                <Link
                  href={`/admin/volunteer/application/${app.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Full Application
                </Link>
                <button
                  onClick={() => toggleAccepted(app.id, app.accepted)}
                  title="Demo only. Changes are not saved."
                  className="text-white bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
                >
                  {app.accepted ? 'Unaccept' : 'Accept'}
                </button>
                <button
                  disabled
                  title="Disabled in demo mode"
                  className="text-white bg-red-600/70 px-2 py-1 rounded cursor-not-allowed"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
