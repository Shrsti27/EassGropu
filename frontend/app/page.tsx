"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Eye,
  Camera,
  UserCheck,
  Home,
  Scale,
  Search,
  Crown,
  ShieldCheck,
  Briefcase,
  Flower2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Globe,
  HeadphonesIcon,
  Settings,
  Star,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  ChevronLeft,
  Quote,
  Calendar,
  Users2,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Slider images
import banner1 from "@/src/assets/banner1.png";
import banner2 from "@/src/assets/banner2.png";
import banner3 from "@/src/assets/banner3 (2).png";
import banner4 from "@/src/assets/banner4.png";

// Secound secion images
import secoundsec from "@/src/assets/mm.png";

// Services images
import gun from "@/src/assets/gun.png";
import personalBodyGuard from "@/src/assets/BodyGurd.png";
import housekeeping from "@/src/assets/Housekeeping.png";
import legalRecovery from "@/src/assets/Legal.png";
import verificationServices from "@/src/assets/Verification.png";
import investigation from "@/src/assets/Investigation.png";
import vip from "@/src/assets/VIP.png";
import lady from "@/src/assets/Lady.png";
import bouncer from "@/src/assets/Bouncer.png";
import Manpower from "@/src/assets/Manpower.png";

// Gallery images
import id1 from "@/src/assets/1.jpg";
import id2 from "@/src/assets/2.jpg";
import id3 from "@/src/assets/3.jpg";
import id4 from "@/src/assets/4.jpg";
import id5 from "@/src/assets/5.jpg";
import id6 from "@/src/assets/6.jpg";
// import id7 from "@/src/assets/7.jpg";
import id8 from "@/src/assets/8.jpg";
import id9 from "@/src/assets/9.jpg";
import id10 from "@/src/assets/10.jpg";
import id11 from "@/src/assets/11.jpg";
import id12 from "@/src/assets/12.jpg";
import id13 from "@/src/assets/13.jpg";
import id14 from "@/src/assets/14.jpg";

// Avtar
import avtra from "@/src/assets/avtart.jpg";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Keen Slider for Services
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free",
      slides: {
        perView: 3,
        spacing: 15,
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
        "(max-width: 1024px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Hero Slides Data
  const heroSlides = [
    {
      title: "Protecting What Matters Most",
      subtitle: "Since 1984",
      description:
        "Led by retired Army officers, we deliver military-grade security solutions across India with uncompromising discipline and professionalism.",
      image: banner1,
      stats: {
        years: "40+",
        clients: "5000+",
        support: "24/7",
        satisfaction: "100%",
      },
    },
    {
      title: "Elite Personal Protection",
      subtitle: "VIP Security Services",
      description:
        "Our highly trained bodyguards provide discreet and professional personal protection services for high-profile individuals and executives.",
      image: banner2,
      stats: {
        guards: "500+",
        operations: "Pan-India",
        response: "Instant",
        training: "Military",
      },
    },
    {
      title: "Corporate Security Excellence",
      subtitle: "Business Protection",
      description:
        "Comprehensive corporate security solutions including facility protection, executive security, and risk assessment services.",
      image: banner3,
      stats: {
        companies: "1000+",
        facilities: "2500+",
        coverage: "All-India",
        expertise: "40 Years",
      },
    },
    {
      title: "Advanced Investigation Services",
      subtitle: "Truth & Justice",
      description:
        "Professional investigation services with military precision, utilizing advanced techniques and technology for accurate results.",
      image: banner4,
      stats: {
        cases: "10000+",
        success: "98%",
        confidential: "100%",
        experience: "4 Decades",
      },
    },
  ];

  const services = [
    {
      name: "Gun Man",
      icon: Shield,
      description:
        "Highly trained armed security personnel for maximum protection in high-risk environments",
      features: ["Licensed firearms", "Combat training", "Risk assessment"],
      image: gun,
    },
    {
      name: "Personal Body Guard",
      icon: UserCheck,
      description:
        "Elite personal protection services with military precision and discretion",
      features: ["VIP protection", "Threat analysis", "Close protection"],
      image: personalBodyGuard,
    },
    {
      name: "Housekeeping",
      icon: Home,
      description:
        "Professional cleaning and maintenance services with security-conscious staff",
      features: ["Verified staff", "Quality assurance", "Flexible schedules"],
      image: housekeeping,
    },
    {
      name: "Legal Recovery",
      icon: Scale,
      description:
        "Asset recovery and legal enforcement services with lawful procedures",
      features: ["Debt recovery", "Asset tracing", "Legal compliance"],
      image: legalRecovery,
    },
    {
      name: "Verification Services",
      icon: Search,
      description:
        "Comprehensive background checks and verification for individuals and businesses",
      features: [
        "Background checks",
        "Document verification",
        "Employment screening",
      ],
      image: verificationServices,
    },
    {
      name: "Investigation",
      icon: Eye,
      description:
        "Professional private investigation services with military-grade intelligence gathering",
      features: ["Corporate investigation", "Personal matters", "Surveillance"],
      image: investigation,
    },
    {
      name: "CCTV Camera Installation",
      icon: Camera,
      description:
        "Advanced surveillance systems installation and monitoring services",
      features: ["HD cameras", "Remote monitoring", "24/7 support"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "VIP & Corporate Security",
      icon: Crown,
      description:
        "Executive protection and corporate security solutions for high-profile clients",
      features: [
        "Executive protection",
        "Event security",
        "Corporate facilities",
      ],
      image: vip,
    },
    {
      name: "Bouncer Security",
      icon: ShieldCheck,
      description:
        "Professional crowd control and venue security for events and establishments",
      features: ["Crowd control", "Access management", "Conflict resolution"],
      image: bouncer,
    },
    {
      name: "Lady Security",
      icon: Users,
      description:
        "Female security personnel for sensitive environments and women's safety",
      features: ["Women's safety", "Sensitive areas", "Professional conduct"],
      image: lady,
    },
    {
      name: "Manpower Supply",
      icon: Briefcase,
      description:
        "Skilled workforce solutions across various industries with security clearance",
      features: [
        "Skilled workforce",
        "Background verified",
        "Industry expertise",
      ],
      image: Manpower,
    },
    {
      name: "Gardeners",
      icon: Flower2,
      description:
        "Professional landscaping and garden maintenance with security awareness",
      features: ["Landscape design", "Maintenance", "Security conscious"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced Team",
      description:
        "Led by retired Army officers with decades of military and security experience",
      stats: "40+ Years Experience",
    },
    {
      icon: Globe,
      title: "All-India Operations",
      description:
        "Nationwide coverage with local expertise and rapid response capabilities",
      stats: "Pan-India Presence",
    },
    {
      icon: Shield,
      title: "Affordable, Resilient Security",
      description:
        "Cost-effective solutions without compromising on quality or reliability",
      stats: "Best Value Guarantee",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Client Support",
      description:
        "Round-the-clock assistance, monitoring, and emergency response services",
      stats: "24/7 Availability",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description:
        "Tailored security plans designed to meet your specific requirements and budget",
      stats: "100% Customized",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Industries Ltd.",
      position: "Managing Director",
      text: "EASS Security has been our trusted partner for over 8 years. Their military discipline and professionalism are unmatched in the industry. The retired Army officers bring a level of expertise that gives us complete confidence in our security arrangements.",
      rating: 5,
      image: avtra,
      date: "March 2024",
    },
    {
      name: "Priya Sharma",
      company: "Sharma Enterprises",
      position: "CEO",
      text: "The personal bodyguard service provided by EASS gave me complete peace of mind during a challenging period. Their attention to detail, professional conduct, and discrete protection exceeded all expectations. Highly recommended!",
      rating: 5,
      image: avtra,
      date: "February 2024",
    },
    {
      name: "Amit Patel",
      company: "Patel Group of Companies",
      position: "Chairman",
      text: "Their investigation services helped us resolve a critical business matter efficiently and discreetly. The team's military background was evident in their systematic approach and successful results. Outstanding service quality.",
      rating: 5,
      image: avtra,
      date: "January 2024",
    },
    {
      name: "Dr. Sunita Mehta",
      company: "Mehta Healthcare",
      position: "Director",
      text: "EASS Security's CCTV installation and monitoring services have significantly enhanced our facility's security. Their 24/7 support team is always responsive and professional. The technology they use is top-notch.",
      rating: 5,
      image: avtra,
      date: "December 2023",
    },
    {
      name: "Vikram Singh",
      company: "Singh Construction",
      position: "Owner",
      text: "We've been using EASS Security for our construction sites for 5 years. Their guards are well-trained, punctual, and maintain high standards of security. The military discipline is clearly visible in their operations.",
      rating: 5,
      image: avtra,
      date: "November 2023",
    },
    {
      name: "Meera Gupta",
      company: "Gupta Textiles",
      position: "Managing Partner",
      text: "The lady security guards provided by EASS are professional, courteous, and highly skilled. They've created a safe environment for our female employees and customers. Excellent service and support.",
      rating: 5,
      image: avtra,
      date: "October 2023",
    },
  ];

  // Gallery Data
  const galleryCategories = [
    { id: "all", name: "All Images" },
    // { id: "events", name: "events" },
  ];

  const galleryImages = [
    // Security Personnel
    {
      id: 1,
      category: "event",
      title: "Eass Groups",
      image: id1,
    },
    {
      id: 2,
      category: "event",
      title: "Eass Groups",
      image: id2,
    },
    {
      id: 4,
      category: "event",
      title: "Eass Groups",
      image: id4,
    },
    {
      id: 3,
      category: "event",
      title: "Eass Groups",
      image: id3,
    },
    {
      id: 9,
      category: "event",
      title: "Eass Groups",
      image: id9,
    },

    {
      id: 5,
      category: "event",
      title: "Eass Groups",
      image: id5,
    },
    {
      id: 6,
      category: "event",
      title: "Eass Groups",
      image: id6,
    },
    // {
    //   id: 7,
    //   category: "event",
    //   title: "Eass Groups",
    //   image: id7,
    // },
    {
      id: 13,
      category: "event",
      title: "Eass Groups",
      image: id13,
    },
    {
      id: 14,
      category: "event",
      title: "Eass Groups",
      image: id14,
    },
    {
      id: 8,
      category: "event",
      title: "Eass Groups",
      image: id8,
    },

    {
      id: 10,
      category: "event",
      title: "Eass Groups",
      image: id10,
    },
    {
      id: 11,
      category: "event",
      title: "Eass Groups",
      image: id11,
    },
    {
      id: 12,
      category: "event",
      title: "Eass Groups",
      image: id12,
    },
  ];

  const filteredGalleryImages =
    selectedGalleryCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedGalleryCategory);

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-navy-600">
      {/* Header */}
      <header className="bg-navy-600 text-white sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gold-400 p-2 rounded-full">
                <Shield className="h-8 w-8 text-navy-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  EASS SECURITY
                </h1>
                <p className="text-xs text-gold-400 font-medium">
                  SERVICES PVT. LTD.
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                href="#home"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="hover:text-gold-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#gallery"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  Gallery
                </Link>
                <Link
                  href="#testimonials"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  className="py-2 hover:text-gold-400 transition-colors font-medium"
                >
                  Contact
                </Link>
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold mt-4">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section
        id="home"
        className="relative  text-white py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                index === currentHeroSlide
                  ? "bg-gold-400 border-gold-400"
                  : "bg-white/20 border-white/50 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="flex items-center space-x-3 mb-8">
              <Badge className="bg-gold-400 text-navy-900 hover:bg-gold-500 text-sm font-semibold px-4 py-2">
                TRUSTED SINCE 1984
              </Badge>
              <Badge
                variant="outline"
                className="border-gold-400 text-gold-400 text-sm font-semibold px-4 py-2"
              >
                MILITARY HERITAGE
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-shadow-lg">
              {heroSlides[currentHeroSlide].title}
              <br />
              <span className="text-gold-400">
                {heroSlides[currentHeroSlide].subtitle}
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl leading-relaxed text-shadow">
              {heroSlides[currentHeroSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button
                size="lg"
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-lg px-8 py-4 h-auto"
              >
                Request a Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Link href="#gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-navy-900 font-bold text-lg px-8 py-4 h-auto"
                >
                  <PlayCircle className="mr-3 h-6 w-6" />
                  Watch Our Story
                </Button>
              </Link>
            </div>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(heroSlides[currentHeroSlide].stats).map(
                ([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-4xl font-bold text-gold-400 mb-2">
                      {value}
                    </div>
                    <div className="text-gray-300 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span className="font-bold">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-bold">40+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users2 className="h-5 w-5" />
              <span className="font-bold">5000+ Satisfied Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-bold">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6  text-white text-xl font-semibold px-4 py-2">
                ABOUT EASS SECURITY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 leading-tight">
                Four Decades of
                <span className="text-gold-400"> Unwavering Protection</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 1984, EASS Security Services Pvt. Ltd. has stood as
                India&apos;s most trusted guardian, providing comprehensive
                security solutions with military precision. Founded and
                continuously led by retired Army officers, we bring unparalleled
                discipline, strategic thinking, and operational excellence to
                civilian security needs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our nationwide operations encompass investigation services,
                personal protection, corporate security, and specialized
                manpower solutions. We seamlessly blend traditional military
                values of honor, duty, and integrity with cutting-edge security
                technologies and methodologies.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-400" />
                  <span className="text-gray-700 font-medium">
                    Military-grade discipline and training protocols
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-400" />
                  <span className="text-gray-700 font-medium">
                    Nationwide operations with local expertise
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-400" />
                  <span className="text-gray-700 font-medium">
                    Comprehensive security and investigation services
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-400" />
                  <span className="text-gray-700 font-medium">
                    24/7 monitoring and emergency response
                  </span>
                </div>
              </div>

              <Button className=" hover:bg-navy-800 text-white font-semibold px-8 py-3">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <Image
                  src={secoundsec || "/placeholder.svg"}
                  alt="EASS Security leadership team"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-5  bg-gold-400 text-gray-700 p-8 rounded-2xl shadow-xl max-w-xs">
                  <Shield className="h-12 w-12 mb-4" />
                  <div className="font-bold text-xl mb-2">
                    Military Heritage
                  </div>
                  <div className="text-sm font-medium">
                    Led by Retired Army Officers with Proven Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Keen Slider */}
      <section id="services" className=" bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6  text-white text-xl font-semibold px-4 py-2">
              OUR SERVICES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 leading-tight">
              Comprehensive Security
              <span className="text-gold-400"> Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From personal protection to corporate security, we offer a
              complete spectrum of services tailored to meet your specific
              security requirements with military precision.
            </p>
          </div>

          {/* Services Carousel with Keen Slider */}
          <div className="relative mb-16">
            <div ref={sliderRef} className="keen-slider">
              {services.map((service, index) => (
                <div key={index} className="keen-slider__slide">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 hover:border-gold-400 h-full mx-2">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-contain object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <service.icon className="h-8 w-8 text-gold-400" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-3 text-navy-900">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-gold-400" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full  hover:bg-navy-800 text-white">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {instanceRef.current && (
              <>
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="absolute -left-12 top-1/2 border-2 border-gray-200 transform -translate-y-1/2  hover:bg-navy-800 text-gold-400 p-3 rounded-full transition-all duration-300 shadow-lg z-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2 border-2 border-gray-200  hover:bg-navy-800 text-gold-400 p-3 rounded-full transition-all duration-300 shadow-lg z-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 hover:border-gold-400"
              >
                <CardContent className="p-8 text-center">
                  <div className=" text-gold-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-300">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-navy-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6   text-xl font-semibold px-4 py-2">
              OUR GALLERY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 leading-tight">
              Visual
              <span className="text-gold-400"> Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive gallery showcasing our professional
              security operations, training programs, state-of-the-art
              equipment, and successful deployments across India.
            </p>
          </div>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedGalleryCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gold-400 text-navy-900 shadow-lg ${
                  selectedGalleryCategory === category.id
                    ? "bg-gold-400 text-navy-900 shadow-lg"
                    : "bg-gold-400 text-navy-900 shadow-lg hover: hover:text-white border border-gray-300"
                }`}
              >
                {category.name}
                {/* <span className="ml-2 text-sm">({category.count})</span> */}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    typeof image.image === "string"
                      ? image.image
                      : image.image.src
                  )
                }
              >
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt="Eass Group"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    {/* <p className="text-gray-300 text-sm">{image.description}</p> */}
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="h-6 w-6 text-gold-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24   relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-400/20 to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 text-lg font-semibold px-4 py-2">
              WHY CHOOSE EASS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The EASS
              <span className="text-gold-400"> Advantage</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in the security industry and why
              thousands of clients trust us with their most valuable assets and
              sensitive operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gold-400 text-navy-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <item.icon className="h-12 w-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-navy-800 text-gold-400 px-3 py-1 rounded-full text-xs font-bold">
                    {item.stats}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">ISO</div>
              <div className="text-gray-300 font-medium">
                Certified Operations
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">
                Background Verified
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">24x7</div>
              <div className="text-gray-300 font-medium">
                Emergency Response
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">Pan</div>
              <div className="text-gray-300 font-medium">India Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6  text-white text-sm font-semibold px-4 py-2">
              CLIENT TESTIMONIALS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 leading-tight">
              What Our Clients
              <span className="text-gold-400"> Say About Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied clients across India have to say about our security
              services and professional excellence.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300">
                      <CardContent className="p-12 text-center">
                        <Quote className="h-12 w-12 text-gold-400 mx-auto mb-6" />
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-gold-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-8 italic text-xl leading-relaxed">
                          &quot;{testimonial.text}&quot;
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-gold-400"
                          />
                          <div className="text-left">
                            <div className="font-bold text-navy-900 text-xl">
                              {testimonial.name}
                            </div>
                            <div className="text-gold-400 font-medium">
                              {testimonial.position}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.company}
                            </div>
                            <div className="text-gray-500 text-sm flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              {testimonial.date}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2  hover:bg-navy-800 text-gold-400 p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  hover:bg-navy-800 text-gold-400 p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-gold-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Secure Your
            <span className="text-gold-400"> Future?</span>
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how EASS
            Security can protect what matters most to you with our
            military-grade security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-lg px-10 py-4 h-auto"
            >
              Get Free Security Assessment
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-navy-900 font-bold text-lg px-10 py-4 h-auto"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call: +91 94251 73194
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6  text-white text-sm font-semibold px-4 py-2">
              CONTACT US
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 leading-tight">
              Get in
              <span className="text-gold-400"> Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your security needs? Contact our team of experts
              for personalized solutions and immediate assistance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-navy-900">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className=" text-gold-400 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 text-xl">
                      Head Office
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                   
                      RK ROYAL CITY Building no -B Gala no. B105 near union bank
                      Village -Mankoli taluka bhiwandi dist- Thane -421302
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className=" text-gold-400 p-4 rounded-full flex-shrink-0">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 text-xl">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Main: +91 94251 73194
                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className=" text-gold-400 p-4 rounded-full flex-shrink-0">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 text-xl">
                      Email Addresses
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      General: easssatna@gmail.com
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className=" text-gold-400 p-4 rounded-full flex-shrink-0">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 text-xl">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      24/7 Emergency Support
                      <br />
                      Office: Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-2xl flex items-center justify-center shadow-inner">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-navy-900" />
                  <p className="text-xl font-semibold text-navy-900">
                    Interactive Map
                  </p>
                  <p className="text-lg">EASS Security Head Office</p>
                  <p className="text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-navy-900">
                    Send us a Message
                  </h3>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-3">
                          First Name *
                        </label>
                        <Input
                          placeholder="Enter your first name"
                          required
                          className="h-12 border-2 border-gray-300 focus:border-gold-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-900 mb-3">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Enter your last name"
                          required
                          className="h-12 border-2 border-gray-300 focus:border-gold-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-3">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="h-12 border-2 border-gray-300 focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-3">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        className="h-12 border-2 border-gray-300 focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-3">
                        Service Required
                      </label>
                      <select className="w-full h-12 p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-gold-400 bg-white">
                        <option value="">Select a service</option>
                        <option value="personal-security">
                          Personal Security
                        </option>
                        <option value="corporate-security">
                          Corporate Security
                        </option>
                        <option value="investigation">
                          Investigation Services
                        </option>
                        <option value="cctv">CCTV Installation</option>
                        <option value="verification">
                          Verification Services
                        </option>
                        <option value="manpower">Manpower Supply</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-3">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your security requirements and how we can help you..."
                        rows={5}
                        required
                        className="border-2 border-gray-300 focus:border-gold-400 resize-none"
                      />
                    </div>

                    <Button className="w-full  hover:bg-navy-800 text-white font-bold text-lg py-4 h-auto">
                      Send Message
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gold-400 p-2 rounded-full">
                  <Shield className="h-8 w-8 text-navy-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">EASS SECURITY</h3>
                  <p className="text-sm text-gold-400 font-medium">
                    SERVICES PVT. LTD.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Protecting what matters most since 1984. Military-grade security
                solutions across India with uncompromising excellence and
                professional integrity.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                  <span className="text-navy-900 font-bold text-lg">f</span>
                </div>
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                  <span className="text-navy-900 font-bold text-lg">t</span>
                </div>
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                  <span className="text-navy-900 font-bold text-lg">in</span>
                </div>
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                  <span className="text-navy-900 font-bold text-lg">ig</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Personal Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Corporate Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Investigation Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    CCTV Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    Verification Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-lg"
                  >
                    VIP Protection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-400" />
                  <span className="text-gray-300 text-lg">
                    +91 94251 73194
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-400" />
                  <span className="text-gray-300 text-lg">
                    easssatna@gmail.com
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold-400 mt-1" />
                  <span className="text-gray-300 text-sm">
                    RK ROYAL CITY Building no -B<br/> Gala no. B105 near union bank
                      <br/>Village -Mankoli taluka bhiwandi<br/> dist- Thane -421302
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-400" />
                  <span className="text-gray-300 text-lg">24/7 Support</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="font-bold mb-4">Stay Updated</h5>
                <div className="flex">
                  <Input
                    placeholder="Your email"
                    className="rounded-r-none border-gray-600 bg-gray-800 text-white"
                  />
                  <Button className="rounded-l-none bg-gold-400 hover:bg-gold-500 text-navy-900">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-lg">
                &copy; {new Date().getFullYear()}  BeanGate IT Solution | Powered by BeanGate IT Solution
              </p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
