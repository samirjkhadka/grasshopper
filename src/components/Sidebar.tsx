import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Sidebar() {
  const { t } = useTranslation()

  return (
    <div className="w-56 bg-primary text-white p-4 space-y-4">
      <h1 className="text-2xl font-bold">{t('app_name')}</h1>
      <nav className="space-y-2">
        <Link to="/" className="block">{t('events')}</Link>
        <Link to="/live-scores" className="block">{t('live_scores')}</Link>
        <Link to="/tickets" className="block">{t('tickets')}</Link>
        <Link to="/sponsors" className="block">{t('sponsors')}</Link>
      </nav>
    </div>
  )
}
