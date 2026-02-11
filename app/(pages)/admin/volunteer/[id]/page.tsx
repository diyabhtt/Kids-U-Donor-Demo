import { demoVolunteers } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoVolunteers.map((volunteer) => ({ id: volunteer.id }));
}

export default function VolunteerDetailsPage({ params }: { params: { id: string } }) {
  const volunteer = demoVolunteers.find((v) => v.id === params.id);

  if (!volunteer) {
    return <div className="p-6">Volunteer not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Volunteer Details</h1>
      <h2 className="text-lg font-semibold mt-6 mb-2">Personal Info</h2>
      <p><strong>First Name:</strong> {volunteer.firstName}</p>
      <p><strong>Last Name:</strong> {volunteer.lastName}</p>
      <p><strong>Email:</strong> {volunteer.email}</p>
      <p><strong>Phone:</strong> {volunteer.phone}</p>
      <p><strong>Status:</strong> {volunteer.status}</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Volunteer Profile</h2>
      <p><strong>Joined:</strong> {new Date(volunteer.joinedDate).toLocaleDateString()}</p>
      <p><strong>Total Hours:</strong> {volunteer.totalHours}</p>
      <p><strong>Preferred Roles:</strong> Tutoring, Event Support</p>
      <p><strong>Availability:</strong> Weekends, Evenings</p>
      <p className="text-sm text-gray-500 mt-4">Demo data only. Changes are not saved.</p>
    </div>
  );
}
