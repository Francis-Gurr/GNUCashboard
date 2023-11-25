"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";

const accounts = [
  {
    value: "all",
    label: "All Accounts",
  },
  {
    value: "joint",
    label: "Joint Accounts",
  },
  {
    value: "francis",
    label: "Francis' Accounts",
  },
  {
    value: "leyna",
    label: "Leyna's Accounts",
  },
];

export default function AccountSwitcher() {
  const [value, setValue] = React.useState("all");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          {accounts.find((account) => account.value === value)?.label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {accounts.map(
          (account) =>
            account.value !== value && (
              <DropdownMenuItem key={account.value}>
                <Link
                  onClick={() => {
                    setValue(account.value);
                  }}
                  href={`/${account.value}`}
                >
                  {account.label}
                </Link>
              </DropdownMenuItem>
            )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
