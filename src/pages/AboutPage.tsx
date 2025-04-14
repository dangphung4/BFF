import { MinimalSection } from "@/components/MinimalSection";
import { Separator } from "@/components/ui/separator";
import { Wrench, Leaf, Award } from "lucide-react";
import teammemberImage from "@/assets/teammember.png";
import { TeamMember } from "@/components/TeamMember";
import { ValueCard } from "@/components/ValueCard";
import { LeatherShowcase } from "@/components/LeatherShowcase";

// Team member data
const teamMembers = [
  {
    name: "Wilfred Lopez",
    role: "Founder & Master Craftsman",
    image: teammemberImage,
    delay: 0.1,
  },
  {
    name: "Wilfred Lopez",
    role: "Lead Leather Artisan",
    image: teammemberImage,
    delay: 0.3,
  },
  {
    name: "Wilfred Lopez",
    role: "Shoe Repair Specialist",
    image: teammemberImage,
    delay: 0.5,
  },
  {
    name: "Wilfred Lopez",
    role: "Custom Design Specialist",
    image: teammemberImage,
    delay: 0.7,
  },
];

// Values with icons
const values = [
  {
    title: "Quality Craftsmanship",
    description: "We approach each project with meticulous attention to detail and a commitment to excellence.",
    icon: Wrench,
  },
  {
    title: "Sustainability",
    description: "By repairing and restoring, we extend the life of your items and reduce environmental impact.",
    icon: Leaf,
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We strive to exceed expectations with every project.",
    icon: Award,
  },
];

// Leather showcases
const leatherShowcases = [
  {
    title: "Premium Leather Goods",
    description: "Handcrafted leather products made with the finest materials and expert craftsmanship.",
    image: "https://i.imgur.com/DTVT3KH.jpg",
  },
  {
    title: "Expert Shoe Repair",
    description: "Professional restoration and repair services for all types of footwear.",
    image: "https://i.imgur.com/qN8wvTq.jpg",
  },
  {
    title: "Custom Leather Work",
    description: "Bespoke leather goods crafted to your specifications with attention to every detail.",
    image: "https://i.imgur.com/7EQ8nv2.jpg",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Best Foot Forward</h1>
            <p className="text-lg text-muted-foreground">
              Best Foot Forward has been Alexandria's premier shoe and leather repair shop since 2003. 
              We combine traditional craftsmanship with modern techniques to deliver exceptional quality.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Best Foot Forward was founded in 2003 by master craftsman Wilfred Lopez, who learned the 
              art of leather working and shoe repair from his father and grandfather. What began as a small 
              repair shop has grown into Alexandria's most trusted destination for all leather care and repair needs.
            </p>
            <p className="text-muted-foreground mb-4">
              Our philosophy is simple: we believe quality leather goods are an investment, and proper care 
              and maintenance will ensure they last for generations. We have built our reputation on exceptional 
              craftsmanship, personalized service, and attention to detail.
            </p>
            <p className="text-muted-foreground">
              Today, our team of skilled artisans continues this tradition of excellence, combining time-honored 
              techniques with modern innovations to provide the highest quality repairs and custom leather goods.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
            <img 
              src="https://i.imgur.com/qN8wvTq.jpg" 
              alt="Leather workshop with shoes" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
        
        <MinimalSection />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={member.delay}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {leatherShowcases.map((showcase, index) => (
            <LeatherShowcase
              key={index}
              title={showcase.title}
              description={showcase.description}
              image={showcase.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 