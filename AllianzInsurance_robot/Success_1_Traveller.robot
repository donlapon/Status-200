*** Settings ***
Library    SeleniumLibrary
Resource    keywords.robot
Suite Setup   Go to Allianz Insurance Website
Test Template     Buy insurance package at Allianz Insurance website  
Suite Teardown    14. Close browser chrome

*** Test cases ***                                                                ${start_date}    ${end_date}    ${title}    ${firstname}    ${lastname}    ${citizen_id}    ${birth_date}    ${beneficially_name}


1 traveller wants to buy insurance package A, 6 days for Switzerland trip          21/08/2020      26/08/2020      Ms.         Tidanat        Kumpuak        1234567899999     12/08/1997      Yaya Kumpuak
