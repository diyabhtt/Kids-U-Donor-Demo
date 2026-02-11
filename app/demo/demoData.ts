export type DemoVolunteer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  joinedDate: string;
  totalHours: number;
};

export type DemoEvent = {
  id: string;
  name: string;
  schedule: string;
  description: string;
  locationId: string;
  time: string;
  volunteersNeeded: number;
};

export type DemoLocation = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export type DemoDonor = {
  id: string;
  name: string;
  email: string;
  type: "Individual" | "Organization";
  status: "Active" | "Inactive";
};

export type DemoDonation = {
  id: string;
  donorId: string;
  amount: number;
  date: string;
  method: "Card" | "Check" | "Cash";
  note?: string;
};

export type DemoGrant = {
  id: string;
  grantorId: string;
  name: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  submittedDate: string;
  dueDate: string;
};

export type DemoGrantor = {
  id: string;
  name: string;
  contact: string;
  email: string;
  status: "Active" | "Inactive";
};

export type DemoVolunteerApplication = {
  id: string;
  legalName: string;
  preferredName?: string;
  email: string;
  phoneNumber: string;
  currentAddress: string;
  usCitizen: boolean;
  driversLicense: boolean;
  ownCar: boolean;
  speakSpanish: boolean;
  otherLanguages?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  professionalRefName: string;
  professionalRefPhone: string;
  personalRefName: string;
  personalRefPhone: string;
  educationLevel: string;
  highSchoolName?: string;
  collegeName?: string;
  degreeObtained?: string;
  additionalInfo1?: string;
  additionalInfo2?: string;
  arrestedOrConvicted: boolean;
  convictionExplanation?: string;
  agreedToTerms: boolean;
  eSignature: string;
  accepted: boolean;
};

export type DemoTask = {
  id: number;
  title: string;
  completed: boolean;
};

export type DemoVolunteerHour = {
  id: string;
  volunteerId: string;
  eventId: string;
  hours: number;
  date: string;
};

export const demoAdmins = [
  { id: "a1", name: "Ava Thompson", email: "ava@kids-u.org", role: "ADMIN" },
  { id: "a2", name: "Jordan Lee", email: "jordan@kids-u.org", role: "ADMIN" },
];

export const demoVolunteers: DemoVolunteer[] = [
  {
    id: "v1",
    firstName: "Maya",
    lastName: "Patel",
    email: "maya@demo.org",
    phone: "(214) 555-0181",
    status: "Active",
    joinedDate: "2024-06-12",
    totalHours: 48,
  },
  {
    id: "v2",
    firstName: "Elijah",
    lastName: "Nguyen",
    email: "elijah@demo.org",
    phone: "(214) 555-0128",
    status: "Active",
    joinedDate: "2023-11-03",
    totalHours: 72,
  },
  {
    id: "v3",
    firstName: "Sofia",
    lastName: "Martinez",
    email: "sofia@demo.org",
    phone: "(214) 555-0199",
    status: "Inactive",
    joinedDate: "2022-03-18",
    totalHours: 24,
  },
];

export const demoLocations: DemoLocation[] = [
  {
    id: "l1",
    name: "Kids-U Community Center",
    address: "1200 Elm St",
    city: "Dallas",
    state: "TX",
    zipCode: "75201",
  },
  {
    id: "l2",
    name: "Westside Food Hub",
    address: "457 Cedar Ave",
    city: "Dallas",
    state: "TX",
    zipCode: "75208",
  },
];

export const demoEvents: DemoEvent[] = [
  {
    id: "e1",
    name: "Community Food Drive",
    schedule: "2026-03-15T10:00:00.000Z",
    description: "Help distribute food to families.",
    locationId: "l2",
    time: "10:00 AM - 1:00 PM",
    volunteersNeeded: 20,
  },
  {
    id: "e2",
    name: "STEM Mentorship Day",
    schedule: "2026-04-02T14:00:00.000Z",
    description: "Mentor students through hands-on STEM activities.",
    locationId: "l1",
    time: "2:00 PM - 5:00 PM",
    volunteersNeeded: 15,
  },
  {
    id: "e3",
    name: "Family Reading Night",
    schedule: "2026-04-20T18:00:00.000Z",
    description: "Read with families and support literacy.",
    locationId: "l1",
    time: "6:00 PM - 8:00 PM",
    volunteersNeeded: 10,
  },
];

export const demoVolunteerHours: DemoVolunteerHour[] = [
  { id: "h1", volunteerId: "v1", eventId: "e1", hours: 4, date: "2026-01-12" },
  { id: "h2", volunteerId: "v1", eventId: "e2", hours: 3, date: "2026-02-05" },
  { id: "h3", volunteerId: "v2", eventId: "e2", hours: 5, date: "2026-02-05" },
];

export const demoTasks: DemoTask[] = [
  { id: 1, title: "Review March volunteer roster", completed: false },
  { id: 2, title: "Prep donor thank-you notes", completed: true },
  { id: 3, title: "Confirm venue for STEM Day", completed: false },
];

export const demoDonors: DemoDonor[] = [
  { id: "d1", name: "Hannah Brooks", email: "hannah@demo.org", type: "Individual", status: "Active" },
  { id: "d2", name: "Northwind Foundation", email: "contact@northwind.org", type: "Organization", status: "Active" },
  { id: "d3", name: "Civic Builders LLC", email: "info@civicbuilders.com", type: "Organization", status: "Inactive" },
];

export const demoDonations: DemoDonation[] = [
  { id: "dn1", donorId: "d1", amount: 250, date: "2026-01-05", method: "Card", note: "Winter drive" },
  { id: "dn2", donorId: "d2", amount: 1500, date: "2026-01-20", method: "Check" },
  { id: "dn3", donorId: "d1", amount: 100, date: "2026-02-02", method: "Cash" },
];

export const demoGrantors: DemoGrantor[] = [
  { id: "g1", name: "Bright Futures Fund", contact: "Lena Park", email: "lena@brightfutures.org", status: "Active" },
  { id: "g2", name: "Dallas Community Trust", contact: "Sam Ortiz", email: "sam@dctrust.org", status: "Active" },
];

export const demoGrants: DemoGrant[] = [
  {
    id: "gr1",
    grantorId: "g1",
    name: "After School Enrichment",
    amount: 5000,
    status: "Pending",
    submittedDate: "2026-01-10",
    dueDate: "2026-03-01",
  },
  {
    id: "gr2",
    grantorId: "g2",
    name: "Family Literacy Initiative",
    amount: 8000,
    status: "Approved",
    submittedDate: "2025-12-15",
    dueDate: "2026-02-15",
  },
];

export const demoVolunteerApplications: DemoVolunteerApplication[] = [
  {
    id: "va1",
    legalName: "Camille Wright",
    preferredName: "Cam",
    email: "camille@demo.org",
    phoneNumber: "(469) 555-0104",
    currentAddress: "553 Meadow Dr, Dallas, TX 75204",
    usCitizen: true,
    driversLicense: true,
    ownCar: true,
    speakSpanish: false,
    emergencyContactName: "Jordan Wright",
    emergencyContactPhone: "(469) 555-0111",
    professionalRefName: "Tariq Allen",
    professionalRefPhone: "(972) 555-0191",
    personalRefName: "Priya Desai",
    personalRefPhone: "(972) 555-0122",
    educationLevel: "Bachelor's",
    collegeName: "UT Dallas",
    degreeObtained: "Education",
    additionalInfo1: "Available weekday afternoons.",
    additionalInfo2: "Interested in tutoring and STEM.",
    arrestedOrConvicted: false,
    agreedToTerms: true,
    eSignature: "Camille Wright",
    accepted: false,
  },
  {
    id: "va2",
    legalName: "Miguel Harper",
    preferredName: "Miguel",
    email: "miguel@demo.org",
    phoneNumber: "(469) 555-0177",
    currentAddress: "892 Lakeview Rd, Dallas, TX 75230",
    usCitizen: true,
    driversLicense: true,
    ownCar: false,
    speakSpanish: true,
    otherLanguages: "Portuguese",
    emergencyContactName: "Rosa Harper",
    emergencyContactPhone: "(469) 555-0179",
    professionalRefName: "Evan Park",
    professionalRefPhone: "(214) 555-0198",
    personalRefName: "Lia Gomes",
    personalRefPhone: "(214) 555-0118",
    educationLevel: "Associate",
    highSchoolName: "Lakeview HS",
    additionalInfo1: "Weekend availability.",
    arrestedOrConvicted: false,
    agreedToTerms: true,
    eSignature: "Miguel Harper",
    accepted: true,
  },
];

export const demoOrientations = [
  { id: "o1", title: "Volunteer Orientation", date: "2026-03-05", locationId: "l1" },
  { id: "o2", title: "Youth Safety Training", date: "2026-03-18", locationId: "l1" },
];

export const demoGalleryImages = [
  "/demo-gallery-1.svg",
  "/demo-gallery-2.svg",
  "/demo-gallery-3.svg",
];

export const demoRegistrations = [
  { id: "r1", eventId: "e1", volunteerId: "v1", status: "Registered" },
  { id: "r2", eventId: "e2", volunteerId: "v2", status: "Registered" },
];
