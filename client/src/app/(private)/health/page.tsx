"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  const [newExam, setNewExam] = useState({
    date: "",
    cowId: "",
    details: "",
  });
  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      date: "2023-05-15",
      cowId: "COW001",
      details: "Mild fever, treated with antibiotics",
    },
    {
      id: 2,
      date: "2023-04-20",
      cowId: "COW002",
      details: "Hoof infection, treated with topical ointment",
    },
    {
      id: 3,
      date: "2023-03-10",
      cowId: "COW003",
      details: "Mastitis, treated with antibiotics and anti-inflammatory",
    },
  ]);
  const handleNewExam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExam({
      ...newExam,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMedicalRecords([
      ...medicalRecords,
      { id: medicalRecords.length + 1, ...newExam },
    ]);
    setNewExam({ date: "", cowId: "", details: "" });
  };
  const handleEdit = (id: number) => {};
  const handleDelete = (id: number) => {
    setMedicalRecords(medicalRecords.filter((record) => record.id !== id));
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-6 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Cow Medical Records</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-background rounded-lg shadow-sm p-6 mb-8"
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Label htmlFor="date">Examination Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={newExam.date}
              onChange={handleNewExam}
              required
            />
          </div>
          <div className="col-span-1">
            <Label htmlFor="cowId">Cow ID</Label>
            <Input
              id="cowId"
              name="cowId"
              value={newExam.cowId}
              onChange={handleNewExam}
              required
            />
          </div>
          <div className="col-span-1">
            <Label htmlFor="details">Details</Label>
            <Input
              id="details"
              name="details"
              value={newExam.details}
              onChange={handleNewExam}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit">Record Examination</Button>
        </div>
      </form>
      <div className="bg-background rounded-lg shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Examination Date</TableHead>
              <TableHead>Cow ID</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicalRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.cowId}</TableCell>
                <TableCell>{record.details}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(record.id)}
                    >
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(record.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
