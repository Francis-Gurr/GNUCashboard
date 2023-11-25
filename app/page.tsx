import MainNav from "@/components/main-nav";
import SubNav from "@/components/sub-nav";
import TabsBody from "@/components/tabs-body";
import TabsSwitcher from "@/components/tabs-switcher";
import { Tabs } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Francis and Leyna",
  description: "Francis and Leyna's website",
};

export default function DashboardPage() {
  return (
    <div className="hidden flex-col md:flex">
      <MainNav />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SubNav />
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsSwitcher />
          <TabsBody />
        </Tabs>
      </div>
    </div>
  );
}
