import styles from '@/app/styles.module.css'
import { cinzel } from '@/settings/fonts';

export default function Card2({ number, title, content }: Card2) {
    return (
        <div className="flex ml-32 mb-10 max-[768px]:ml-0 max-[1280px]:ml-10">
            <div className={`min-w-[280px] text-[200px] text-center leading-tight ${cinzel.className} max-[768px]:min-w-[220px] max-[768px]:text-[150px] `}>{number}</div>

            <div className="ml-32 max-[768px]:ml-0 max-[1280px]:ml-10">
                <div className={`h-[12px] ${styles.gradient} mb-7`} />
                <h4 className="font-semibold text-2xl mb-5 max-[768px]:text-xl">{title}</h4>
                <p className="text-xl font-light max-[768px]:text-base">{content}</p>
            </div>
        </div>
    )
}

interface Card2 {
    readonly number: string
    readonly title: string
    readonly content: string
}