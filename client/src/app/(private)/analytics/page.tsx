"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Analytics() {
  const [cows, setCows] = useState([
    {
      id: "COW001",
      entryDate: "2023-05-01",
      breed: "Holstein",
    },
    {
      id: "COW002",
      entryDate: "2023-06-15",
      breed: "Montbéliard",
    },
    {
      id: "COW003",
      entryDate: "2023-07-20",
      breed: "Holstein",
    },
  ]);
  const [newCow, setNewCow] = useState({
    id: "",
    entryDate: "",
    breed: "Holstein",
  });
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setNewCow({ ...newCow, [e.target.name]: e.target.value });
  };
  const handleBreedChange = (value: string) => {
    setNewCow({ ...newCow, breed: value });
  };
  const handleAddCow = () => {
    setCows([...cows, newCow]);
    setNewCow({ id: "", entryDate: "", breed: "Holstein" });
  };
  const handleEditCow = (index: number) => {};
  const handleDeleteCow = (index: number) => {
    const updatedCows = [...cows];
    updatedCows.splice(index, 1);
    setCows(updatedCows);
  };
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cow Birth Records</h1>
        <p className="text-muted-foreground">
          Add new cows to the dairy management system.
        </p>
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Add New Cow</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="id">Mother ID</Label>
            <Input
              id="id"
              name="id"
              type="text"
              value={newCow.id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="entryDate">Entry Date</Label>
            <Input
              id="entryDate"
              name="entryDate"
              type="date"
              value={newCow.entryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
        </div>
        <div className="mt-4 flex justify-start">
          <Button onClick={handleAddCow}>Add Cow</Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Registered Cows</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cow ID</TableHead>
              <TableHead>Entry Date</TableHead>

              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cows.map((cow, index) => (
              <TableRow key={cow.id}>
                <TableCell>{cow.id}</TableCell>
                <TableCell>{cow.entryDate}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary"
                      onClick={() => handleEditCow(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500"
                      onClick={() => handleDeleteCow(index)}
                    >
                      Delete
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
