# Status-200

# Project: Travel Insureance: Basic Buy

# Convention Web UI

## Common Convention

- For implementation code should use 'Semi-colon -> ;' back of the line always.
  
  ```
  console.log(this.test);
  ```

## Function And Parameter Naming Conventions

- ส่วนที่เกี่ยวข้องกับ UI และคำนวณ จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
  
  ```
  func homepage() //UI
  func calculateTotalPrice() //logic
  ```

## HTML Element ID

- จะใช้รูปแบบการตั้งชื่อแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
  
  ```
  receiverName
  totalAmount
  ```

## Directory Name

- using lower case letter เช่น
  
  ```
  order
  product
  ```

## File Name

- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์ใหญ่**
  
  ```
  Order.js
  Shipping.test.js
  ```

## Test Name

- ใช้รูปแบบการตั้งชื่อให้สื่อความหมาย เช่น
  
  ```
  describe('CalculateTotalPrice', () => {
  it('Input 5+8 should be 13',()=>{
        const expected = 13
        const productPriceList = ["5","8"]
  
        const actual = CalculateTotalPrice(productPriceList)
  
        expect(actual).toEqual(expected)
    })
  }
  ```

## Variable Name

- ชื่อตัวแปรเป็นคำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด เช่น
  
  ```
  day, month, year
  ```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
  
  ```
  startDay, endMonth
  ```

- ชื่อตัวแปรเก็บค่าให้เติม "List" ต่อท้ายตัวแปรเสมอ เช่น
  
  ```
  orderList
  ```

- ชื่อตัวแปร Constant ให้ตังชื่อเป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด เช่น
  
  ```
  HOUR, MINUTE
  ```

---

# Convention Web Service

## Function And Parameter Naming Conventions

- ใช้รูปแบบการตั้งชื่อฟังก์ชั่นแบบ **camelCase ขึ้นต้นต้วยตัวพิมพ์เล็ก**
  
  ```
  func calculateTotalPrice()
  ```

## Directory Name

- ใช้ตัวอักษรพิมพ์เล็กทั้งหมด เช่น
  
  ```
  order
  product
  ```

## File Name

- camelCase ขึ้นต้นด้วยตัวใหญ่ เช่น
  
  ```
  OrderService.java
  ProductRepository.java
  OrderService_test.java
  ```

## Package Name

- ใช้ตัวอักษรพิมพ์เล็กทั้งหมด เช่น
  
  ```
  order
  product
  ```

## Test Function Name

- ใช้รูปแบบการตั้งชื่อฟังก์ชันเป็นแบบ **Snake_Case** เช่น
  
  ```
  Test_CalculateAge_Input_Birth_Date_18042003_Should_be_16
  ```

## Variable Name

- ชื่อตัวแปรเป็นคำเดียวให้ตั้งชื่อเป็นพิมพ์เล็กทั้งหมด เช่น
  
  ```
  day, month, year
  ```

- ชื่อตัวแปรมีความยาวตั้งแต่ 2 คำขึ้นไป ให้คำหลังขึ้นตันด้วยตัวอักษรตัวใหญ่เสมอ ในรูปแบบ **camelCase** เช่น
  
  ```
  startDay, endMonth
  ```

- The name of variable which is collect the value should continue with the word 'List' always. Example,
  
  ```
  orderList
  ```

- For variable 'Constant' please use all upper case lettler at all. Example,
  
  ```
  HOUR, MINUTE
  ```

---

## Common Commit Message agreement

```
[Created]: สร้างไฟล์ใหม่สำหรับ...

[Edited]: แก้ไข code ในไฟล์เดิมที่มีอยู่แล้ว รวมถึงกรณี refactor code

[Added]: กรณีเพิ่ม function, function test ใหม่เข้ามา

[Deleted]: ลบไฟล์ออก 'ชื่อไฟล์' เนื่องจาก...

* ให้เขียนรายละเอียดด้วยว่าแก้ไขอะไรและทำที่ตรงไหน
```

## How to run Acceptance test (API and UI)

### API test

1. Install [postman](https://www.postman.com/downloads/)

### UI test

1. Install Robot framework
   
   ```
   download Python3.8.5 (www.python.org)
   ```

2. Install PIP
   
   ```
   sudo easy_install pip
   ```

3. Install Robot framework
   
   ```
   pip install robotframework
   ```

4. Install selenium2library
   
   ```
   pip install robotframework-selenium2library
   ```

5. Install chrome driver
   
   ```
   brew install chromedriver
   ```

6. Run robot framework
   
   ```
   robot atdd/ui/shopping_cart_success.robot
   ```
   
   or using command
   
   ```
   make run_robot
   ```
