*** Settings ***
Library    SeleniumLibrary
Resource    keywords.robot
Suite Setup   0. Go to Allianz Insurance Website
Test Template     Buy insurance package at Allianz Insurance website  
#Suite Teardown    14. Close browser chrome

*** Test cases ***                                                                   ${title}    ${customer_firstname}    ${customer_lastname}    ${id_card}    ${birth_date}    ${beneficially}


1 traveller wants to buy insurance package A, 6 days for Switzerland trip                Ms.         Tidanat        Kumpuak                          1234567899999     12/08/1997      Yaya Kumpuak
