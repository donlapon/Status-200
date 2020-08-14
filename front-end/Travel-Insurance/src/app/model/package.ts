export class Package {
    constructor(
        public package_id: number,
        public package_name: string,
        public detail_a: string,
        public detail_a_price: string,
        public detail_b: string,
        public detail_b_price: string,
        public detail_c: string,
        public detail_c_price: string,
        public detail_d: string,
        public detail_d_price: string,
        public detail_e: string,
        public detail_e_price: string,
        public detail_f: string,
        public detail_f_price: string,
        public detail_g: string,
        public detail_g_price: string,
        public detail_h: string,
        public detail_h_price: string,
        public detail_j: string,
        public detail_j_price: string,
        public detail_k: string,
        public detail_k_price: string,
        public detail_l: string,
        public detail_l_price: string,
        public detail_m: string,
        public detail_m_price: string,

    ) { }
}

export const allPackage: Package[] = [
    {
        package_id: 1,
        package_name: "A",
        detail_a: "Personal Accident Loss of Life, Dismemberment Loss of Sight or Total Permanent Disability from Accident",
        detail_a_price: "1,500,000",
        detail_b: "Medical Expenses Incurred Overseas",
        detail_b_price: "1,500,000",
        detail_c: "Medical Expenses Incurred in Thailand",
        detail_c_price: "150,000",
        detail_d: "Emergency Medical Evacuation and Repatriation/Repatriation of Mortal Remains",
        detail_d_price: "3,000,000",
        detail_e: "Loss or Damage of Baggage and Personal Effects",
        detail_e_price: "10,000",
        detail_f: "Maximum limit per item/pair/set",
        detail_f_price: "2,000",
        detail_g: "Travel Delay (Pay 10% of Sum Insured for every 6 consecutive hours delay)",
        detail_g_price: "15,000",
        detail_h: "Missed Connecting Flight (For every 8 consecutive hours delay)",
        detail_h_price: "5,000",
        detail_i: "Trip Cancellation or Poseponement",
        detail_i_price: "15,000",
        detail_j: "Trip Curtailment",
        detail_j_price: "15,000",
        detail_k: "Hijacking (Pay THB 5,000 for every 12 consecutive hours)",
        detail_k_price: "5,000",
        detail_l: "Loss of Travel Document",
        detail_l_price: "5,000",
        detail_m: "Loss or Damage of Baggage and Personal Effects from Natural Disasters",
        detail_m_price: "15,000"





    }
];