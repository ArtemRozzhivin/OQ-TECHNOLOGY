'use client'

import { FC } from 'react'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { businessList } from '../../const/lists'
import { ListItem } from './_ui/list-item'

import styles from './SecondSection.module.scss'

export const SecondSection: FC = () => {
    return (
        <Container as='section' className={styles.wrapper}>
            <Title
                isObserver
                size='XL'
                className={styles.wrapper_heading}
                title='KEEP YOUR BUSINESS CONNECTED AND WELL MANAGED'
                text='Connect your IoT devices, machines, and people anywhere, even in the most remote locations and harshest environments​'
            />

            <ul className={styles.wrapper_list}>
                {businessList.map((e) => (
                    <ListItem key={e.id} {...e} />
                ))}
            </ul>
        </Container>
    )
}
