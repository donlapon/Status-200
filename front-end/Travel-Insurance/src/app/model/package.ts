export interface InsurancePackageList {
    package_name: string;
    package_detail: any;
    coverage: number[];
}

export interface Package {
    insurancePackageName: string;
    insurancePackageList: InsurancePackageList[];
}
