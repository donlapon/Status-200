package com.travelinsurance.web.transaction;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "transaction")
public class Transaction {
    @Indexed(unique = true)
    @Field("ref_id")
    private String refId;

    @Field("bank_name")
    private String bankName;

    @Field("account_number")
    private String accountNumber;

    @Field("amount")
    private double amount;

    @Field("note")
    private String note;

    @Field("insurance_number_list")
    private String[] insuranceNumberList;

    public String getRefId() {
        return refId;
    }

    public void setRefId(String refId) {
        this.refId = refId;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String[] getInsuranceNumberList() {
        return insuranceNumberList;
    }

    public void setInsuranceNumberList(String[] insuranceNumberList) {
        this.insuranceNumberList = insuranceNumberList;
    }
}
