import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingForm from "@/components/sections/BookingForm";

const BookingPage = () => {
  const title = "Book an Evolve Session | Teachers Evolve";
  const description = "Schedule educator sessions, peer circles, or workshops with Teachers Evolve.";

  return (
    <main className="container py-12 md:py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://teachersevolve.org/booking" />
      </Helmet>

      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Book an Evolve Session</h1>
        <p className="text-muted-foreground mb-6">
          Complete the form below. You'll receive an automated confirmation email.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Booking details</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default BookingPage;
