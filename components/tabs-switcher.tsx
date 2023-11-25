import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsSwitcher() {
  return (
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics" disabled>
        Assets
      </TabsTrigger>
      <TabsTrigger value="reports" disabled>
        Income
      </TabsTrigger>
      <TabsTrigger value="notifications" disabled>
        Expenses
      </TabsTrigger>
      <TabsTrigger value="notifications" disabled>
        Liabilities
      </TabsTrigger>
    </TabsList>
  );
}
