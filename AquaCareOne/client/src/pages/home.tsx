import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Droplets, Sparkles, Wind, Home as HomeIcon, Waves, Recycle, CheckCircle, Star, MapPin, Calendar, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

import heroImage from "@assets/WhatsApp Image 2025-09-25 at 11.14.35_8062e788_1760845193201.jpg";
import gallery1 from "@assets/WhatsApp Image 2025-09-25 at 11.14.34_c79f7d5d_1760845193198.jpg";
import gallery2 from "@assets/WhatsApp Image 2025-09-25 at 11.14.35_8062e788_1760845193201.jpg";
import gallery3 from "@assets/WhatsApp Image 2025-09-25 at 11.14.35_c84a3f19_1760845193203.jpg";
import gallery4 from "@assets/WhatsApp Image 2025-09-25 at 11.14.35_00219bc6_1760845193204.jpg";
import gallery5 from "@assets/WhatsApp Image 2025-09-25 at 11.14.35_dead2281_1760845193205.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Acid Washing",
    description: "Deep-cleaning process that removes stubborn stains, algae buildup, and discoloration, restoring the original brightness of your pool surfaces.",
    category: "Pools, Hot Tubs, and Fountains"
  },
  {
    icon: Droplets,
    title: "Scale Removal",
    description: "Safely eliminate calcium and hard water deposits without damaging surfaces, restoring a clean and smooth appearance.",
    category: "All Water Features"
  },
  {
    icon: Wind,
    title: "Pressure Washing - Water Features",
    description: "High-powered cleaning that blasts away dirt, grime, and algae from pool decks, hot tubs, and fountains.",
    category: "Pools & Hot Tubs"
  },
  {
    icon: HomeIcon,
    title: "Pressure Washing - Outdoor Spaces",
    description: "Restore driveways, patios, and walkways by removing oil stains, dirt, and debris, improving curb appeal and safety.",
    category: "Driveways & Patios"
  },
  {
    icon: Waves,
    title: "Fountain Cleaning",
    description: "Complete fountain care including surface scrubbing, algae removal, and system flushing to keep water clear and flowing.",
    category: "Fountains"
  },
  {
    icon: Droplets,
    title: "Artificial Arroyo Cleaning",
    description: "Remove debris, algae, and mineral deposits from artificial streams and arroyos, restoring natural water flow.",
    category: "Water Features"
  },
  {
    icon: Recycle,
    title: "Wastewater Pump-Out",
    description: "Safe removal and disposal of dirty water and debris, leaving every job site clean and protecting your landscaping.",
    category: "All Services"
  }
];

const galleryImages = [
  { src: gallery1, alt: "Clean pool with blue tile work and modern design", caption: "Pool Restoration" },
  { src: gallery2, alt: "Pristine blue pool after professional cleaning", caption: "Acid Washing Service" },
  { src: gallery3, alt: "Modern pool with custom tile features", caption: "Complete Cleaning" },
  { src: gallery4, alt: "Pool deck pressure washing service", caption: "Pressure Washing" },
  { src: gallery5, alt: "Pool cleaning and maintenance work", caption: "Professional Care" }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Arroyo Aqua Care transformed our pool! After years of mineral buildup, they restored it to pristine condition. Their acid washing service was professional and the results are stunning.",
    service: "Acid Washing"
  },
  {
    name: "Michael Rodriguez",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "Best pool cleaning service we've used. They're reliable, thorough, and reasonably priced. Our pool has never looked better!",
    service: "Pool Maintenance"
  },
  {
    name: "Jennifer Park",
    location: "Tempe, AZ",
    rating: 5,
    text: "The pressure washing service for our pool deck and patio was incredible. Removed years of grime and made everything look brand new. Highly recommend!",
    service: "Pressure Washing"
  }
];

const blogPosts = [
  {
    title: "5 Signs Your Pool Needs Acid Washing",
    excerpt: "Learn to identify when your pool surfaces need professional acid washing to restore their original beauty and prevent long-term damage.",
    date: "March 15, 2024",
    category: "Maintenance Tips"
  },
  {
    title: "How to Prevent Calcium Buildup in Your Pool",
    excerpt: "Discover effective strategies to minimize hard water deposits and keep your pool tiles looking pristine year-round.",
    date: "March 8, 2024",
    category: "Prevention Guide"
  },
  {
    title: "Spring Pool Opening Checklist",
    excerpt: "Get your pool ready for swimming season with our comprehensive checklist covering cleaning, chemical balancing, and equipment inspection.",
    date: "February 28, 2024",
    category: "Seasonal Care"
  }
];

export default function Home() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,15%)]/80 via-[hsl(200,85%,25%)]/70 to-[hsl(190,70%,50%)]/60" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-6 inline-block">
            <span className="text-[hsl(190,100%,96%)] text-sm font-medium tracking-wider uppercase">
              Professional Pool & Water Feature Care
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Arroyo Aqua Care
          </h1>
          
          <p className="text-xl md:text-2xl text-[hsl(190,100%,96%)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your pool and water features with expert cleaning, restoration, and maintenance services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white"
              data-testid="button-get-quote"
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white"
              data-testid="button-view-services"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive pool and water feature care tailored to keep your outdoor spaces pristine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover-elevate transition-all duration-300 border-card-border"
                  data-testid={`card-service-${index}`}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {service.category}
                  </p>
                  <p className="text-base text-card-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section with Slider */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stunning transformations that speak for themselves
            </p>
          </div>

          {/* Featured Slider */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                <img 
                  src={galleryImages[currentImageIndex].src} 
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  data-testid="image-slider-current"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,50%,15%)]/80 via-transparent to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-2xl">
                    {galleryImages[currentImageIndex].caption}
                  </p>
                </div>
              </div>
              
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                onClick={previousImage}
                data-testid="button-slider-previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={nextImage}
                data-testid="button-slider-next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover-elevate'
                    }`}
                    data-testid={`button-slider-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index} 
                onClick={() => setCurrentImageIndex(index)}
                className={`group relative overflow-hidden rounded-xl aspect-[4/3] hover-elevate transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-2 ring-primary' : ''
                }`}
                data-testid={`image-gallery-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 border-card-border"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(190,70%,50%)] text-[hsl(190,70%,50%)]" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-card-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-sm text-primary mt-2">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(190,100%,96%)] to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proudly serving the greater Phoenix metropolitan area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 border-card-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Primary Service Areas
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria"].map((city, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-card-foreground">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-card-border pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Don't see your area listed? Contact us! We may be able to accommodate special service requests in surrounding communities.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <div className="bg-muted/50 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <MapPin className="w-24 h-24 text-primary/30 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Coverage Map</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Serving residential and commercial properties throughout the Phoenix metropolitan area with professional pool care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Pool Care Tips & Advice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert insights to keep your pool pristine year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="p-8 hover-elevate transition-all duration-300 border-card-border group cursor-pointer"
                data-testid={`card-blog-${index}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[hsl(190,100%,96%)] to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your pool or water feature? Contact us for a free quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-12 border-card-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[hsl(160,60%,45%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[hsl(160,60%,45%)]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit((data) => contactMutation.mutate(data))} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Smith" 
                                {...field} 
                                data-testid="input-name"
                                className="border-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-card-foreground">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="john@example.com" 
                                  {...field} 
                                  data-testid="input-email"
                                  className="border-input"
                                />
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
                              <FormLabel className="text-card-foreground">Phone</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(555) 123-4567" 
                                  {...field} 
                                  data-testid="input-phone"
                                  className="border-input"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-foreground">Service Needed</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service" className="border-input">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service, index) => (
                                  <SelectItem key={index} value={service.title}>
                                    {service.title}
                                  </SelectItem>
                                ))}
                                <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                                <SelectItem value="Not Sure">Not Sure - Need Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your pool or water feature and what you need..."
                                className="min-h-32 resize-none border-input"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 border-card-border">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-lg font-medium text-primary hover:underline" data-testid="link-phone">
                      (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@arroyoaquacare.com" className="text-lg font-medium text-primary hover:underline" data-testid="link-email">
                      info@arroyoaquacare.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-card-border">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                  Service Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-card-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-card-foreground">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-card-foreground">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Service Areas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proudly serving residential and commercial properties throughout the region with professional pool and water feature care.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(210,50%,15%)] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Arroyo Aqua Care</h3>
              <p className="text-[hsl(190,100%,96%)]">
                Professional Pool & Water Feature Care
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[hsl(190,100%,96%)]">
                © {new Date().getFullYear()} Arroyo Aqua Care. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
