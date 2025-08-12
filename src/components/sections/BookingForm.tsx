import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  organisation: z.string().min(2, "Enter your school/organisation"),
  date: z.string().min(1, "Select a preferred date"),
  type: z.string().min(1, "Select a session type"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
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
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="organisation">School/Organisation</Label>
          <Input id="organisation" placeholder="e.g. Ubuntu High School" {...register("organisation")} />
          {errors.organisation && (
            <p className="text-xs text-destructive mt-1">{errors.organisation.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.org" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+27 ..." {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date && (
            <p className="text-xs text-destructive mt-1">{errors.date.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="type">Session type</Label>
          <Input id="type" placeholder="Evolve Session / Peer Circle / Workshop" {...register("type")} />
          {errors.type && (
            <p className="text-xs text-destructive mt-1">{errors.type.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="message">Additional notes</Label>
        <Textarea id="message" placeholder="Share context, goals, or questions" rows={5} {...register("message")} />
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
