import { useTranslation } from "react-i18next";
import cricketEvents from "../data/cricketEvents";

export default function Events() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t("events")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cricketEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold text-lg">{event.title}</h3>
            <p>{event.location}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
