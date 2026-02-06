import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/ui/Footer';
import { HeroSection } from '@/features/hero/ui/HeroSection';
import { TechStackSection } from '@/features/tech-stack/ui/TechStackSection';

import { DeploymentsSection } from '@/features/deployments/ui/DeploymentsSection';
import { MilestonesSection } from '@/features/milestones/ui/MilestonesSection';
import { CTASection } from '@/features/cta/ui/CTASection';

export default function HomePage() {
    return (
        <main className="relative">
            <Header />
            <HeroSection />
            <TechStackSection />

            <DeploymentsSection />
            <MilestonesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
