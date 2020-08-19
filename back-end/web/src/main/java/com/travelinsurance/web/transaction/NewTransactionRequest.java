package com.travelinsurance.web.transaction;

public class NewTransactionRequest {
    private String bankName;
    private String accountNumber;
    private double amount;
    private String note;
    private String[] insuranceNumberList;

    public NewTransactionRequest(
            String bankName,
            String accountNumber,
            double amount,
            String note,
            String[] insuranceNumberList) {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.note = note;
        this.insuranceNumberList = insuranceNumberList;
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
