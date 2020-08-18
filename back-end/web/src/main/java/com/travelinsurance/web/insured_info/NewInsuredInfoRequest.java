package com.travelinsurance.web.insured_info;

import java.time.LocalDate;

public class NewInsuredInfoRequest {
    private String destinationCountry;
    private String packageName;
    private LocalDate departureDate;
    private LocalDate arrivalDate;
    private long duration;
    private double totalPrice;
    private String idNumber;
    private String titleName;
    private String firstname;
    private String lastname;
    private LocalDate dateOfBirth;
    private String beneficiaryName;
    private String phoneNumber;
    private String email;

    public NewInsuredInfoRequest(
            String destinationCountry,
            String packageName,
            LocalDate departureDate,
            LocalDate arrivalDate,
            long duration,
            double totalPrice,
            String idNumber,
            String titleName,
            String firstname,
            String lastname,
            LocalDate dateOfBirth,
            String beneficiaryName,
            String phoneNumber,
            String email) {
        this.destinationCountry = destinationCountry;
        this.packageName = packageName;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.duration = duration;
        this.totalPrice = totalPrice;
        this.idNumber = idNumber;
        this.titleName = titleName;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.beneficiaryName = beneficiaryName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public String getDestinationCountry() {
        return destinationCountry;
    }

    public void setDestinationCountry(String destinationCountry) {
        this.destinationCountry = destinationCountry;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getBeneficiaryName() {
        return beneficiaryName;
    }

    public void setBeneficiaryName(String beneficiaryName) {
        this.beneficiaryName = beneficiaryName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
