export default function ContactSection() {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Contact</h2>
                <p className="mt-4">Contactez-moi via mes réseaux sociaux :</p>
                <div className="flex gap-6 mt-6 justify-center">
                    <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
                    </a>
                    <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="GitHub" className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </section>
    );
}