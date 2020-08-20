*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    http://167.99.68.78


*** Keywords ***

Buy insurance package at Allianz Insurance website
    [Arguments]         ${country_name}       ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}  
    1. Select country (Switzerland)   ${country_name}
    2. Scroll down and read package
    3. Select Start date (21/08/2020)    
    4. Select End date (26/08/2020)        
    5. Click next button
    6. Wait until page contains country and price
    7. Input traveller information    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    
    8. Click submit button
    9. Wait until page contains exactly information
    10. Click payment button
    11. Read term & agreement
    12. Click I accept term & agreement button
    13. Wait until page contains payment information

0. Go to Allianz Insurance website
    Open Browser    ${URL}    Chrome    remote_url=http://206.189.154.4:4444/wd/hub    desired_capabilities=browserName:chrome
1. Select country (Switzerland)
    Click Element    id:country_name
2. Scroll down and read package
    press keys    none    ALT+ARROW_DOWN	
    
3. Select Start date (21/08/2020)
    #select date !!! id:start_date    ${start_date}
    click element    xpath=/html/body/app-root/app-country-package/div/div/div[1]/form/div/mat-form-field[1]/div/div[1]/div[2]/mat-datepicker-toggle/button
    click element    xpath=//*[@id="mat-datepicker-0"]/div/mat-year-view/table/tbody/tr[3]/td[4]/div[1]
    click element    xpath=//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[4]/td[6]/div[1]
4. Select End date (26/08/2020)
    #select date !!! id:end_date    ${end_date}
    click element    xpath=/html/body/app-root/app-country-package/div/div/div[1]/form/div/mat-form-field[2]/div/div[1]/div[2]/mat-datepicker-toggle/button
    click element    xpath=//*[@id="mat-datepicker-1"]/div/mat-year-view/table/tbody/tr[3]/td[4]/div[1]
    click element    xpath=//*[@id="mat-datepicker-1"]/div/mat-month-view/table/tbody/tr[5]/td[4]/div[1]
5. Click next button
    Click Element    id:btn_next
6. Wait until page contains country and price
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00
7. Input traveller information
    [Arguments]    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}      
    Select Radio Button    id:title    ${title}
    Input Text    id:customer_firstname    ${customer_firstname}
    Input Text    id:customer_lastname    ${customer_lastname}
    Input Text    id:id_card    ${id_card}
    #select date !!! id:birth_date    ${birth_date}
    click element    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[2]/div[1]/div[2]/mat-form-field/div/div[1]/div[2]/mat-datepicker-toggle/button
    click element    xpath=//*[@id="mat-datepicker-2"]/mat-calendar-header/div/div/button[1]
    click element    xpath=//*[@id="mat-datepicker-2"]/mat-calendar-header/div/div/button[2]
    click element    xpath=//*[@id="mat-datepicker-2"]/div/mat-multi-year-view/table/tbody/tr[2]/td[2]/div[1]
    click element    xpath=//*[@id="mat-datepicker-2"]/div/mat-year-view/table/tbody/tr[3]/td[4]/div[1]
    click element    xpath=//*[@id="mat-datepicker-2"]/div/mat-month-view/table/tbody/tr[3]/td[3]/div[1]
    Input Text    id:beneficially   ${beneficially}
    
   
8. Click submit button
    Click Element    id:btn_next

9. Wait until page contains exactly information
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00

10. Click payment button
    Click Element    id:btn_payment
11. Read term & agreement
    Wait Until Page Contains    Term & Agreement 
12. Click I accept term & agreement button
    Click Element    id:btn_accept
13. Wait until page contains payment information
    Wait Until Page Contains    payment information
14. Close browser chrome
    Close Browser
