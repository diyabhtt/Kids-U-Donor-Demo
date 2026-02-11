"use client"; 

import { useState, useEffect } from "react";
import { demoEvents, demoLocations } from "@/app/demo/demoData";

const Breadcrumb = () => (
  <div className="mb-5 text-sm text-gray-600 flex items-center space-x-2">
    <span className="hover:text-blue-500 cursor-pointer transition-colors duration-200">
      Home
    </span>
    <span className="text-gray-400">/</span>
    <span className="font-semibold text-gray-700">Checkin : Checkout</span>
  </div>
);

export default function Checkinout() {
  const [checkInTime, setCheckInTime] = useState<Date | null>(null);
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentEvent, setCurrentEvent] = useState<any>(null);

  // Manual entry state for Column 2
  const [manualCheckInDate, setManualCheckInDate] = useState<string>("");
  const [manualCheckInTime, setManualCheckInTime] = useState<string>("");
  const [manualCheckOutDate, setManualCheckOutDate] = useState<string>("");
  const [manualCheckOutTime, setManualCheckOutTime] = useState<string>("");

  const showMessage = (msg: string, isError: boolean = false) => {
    setMessage(msg);
    setVisible(true);
    if (isError) console.error(msg);
    else console.log(msg);
  };

  // Demo: pick first upcoming event
  useEffect(() => {
    const event = demoEvents[0];
    if (event) {
      const location = demoLocations.find((loc) => loc.id === event.locationId);
      setCurrentEvent({
        ...event,
        locationName: location ? `${location.name}, ${location.city}` : "TBD",
      });
    }
  }, []);

  // Handle automatic Check-In
  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now);
    const checkInMessage = `Check-In Time: ${now.toLocaleTimeString()}`;
    showMessage(checkInMessage);
  };

  // Handle automatic Check-Out (UI only)
  const handleCheckOut = async () => {
    if (isSubmitting || !checkInTime) {
      showMessage("Please check in first.", true);
      return;
    }

    if (!currentEvent) {
      showMessage("No active event found. Please try again.", true);
      return;
    }

    setIsSubmitting(true);
    const now = new Date();
    showMessage(`Check-Out Time: ${now.toLocaleTimeString()}
Session summary shown for demo only.`);
    setCheckInTime(null);
    setIsSubmitting(false);
  };

  // Handle manual hours calculation (UI only)
  const handleManualHours = async () => {
    if (isSubmitting) return;

    if (!manualCheckInDate || !manualCheckInTime || !manualCheckOutDate || !manualCheckOutTime) {
      showMessage("Please fill in all date and time fields.", true);
      return;
    }

    if (!currentEvent) {
      showMessage("No active event found. Please try again.", true);
      return;
    }

    const checkIn = new Date(`${manualCheckInDate}T${manualCheckInTime}`);
    const checkOut = new Date(`${manualCheckOutDate}T${manualCheckOutTime}`);

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
      showMessage("Invalid date or time format.", true);
      return;
    }

    if (checkIn >= checkOut) {
      showMessage("Check-out time must be after check-in time.", true);
      return;
    }

    setIsSubmitting(true);
    showMessage("Manual session summary shown for demo only.");
    setIsSubmitting(false);
  };

  // Effect to handle fade-out after 10 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div className="p-6">
      <Breadcrumb />
      <h2 className="underline text-center mb-4 text-5xl font-semibold text-gray-700">
        Check-In / Check-Out
      </h2>
      {currentEvent && (
        <p className="text-center text-sm text-gray-500 mb-6">
          Current event: {currentEvent.name} • {currentEvent.locationName}
        </p>
      )}

      <div className="flex items-start justify-center space-x-12 mt-10">
        {/* Column 1: Automatic Check-In/Check-Out */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">Button Entry</h1>
          <button
            onClick={handleCheckIn}
            disabled
            title="Disabled in demo mode"
            className="bg-blue-500/70 text-white rounded-sm p-2 w-60 cursor-not-allowed"
          >
            Check-In
          </button>
          <button
            onClick={handleCheckOut}
            disabled
            title="Disabled in demo mode"
            className="bg-blue-500/70 text-white rounded-sm p-2 w-60 cursor-not-allowed"
          >
            Check-Out
          </button>
        </div>

        {/* Divider */}
        <div className="border-r border-gray-400 h-48 mx-8"></div>

        {/* Column 2: Manual Date and Time Entry */}
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">Manual Entry</h1>
          <div className="flex flex-col space-y-2">
            <input
              type="date"
              value={manualCheckInDate}
              onChange={(e) => setManualCheckInDate(e.target.value)}
              className="border rounded-md p-2"
              placeholder="Enter Check-In Date"
            />
            <input
              type="time"
              value={manualCheckInTime}
              onChange={(e) => setManualCheckInTime(e.target.value)}
              className="border rounded-md p-2"
              placeholder="Enter Check-In Time"
            />
            <input
              type="date"
              value={manualCheckOutDate}
              onChange={(e) => setManualCheckOutDate(e.target.value)}
              className="border rounded-md p-2"
              placeholder="Enter Check-Out Date"
            />
            <input
              type="time"
              value={manualCheckOutTime}
              onChange={(e) => setManualCheckOutTime(e.target.value)}
              className="border rounded-md p-2"
              placeholder="Enter Check-Out Time"
            />
          </div>
          <button
            onClick={handleManualHours}
            className="bg-green-500 text-white rounded-sm p-2 w-60 mt-4"
          >
            Calculate Hours
          </button>
        </div>
      </div>

      {/* Display message */}
      {message && (
        <div
          className={`mt-4 p-4 border rounded-lg bg-green-100 text-green-700 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          {message.split("\n").map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      )}
    </div>
  );
}
