*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    http://167.99.68.78


*** Keywords ***

Buy insurance package at Allianz Insurance website
    [Arguments]         ${country_name}    ${start_date}    ${end_date}    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    ${numperson} 
    1. Select country (Switzerland)   ${country_name}
    2. Scroll down and read package
    3. Select Start date (21/08/2020)    ${start_date}  
    4. Select End date (26/08/2020)    ${end_date}    
    5. Click next button
    6. Wait until page contains country and price
    7. Input traveller information    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    ${numperson} 
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
4. Select End date (26/08/2020)
    #select date !!! id:end_date    ${end_date}
    
5. Click next button
    Click Element    id:btn_next
6. Wait until page contains country and price
    Wait Until Page Contains    Switzerland
    Wait Until Page Contains    357.00
7. Input traveller information
    [Arguments]    ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}    ${numperson}    
    Select Radio Button    title    ${title}
    Input Text    id:customer_firstname    ${customer_firstname}
    Input Text    id:customer_lastname    ${customer_lastname}
    Input Text    id:id_card    ${id_card}
    #select date !!! id:birth_date    ${birth_date}
    Input Text    id:beneficially   ${beneficially}
    Select Radio Button    numperson    ${numperson}
   
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
    Click Element    id:btn_term&agreement
13. Wait until page contains payment information
    Wait Until Page Contains    payment information
14. Close browser chrome
    Close Browser
