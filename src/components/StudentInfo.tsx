
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"; // ตรวจสอบ Path ให้ถูกต้องตามโปรเจกต์ของคุณ (เช่น "./ui/drawer" หรือ "@/components/ui/drawer")
export function StudentInfo() {
  return (
    <div className="flex-1 p-4">
      <Drawer>
        {/* ส่วนปุ่มที่ใช้คลิกเพื่อเปิดข้อมูล */}
        <DrawerTrigger asChild>
          <button className="border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-100 transition-colors">
            Chonlakorn Theerasatinakul
          </button>
        </DrawerTrigger>

        {/* ส่วนเนื้อหาข้อมูลนักศึกษาที่จะเลื่อนออกมา */}
        <DrawerContent className="p-6">
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>รายละเอียดประวัตินักศึกษา</DrawerDescription>
          </DrawerHeader>

          <div className="mt-4 flex flex-col items-center space-y-4">
            {/* 1. รูปภาพนักศึกษา (ใส่ url รูปของคุณตรง src) */}
            <img 
               src="/profile.jpg"
               alt="Student Profile"
               className="w-32 h-32 rounded-full object-cover border"
             />


            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold">Chonlakorn Theerasatinakul</h3>
              
              {/* 2. คำอธิบายสั้นๆ */}
              <p className="text-sm text-gray-500">นักศึกษามหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์</p>
              
              {/* 3. งานอดิเรก */}
              <p className="text-sm"><strong>งานอดิเรก:</strong> เล่นเกม, ฟังเพลง, เขียนโค้ด</p>
              
              {/* 4. CMU Email */}
              <p className="text-sm text-blue-600"><strong>Email:</strong> chonlakorn_t@cmu.ac.th</p>
              
              {/* 5. Social Handle */}
              <p className="text-sm text-gray-600"><strong>Social:</strong> @oatcomm</p>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

