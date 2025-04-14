import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: "1",
    name: "Emily Johnson",
    avatar: "EJ",
    role: "Running Enthusiast",
    content: "The Air Cloud Runners are the most comfortable shoes I've ever worn. Perfect for long-distance runs and everyday use. The arch support is exceptional!",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "MC",
    role: "Basketball Coach",
    content: "I've tried many basketball shoes in my career, but the Velocity Max offers the best ankle support and grip I've experienced. My entire team now wears them.",
    rating: 5
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    avatar: "SR",
    role: "Fashion Blogger",
    content: "As someone who spends hours on her feet at fashion events, the Elegant Step Heels are my go-to shoes. Stylish yet comfortable enough for all-day wear.",
    rating: 4
  }
]

export function TestimonialSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from people who've experienced the comfort and style of Best Foot Forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.id}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="font-medium text-primary hover:underline cursor-pointer">
            Read More Reviews
          </p>
        </div>
      </div>
    </section>
  )
} 