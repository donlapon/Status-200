export class Package {
    // insurancePackageName:string;
    // insurancePackageList: [];
    detail: any;
    detail_price: any;

    constructor(
        // public packageId: number,
        // public packageName: string,
        insurancePackageName:string,
        insurancePackageList:any,
        package_detail: any,
         detail_price: number,
        // public detail_b: string,
        // public detail_b_price: number,
        // public detail_c: string,
        // public detail_c_price: number,
        // public detail_d: string,
        // public detail_d_price: number,
        // public detail_e: string,
        // public detail_e_price: number,
        // public detail_f: string,
        // public detail_f_price: number,
        // public detail_g: string,
        // public detail_g_price: number,
        // public detail_h: string,
        // public detail_h_price: number,
        // public detail_i: string,
        // public detail_i_price: number,
        // public detail_j: string,
        // public detail_j_price: number,
        // public detail_k: string,
        // public detail_k_price: number,
        // public detail_l: string,
        // public detail_l_price: number,
        // public detail_m: string,
        // public detail_m_price: number,

    ) { }
}

export const allPackage: Package[] = [
    {
        // packageId: 1,
        // packageName: 'A'
        detail: "Personal Accident Loss of Life, Dismemberment Loss of Sight or Total Permanent Disability from Accident",
        detail_price: 1500000},
        {detail: "Medical Expenses Incurred Overseas",
        detail_price: 1500000},
       { detail: "Medical Expenses Incurred in Thailand",
       detail_price: 150000},
        {detail: "Emergency Medical Evacuation and Repatriation/Repatriation of Mortal Remains",
        detail_price: 3000000},
        {detail: "Loss or Damage of Baggage and Personal Effects",
        detail_price: 10000},
        {detail: "Maximum limit per item/pair/set",
        detail_price: 2000},
        {detail: "Travel Delay (Pay 10% of Sum Insured for every 6 consecutive hours delay)",
        detail_price: 15000},
        {detail: "Missed Connecting Flight (For every 8 consecutive hours delay)",
        detail_price: 5000},
        {detail: "Trip Cancellation or Poseponement",
        detail_price: 15000},
        {detail: "Trip Curtailment",
        detail_price: 15000},
        {detail: "Hijacking (Pay THB 5,000 for every 12 consecutive hours)",
        detail_price: 5000},
       { detail: "Loss of Travel Document",
       detail_price: 5000},
       { detail: "Loss or Damage of Baggage and Personal Effects from Natural Disasters",
        detail_price: 15000
    }
];
