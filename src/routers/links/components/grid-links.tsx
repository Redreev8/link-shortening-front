import type { FC } from 'react'
import type { Link } from '../type/link'
import CardLink from './card-link'
import CardLinkCreate from './card-link-create'
import classNames from 'classnames'

interface GridLinksProps {
    links: Link[]
}

const GridLinks: FC<GridLinksProps> = ({ links }) => {
    const cl = classNames(
        'grid gap-1',
        '2xl:grid-cols-[repeat(4,minmax(360px,1fr))] lg:grid-cols-[repeat(3,minmax(320px,1fr)))]',
        'grid-cols-[repeat(2,minmax(320px,1fr)))] max-sm:grid-cols-[repeat(1,100%)]',
    )
    return (
        <ul className={cl}>
            <li>
                <CardLinkCreate />
            </li>
            {links.map((l) => {
                return (
                    <li key={l.customUrl}>
                        <CardLink {...l} />
                    </li>
                )
            })}
        </ul>
    )
}

export default GridLinks
