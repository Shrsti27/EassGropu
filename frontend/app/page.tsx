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
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  ChevronLeft,
  Users2,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Keen Slider for Client Logos
  const [clientSliderRef, clientInstanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free",
      slides: {
        perView: 6,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
        "(max-width: 1024px)": {
          slides: {
            perView: 4,
            spacing: 20,
          },
        },
        "(max-width: 1280px)": {
          slides: {
            perView: 5,
            spacing: 20,
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
          }, 2000);
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
  // Contact numbers
  const contactNumbers = {
    primary: "+91 9977335544",
    secondary: "+91 94251 73194",
  };

  // Hero Slides Data with placeholder images
  const heroSlides = [
    {
      title: "Protecting What Matters Most",
      subtitle: "Since 1984",
      description:
        "Led by retired Army officers, we deliver military-grade security solutions across India with uncompromising discipline and professionalism.",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489372/banner1_dqsuiu.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489376/banner2_ewpkw1.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489374/banner3_2_u0ntnv.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489353/banner4_qzuaxj.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489654/gun_qiqxm5.png",
    },
    {
      name: "Personal Body Guard",
      icon: UserCheck,
      description:
        "Elite personal protection services with military precision and discretion",
      features: ["VIP protection", "Threat analysis", "Close protection"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489649/BodyGurd_vqnovr.png",
    },
    {
      name: "Housekeeping",
      icon: Home,
      description:
        "Professional cleaning and maintenance services with security-conscious staff",
      features: ["Verified staff", "Quality assurance", "Flexible schedules"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489656/Housekeeping_m5w2ly.png",
    },
    {
      name: "Legal Recovery",
      icon: Scale,
      description:
        "Asset recovery and legal enforcement services with lawful procedures",
      features: ["Debt recovery", "Asset tracing", "Legal compliance"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489691/Legal_vvyusr.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489718/Verification_fmkbka.png",
    },
    {
      name: "Investigation",
      icon: Eye,
      description:
        "Professional private investigation services with military-grade intelligence gathering",
      features: ["Corporate investigation", "Personal matters", "Surveillance"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489661/Investigation_d1uyzh.png",
    },
    {
      name: "CCTV Camera Installation",
      icon: Camera,
      description:
        "Advanced surveillance systems installation and monitoring services",
      features: ["HD cameras", "Remote monitoring", "24/7 support"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489658/CCTV_shqbv0.jpg",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489719/VIP_ewfzrd.png",
    },
    {
      name: "Bouncer Security",
      icon: ShieldCheck,
      description:
        "Professional crowd control and venue security for events and establishments",
      features: ["Crowd control", "Access management", "Conflict resolution"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489650/Bouncer_i1da4v.png",
    },
    {
      name: "Lady Security",
      icon: Users,
      description:
        "Female security personnel for sensitive environments and women's safety",
      features: ["Women's safety", "Sensitive areas", "Professional conduct"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489707/Lady_qt3yrs.png",
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
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489707/Manpower_ntbj9l.png",
    },
    {
      name: "Gardeners",
      icon: Flower2,
      description:
        "Professional landscaping and garden maintenance with security awareness",
      features: ["Landscape design", "Maintenance", "Security conscious"],
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489720/orange_gb2gaz.jpg",
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

  // Client Logos Data with placeholder images
  const clientLogos = [
    {
      id: 1,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490023/34_u2idgu.png",
    },
    {
      id: 2,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490022/33_vxyd8x.jpg",
    },
    {
      id: 3,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490021/32_lpp7lh.jpg",
    },
    {
      id: 4,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490020/30_fmnuxb.jpg",
    },
    {
      id: 5,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490018/29_k9zvte.jpg",
    },
    {
      id: 6,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490017/27_inpoij.png",
    },
    {
      id: 7,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490017/25_mwavtd.jpg",
    },
    {
      id: 8,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490011/24_ey6g2j.jpg",
    },
    {
      id: 9,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490010/23_s0qqpx.png",
    },
    {
      id: 10,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490009/22_vcvs9f.png",
    },
    {
      id: 11,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490008/21_g7kfkl.jpg",
    },
    {
      id: 12,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490007/20_yxtwjp.jpg",
    },
    {
      id: 13,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490006/19_dmn0ih.jpg",
    },
    {
      id: 14,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490005/18_ja4dlp.png",
    },
    {
      id: 15,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490004/17_hz8oke.jpg",
    },
    {
      id: 16,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490003/15_aptxxg.jpg",
    },
    {
      id: 17,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490002/14_jvrvsc.jpg",
    },
    {
      id: 18,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490000/13_pvg4av.jpg",
    },
    {
      id: 19,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489999/12_grmqvg.png",
    },
    {
      id: 20,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489999/11_b6ijig.png",
    },
    {
      id: 21,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489997/10_y5zawh.jpg",
    },
    {
      id: 22,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489996/9_angtat.png",
    },
    {
      id: 23,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489996/8_rcmfao.jpg",
    },
    {
      id: 24,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489995/7_nodohx.jpg",
    },
    {
      id: 25,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489994/6_ui440f.jpg",
    },
    {
      id: 26,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489993/5_lbdvpe.jpg",
    },
    {
      id: 27,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489992/4_zhfsmj.jpg",
    },
    {
      id: 28,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489991/2c_ryno6m.gif",
    },
    {
      id: 29,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489991/3_owbmmw.jpg",
    },
    {
      id: 30,
      logo: "https://res.cloudinary.com/diab9p5zk/image/upload/v1752489991/1c_z0rfae.jpg",
    },
  ];

  const galleryCategories = [{ id: "all", name: "All Images" }];

  const galleryImages = [
    {
      id: 1,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490585/10_ab6mch.jpg",
    },
      {
      id: 5,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490583/6_nbe4kd.jpg",
    },
      {
      id: 7,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490583/9_l3fnzs.jpg",
    },
     {
      id: 8,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490580/8_wajfxs.jpg",
    },

    // {
    //   id: 9,
    //   category: "event",
    //   title: "Eass Groups",
    //   image:
    //     "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490581/7_ed73ib.jpg",
    // },
    {
      id: 10,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490579/4_zaiibm.jpg",
    },
    {
      id: 11,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490580/5_puutmu.jpg",
    },
    {
      id: 13,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490572/1_mz1ovo.jpg",
    },
    
    {
      id: 12,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490574/3_ubaxnd.jpg",
    },
    {
      id: 2,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490586/14_e9owds.jpg",
    },
    {
      id: 3,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490587/11_akpdbd.jpg",
    },
    {
      id: 14,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490571/2_jwtlrz.jpg",
    },
    {
      id: 4,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490585/13_ypvfuh.jpg",
    },
  
    {
      id: 6,
      category: "event",
      title: "Eass Groups",
      image:
        "https://res.cloudinary.com/diab9p5zk/image/upload/v1752490584/12_vep9wp.jpg",
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

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-2xl border-b border-slate-700/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-full">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  EASS SECURITY
                </h1>
                <p className="text-xs text-orange-400 font-medium">
                  SERVICES PVT. LTD.
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                href="#home"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                href="#clients"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                Clients
              </Link>
              <Link
                href="#contact"
                className="hover:text-orange-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a href={`tel:${contactNumbers.primary}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </a>
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
            <nav className="lg:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#gallery"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="#clients"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clients
                </Link>
                <Link
                  href="#contact"
                  className="py-2 hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a href={`tel:${contactNumbers.primary}`}>
                  <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold mt-4 w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative text-white py-20 overflow-hidden min-h-screen"
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
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-orange-500/20 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-orange-500/20 text-white p-3 rounded-full transition-all duration-300 z-10"
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
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white/20 border-white/50 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center min-h-screen">
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
              <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
                TRUSTED SINCE 1984
              </Badge>
              <Badge
                variant="outline"
                className="border-orange-400 text-orange-400 font-semibold px-4 py-2"
              >
                MILITARY HERITAGE
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroSlides[currentHeroSlide].title}
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {heroSlides[currentHeroSlide].subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl leading-relaxed">
              {heroSlides[currentHeroSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-4 h-auto"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="#gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-4 h-auto bg-transparent"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Our Story
                </Button>
              </Link>
            </div>
            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(heroSlides[currentHeroSlide].stats).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="text-center bg-black/20 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                      {value}
                    </div>
                    <div className="text-gray-300 font-medium capitalize text-sm">
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
      <section className="py-12 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
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
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
                ABOUT EASS SECURITY
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                Four Decades of
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Unwavering Protection
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 1984, EASS Security Services Pvt. Ltd. has stood as
                India&apos;s most trusted guardian, providing comprehensive
                security solutions with military precision. Founded and
                continuously led by retired Army officers, we bring unparalleled
                discipline, strategic thinking, and operational excellence to
                civilian security needs.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our nationwide operations encompass investigation services,
                personal protection, corporate security, and specialized
                manpower solutions. We seamlessly blend traditional military
                values of honor, duty, and integrity with cutting-edge security
                technologies and methodologies.
              </p>
              {/* Key Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 bg-slate-700/50 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">
                    Military-grade discipline and training protocols
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-700/50 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">
                    Nationwide operations with local expertise
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-700/50 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">
                    Comprehensive security and investigation services
                  </span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-700/50 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">
                    24/7 monitoring and emergency response
                  </span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-8 py-3">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/diab9p5zk/image/upload/v1752489352/banner3_w64r9w.png"
                  alt="EASS Security leadership team"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl w-full h-auto border border-slate-600/50"
                />
                <div className="absolute -bottom-5 left-5 bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl max-w-xs">
                  <Shield className="h-12 w-12 mb-4 text-orange-400" />
                  <div className="font-bold text-xl mb-2 text-white">
                    Military Heritage
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    Led by Retired Army Officers with Proven Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
              OUR SERVICES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive Security
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From personal protection to corporate security, we offer a
              complete spectrum of services tailored to meet your specific
              security requirements with military precision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-600/50 hover:border-orange-400/50 bg-slate-800/50 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-white">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
              OUR GALLERY
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Visual
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-400 ${
                  selectedGalleryCategory === category.id
                    ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                    : "bg-slate-700/50 text-gray-300 hover:bg-orange-500/20 hover:text-white border border-slate-600/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(image.image)}
              >
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt="Eass Group"
                  width={600}
                  height={400}
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="h-6 w-6 text-orange-400" />
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
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm hover:bg-orange-500/20 text-white p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
              WHY CHOOSE EASS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              The EASS
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Advantage
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in the security industry and why
              thousands of clients trust us with their most valuable assets and
              sensitive operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-12 w-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-slate-800/90 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-xs font-bold">
                    {item.stats}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                ISO
              </div>
              <div className="text-gray-300 font-medium">
                Certified Operations
              </div>
            </div>
            <div className="text-center bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-300 font-medium">
                Background Verified
              </div>
            </div>
            <div className="text-center bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                24x7
              </div>
              <div className="text-gray-300 font-medium">
                Emergency Response
              </div>
            </div>
            <div className="text-center bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                Pan
              </div>
              <div className="text-gray-300 font-medium">India Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients Section */}
      <section id="clients" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
              OUR TRUSTED CLIENTS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Protecting India&apos;s
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Leading Enterprises
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Over 35+ prestigious organizations across various industries trust
              EASS Security for their critical security needs. From Fortune 500
              companies to government institutions, we&apos;ve been their
              reliable security partner.
            </p>
          </div>

          {/* Client Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                35+
              </div>
              <div className="text-gray-300 font-medium">Trusted Clients</div>
            </div>
            <div className="text-center bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                8
              </div>
              <div className="text-gray-300 font-medium">Industry Sectors</div>
            </div>
            <div className="text-center bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-300 font-medium">Client Retention</div>
            </div>
            <div className="text-center bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
          </div>

          {/* Client Logos Slider */}
          <div className="relative mb-16">
            <div ref={clientSliderRef} className="keen-slider">
              {clientLogos.map((client) => (
                <div key={client.id} className="keen-slider__slide">
                  <div className="group bg-slate-700/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl hover:shadow-2xl transition-all duration-300 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center mx-1 sm:mx-2">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt="Eass Group"
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {clientInstanceRef.current && (
              <>
                <button
                  onClick={() => clientInstanceRef.current?.prev()}
                  className="absolute left-0 sm:-left-4 md:-left-6 xl:-left-12 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm hover:bg-orange-500/20 text-orange-400 hover:text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-10 border border-slate-600/50 touch-manipulation"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </button>
                <button
                  onClick={() => clientInstanceRef.current?.next()}
                  className="absolute right-0 sm:-right-4 md:-right-6 xl:-right-12 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm hover:bg-orange-500/20 text-orange-400 hover:text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-10 border border-slate-600/50 touch-manipulation"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </button>
              </>
            )}
          </div>

          {/* Industry Categories */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-white">
              Industries We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Corporate",
                "Banking",
                "IT",
                "Manufacturing",
                "Automotive",
                "Pharma",
                "Oil & Gas",
                "Power",
                "Real Estate",
                "Telecom",
              ].map((industry) => (
                <Badge
                  key={industry}
                  variant="outline"
                  className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 px-4 py-2 bg-slate-700/50 backdrop-blur-sm"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <p className="text-lg text-gray-300 mb-8">
              Join these industry leaders who trust EASS Security for their
              protection needs
            </p>
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-3">
              Become Our Next Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-transparent"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to Secure Your
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Future?
            </span>
          </h2>
          <p className="text-lg lg:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how EASS
            Security can protect what matters most to you with our
            military-grade security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-10 py-4 h-auto"
            >
              Get Free Security Assessment
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <a href={`tel:${contactNumbers.primary}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 font-bold px-10 py-4 h-auto bg-transparent"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call: {contactNumbers.primary}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-4 py-2">
              CONTACT US
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Get in
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your security needs? Contact our team of experts
              for personalized solutions and immediate assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-white">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="bg-orange-500/20 text-orange-400 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">
                      Corporate Office
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      RK ROYAL CITY Building no -B Gala no. B05 near union bank
                      Village -Mankoli taluka bhiwandi dist- Thane -421302
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="bg-orange-500/20 text-orange-400 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">
                      Regional Office
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Manorama Nagar, Thane (W), Mumbai Pin code: 400604
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="bg-orange-500/20 text-orange-400 p-4 rounded-full flex-shrink-0">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">
                      Phone Numbers
                    </h4>
                    <div className="space-y-2">
                      <a
                        href={`tel:${contactNumbers.primary}`}
                        className="block text-gray-300 leading-relaxed hover:text-orange-400 transition-colors"
                      >
                        Primary: {contactNumbers.primary}
                      </a>
                      <a
                        href={`tel:${contactNumbers.secondary}`}
                        className="block text-gray-300 leading-relaxed hover:text-orange-400 transition-colors"
                      >
                        Secondary: {contactNumbers.secondary}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="bg-orange-500/20 text-orange-400 p-4 rounded-full flex-shrink-0">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">
                      Email Addresses
                    </h4>
                    <a
                      href="mailto:eassgroupofficial@gmail.com"
                      className="text-gray-300 leading-relaxed hover:text-orange-400 transition-colors "
                    >
                      General: eassgroupofficial@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="bg-orange-500/20 text-orange-400 p-4 rounded-full flex-shrink-0">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">
                      Business Hours
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      24/7 Emergency Support
                      <br />
                      Office: Monday - Saturday
                      <br />
                      10:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <Card className="shadow-2xl border-0 bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-white">
                    Send us a Message
                  </h3>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-white mb-3">
                          First Name *
                        </label>
                        <Input
                          placeholder="Enter your first name"
                          required
                          className="h-12 border-2 border-slate-600/50 bg-slate-700/50 backdrop-blur-sm text-white focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-white mb-3">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Enter your last name"
                          required
                          className="h-12 border-2 border-slate-600/50 bg-slate-700/50 backdrop-blur-sm text-white focus:border-orange-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="h-12 border-2 border-slate-600/50 bg-slate-700/50 backdrop-blur-sm text-white focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        className="h-12 border-2 border-slate-600/50 bg-slate-700/50 backdrop-blur-sm text-white focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Service Required
                      </label>
                      <select className="w-full h-12 p-4 border-2 border-slate-600/50 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-slate-700/50 backdrop-blur-sm text-white">
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
                      <label className="block text-sm font-bold text-white mb-3">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your security requirements and how we can help you..."
                        rows={4}
                        required
                        className="border-2 border-slate-600/50 bg-slate-700/50 backdrop-blur-sm text-white focus:border-orange-400 resize-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 h-auto">
                      Send Message
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Enhanced Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.021035605792!2d73.03910447520941!3d19.237914982000266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE0JzE2LjUiTiA3M8KwMDInMzAuMSJF!5e0!3m2!1sen!2sin!4v1752486804312!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16 border-t border-slate-600/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-full">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    EASS SECURITY
                  </h3>
                  <p className="text-sm text-orange-400 font-medium">
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">f</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">t</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">in</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">ig</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Contact Us
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
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Personal Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Corporate Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Investigation Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    CCTV Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Verification Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    VIP Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <a
                  href={`tel:${contactNumbers.primary}`}
                  className="flex items-center space-x-3 hover:text-orange-400 transition-colors"
                >
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    {contactNumbers.primary}
                  </span>
                </a>
                <a
                  href={`tel:${contactNumbers.secondary}`}
                  className="flex items-center space-x-3 hover:text-orange-400 transition-colors"
                >
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    {contactNumbers.secondary}
                  </span>
                </a>
                <a
                  href="mailto:eassgroupofficial@gmail.com"
                  className="flex items-center space-x-3 hover:text-orange-400 transition-colors"
                >
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 text-[15px] sm:text-sm">
                    eassgroupofficial@gmail.com
                  </span>
                </a>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    RK ROYAL CITY Building no -B
                    <br /> Gala no. B05 near union bank
                    <br />
                    Village -Mankoli taluka bhiwandi
                    <br /> dist- Thane -421302
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-white mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} All rights reserved. Designed and
                Developed by
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 font-semibold hover:underline ml-1"
                  href="https://beangates.com/"
                >
                  Beangate IT Solutions, Bhopal
                </Link>
              </div>
              {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
