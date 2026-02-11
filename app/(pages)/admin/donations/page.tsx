"use client";
import React, { useState, useEffect } from "react";
import { demoDonations, demoDonors } from "@/app/demo/demoData";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import Loading from "@/app/loading";

/*
place holder list
*/

const headCells = [
  { id: "donorType", numeric: false, label: "Donor Type" },
  { id: "donor", numeric: false, label: "Donor" },
  { id: "amount", numeric: true, label: "Amount" },
  { id: "date", numeric: false, label: "Date" },
  { id: "campaign", numeric: false, label: "Campaign" },
  { id: "paymentMethod", numeric: false, label: "Method" },
  { id: "type", numeric: false, label: "Type" },
];
const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell: any) => (
          <TableCell key={headCell.id} style={styles.tableCellHeader}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default function DonationsList() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDonationsData = async () => {
    const mapped = demoDonations.map((donation) => {
      const donor = demoDonors.find((d) => d.id === donation.donorId);
      return {
        id: donation.id,
        amount: donation.amount,
        date: donation.date,
        type: "One-Time",
        paymentMethod: donation.method,
        campaign: "General Fund",
        donor: donor
          ? {
              type: donor.type,
              person: donor.type === "Individual" ? { firstName: donor.name.split(" ")[0], lastName: donor.name.split(" ").slice(1).join(" ") } : null,
              organization: donor.type === "Organization" ? { name: donor.name } : null,
            }
          : null,
      };
    });
    setData(mapped);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDonationsData();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <TableContainer>
          <Table stickyHeader sx={styles.table} aria-labelledby="tableTitle">
            <TableHeader />
            <TableBody>
              {data.map((donation) => {
                const donorName = donation?.donor?.person
                  ? `${donation.donor.person.firstName} ${donation.donor.person.lastName}`
                  : donation?.donor?.organization?.name || "—";
                const amount = typeof donation.amount === "number" ? donation.amount : Number(donation.amount ?? 0);
                const donorType = donation?.donor?.type || "";
                return (
                  <TableRow hover key={donation.id}>
                    <TableCell sx={styles.tableCell}>
                      <Link className="text-blue-500" href={`/admin/donations/detail/${donation.id}`}>
                        {donorType}
                      </Link>
                    </TableCell>
                    <TableCell sx={styles.tableCell}>{donorName}</TableCell>
                    <TableCell sx={styles.tableCell} align="right">${amount.toFixed(2)}</TableCell>
                    <TableCell sx={styles.tableCell}>{new Date(donation.date).toLocaleDateString()}</TableCell>
                    <TableCell sx={styles.tableCell}>{donation.campaign || ""}</TableCell>
                    <TableCell sx={styles.tableCell}>{donation.type !== "In-Kind" ? (donation.paymentMethod || "") : ""}</TableCell>
                    <TableCell sx={styles.tableCell}>{donation.type}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

const styles = {
  table: {
    minWidth: 750,
  },
  tableCellHeader: {
    fontWeight: "bold",
  },
  tableCell: {
    borderTop: "1px solid #ccc",
  },
};
