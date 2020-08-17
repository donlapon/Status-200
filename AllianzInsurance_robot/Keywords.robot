*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    http://localhost:4200/countrypackage


*** Keywords ***

Buy insurance package at Allianz Insurance website
    [Arguments]    ${start_date}    ${end_date}    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}
    1. Select country (Switzerland)
    2. Select package (Package A)
    3. Select Start date (21/08/2020)    ${start_date}
    4. Select End date (26/08/2020)    ${end_date}
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
    Click Element    id:btn_CH
2. Select package (Package A)
    Click Element    id:btn_package
3. Select Start date (21/08/2020)
    #select date !!! ${start_date}
4. Select End date (26/08/2020)
    #select date !!! ${end_date}
5. Click next button
    Click Element    id:btn_next
6. Wait until page contains country and price
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00
7. Input traveller information
    [Arguments]    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    
    Select Radio Button    title    ${title}
    Input Text    id:customer_firstname    ${customer_firstname}
    Input Text    id:customer_lastname    ${customer_lastname}
    Input Text    id:id_card    ${id_card}
    #select date    id:citizen_id    ${birth_date}
    Input Text    id:beneficially    ${beneficially}
    Input Text    id:email    ${email}
    Input Text    id:telno    ${telno}
    

8. Click submit button
    Click Element    id:btn_submit 

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