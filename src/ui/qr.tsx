import { QRCodeSVG } from 'qrcode.react'
import type { FC, SVGAttributes } from 'react'

interface QRProps {
    value: string | string[]
    size?: number
    level?: 'L' | 'M' | 'Q' | 'H'
    bgColor?: string
    fgColor?: string
    includeMargin?: boolean
    marginSize?: number
    title?: string
    minVersion?: number
    boostLevel?: boolean
    imageSettings?: {
        src: string
        height: number
        width: number
        excavate: boolean
        x?: number
        y?: number
        opacity?: number
        crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
    }
}

const QR: FC<SVGAttributes<SVGSVGElement> & QRProps> = ({
    fgColor = '#0A0E11',
    ...props
}) => {
    return <QRCodeSVG fgColor={fgColor} {...props} />
}

export default QR
