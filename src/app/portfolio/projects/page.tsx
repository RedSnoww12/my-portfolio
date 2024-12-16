export default function ProjectsSection() {
    return (
        <section className="h-screen bg-gray-800 text-white snap-start flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">Mes Projets</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <a
                    href="https://github.com/ton-projet-1"
                    target="_blank"
                    className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
                    rel="noopener noreferrer"
                >
                    Projet 1
                </a>
                <a
                    href="https://github.com/ton-projet-2"
                    target="_blank"
                    className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
                    rel="noopener noreferrer"
                >
                    Projet 2
                </a>
            </div>
        </section>
    );
}
