export function SectionLabel({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-primary font-mono text-xs sm:text-sm mb-4 uppercase tracking-wider">
            {number} / {label}
        </div>
    );
}
