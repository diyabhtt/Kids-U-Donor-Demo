import { demoVolunteerApplications } from "@/app/demo/demoData";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoVolunteerApplications.map((application) => ({ id: application.id }));
}

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const application = demoVolunteerApplications.find((app) => app.id === params.id);

  if (!application) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Application Not Found</h1>
        <p className="mt-2 text-gray-500">We couldn&apos;t find the application you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-blue-800 mb-6">
        Full Application for {application.legalName}
      </h1>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <span className="font-medium text-gray-700">Legal Name:</span>
            <span className="text-gray-900"> {application.legalName}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Preferred Name:</span>
            <span className="text-gray-900"> {application.preferredName || "N/A"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-900"> {application.email}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Phone Number:</span>
            <span className="text-gray-900"> {application.phoneNumber}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Current Address:</span>
            <span className="text-gray-900"> {application.currentAddress}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <span className="font-medium text-gray-700">US Citizen:</span>
            <span className="text-gray-900"> {application.usCitizen ? "Yes" : "No"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Drivers License:</span>
            <span className="text-gray-900"> {application.driversLicense ? "Yes" : "No"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Own Car:</span>
            <span className="text-gray-900"> {application.ownCar ? "Yes" : "No"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Speak Spanish:</span>
            <span className="text-gray-900"> {application.speakSpanish ? "Yes" : "No"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Other Languages:</span>
            <span className="text-gray-900"> {application.otherLanguages || "N/A"}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700">Emergency Contact</h2>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="text-gray-900"> {application.emergencyContactName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-900"> {application.emergencyContactPhone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700">Professional Reference</h2>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="text-gray-900"> {application.professionalRefName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-900"> {application.professionalRefPhone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700">Personal Reference</h2>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="text-gray-900"> {application.personalRefName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-900"> {application.personalRefPhone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-medium text-gray-700">Education</h2>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <span className="font-medium text-gray-700">Education Level:</span>
              <span className="text-gray-900"> {application.educationLevel}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">High School:</span>
              <span className="text-gray-900"> {application.highSchoolName || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">College:</span>
              <span className="text-gray-900"> {application.collegeName || "N/A"}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Degree Obtained:</span>
              <span className="text-gray-900"> {application.degreeObtained || "N/A"}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <span className="font-medium text-gray-700">Additional Info 1:</span>
            <span className="text-gray-900"> {application.additionalInfo1 || "N/A"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Additional Info 2:</span>
            <span className="text-gray-900"> {application.additionalInfo2 || "N/A"}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Arrested or Convicted:</span>
            <span className="text-gray-900"> {application.arrestedOrConvicted ? "Yes" : "No"}</span>
          </div>
        </div>

        <div>
          <span className="font-medium text-gray-700">Application Status:</span>
          <span className="text-gray-900"> {application.accepted ? "Accepted" : "Pending"}</span>
        </div>
      </div>
    </div>
  );
}
