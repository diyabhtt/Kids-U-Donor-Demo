import { demoDonations, demoDonors } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoDonations.map((donation) => ({ id: donation.id }));
}

export default function DonationDetailPage({ params }: { params: { id: string } }) {
  const donation = demoDonations.find((item) => item.id === params.id);
  if (!donation) {
    return <div className="p-6">Donation not found</div>;
  }

  const donor = demoDonors.find((d) => d.id === donation.donorId);
  const donorName = donor ? donor.name : "Unknown";

  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Donation Details</h1>
      <div className="space-y-2">
        <p><strong>Donor:</strong> {donorName}</p>
        <p><strong>Amount:</strong> ${donation.amount.toFixed(2)}</p>
        <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
        <p><strong>Method:</strong> {donation.method}</p>
        <p><strong>Campaign:</strong> General Fund</p>
        <p><strong>Notes:</strong> {donation.note || "N/A"}</p>
      </div>
      <div className="mt-6 text-sm text-amber-600">
        Editing is disabled in demo mode. Changes are not saved.
      </div>
    </div>
  );
}
