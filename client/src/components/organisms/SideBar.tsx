"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { LuMilk } from "react-icons/lu";
import Link from "next/link";
import { Home, LineChart, Package2, Settings } from "lucide-react";
import { PiCowDuotone } from "react-icons/pi";
import { LuStethoscope } from "react-icons/lu";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className={
              "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            }
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  pathname === "/dashboard"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground "
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/milk"
                className={`flex h-9 w-9 items-center ${
                  pathname === "/milk"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                } justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <LuMilk className="h-5 w-5" />
                <span className="sr-only">Milk</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">production</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/cow/create"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  pathname === "/cow/create"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <PiCowDuotone className="size-5" />
                <span className="sr-only">Register cow</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Register cow</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/health"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  pathname === "/health"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <LuStethoscope className="size-5" />
                <span className="sr-only">Health</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Health</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/analytics"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  pathname === "/analytics"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  pathname === "#"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
};
export default SideBar;
