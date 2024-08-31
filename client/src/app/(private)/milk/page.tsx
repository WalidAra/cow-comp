/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useAxios, useFetch } from "@/hooks";

interface MilkEntry {
  id: string;
  date: string;
  quantity: string;
}

const Milk = () => {
  const session = useSession();

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [quantity, setQuantity] = useState("");
  const [entries, setEntries] = useState<MilkEntry[]>([]);

  const { response } = useFetch<any[]>({
    endpoint: "/",
    method: "GET",
    feature: "dailyProduction",
    accessToken: session.data?.user?.name as string,
    includeToken: true,
    callback() {
      if (response?.status === true) {
        setEntries(response.data);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEntry: MilkEntry = {
      id: new Date().toISOString(),
      date,
      quantity,
    };

    setEntries([...entries, newEntry]);

    if (session.data?.user?.name) {
      const res = await useAxios<any>({
        endpoint: "/",
        method: "POST",
        body: { quantity },
        feature: "cows",
        accessToken: session.data.user.name,
        includeToken: true,
      });

      if (res.status) {
        setQuantity("");
      }
    }
  };

  const handleEdit = (entry: MilkEntry) => {
    // Implement edit functionality
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <main className="grid">
      <div className="container xl:w-[40%] mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Milk Production</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg border-border border mb-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity (Liters)
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit" size={"sm"} className="w-16">
              Save
            </Button>
          </div>
        </form>
        <div className="bg-white p-6 rounded-lg border-border border">
          <h2 className="text-xl font-bold mb-4">Production History</h2>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Quantity (Liters)
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id} className="bg-accent">
                    <TableCell className="hidden sm:table-cell">
                      {entry.date}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        {entry.quantity}L
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <Button
                          size={"sm"}
                          className="w-16"
                          onClick={() => handleEdit(entry)}
                        >
                          Edit
                        </Button>
                        <Button
                          size={"sm"}
                          className="bg-red-500 w-16 hover:bg-red-600"
                          onClick={() => handleDelete(entry.id)}
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
      </div>
    </main>
  );
};

export default Milk;
