export interface Package {
    countryCode: string;
    insurancePackageList: InsurancePackageList[];
  }
  
  export interface InsurancePackageList {
    package_name: string;
    package_detail: Packagedetail[];
  }
  
  export  interface Packagedetail {
    benefit: string;
    coverage: number;
  }