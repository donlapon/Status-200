package com.travelinsurance.web.country;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @Autowired private CountryRepository countryRepository;

    @GetMapping("/country")
    public List<CountryResponse> gettAllCountry() {
        List<CountryResponse> countryResponseList = new ArrayList<>();
        Iterable<Country> countrys = countryRepository.findAll();
        for (Country country : countrys) {
            countryResponseList.add(
                    new CountryResponse(country.getCountryCode(), country.getCountryName()));
        }
        return countryResponseList;
    }
}
