import { ArrowUpRight, MapPin } from "lucide-react";

const JobCard = ({ job, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-white px-5 py-5 text-left shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_-8px_rgba(33,150,243,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:px-6"
    >
      <div className="flex flex-1 items-start gap-3">
        <span
          aria-hidden
          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-foreground" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground md:text-lg">
            {job.title}
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1 font-medium text-brand">
              {job.level === "Fresher" ? "Intern" : "Experienced"}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>

            <span className="inline-flex items-center gap-1 font-medium text-brand">
              Full-time
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </div>

      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand/40 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand md:text-sm">
        <MapPin className="h-3.5 w-3.5" aria-hidden />
        {job.type === "Onsite" ? "On-site" : job.type}
      </span>
    </button>
  );
};

export default JobCard;