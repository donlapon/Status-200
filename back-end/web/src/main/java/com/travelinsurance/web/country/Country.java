package com.travelinsurance.web.country;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "country")
public class Country {
    @Indexed(name = "country_code", unique = true)
    private String countryCode;

    @Field("country_name")
    private String countryName;

    @Field("img_url")
    private String imgUrl;

    public Country(String countryCode, String countryName, String imgUrl) {
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
