import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceOverview from '@/components/ServiceOverview';
import KeyBenefits from '@/components/KeyBenefits';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Compliance from '@/components/Compliance';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SWIFT International Wire Transfer | Prominence Bank</title>
        <meta
          name="description"
          content="Send secure international bank transfers with SWIFT. Global reach, bank-grade compliance, and enhanced tracking. Available to Prominence Bank account holders."
        />
        <meta
          name="keywords"
          content="international wire transfer, SWIFT payment, bank wire, cross-border transfer, SEPA transfer, SWIFT BIC, IBAN, send money internationally"
        />
        <link rel="canonical" href="/direct-bank-transfer-swift/" />
        <meta property="og:title" content="SWIFT International Wire Transfer | Prominence Bank" />
        <meta
          property="og:description"
          content="Send secure international bank transfers with SWIFT. Global reach, bank-grade compliance, and enhanced tracking."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SWIFT International Wire Transfer | Prominence Bank" />
        <meta
          name="twitter:description"
          content="Send secure international bank transfers with SWIFT. Global reach, bank-grade compliance, and enhanced tracking."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ServiceOverview />
          <KeyBenefits />
          <HowItWorks />
          <UseCases />
          <Compliance />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
