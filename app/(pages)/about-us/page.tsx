import { FirstSection } from './_ui/first-section'
import { SecondSection } from './_ui/second-section'
import { ThirdSection } from './_ui/third-section'
import { FourthSection } from './_ui/fourth-section'
import { FifthSection } from './_ui/fifth-section'

import styles from './_styles/AboutUs.module.scss'

const components = {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection
}

export default function AboutUsPage() {
    return (
        <div className={styles.wrapper}>
            {Object.values(components).map((Component) => (
                <Component key={Component.name} />
            ))}
        </div>
    )
}
