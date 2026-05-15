import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Avonlea from '@/public/avonlea.png';
import School from '@/public/school.png';
import Sewer from '@/public/sewer.png';

export default function Projects() {
    const projects = [
        {
            title: 'Avonlea Extension Trust',
            category: 'Residential',
            location: 'Avonlea',
            year: '2025',
            color: 'bg-lime-600',
            image: Avonlea,
            description: `A sustainable residential complex with 120 stands measuring an average of 1000sqm featuring energy-efficient designs and some solar designs. The road infrastructure development included complete works from graveling and compacting, priming, to final taring. For the sewer system, the project involved trench excavation for sewer pipes, trenching for sewer lines, as well as bedding and laying of sewer pipes to ensure proper installation and long-term durability.`
        },
        {
            title: 'Chitungwiza Municipality - Rehabilitation of Sewer Line',
            category: 'Municipal',
            location: 'Chitungwiza',
            year: '2025',
            color: 'bg-blue-600',
            image: Sewer,
            description: `Rehabilitation of sewer lines across multiple locations in Chitungwiza under Procurement Reference Number CM/EN/19/24. The scope includes providing materials excluding GRP (Glass Reinforced Pipes) pipes and joints, with specific focus on uprooting existing sewer pipe lines, correcting levels, and relaying GRP pipes. Location of Works: Lot 1 - PaGomba trunk to Zengeza Outfall (1.2km), Lot 2 - Zengeza main outfall (3.3km).`
        },
        {
            title: 'Construction of Block B Admin Block & Water Fountain at Zimbabwe Open University (ZOU)',
            category: 'Institutional',
            location: 'Zimbabwe Open University',
            year: '2025',
            color: 'bg-lime-600',
            image: School,
            description: `Construction of Block B Administration Block and a water fountain at the Zimbabwe Open University (ZOU) campus. This institutional project encompasses the complete build of a modern administrative facility alongside an aesthetic and functional water fountain feature to enhance the university's campus environment.`
        }
    ];

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
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className={`${project.color} h-2`}></div>
                            <div className="relative h-56">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                                <div className={`absolute top-4 right-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                    <span>📍 {project.location}</span>
                                    <span>📅 {project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </main>
    );
}