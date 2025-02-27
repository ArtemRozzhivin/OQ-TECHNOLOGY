'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './SecondFooter.module.scss'

export const SecondFooter: FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <Link href={''}>Terms & Conditions</Link>
                <div className={styles['vertical-line']} />
                <Link href={''}>Privacy Policy</Link>
            </div>
            <div className={styles['wrapper_right-side']}>
                <Link href={''}>&#169; {currentYear} OQ TECHNOLOGY. All rights reserved.</Link>
            </div>
        </div>
    )
}
