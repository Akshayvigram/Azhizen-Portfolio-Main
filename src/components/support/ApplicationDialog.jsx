// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Upload } from "lucide-react";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "../../components/ui/dialog";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "../../components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
// import { ScrollArea } from "../../components/ui/scroll-area";
// import { Separator } from "../../components/ui/separator";
// import { toast } from "../../hooks/use-toast";

// const INDIAN_STATES = [
//   "Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana",
//   "Maharashtra", "Delhi", "Uttar Pradesh", "West Bengal"
// ];

// const MAX_RESUME_BYTES = 5 * 1024 * 1024;

// const applicationSchema = z.object({
//   firstName: z.string().min(1, "Required"),
//   lastName: z.string().min(1, "Required"),
//   email: z.string().email("Invalid email"),
//   phone: z.string().min(7, "Invalid phone"),
//   address: z.string().min(1, "Required"),
//   state: z.string().min(1, "Select state"),
//   city: z.string().min(1, "Required"),
//   pincode: z.string().regex(/^\d{4,10}$/, "Invalid pincode"),
//   education: z.string().min(1, "Required"),
//   experience: z.string().min(1, "Required"),
//   message: z.string().optional(),
// });

// const ApplicationDialog = ({ job, open, onOpenChange }) => {
//   const [resume, setResume] = useState(null);
//   const [resumeError, setResumeError] = useState(null);

//   const form = useForm({
//     resolver: zodResolver(applicationSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       address: "",
//       state: "",
//       city: "",
//       pincode: "",
//       education: "",
//       experience: "",
//       message: "",
//     },
//   });

//   const handleResumeChange = (e) => {
//     const file = e.target.files && e.target.files[0];
//     setResumeError(null);

//     if (!file) return;

//     if (!file.name.match(/\.(pdf|doc|docx)$/i)) {
//       setResumeError("Only PDF/DOC/DOCX allowed");
//       return;
//     }

//     if (file.size > MAX_RESUME_BYTES) {
//       setResumeError("Max size 5MB");
//       return;
//     }

//     setResume(file);
//   };

//   const onSubmit = (values) => {
//     if (!resume) {
//       setResumeError("Upload resume");
//       return;
//     }

//     toast({
//       title: "Application sent",
//       description: `Thanks ${values.firstName}! Applied for ${job?.title}`,
//     });

//     form.reset();
//     setResume(null);
//     onOpenChange(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-2xl p-0 bg-white">
//         <ScrollArea className="max-h-[85vh]">
//           <div className="p-6 space-y-6">
//             <DialogHeader>
//               <DialogTitle>
//                 Apply {job ? `— ${job.title}` : ""}
//               </DialogTitle>
//               <DialogDescription>
//                 Fill all required fields *
//               </DialogDescription>
//             </DialogHeader>

//             <Separator />

//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

//                 {/* Name */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>First Name *</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Last Name *</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Contact */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email *</FormLabel>
//                         <FormControl>
//                           <Input type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Phone *</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Address */}
//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Address *</FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Location */}
//                 <div className="grid grid-cols-3 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="state"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>State *</FormLabel>
//                         <Select onValueChange={field.onChange}>
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="State" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-white">
//                             {INDIAN_STATES.map((s) => (
//                               <SelectItem key={s} value={s}>{s}</SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="city"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>City *</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="pincode"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Pincode *</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 {/* Education */}
//                 <FormField
//                   control={form.control}
//                   name="education"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Education *</FormLabel>
//                       <FormControl>
//                         <Textarea {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Experience */}
//                 <FormField
//                   control={form.control}
//                   name="experience"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Experience *</FormLabel>
//                       <FormControl>
//                         <Textarea {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Message */}
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />

//                 {/* Resume */}
//                 {/* <div>
//                   <label className="text-sm font-medium">Resume *</label>
//                   <input type="file" onChange={handleResumeChange} />
//                   {resumeError && (
//                     <p className="text-red-500 text-sm">{resumeError}</p>
//                   )}
//                 </div> */}


//                 {/* Resume Upload */}
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Resume *</label>

//                   <label
//                     htmlFor="resume-upload"
//                     className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-5 transition-all hover:border-blue-500 hover:bg-blue-50"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
//                         📄
//                       </div>

//                       <div>
//                         <p className="text-sm font-medium text-gray-800">
//                           {resume ? resume.name : "Upload your resume"}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           PDF, DOC, DOCX • Max 5MB
//                         </p>
//                       </div>
//                     </div>

//                     {resume && (
//                       <span className="text-xs text-gray-600">
//                         {(resume.size / 1024).toFixed(0)} KB
//                       </span>
//                     )}
//                   </label>

//                   <input
//                     id="resume-upload"
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     className="hidden"
//                     onChange={handleResumeChange}
//                   />

//                   {resumeError && (
//                     <p className="text-sm font-medium text-red-500">{resumeError}</p>
//                   )}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-end gap-2">
//                   <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
//                     Cancel
//                   </Button>
//                   <Button type="submit">Apply</Button>
//                 </div>

//               </form>
//             </Form>
//           </div>
//         </ScrollArea>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ApplicationDialog;


















import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { toast } from "../../hooks/use-toast";


// ✅ FULL STATES LIST
const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

// ✅ SORTED
const SORTED_STATES = [...INDIAN_STATES].sort();

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

// ✅ VALIDATION
const applicationSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone"),
  address: z.string().min(1, "Required"),
  state: z.string().min(1, "Select state"),
  city: z.string().min(1, "Required"),
  pincode: z.string().regex(/^\d{4,10}$/, "Invalid pincode"),
  education: z.string().min(1, "Required"),
  experience: z.string().min(1, "Required"),
  message: z.string().optional(),
});

const ApplicationDialog = ({ job, open, onOpenChange }) => {
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState(null);

  const form = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      city: "",
      pincode: "",
      education: "",
      experience: "",
      message: "",
    },
  });

  // ✅ Resume handler
  const handleResumeChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setResumeError(null);

    if (!file) return;

    if (!file.name.match(/\.(pdf|doc|docx)$/i)) {
      setResumeError("Only PDF/DOC/DOCX allowed");
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setResumeError("Max size 5MB");
      return;
    }

    setResume(file);
  };

  // ✅ Submit
  const onSubmit = (values) => {
    if (!resume) {
      setResumeError("Upload resume");
      return;
    }

    toast({
      title: "Application sent",
      description: `Thanks ${values.firstName}! Applied for ${job?.title}`,
    });

    // toast.success("MEssage sent")

    form.reset();
    setResume(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 bg-white">
        <ScrollArea className="max-h-[85vh]">
          <div className="p-6 space-y-6">

            {/* Header */}
            <DialogHeader>
              <DialogTitle>
                Apply {job ? `— ${job.title}` : ""}
              </DialogTitle>
              <DialogDescription>
                Fill all required fields *
              </DialogDescription>
            </DialogHeader>

            <Separator />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location */}
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State *</FormLabel>

                        <Select
                          onValueChange={field.onChange}
                          value={field.value}   // ✅ IMPORTANT FIX
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                          </FormControl>

                          {/* 🔥 FIX: Make dropdown scrollable */}
                          <SelectContent className="max-h-60 overflow-y-auto bg-white">
                            {SORTED_STATES.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Education */}
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education *</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Experience */}
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience *</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Resume *</label>

                  <label
                    htmlFor="resume-upload"
                    className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-5 hover:border-blue-500 hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-3">
                      <Upload className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">
                          {resume ? resume.name : "Upload your resume"}
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX • Max 5MB
                        </p>
                      </div>
                    </div>

                    {resume && (
                      <span className="text-xs text-gray-600">
                        {(resume.size / 1024).toFixed(0)} KB
                      </span>
                    )}
                  </label>

                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleResumeChange}
                  />

                  {resumeError && (
                    <p className="text-sm text-red-500">{resumeError}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Apply</Button>
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