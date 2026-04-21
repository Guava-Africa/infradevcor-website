import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  House,
  Building2,
  Leaf,
  ClipboardList,
  ChevronRight,
  HardHat,
  Ruler,
  Truck,
  Calendar,
  Users,
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const services = [
    { title: 'Residential', color: 'bg-blue-600', description: 'Custom homes, renovations, and extensions', icon: House },
    { title: 'Commercial', color: 'bg-lime-600', description: 'Office buildings and retail spaces', icon: Building2 },
    { title: 'Sustainable', color: 'bg-blue-600', description: 'Eco-friendly and green building solutions', icon: Leaf },
    { title: 'Project Management', color: 'bg-lime-600', description: 'End-to-end project oversight', icon: ClipboardList }
  ];

  const features = [
    { icon: HardHat, title: 'Expert Team', description: 'Certified professionals with years of experience' },
    { icon: Ruler, title: 'Precision Planning', description: 'Detailed blueprints and accurate measurements' },
    { icon: Truck, title: 'Quality Materials', description: 'Using only the best construction materials' },
    { icon: Calendar, title: 'On-Time Delivery', description: 'Projects completed within scheduled timeline' },
    { icon: Users, title: 'Client Focused', description: 'Tailored solutions for every client' },
    { icon: Award, title: 'Quality Guaranteed', description: 'Excellence in every project we undertake' }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <div className="h-20"></div> {/* Spacer for fixed navbar */}

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.pexels.com/photos/5611713/pexels-photo-5611713.jpeg?_gl=1*338ymb*_ga*MTg3OTg2OTc1OC4xNzcyNjEyNjQ0*_ga_8JE65Q40S6*czE3NzI2MTI2NDMkbzEkZzEkdDE3NzI2MTM3MjIkajckbDAkaDA."
          alt="Construction site with crane"
          fill
          className="object-cover"
          unoptimized={true}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Building Your Vision
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
              Professional construction services for residential and commercial projects
            </p>
            <Link href="/services">
              <button className="bg-lime-600 hover:bg-lime-800 text-white px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg transition inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of construction services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group">
                <div className={`w-16 h-16 ${service.color} rounded-lg mb-4 flex items-center justify-center text-white transition group-hover:scale-110`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="bg-blue-600 hover:bg-blue-900 cursor-pointer text-white px-8 py-3 rounded-xl font-semibold transition inline-flex items-center gap-2">
              Learn More About Our Services
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine expertise, quality materials, and dedicated service to deliver exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group">
                  <div className="w-14 h-14 bg-lime-100 rounded-lg mb-4 flex items-center justify-center text-lime-600 group-hover:bg-lime-600 group-hover:text-white transition">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Project
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern office building"
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Avonlea Extension Trust:</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A sustainable residential complex with 120 stands
                measuring an average of 1000sqm featuring energy-efficient designs and some
                solar designs.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Water Reticulation 2800m 90mm PVC, Class 16 and stand pipes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Sewer Reticulation 2800m 160mm PVC Sewer Pipes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">2600m by 15m width surfaced roads</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-blue-600 font-semibold">Ongoing</p>
              </div>

              <Link href="/projects">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-xl font-semibold transition inline-flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}