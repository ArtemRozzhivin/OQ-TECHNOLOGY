import { IListItem } from '@/app/(app)/_components/services-list/_const/list-item'

export interface IModalData {
    mediaPath: string
    title: string
    description: string
}

export interface IBusinessListItem extends IListItem {
    modalData: IModalData
}

export const servicesList: IListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/services/service-1.webp'),
        title: 'STANDARD​',
        subTitle: 'Compatible with 3GPP standard Rel. 17 – No proprietary tech lock-up​'
    },
    {
        id: 2,
        imgSrc: require('../_assets/services/service-2.webp'),
        title: 'ANYWHERE​',
        subTitle: 'Connect almost any site on land or sea'
    },
    {
        id: 3,
        imgSrc: require('../_assets/services/service-3.webp'),
        title: 'RELIABLE',
        subTitle: 'High Quality of Service and Security, ensure business continuity'
    }
]

export const businessList: IBusinessListItem[] = [
    {
        id: 1,
        imgSrc: require('../_assets/business/1.webp'),
        title: 'ENERGY & UTILITIES',
        subTitle: 'Connectivity for automation, predictive maintenance, and the digital oil field applications​',
        modalData: {
            mediaPath: '/videos/smart-energy.mp4',
            title: 'SMART ENERGY',
            description:
                'Our solution enables you to run your operations efficiently, and at full capacity and avoid disruption or loss of assets by giving you full access remotely to manage your applications. This includes SCADA systems, pipeline monitoring, and leak detection, predictive maintenance reports of machinery and windmills, inventory and asset tracking, mining, environmental monitoring, oilfields monitoring, tracking of workers and their well-being, and finally industrial smart metering.'
        }
    },
    {
        id: 2,
        imgSrc: require('../_assets/business/2.webp'),
        title: 'MARITIME​',
        subTitle: 'Connectivity for ships, containers, and buoys',
        modalData: {
            mediaPath: '/videos/smart-ocean.mp4',
            title: 'SMART OCEAN',
            description:
                'Maritime connectivity today is limited to expensive satellite VSAT and M2M high-end terminals, this is not suitable for IoT data collection and control. We help you to track fishing boats, smart nets, weather buoys, and commercial containers. In addition to that we can provide real-time tracking solutions for transport ships and yachts. Finally managing sensors and devices on offshore rigs, underwater pipes and oil wells have never been easier, all using a highly secure and reliable system.'
        }
    },
    {
        id: 3,
        imgSrc: require('../_assets/business/3.webp'),
        title: 'SUSTAINABILITY',
        subTitle: 'Connectivity for the environment and monitoring of pollutants, mining equipment, wastewater and greenhouse emissions.',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMART CITIES',
            description:
                'Imagine a city, pulsing with digital savvy, where technology and people speak in harmony. Picture the Internet of Things, a symphony of devices singing data in real-time, painting a living portrait of urban life. This is the promise of smart cities, where everyday living gets an upgrade, making our urban jungles safer, greener, and more efficient.'
        }
    },
    {
        id: 4,
        imgSrc: require('../_assets/business/4.webp'),
        title: 'LOGISTICS & TELEMATICS',
        subTitle: 'Connectivity for mobility and asset tracking',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMART MOBILITY',
            description:
                'Connected smart vehicles/drones are entering the market and offer companies the chance to deliver goods further and in more efficient ways. Tracking of fleets and goods is not possible outside cities where no cellular coverage is available. OQ offers an end-to-end satellite 5G integrated solution that allows you to monitor your assets and fleet in real time, anywhere they may go. We can also support bi-directional communication to machines such as banking ATMs in poor connectivity areas. We provide a dual satellite-terrestrial solution that can switch automatically between our and partner networks.'
        }
    },
    {
        id: 5,
        imgSrc: require('../_assets/business/5.webp'),
        title: 'AGRICULTURE & HERD MANAGEMENT',
        subTitle: 'Connectivity for the smart agritech and livestock monitoring',
        modalData: {
            mediaPath: '/videos/smart-farm.mp4',
            title: 'SMART FARM',
            description:
                'Farms suffer globally from a lack of cellular connectivity. IoT-based smart farming involves monitoring the crop field with the help of sensors (light, humidity, temperature, soil moisture). These applications require permanent and reliable telecommunication coverage - Our global solution can achieve this purpose easily by integrating our module into your smart farming devices which gives you access to our data platform for a very low cost and within record time.'
        }
    },
    {
        id: 6,
        imgSrc: require('../_assets/business/6.webp'),
        title: 'SMARTPHONES',
        subTitle: 'Connectivity for safety, asset protection,  and law enforcement',
        modalData: {
            mediaPath: '/videos/smart-mobility.mp4',
            title: 'SMS over Satellite 5G NR',
            description:
                'Connected smart vehicles/drones are entering the market and offer companies the chance to deliver goods further and in more efficient ways. Tracking of fleets and goods is not possible outside cities where no cellular coverage is available. OQ offers an end-to-end satellite 5G integrated solution that allows you to monitor your assets and fleet in real time, anywhere they may go. We can also support bi-directional communication to machines such as banking ATMs in poor connectivity areas. We provide a dual satellite-terrestrial solution that can switch automatically between our and partner networks.'
        }
    }
]

export interface IProductItem {
    id: number
    title: string
    paragraphs: string[]
    imgSrc: string
    buttonText: string
    onClick: () => void
}
