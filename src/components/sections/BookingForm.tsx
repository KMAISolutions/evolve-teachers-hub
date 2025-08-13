import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  organisation: z.string().min(2, "Enter your school/organisation"),
  saceNumber: z.string().optional(),
  date: z.string().min(1, "Enter your preferred dates"),
  type: z.string().min(1, "Select a service type"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async (data: BookingFormData) => {
    // Placeholder: integrate Supabase + email notifications in next step
    await new Promise((r) => setTimeout(r, 700));
    toast({
      title: "Request received!",
      description:
        "Thank you for booking an Evolve Session. We'll confirm via email shortly.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Your Name *</Label>
          <Input id="name" placeholder="Enter your full name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" placeholder="your.email@example.com" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone number" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="organisation">School/Organization</Label>
          <Input id="organisation" placeholder="Name of your school or organization" {...register("organisation")} />
          {errors.organisation && (
            <p className="text-xs text-destructive mt-1">{errors.organisation.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="type">Service Type *</Label>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="initial_consultation">Initial Consultation</SelectItem>
                  <SelectItem value="evolve_session">Evolve Session</SelectItem>
                  <SelectItem value="peer_evolution_circle">Peer Evolution Circle</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.type && (
            <p className="text-xs text-destructive mt-1">{errors.type.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="date">Preferred Dates</Label>
          <Input id="date" placeholder="Your preferred dates/times" {...register("date")} />
          {errors.date && (
            <p className="text-xs text-destructive mt-1">{errors.date.message}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="saceNumber">SACE Number</Label>
          <Input id="saceNumber" placeholder="e.g. SACE 1234567" {...register("saceNumber")} />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Tell Us About Your Healing Needs</Label>
        <Textarea id="message" placeholder="Share what brings you here... What challenges are you facing? What kind of healing support are you seeking?" rows={5} {...register("message")} />
      </div>
      <div>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Booking"}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
