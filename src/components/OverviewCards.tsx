import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OverviewCards() {
  const expenses = useItemStore((state) => state.expenses);
  const totalItems = expenses.length;

  // 1. คำนวณยอดรวมทั้งหมด (Total Spent)
  const totalSpent = expenses.reduce((sum, item) => sum + (item.amount || 0), 0);

  // 2. คำนวณค่าเฉลี่ย (Average Expense) ถ้าไม่มีรายการให้เป็น 0
  const averageExpense = totalItems > 0 ? totalSpent / totalItems : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* การ์ดที่ 1: ยอดรวมทั้งหมด */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            ฿{totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </CardContent>
      </Card>

      {/* การ์ดที่ 2: จำนวนรายการทั้งหมด */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">
            {totalItems} รายการ
          </div>
        </CardContent>
      </Card>

      {/* การ์ดที่ 3: ค่าเฉลี่ยต่อรายการ */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-700">
            ฿{averageExpense.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
