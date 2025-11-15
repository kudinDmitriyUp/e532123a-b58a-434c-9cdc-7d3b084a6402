"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, Building, Crown, DollarSign, MapPin, MessageSquare, Phone, Star, TrendingUp, Waves } from "lucide-react";

export default function MainPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Properties", id: "product" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mumbai Beachside Realty"
          button={{
            text: "Schedule Visit",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Premium Beachside Living in Mumbai"
          description="Discover luxury properties with stunning sea views, modern amenities, and prime locations near Mumbai's beautiful coastline. Your dream home awaits."
          tag="Prime Location"
          tagIcon={MapPin}
          buttons={[
            { text: "View Properties", href: "product" },
            { text: "Schedule Tour", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242198204-vrhdowi4.jpg",
              imageAlt: "Mumbai Marine Drive luxury properties"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242198867-udmyw3zp.jpg",
              imageAlt: "Mumbai beachside apartment complex"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242199527-zxbtqgcj.jpg",
              imageAlt: "Mumbai luxury real estate towers"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242200258-whg8tv1f.jpg",
              imageAlt: "Mumbai coastal development project"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242201023-3m7sl5xa.jpg",
              imageAlt: "Mumbai waterfront residential buildings"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="At Mumbai Beachside Realty, we specialize in premium coastal properties that offer the perfect blend of luxury living and strategic investment opportunities. With over a decade of experience in Mumbai's real estate market, we understand what makes a property truly exceptional."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Why Our Properties Stand Out"
          description="Every property in our portfolio offers unique advantages that make Mumbai beachside living exceptional"
          tag="Premium Features"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Sea View Guarantee",
              description: "Every property offers unobstructed views of the Arabian Sea with floor-to-ceiling windows and private balconies perfect for watching Mumbai's spectacular sunsets",
              icon: Waves
            },
            {
              title: "Premium Amenities",
              description: "World-class facilities including infinity pools, fitness centers, concierge services, and dedicated parking spaces in every residential complex",
              icon: Building
            },
            {
              title: "Strategic Location",
              description: "Prime beachfront locations with easy access to Mumbai's business district, entertainment hubs, and excellent connectivity to major transport links",
              icon: MapPin
            },
            {
              title: "Investment Potential",
              description: "High appreciation rates and rental yields in Mumbai's most sought-after coastal areas with strong resale value and growing market demand",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Properties"
          description="Handpicked luxury beachside properties offering the best of Mumbai coastal living"
          tag="Available Now"
          tagIcon={MapPin}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "prop-1",
              name: "Seaview Heights 2BHK",
              price: "₹2.5 Cr",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242201769-tiqn8xi9.jpg",
              imageAlt: "Modern 2BHK apartment with sea view"
            },
            {
              id: "prop-2",
              name: "Azure Bay 3BHK",
              price: "₹4.2 Cr",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242202554-o6zds4h6.jpg",
              imageAlt: "Spacious 3BHK sea facing apartment"
            },
            {
              id: "prop-3",
              name: "Ocean Pearl Penthouse",
              price: "₹8.5 Cr",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242203266-q0xht60w.jpg",
              imageAlt: "Luxury penthouse with terrace garden"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Property Investment Plans"
          description="Choose the perfect property package that fits your lifestyle and investment goals"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "First Home",
              badgeIcon: MapPin,
              price: "₹2-3 Cr",
              subtitle: "Perfect for young professionals",
              features: [
                "2BHK sea view apartment",
                "Premium building amenities",
                "24/7 security & concierge",
                "Gym & swimming pool access",
                "Prime beachside location"
              ]
            },
            {
              id: "family",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "₹4-5 Cr",
              subtitle: "Ideal for growing families",
              features: [
                "3BHK spacious apartment",
                "Panoramic sea views",
                "Children's play area",
                "Club house & party hall",
                "Covered parking spaces"
              ]
            },
            {
              id: "luxury",
              badge: "Premium",
              badgeIcon: Crown,
              price: "₹7-10 Cr",
              subtitle: "Ultimate luxury living",
              features: [
                "4BHK penthouse with terrace",
                "Private lift & entrance",
                "Personal swimming pool",
                "360° sea & city views",
                "Concierge & housekeeping"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Track Record"
          description="Proven success in Mumbai's beachside real estate market"
          tag="Statistics"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Happy Families Relocated"
            },
            {
              id: "2",
              value: "₹200+ Cr",
              description: "Properties Sold Successfully"
            },
            {
              id: "3",
              value: "15+",
              description: "Years Market Experience"
            },
            {
              id: "4",
              value: "98%",
              description: "Client Satisfaction Rate"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real experiences from families who found their dream homes with us"
          tag="Client Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Rajesh Sharma",
              role: "Software Engineer",
              company: "Tech Solutions Mumbai",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242204013-7n8czt4c.jpg",
              imageAlt: "Rajesh Sharma testimonial"
            },
            {
              id: "2",
              name: "Priya & Amit Gupta",
              role: "Business Owners",
              company: "Gupta Enterprises",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242204790-qrm9hd7e.jpg",
              imageAlt: "Priya and Amit Gupta testimonial"
            },
            {
              id: "3",
              name: "Kavita Menon",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242205771-c3x9h7pa.jpg",
              imageAlt: "Kavita Menon testimonial"
            },
            {
              id: "4",
              name: "Arjun Patel",
              role: "Investment Banker",
              company: "Financial Services",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242206446-7tc5rbmw.jpg",
              imageAlt: "Arjun Patel testimonial"
            },
            {
              id: "5",
              name: "Sunita & Ravi Singh",
              role: "Retired Couple",
              company: "Dream Home Owners",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242207187-vxlo1fze.jpg",
              imageAlt: "Sunita and Ravi Singh testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Find Your Dream Home?"
          description="Schedule a personalized property tour or get expert consultation on Mumbai's best beachside properties. Our team is here to help you every step of the way."
          tagIcon={Phone}
          inputPlaceholder="Enter your email"
          buttonText="Schedule Tour"
          termsText="By scheduling a tour, you agree to receive property updates and market insights from our team."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763242207876-wqzizc0h.jpg"
          imageAlt="Mumbai real estate consultation"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Properties",
              items: [
                { label: "2BHK Apartments", href: "product" },
                { label: "3BHK Luxury", href: "product" },
                { label: "Penthouses", href: "product" },
                { label: "Investment Options", href: "pricing" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Team", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Property Tours", href: "contact" },
                { label: "Investment Guide", href: "contact" },
                { label: "Legal Support", href: "contact" }
              ]
            }
          ]}
          brandName="Mumbai Beachside Realty"
          copyrightText="© 2025 | Mumbai Beachside Realty - Premium Coastal Properties"
        />
      </div>
    </ThemeProvider>
  );
}