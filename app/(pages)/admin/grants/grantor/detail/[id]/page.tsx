import { demoGrantors } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoGrantors.map((grantor) => ({ id: grantor.id }));
}

export default function GrantorDetailPage({ params }: { params: { id: string } }) {
  const grantor = demoGrantors.find((g) => g.id === params.id);
  if (!grantor) {
    return <div className="p-6">Grantor not found</div>;
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Grantor Details</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {grantor.name}</p>
        <p><strong>Contact:</strong> {grantor.contact}</p>
        <p><strong>Email:</strong> {grantor.email}</p>
        <p><strong>Status:</strong> {grantor.status}</p>
      </div>
      <div className="mt-6 text-sm text-amber-600">
        Editing is disabled in demo mode. Changes are not saved.
      </div>
    </div>
  );
}
