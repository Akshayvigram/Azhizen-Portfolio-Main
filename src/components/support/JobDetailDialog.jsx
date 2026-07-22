import { MapPin, Briefcase, Clock, Star, CheckCircle2, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "../../components/ui/dialog";
import { ScrollArea } from "../../components/ui/scroll-area";

/* ─── colour helper ─────────────────────────────────────────── */
const teamColor = (team) => {
  const map = {
    Development: { bg: "bg-blue-50",   text: "text-blue-700",  border: "border-blue-200",  dot: "bg-blue-500"  },
    Hardware:    { bg: "bg-orange-50",  text: "text-orange-700",border: "border-orange-200", dot: "bg-orange-500"},
    Design:      { bg: "bg-purple-50",  text: "text-purple-700",border: "border-purple-200", dot: "bg-purple-500"},
    Data:        { bg: "bg-emerald-50", text: "text-emerald-700",border: "border-emerald-200",dot: "bg-emerald-500"},
  };
  return map[team] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", dot: "bg-gray-500" };
};

const levelColor = (level) => {
  if (level === "Experienced") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-sky-50 text-sky-700 border-sky-200";
};

/* ─── component ─────────────────────────────────────────────── */
const JobDetailDialog = ({ job, open, onOpenChange, onApply }) => {
  if (!job) return null;

  const tc = teamColor(job.team);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0 bg-white rounded-2xl overflow-hidden border-0 shadow-2xl">
        <ScrollArea className="max-h-[88vh]">

          {/* ── Hero Header ─────────────────────────────────── */}
          <div className="relative bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FE] to-[#BAE6FD] px-6 pt-8 pb-6 md:px-8 md:pt-10">
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm text-gray-500 hover:bg-white hover:text-gray-800 transition-all duration-200 shadow-sm"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Team pill */}
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${tc.bg} ${tc.text} ${tc.border}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${tc.dot}`} />
              {job.team}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl leading-tight">
              {job.title}
            </h2>

            {/* Meta row */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {/* Type */}
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white/70 backdrop-blur-sm border border-white/80 px-2.5 py-1 rounded-full shadow-sm">
                <Briefcase className="h-3 w-3 text-[#0078B4]" />
                {job.type}
              </span>

              {/* Level */}
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${levelColor(job.level)}`}>
                <Star className="h-3 w-3" />
                {job.level}
              </span>

              {/* Location */}
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white/70 backdrop-blur-sm border border-white/80 px-2.5 py-1 rounded-full shadow-sm">
                <MapPin className="h-3 w-3 text-[#0078B4]" />
                {job.location}
              </span>
            </div>
          </div>

          {/* ── Apply CTA strip ──────────────────────────────── */}
          <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-8 bg-white border-b border-gray-100">
            <p className="text-sm text-gray-500">Ready to join the team?</p>
            <button
              onClick={onApply}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              Apply for this role
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* ── Body ─────────────────────────────────────────── */}
          <div className="px-6 py-6 md:px-8 space-y-6">

            {/* Short description */}
            <p className="text-[15px] text-gray-600 leading-relaxed">
              {job.shortDescription}
            </p>

            {/* Responsibilities */}
            <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#0078B4] to-[#00B4D9]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Primary Responsibilities
                </h4>
              </div>
              <ul className="space-y-2.5">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0078B4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#0078B4] to-[#00B4D9]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Requirements
                </h4>
              </div>
              <ul className="space-y-2.5">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00B4D9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTA */}
            <div className="pt-2 pb-1">
              <button
                onClick={onApply}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                Apply for this role
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailDialog;