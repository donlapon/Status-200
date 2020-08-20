*** Settings ***
Library    SeleniumLibrary
Resource    keyword.robot
Suite Setup   0. Go to Allianz Insurance Website
Test Template     Buy insurance package at Allianz Insurance website  
#Suite Teardown    14. Close browser chrome

*** Test cases ***                                                                   ${country_name}      ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}        ${beneficially}    


1 traveller wants to buy insurance package A, 6 days for Switzerland trip              country_name        ms         Tidanat                 Kumpuak             1234567899999          Yaya Kumpuak          
