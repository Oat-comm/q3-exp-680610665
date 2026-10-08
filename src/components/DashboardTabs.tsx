import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      {/* ส่วนหัวข้อและปุ่มสลับ Tab */}
      <TabsList className="grid w-full max-w-[400px] grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>

      {/* เนื้อหาภายใน Tab: Overview */}
      <TabsContent value="overview" className="mt-4">
        <OverviewCards />
      </TabsContent>

      {/* เนื้อหาภายใน Tab: By Category */}
      <TabsContent value="category" className="mt-4">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
