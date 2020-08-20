*** Settings ***
Library    SeleniumLibrary
Resource    keyword.robot
Suite Setup   0. Go to Allianz Insurance Website
Test Template     Buy insurance package at Allianz Insurance website  
Suite Teardown    14. Close browser chrome

*** Test cases ***                                                                        ${title}    ${customer_firstname}    ${customer_lastname}    ${customer_phone}    ${customer_email}    ${id_card}        ${beneficially}    


1 traveller wants to buy insurance package A, 6 days for Switzerland trip                      Ms         Tidanat                 Kumpuak             0955166862             farz.fj@gmail.com        1234567899999          Yaya Kumpuak          
