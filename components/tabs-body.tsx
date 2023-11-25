import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Gem, Scale, TrendingDown, TrendingUp, Weight } from "lucide-react";

const overviewTiles = [
  {
    value: "equity",
    label: "Equity",
    amount: "£550,000",
    percentageChange: "+20.1%",
    icon: Scale,
  },
  {
    value: "assets",
    label: "Assets",
    amount: "£1,250,000",
    percentageChange: "+15.2%",
    icon: Gem,
  },
  {
    value: "income",
    label: "Income",
    amount: "£40,000",
    percentageChange: "+5.3%",
    icon: TrendingUp,
  },
  {
    value: "expenses",
    label: "Expenses",
    amount: "£12,000",
    percentageChange: "-2.7%",
    icon: TrendingDown,
  },
  {
    value: "liabilities",
    label: "Liabilities",
    amount: "£250,000",
    percentageChange: "-17.4%",
    icon: Weight,
  },
];

export default function TabsBody() {
  return (
    <TabsContent value="overview" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {overviewTiles.map((tile) => (
          <Card key={tile.value}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {tile.label}
              </CardTitle>
              {<tile.icon className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tile.amount}</div>
              <p className="text-xs text-muted-foreground">
                {tile.percentageChange} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
