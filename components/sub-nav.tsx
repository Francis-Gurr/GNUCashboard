import AccountSwitcher from "@/components/account-switcher";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function SubNav() {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">All Accounts</h2>
      <div className="flex items-center space-x-2">
        <CalendarDateRangePicker />
        <AccountSwitcher />
      </div>
    </div>
  );
}
