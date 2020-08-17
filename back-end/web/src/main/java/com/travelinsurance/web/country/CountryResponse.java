package com.travelinsurance.web.country;

public class CountryResponse {

    private String countryCode;
    private String countryName;
    private String imgUrl;

    public CountryResponse(String countryCode, String countryName, String imgUrl) {
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.imgUrl = imgUrl;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }
}
