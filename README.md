# Status-200

# Project: Travel Insureance: Basic Buy

# Convention Web UI

## Common Convention

- For implementation code should use 'Semi-colon -> ;' back of the line always.
  
  ```
  console.log(this.test);
  ```

## Function And Parameter Naming Conventions

- About UI and calculate will using pattern for naming which is **camelCase begin with lower case**
  
  ```
  func homepage() //UI
  func calculateTotalPrice() //logic
  ```

## HTML Element ID

- HTML Element will using name pattern **camelCase begin with lower case**
  
  ```
  receiverName
  totalAmount
  ```

## Directory Name

- Using lower case letter. Example,
  
  ```
  order
  product
  ```

## File Name

- Using the pattern for File Name **camelCase begin with upper case**
  
  ```
  Order.js
  Shipping.test.js
  ```

## Test Name

- Using the pattern for explain describe such as...
  
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

- Using the pattern for Variable Name must use lower case such as...   ```
  day, month, year
  ```

- Name of parameter should have length more than 2 words by using upper case begin in format **camelCase** such as...
  
  ```
  startDay, endMonth
  ```

- The variable for collect value should end with "List" always. Example, 
  
  ```
  orderList
  ```

- The Constant variable should using all upper case such as....
  
  ```
  HOUR, MINUTE
  ```

---

# Convention Web Service

## Function And Parameter Naming Conventions

- Using the pattern for function and parameter naming convention **camelCase begin with lower case**
  
  ```
  func calculateTotalPrice()
  ```

## Directory Name

- using lower case all, Example
  
  ```
  order
  product
  ```

## File Name

- camelCase begin with upper case, Example
  
  ```
  OrderService.java
  ProductRepository.java
  OrderService_test.java
  ```

## Package Name

- using lower case all, Example
  
  ```
  order
  product
  ```

## Test Function Name

- The pattern Function name is **Snake_Case**, Example
  
  ```
  Test_CalculateAge_Input_Birth_Date_18042003_Should_be_16
  ```

## Variable Name

- Name of parameter using lower case, Example
  
  ```
  day, month, year
  ```

- Name of parameter should have length more than 2 words by using upper case begin in format **camelCase** such as
  
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
[Created]: New file for...

[Edited]: Edit code in old file including case refactor code

[Added]: In case off function, function test new adding

[Deleted]: Delete file 'File name' wherewith...

* Press information your edit here...
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

