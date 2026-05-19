"use client"
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Avonlea from '@/public/avonlea.png';
import School from '@/public/school.png';
import Sewer from '@/public/sewer.png';

// Define types
interface Project {
    title: string;
    category: string;
    location: string;
    year: string;
    color: string;
    images: (string | StaticImageData)[];
    description: string;
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects: Project[] = [
        {
            title: 'Avonlea Extension Trust',
            category: 'Residential',
            location: 'Avonlea',
            year: '2025',
            color: 'bg-lime-600',
            images: [Avonlea],
            description: `A sustainable residential complex with 120 stands measuring an average of 1000sqm featuring energy-efficient designs and some solar designs. The road infrastructure development included complete works from graveling and compacting, priming, to final taring. For the sewer system, the project involved trench excavation for sewer pipes, trenching for sewer lines, as well as bedding and laying of sewer pipes to ensure proper installation and long-term durability.`
        },
        {
            title: 'Chitungwiza Municipality - Rehabilitation of Sewer Line',
            category: 'Municipal',
            location: 'Chitungwiza',
            year: '2025',
            color: 'bg-blue-600',
            images: [
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.37.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38 (3).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.38.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.39.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.40 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.40.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.33 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.33.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34 (3).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.34.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35 (1).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35 (2).webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.35.webp",
                "/chitungwizasewer/WhatsApp Image 2026-05-19 at 01.30.36 (1).webp",
            ],
            description: `Rehabilitation of sewer lines across multiple locations in Chitungwiza under Procurement Reference Number CM/EN/19/24. The scope includes providing materials excluding GRP (Glass Reinforced Pipes) pipes and joints, with specific focus on uprooting existing sewer pipe lines, correcting levels, and relaying GRP pipes. Location of Works: Lot 1 - PaGomba trunk to Zengeza Outfall (1.2km), Lot 2 - Zengeza main outfall (3.3km).`
        },
        {
            title: 'Construction of Block B Admin Block at Zimbabwe Open University (ZOU)',
            category: 'Institutional',
            location: 'Zimbabwe Open University',
            year: '2025',
            color: 'bg-lime-600',
            images: [
                '/zoublockb/WhatsApp Image 2026-05-18 at 19.58.03 (1).webp',
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.56.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.57 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.06.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.57.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.58 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.58.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.59 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.59 (2).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.59 (3).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.57.59.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.00 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.00.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.01.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.03 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.03.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.04.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.05 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.05 (2).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.05.webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.06 (1).webp",
                "/zoublockb/WhatsApp Image 2026-05-18 at 19.58.06 (2).webp",
            ],
            description: `Construction of Block B Administration Block at the Zimbabwe Open University (ZOU) campus. This institutional project encompasses the complete build of a modern administrative facility to enhance the university's campus infrastructure.`
        },
        {
            title: 'Water Fountain at Zimbabwe Open University (ZOU)',
            category: 'Institutional',
            location: 'Zimbabwe Open University',
            year: '2025',
            color: 'bg-sky-600',
            images: [
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.04.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.03 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.03.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.04 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05 (2).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.05.webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06 (1).webp",
                "/zoufountain/WhatsApp Image 2026-05-19 at 01.30.06 (2).webp",
            ],
            description: `Construction of an aesthetic and functional water fountain feature at the Zimbabwe Open University (ZOU) campus. The fountain serves as a centerpiece for the university's landscape, combining architectural elegance with sustainable water management.`
        }
    ];

    const openGallery = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />
            <div className="h-20"></div>

            {/* Page Header */}
            <section className="bg-lime-600 text-white py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl opacity-90">Explore our portfolio of completed construction projects</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className='text-black pb-9 text-center text-lg'>Infradevcor Private Limited has already embarked on notable
                    projects, including:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
                            <div className={`${project.color} h-2`}></div>
                            <div className="relative h-56">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    unoptimized={typeof project.images[0] === 'string'}
                                />
                                <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                    <span>📍 {project.location}</span>
                                    <span>📅 {project.year}</span>
                                </div>
                                {project.images.length > 1 && (
                                    <button
                                        onClick={() => openGallery(project)}
                                        className="mt-4 w-full bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition"
                                    >
                                        🖼️ View Gallery ({project.images.length} photos)
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
                    <div className="relative max-w-6xl w-full mx-4 bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                            <button onClick={closeModal} className="text-white hover:text-gray-300 text-2xl">&times;</button>
                        </div>
                        
                        <div className="p-6">
                            {/* Main Image */}
                            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    unoptimized={typeof selectedProject.images[currentImageIndex] === 'string'}
                                />
                                
                                {/* Navigation Arrows */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {selectedProject.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {selectedProject.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative w-24 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition ${
                                                currentImageIndex === idx ? 'border-lime-600 ring-2 ring-lime-600/20' : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                unoptimized={typeof img === 'string'}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-100 px-6 py-3 text-right">
                            <button onClick={closeModal} className="bg-lime-600 cursor-pointer hover:bg-lime-700 text-white px-4 py-2 rounded-md transition">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}