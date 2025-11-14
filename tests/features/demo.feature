Feature: PMRP

# TC-PM-000 : ทดสอบการเข้าสู่ระบบ
Scenario: ทดสอบการเข้าสู่ระบบ
    Given เปิดเว็บไซต์ PMRP "http://203.154.184.162:5001/"
    When กรอก username "n.kissadapa"
    When กรอก password "123456"
    When คลิกปุ่ม Sign in "Sign in"
    Then แสดงหน้าหลัก

#TC-PM-001 : ทดสอบการเข้าถึงหน้า Permission
Scenario: ทดสอบการเข้าถึงหน้า Permission
    When เลือก OEM Komatsu "Komatsuสำนักงานใหญ่"
    When เลือกเมนูหลัก Ticket Management Center "Ticket Management Center"
    When เลือกเมนูย่อย Setting PermissionSLA "Setting PermissionSLA"
    When เลือกเมนู permission "Permission"

# TC-PM-002 : ทดสอบการคลิกปุ่ม Sync
Scenario: ทดสอบการคลิกปุ่ม Sync
    When คลิกปุ่ม Sync "Sync"
    
# TC-PM-006 : ทดสอบการค้นหาด้วย Name
Scenario: ทดสอบการค้นหา
    When ค้นหาด้วย Name "Name"
    When กรอกข้อมูล Name "Team"
    When คลิกค้นหา Name "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-006.1 : ทดสอบการค้นหาด้วย Department
    When ค้นหาด้วย Department "Department"
    When กรอกข้อมูล Department "Transform"
    When คลิกค้นหา Department "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-006.2 : ทดสอบการค้นหาด้วย Position
    When ค้นหาด้วย Position "Position"
    When กรอกข้อมูล Position "Test"
    When คลิกค้นหา Position "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-006.3 : ทดสอบการค้นหาด้วย Email
    When ค้นหาด้วย Email "Email"
    When กรอกข้อมูล Email "Jeerawat"
    When คลิกค้นหา Email "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-006.4 : ทดสอบการค้นหาด้วย Line ID
    When ค้นหาด้วย Line ID "Line ID"
    When กรอกข้อมูล Line ID "Wilaiwan"
    When คลิกค้นหา Line ID "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-006.5 : ทดสอบการค้นหาด้วย Phone
    When ค้นหาด้วย Phone "Phone"
    When กรอกข้อมูล Phone "0952505635"
    When คลิกค้นหา Phone "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-007 ทดสอบค้นหาด้วย Dropdown Permission
Scenario: ค้นหาด้วย Dropdown Permission
    When คลิก Dropdown Permission "Dropdown"
    When คลิกเลือก status "Super Admin"
    When คลิกค้นหา Permission "Search"
    When คลิกปุ่ม Clear "Clear"

# TC-PM-008 ทดสอบการค้นหา ที่ไม่มีข้อมูลในตาราง
Scenario: ทดสอบการค้นหา ที่ไม่มีข้อมูลในตาราง
    When ค้นหาด้วยข้อมูลที่ไม่มีในตาราง "ค้นหา"
    When กรอกข้อมูลในช่องค้นหา "Sunday"
    When คลิกค้นหา "Search"

# TC-PM-009 : ทดสอบ Clear ข้อมูลค้นหา
Scenario: ทดสอบ Clear ข้อมูลค้นหา 
    When คลิกปุ่ม Clear "Clear"

# TC-PM-005 : ตรวจสอบ Tooltip ชื่อผู้ใช้
Scenario: ตรวจสอบ Tooltip ชื่อผู้ใช้
    When นำเมาส์ไปวาง ชื่อผู้ใช้ "gen account (ไทย)"
    When นำเมาส์ออก

# TC-PM-005.1 : ตรวจสอบ Tooltip Department
Scenario: ตรวจสอบ Tooltip Department
    When นำเมาส์ไปวาง Department "Transform"
    When นำเมาส์ออก

# TC-PM-005.2 : ตรวจสอบ Tooltip Position
Scenario: ตรวจสอบ Tooltip Position
    When นำเมาส์ไปวาง Position "นักวิเคราะห์ระบบ"
    When นำเมาส์ออก

# TC-PM-005.3 : ตรวจสอบ Tooltip Permission
#Scenario: ตรวจสอบ Tooltip Permission
#    When นำเมาส์ไปวาง Permission "Implementer"
 #   When นำเมาส์ออก

# TC-PM-005.4 : ตรวจสอบ Tooltip เบอร์โทร
Scenario: ตรวจสอบ Tooltip เบอร์โทร
    When นำเมาส์ไปวาง เบอร์โทร "088-777-4444"
    When นำเมาส์ออก

# TC-PM-005.5 : ตรวจสอบ Tooltip Email
Scenario: ตรวจสอบ Tooltip Email
    When นำเมาส์ไปวาง Email "jeerawat62009@gmail.com"
    When นำเมาส์ออก

# TC-PM-005.6 : ตรวจสอบ Tooltip LineID
Scenario: ตรวจสอบ Tooltip LineID
    When นำเมาส์ไปวาง LineID "Wilaiwan"
    When นำเมาส์ออก

# TC-PM-010 ทดสอบการสลับจาก List View ไป Card View
Scenario: ทดสอบการสลับจาก List View ไป Card View
    When คลิก Card View "Card View"

# TC-PM-011 ทดสอบการสลับจาก Card View ไป List View
    When คลิก List View "List View"
    

# TC-PM-013 : ทดสอบการสลับสถานะเป็น Active
Scenario: ทดสอบการสลับสถานะเป็น Active 
    When คลิกสลับเป็น Active "Active"

# TC-PM-014 : ทดสอบการสลับสถานะเป็น Inactive
Scenario: ทดสอบการสลับสถานะเป็น Inactive
    When คลิกสลับเป็น Inactive "Inactive"

# TC-PM-015 : ทดสอบการเลือกสถานะ Permission
Scenario: ทดสอบการเลือกสถานะ Permission
    When คลิก Dropdown Status
    When คลิกเลือก Permission status "Super Admin"

# TC-PM-016 : ทดสอบการลบสถานะ Permission ด้วยไอคอน x
Scenario: ทดสอบการลบสถานะ Permission ด้วยไอคอน x
    When ลบ Permission status "X"

# TC-PM-018 : ทดสอบการเปลี่ยนไปหน้าถัดไป (Next Page)
Scenario: ทดสอบการเปลี่ยนไปหน้าถัดไป (Next Page)
    When คลิก Next Page "Next"

# TC-PM-019 : ทดสอบการเปลี่ยนกลับไปหน้าก่อนหน้า (Previous Page)
Scenario: ทดสอบการเปลี่ยนกลับไปหน้าก่อนหน้า (Previous Page)
    When คลิก Previous Page "Previous"

# TC-PM-020 : ทดสอบการคลิกเลือกเลขหน้า เพื่อกดไปยังหน้าอื่น
Scenario: ทดสอบการคลิกเลือกเลขหน้า เพื่อกดไปยังหน้าอื่น
    When คลิกเลือกเลขหน้า "2"

# TC-PM-021 : ทดสอบการเปลี่ยนจำนวนรายการต่อหน้า (เช่น 20 / page) 
Scenario: ทดสอบการเปลี่ยนจำนวนรายการต่อหน้า (เช่น 20 / page) 
    When คลิก Dropdown Page Size
    When คลิกเปลี่ยนจำนวน "20/page"