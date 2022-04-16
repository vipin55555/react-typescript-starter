import { useEffect } from "react"
import i18n from 'i18next'
import { useTranslation } from "react-i18next";

const Header = (props: any) => {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('hin');
    }, [])
    return (
        <div>
            {t('label-hello')}
        </div>
    )
}

export { Header }