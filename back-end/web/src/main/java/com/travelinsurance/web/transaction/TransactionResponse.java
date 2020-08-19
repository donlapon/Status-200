package com.travelinsurance.web.transaction;

public class TransactionResponse {
    private String refId;
    private String bankName;
    private String accountNumber;
    private double amount;
    private String note;
    private String[] insuranceNumberList;

    public TransactionResponse(
            String refId,
            String bankName,
            String accountNumber,
            double amount,
            String note,
            String[] insuranceNumberList) {
        this.refId = refId;
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.note = note;
        this.insuranceNumberList = insuranceNumberList;
    }

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
