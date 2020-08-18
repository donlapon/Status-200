*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    http://localhost:4200/countrypackage


*** Keywords ***

Buy insurance package at Allianz Insurance website
    [Arguments]        ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}
    1. Select country (Switzerland)
    2. Select package (Package A)
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
    Open Browser    ${URL}    Chrome
1. Select country (Switzerland)
    Click Element    xpath=/html/body/app-root/app-country-package/div/div/div/div/mat-card[3]/span
2. Select package (Package A)
    press keys    none    ALT+ARROW_DOWN	
    #Scroll Element Into View
    #Click Element    id:package_name
3. Select Start date (21/08/2020)
    click element    xpath=/html/body/app-root/app-country-package/div/div/div[1]/form/div/mat-form-field[1]/div/div[1]/div[2]/mat-datepicker-toggle/button
    #click element    xpath=/html/body/app-root/app-country-package/div/div[1]/div/form/div/mat-form-field[1]/div/div[1]/div[2]/mat-datepicker-toggle/button
    click element    xpath=//*[@id="mat-datepicker-0"]/div/mat-year-view/table/tbody/tr[3]/td[4]/div[1]
    click element    xpath=//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[4]/td[6]/div[1]
    #select date !!! ${start_date}
4. Select End date (26/08/2020)
    #select date !!! ${end_date}
    click element    xpath=/html/body/app-root/app-country-package/div/div/div[1]/form/div/mat-form-field[2]/div/div[1]/div[2]/mat-datepicker-toggle/button
    click element    xpath=//*[@id="mat-datepicker-1"]/div/mat-year-view/table/tbody/tr[3]/td[4]/div[1]
    click element    xpath=//*[@id="mat-datepicker-1"]/div/mat-month-view/table/tbody/tr[5]/td[4]/div[1]
    #Wait Until Page Contains    8/21/2020
5. Click next button
    #Click Element    id:btn_next
    click element    xpath=/html/body/app-root/app-country-package/div/div[1]/div/form/button
6. Wait until page contains country and price
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00
7. Input traveller information
    [Arguments]    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    
    #Select Radio Button    title    ${title}
    #Select Radio Button     /html/body/app-root/app-users-detail/div/div[2]/div/form/div[1]/div/div[1]/select    ${title}
    Input Text    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[1]/div/div[2]/input    ${customer_firstname}
    Input Text    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[1]/div/div[3]/input    ${customer_lastname}
    Input Text    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[2]/div/div[1]/input    ${id_card}
    #select date    id:citizen_id    ${birth_date}
    Input Text    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[3]/input    ${beneficially}
    #Input Text    id:email    ${email}
    #Input Text    id:telno    ${telno}
    
    

8. Click submit button
    Click Element    xpath=/html/body/app-root/app-users-detail/div/div[2]/div/form/div[4]/div/div[2]/button 

9. Wait until page contains exactly information
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00

10. Click payment button
    Click Element    id:btn_payment
11. Read term & agreement
    Wait Until Page Contains    Term & Agreement 
12. Click I accept term & agreement button
    Click Element    id:btn_term&agreement
13. Wait until page contains payment information
    Wait Until Page Contains    payment information
14. Close browser chrome
    Close Browser