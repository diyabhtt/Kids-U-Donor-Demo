import { demoGrantors, demoGrants } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoGrants.map((grant) => ({ id: grant.id }));
}

export default function GrantDetailPage({ params }: { params: { id: string } }) {
  const grant = demoGrants.find((g) => g.id === params.id);
  if (!grant) {
    return <div className="p-6">Grant not found</div>;
  }

  const grantor = demoGrantors.find((g) => g.id === grant.grantorId);

  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Grant Details</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {grant.name}</p>
        <p><strong>Status:</strong> {grant.status}</p>
        <p><strong>Grantor:</strong> {grantor?.name || "N/A"}</p>
        <p><strong>Amount Requested:</strong> ${grant.amount.toFixed(2)}</p>
        <p><strong>Submitted:</strong> {new Date(grant.submittedDate).toLocaleDateString()}</p>
        <p><strong>Due Date:</strong> {new Date(grant.dueDate).toLocaleDateString()}</p>
      </div>
      <div className="mt-6 text-sm text-amber-600">
        Editing is disabled in demo mode. Changes are not saved.
      </div>
    </div>
  );
}
