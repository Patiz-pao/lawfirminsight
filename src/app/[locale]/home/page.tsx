import React from 'react'
import { useTranslations } from "next-intl";

type Props = {}

const home = (props: Props) => {
  const t = useTranslations("HomePage");
  return (
    <h1>{t('title')}</h1>
  )
}

export default home;