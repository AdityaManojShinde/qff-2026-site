import { formatTimeIST } from "@/lib/format";

export function ScheduleRow({ timeIso, title, description }: { timeIso: string; title: string; description?: string }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-b border-gray-200 last:border-0">

            <div className="shrink-0 md:w-32">

                <span className="font-mono text-lg font-semibold text-primary">{formatTimeIST(timeIso)}</span>

            </div>
            <div className="flex flex-col">

                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                {description && <p className="text-gray-700 mt-2">{description}</p>}

            </div>

        </div>
    );
}
