package com.travelinsurance.web.insurance_package;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class InsurancePackageController {
    @Autowired private InsurancePackageRepository insurancePackageRepository;

    @CrossOrigin
    @GetMapping("/v1/package")
    public List<InsurancePackageResponse> getAllPackage() {
        List<InsurancePackageResponse> insurancePackageResponseList = new ArrayList<>();
        Iterable<InsurancePackage> insurancePackages = insurancePackageRepository.findAll();
        for (InsurancePackage insurancePackage : insurancePackages) {
            insurancePackageResponseList.add(
                    new InsurancePackageResponse(
                            insurancePackage.getCountryCode(),
                            insurancePackage.getInsurancePackageList()));
        }
        return insurancePackageResponseList;
    }

    @CrossOrigin
    @GetMapping("/v1/package/{countryCode}")
    public InsurancePackageResponse getPackageByCountry(@PathVariable String countryCode) {
        InsurancePackage insurancePackage =
                insurancePackageRepository.findPackageByCountryCode(countryCode);
        return new InsurancePackageResponse(
                insurancePackage.getCountryCode(), insurancePackage.getInsurancePackageList());
    }
}
