import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Upload, X, User, Mail, Phone, MapPin,
  GraduationCap, Briefcase, MessageSquare, FileText, ChevronRight
} from "lucide-react";

import { Dialog, DialogContent } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "../../components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../../components/ui/select";
import { ScrollArea } from "../../components/ui/scroll-area";
import { toast } from "../../hooks/use-toast";

/* ─── data ───────────────────────────────────────────────────── */
const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu","Delhi",
  "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
].sort();

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

/* ─── validation ─────────────────────────────────────────────── */
const applicationSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName:  z.string().min(1, "Required"),
  email:     z.string().email("Invalid email"),
  phone:     z.string().min(7, "Invalid phone"),
  address:   z.string().min(1, "Required"),
  state:     z.string().min(1, "Select a state"),
  city:      z.string().min(1, "Required"),
  pincode:   z.string().regex(/^\d{4,10}$/, "Invalid pincode"),
  education: z.string().min(1, "Required"),
  experience:z.string().min(1, "Required"),
  message:   z.string().optional(),
});

/* ─── shared field styles ────────────────────────────────────── */
const inputCls =
  "h-10 rounded-lg border border-gray-200 bg-gray-50/60 px-3 text-sm text-gray-800 " +
  "placeholder:text-gray-400 focus:border-[#0078B4] focus:bg-white focus:ring-2 " +
  "focus:ring-[#0078B4]/15 transition-all duration-150";

const textareaCls =
  "min-h-[80px] rounded-lg border border-gray-200 bg-gray-50/60 px-3 py-2 text-sm text-gray-800 " +
  "placeholder:text-gray-400 focus:border-[#0078B4] focus:bg-white focus:ring-2 " +
  "focus:ring-[#0078B4]/15 transition-all duration-150 resize-none";

/* ─── section wrapper ────────────────────────────────────────── */
const SectionCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-xl border border-gray-100 bg-gray-50/40 p-4 space-y-4">
    <div className="flex items-center gap-2">
      <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#0078B4] to-[#00B4D9]" />
      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5" />
        {title}
      </h4>
    </div>
    {children}
  </div>
);

/* ─── component ─────────────────────────────────────────────── */
const ApplicationDialog = ({ job, open, onOpenChange }) => {
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState(null);

  const form = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName:"", lastName:"", email:"", phone:"",
      address:"", state:"", city:"", pincode:"",
      education:"", experience:"", message:"",
    },
  });

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResumeError(null);
    if (!file) return;
    if (!file.name.match(/\.(pdf|doc|docx)$/i)) { setResumeError("Only PDF/DOC/DOCX allowed"); return; }
    if (file.size > MAX_RESUME_BYTES) { setResumeError("Max size 5 MB"); return; }
    setResume(file);
  };

  const onSubmit = (values) => {
    if (!resume) { setResumeError("Please upload your resume"); return; }
    toast({
      title: "Application sent!",
      description: `Thanks ${values.firstName}! We've received your application for ${job?.title}.`,
    });
    form.reset();
    setResume(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0 bg-white rounded-2xl overflow-hidden border-0 shadow-2xl">
        <ScrollArea className="max-h-[88vh]">

          {/* ── Hero Header ─────────────────────────────────── */}
          <div className="relative bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FE] to-[#BAE6FD] px-6 pt-8 pb-6 md:px-8 md:pt-10">
            {/* Close button */}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm text-gray-500 hover:bg-white hover:text-gray-800 transition-all duration-200 shadow-sm"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4 bg-blue-50 text-blue-700 border-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Application Form
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl leading-tight">
              Apply — <span className="text-[#0078B4]">{job?.title ?? "Open Position"}</span>
            </h2>
            <p className="mt-1.5 text-sm text-gray-500">
              Fields marked with <span className="text-red-500 font-medium">*</span> are required
            </p>
          </div>

          {/* ── Form Body ────────────────────────────────────── */}
          <div className="px-6 py-6 md:px-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                {/* Personal Info */}
                <SectionCard icon={User} title="Personal Information">
                  <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">First Name *</FormLabel>
                        <FormControl><Input className={inputCls} placeholder="John" {...field} /></FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">Last Name *</FormLabel>
                        <FormControl><Input className={inputCls} placeholder="Doe" {...field} /></FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">Email *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                            <Input type="email" className={`${inputCls} pl-8`} placeholder="you@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">Phone *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                            <Input className={`${inputCls} pl-8`} placeholder="+91 98765 43210" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />
                  </div>
                </SectionCard>

                {/* Address */}
                <SectionCard icon={MapPin} title="Address">
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-gray-600">Street Address *</FormLabel>
                      <FormControl><Input className={inputCls} placeholder="123 Main Street, Apt 4B" {...field} /></FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} />

                  <div className="grid grid-cols-3 gap-3">
                    <FormField control={form.control} name="state" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">State *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className={`${inputCls} w-full`}>
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-60 overflow-y-auto bg-white">
                            {INDIAN_STATES.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">City *</FormLabel>
                        <FormControl><Input className={inputCls} placeholder="Chennai" {...field} /></FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="pincode" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium text-gray-600">Pincode *</FormLabel>
                        <FormControl><Input className={inputCls} placeholder="600001" {...field} /></FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )} />
                  </div>
                </SectionCard>

                {/* Background */}
                <SectionCard icon={GraduationCap} title="Background">
                  <FormField control={form.control} name="education" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-gray-600">Education *</FormLabel>
                      <FormControl>
                        <Textarea
                          className={textareaCls}
                          placeholder="e.g. B.E. Computer Science, Anna University, 2023 — CGPA 8.4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="experience" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-gray-600">Experience *</FormLabel>
                      <FormControl>
                        <Textarea
                          className={textareaCls}
                          placeholder="Describe any relevant work, internship, or project experience…"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} />
                </SectionCard>

                {/* Resume Upload */}
                <SectionCard icon={FileText} title="Resume">
                  <div className="space-y-2">
                    <label
                      htmlFor="resume-upload"
                      className={`
                        flex cursor-pointer items-center justify-between gap-4
                        rounded-xl border-2 border-dashed px-4 py-4 transition-all duration-200
                        ${resume
                          ? "border-[#0078B4] bg-blue-50/50"
                          : "border-gray-200 bg-gray-50/60 hover:border-[#0078B4] hover:bg-blue-50/30"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${resume ? "bg-blue-100" : "bg-gray-100"}`}>
                          {resume
                            ? <FileText className="h-5 w-5 text-[#0078B4]" />
                            : <Upload className="h-5 w-5 text-gray-400" />
                          }
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {resume ? resume.name : "Upload your resume"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {resume
                              ? `${(resume.size / 1024).toFixed(0)} KB — PDF / DOC / DOCX`
                              : "PDF, DOC, DOCX · Max 5 MB"
                            }
                          </p>
                        </div>
                      </div>
                      {resume && (
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setResume(null); }}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </label>
                    <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleResumeChange} />
                    {resumeError && <p className="text-xs font-medium text-red-500">{resumeError}</p>}
                  </div>
                </SectionCard>

                {/* Optional Message */}
                <SectionCard icon={MessageSquare} title="Cover Message (Optional)">
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className={textareaCls}
                          placeholder="Tell us why you're excited about this role…"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )} />
                </SectionCard>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2 pb-1">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex items-center justify-center h-10 px-5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 h-10 px-6 rounded-xl bg-gradient-to-r from-[#0078B4] to-[#00B4D9] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200"
                  >
                    Submit Application
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;