import type { FC } from 'react'
import type { Link } from '../type/link'
import CardLink from './card-link'
import CardLinkCreate from './card-link-create'

interface GridLinksProps {
    links: Link[]
}

const GridLinks: FC<GridLinksProps> = ({ links }) => {
    return (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-1">
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
