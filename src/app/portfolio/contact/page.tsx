export default function ContactSection() {
    return (
        <section className="min-h-screen p-4 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Contact</h2>
                <p className="mt-4">Contactez-moi via mes réseaux sociaux :</p>
                <div className="flex gap-6 mt-6 justify-center">
                    <a href="https://www.linkedin.com/in/sacha-amara-pirollo-77320b1a8/" target="_blank" rel="noopener noreferrer">
                        <img src="/LinkedIn-Icon-Logo.wine.svg" alt="LinkedIn" className="h-8 w-8" />
                    </a>
                    <a href="https://github.com/RedSnoww12" target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="GitHub" className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </section>
    );
}