interface ICountry {
    countryFlagSrc: string
    countryName: string
    phone: string
    locations: string[]
}

export const countries: ICountry[] = [
    {
        countryFlagSrc: '/flags/luxembourg.svg',
        countryName: 'LUXEMBOURG',
        phone: '+352 20 60 28 68',
        locations: ['1 rue de la Poudrerie L-3364 Leudelange', '40-42 Grand Rue 6630 Wasserbillig']
    },
    {
        countryFlagSrc: '/flags/greece.svg',
        countryName: 'GREECE',
        phone: '+30 697 0050847',
        locations: ['83 Marathonodromou Street, 15125 Marousi, Greece']
    },
    {
        countryFlagSrc: '/flags/rwanda.svg',
        countryName: 'RWANDA',
        phone: '+250 788 300 075',
        locations: ['Nyarugenge, mujyi wa Kigali, PO Box 324, Kigali']
    },
    {
        countryFlagSrc: '/flags/uae.svg',
        countryName: 'UAE',
        phone: '+971 54 455 2064',
        locations: ['Office 2002, Building A5, Dubai Digital Park, Dubai Silicon Oasis, Dubai']
    },
    {
        countryFlagSrc: '/flags/saudi-arabia.svg',
        countryName: 'SAUDI ARABIA',
        phone: '+966 53 951 2262',
        locations: ['Dhahran Techno Valley (DTV) OQ Technology KSA University Blvd, KFUPM, Dhahran 34464, Saudi Arabia']
    }
]
