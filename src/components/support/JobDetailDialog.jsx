import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ScrollArea } from "../../components/ui/scroll-area";

const JobDetailDialog = ({ job, open, onOpenChange, onApply }) => {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0 bg-white">
        <ScrollArea className="max-h-[85vh]">
          <div className="p-6 md:p-8">
            <DialogHeader className="space-y-3 text-left">
              <DialogTitle className="text-2xl font-semibold tracking-tight md:text-3xl">
                {job.title}
              </DialogTitle>

              <DialogDescription className="sr-only">
                Role details for {job.title}
              </DialogDescription>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full font-normal">
                  {job.team}
                </Badge>

                <Badge variant="outline" className="rounded-full font-normal">
                  {job.type}
                </Badge>

                <Badge variant="outline" className="rounded-full font-normal">
                  {job.level}
                </Badge>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>{job.location}</span>
              </div>
            </DialogHeader>

            <div className="mt-6">
              <Button size="lg" className="w-full sm:w-auto" onClick={onApply}>
                Apply for this role
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-6">
              <p className="text-base text-muted-foreground">
                {job.shortDescription}
              </p>

              <section>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Primary responsibilities
                </h4>

                <ul className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Requirements
                </h4>

                <ul className="space-y-2">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailDialog;