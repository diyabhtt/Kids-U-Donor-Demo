'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { demoRegistrations, demoVolunteers } from "@/app/demo/demoData";

interface Volunteer {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  registration: boolean;
}

const VolunteersPage = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const volunteersData: Volunteer[] = demoVolunteers.map((volunteer) => ({
      id: volunteer.id,
      firstName: volunteer.firstName,
      lastName: volunteer.lastName,
      emailAddress: volunteer.email,
      registration: demoRegistrations.some((reg) => reg.volunteerId === volunteer.id),
    }));
    setVolunteers(volunteersData);
    setLoading(false);
  }, []);

  const handleViewDetails = (id: string) => {
    router.push(`/admin/volunteer/${id}`);
  };

  if (loading) {
    return <div>Loading volunteers...</div>;
  }

  return (
    <div>
      <h1>Volunteers List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{`${volunteer.firstName} ${volunteer.lastName}`}</td>
              <td>{volunteer.emailAddress}</td>
              <td>{volunteer.registration ? "Registered" : "Not Registered"}</td>
              <td>
                <button onClick={() => handleViewDetails(volunteer.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersPage;
