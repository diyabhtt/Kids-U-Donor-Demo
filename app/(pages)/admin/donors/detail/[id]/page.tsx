import { demoDonations, demoDonors } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoDonors.map((donor) => ({ id: donor.id }));
}

export default function DonorDetailPage({ params }: { params: { id: string } }) {
  const donor = demoDonors.find((d) => d.id === params.id);
  if (!donor) {
    return <div className="p-6">Donor not found</div>;
  }

  const donations = demoDonations.filter((donation) => donation.donorId === donor.id);
  const total = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Donor Details</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {donor.name}</p>
        <p><strong>Email:</strong> {donor.email}</p>
        <p><strong>Type:</strong> {donor.type}</p>
        <p><strong>Status:</strong> {donor.status}</p>
        <p><strong>Total Donated:</strong> ${total.toFixed(2)}</p>
      </div>
      <div className="mt-6 text-sm text-amber-600">
        Editing is disabled in demo mode. Changes are not saved.
      </div>
    </div>
  );
}
