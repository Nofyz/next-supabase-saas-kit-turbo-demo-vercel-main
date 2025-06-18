import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { 
  ArrowRightIcon, 
  LayoutDashboard, 
  Zap, 
  Users, 
  Shield, 
  BarChart3, 
  FolderOpen,
  Sparkles,
  Play,
  CheckCircle
} from 'lucide-react';

import { PricingTable } from '@kit/billing-gateway/marketing';
import {
  CtaButton,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureShowcaseIconContainer,
  Hero,
  Pill,
  PillActionButton,
  SecondaryHero,
} from '@kit/ui/marketing';
import { Trans } from '@kit/ui/trans';

import { FloatingElements, FloatingCard } from './_components/floating-elements';

import billingConfig from '~/config/billing.config';
import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-14 relative'}>
      <FloatingElements />
      
      <div className={'container mx-auto'}>
        <Hero
          pill={
            <Pill label={'New'}>
              <span>AI-Powered Swipe Collection Platform</span>
              <PillActionButton asChild>
                <Link href={'/auth/sign-up'}>
                  <ArrowRightIcon className={'h-4 w-4'} />
                </Link>
              </PillActionButton>
            </Pill>
          }
          title={
            <>
              <span>Collect, Organize &</span>
              <span>Analyze Creative Ads</span>
            </>
          }
          subtitle={
            <span>
              The ultimate platform for marketers, designers, and creators to swipe, 
              organize, and analyze winning ads from Facebook, TikTok, Google, and more. 
              Powered by AI insights.
            </span>
          }
          cta={<MainCallToActionButton />}
          image={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                priority
                className={
                  'dark:border-primary/10 rounded-xl border border-gray-200 shadow-2xl'
                }
                width={3558}
                height={2222}
                src={`/images/dashboard.webp`}
                alt={`SwipeBuilder Dashboard`}
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="h-4 w-4" />
                Live Demo
              </motion.div>
            </motion.div>
          }
        />
      </div>

      {/* How It Works Section */}
      <div className={'container mx-auto'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={'flex flex-col items-center space-y-16'}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              {
                step: "01",
                title: "Install Extension",
                description: "Add our Chrome extension to start swiping ads from any platform",
                icon: Zap,
                delay: 0.2
              },
              {
                step: "02", 
                title: "Swipe & Save",
                description: "Click the extension to capture ads with one click and auto-save",
                icon: Sparkles,
                delay: 0.4
              },
              {
                step: "03",
                title: "Organize & Analyze", 
                description: "Use AI insights to organize your collection and discover patterns",
                icon: BarChart3,
                delay: 0.6
              }
            ].map((item, index) => (
              <FloatingCard key={index} delay={item.delay}>
                <div className="text-center space-y-4 p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={'container mx-auto'}>
        <div
          className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
        >
          <FeatureShowcase
            heading={
              <>
                <b className="font-medium tracking-tighter dark:text-white">
                  Everything you need
                </b>
                .{' '}
                <span className="text-muted-foreground font-normal tracking-tighter">
                  Powerful features to supercharge your creative research and ad analysis.
                </span>
              </>
            }
            icon={
              <FeatureShowcaseIconContainer>
                <LayoutDashboard className="h-5" />
                <span>Complete Platform</span>
              </FeatureShowcaseIconContainer>
            }
          >
            <FeatureGrid>
              <FloatingCard delay={0.1}>
                <FeatureCard
                  className={'relative col-span-1 overflow-hidden hover:shadow-lg transition-all duration-300'}
                  label={'Smart Swipe Collection'}
                  description={`Capture ads from Facebook, TikTok, Google, and more with one click. AI automatically extracts key insights and metadata.`}
                />
              </FloatingCard>

              <FloatingCard delay={0.2}>
                <FeatureCard
                  className={'relative col-span-1 w-full overflow-hidden hover:shadow-lg transition-all duration-300'}
                  label={'AI-Powered Organization'}
                  description={`Automatically categorize and tag your swipes. Use AI to discover patterns and insights across your collection.`}
                />
              </FloatingCard>

              <FloatingCard delay={0.3}>
                <FeatureCard
                  className={'relative col-span-1 overflow-hidden hover:shadow-lg transition-all duration-300'}
                  label={'Team Collaboration'}
                  description={`Share collections with your team. Real-time collaboration with comments, likes, and shared boards.`}
                />
              </FloatingCard>

              <FloatingCard delay={0.4}>
                <FeatureCard
                  className={'relative col-span-1 overflow-hidden md:col-span-2 hover:shadow-lg transition-all duration-300'}
                  label={'Advanced Analytics & Insights'}
                  description={`Track performance metrics, identify trends, and get AI-powered recommendations to improve your ad strategy.`}
                />
              </FloatingCard>

              <FloatingCard delay={0.5}>
                <FeatureCard
                  className={'relative col-span-1 overflow-hidden hover:shadow-lg transition-all duration-300'}
                  label={'Secure & Private'}
                  description={`Enterprise-grade security with end-to-end encryption. Your data stays private and secure.`}
                />
              </FloatingCard>
            </FeatureGrid>
          </FeatureShowcase>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className={'container mx-auto'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={'flex flex-col items-center space-y-12 py-16'}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Trusted by 10,000+ marketers
            </h2>
            <p className="text-muted-foreground">
              Join the community of creative professionals who trust SwipeBuilder
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-12 bg-muted rounded flex items-center justify-center text-sm font-medium"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={'container mx-auto'}>
        <div
          className={
            'flex flex-col items-center justify-center space-y-16 py-16'
          }
        >
          <SecondaryHero
            pill={<Pill label="Start for free">No credit card required.</Pill>}
            heading="Simple, transparent pricing"
            subheading="Choose the plan that fits your team size and needs. Scale as you grow."
          />

          <div className={'w-full'}>
            <PricingTable
              config={billingConfig}
              paths={{
                signUp: pathsConfig.auth.signUp,
                return: pathsConfig.app.home,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withI18n(Home);

function MainCallToActionButton() {
  return (
    <div className={'flex space-x-4'}>
      <CtaButton>
        <Link href={'/auth/sign-up'}>
          <span className={'flex items-center space-x-0.5'}>
            <span>
              <Trans i18nKey={'common:getStarted'} />
            </span>

            <ArrowRightIcon
              className={
                'animate-in fade-in slide-in-from-left-8 h-4' +
                ' zoom-in fill-mode-both delay-1000 duration-1000'
              }
            />
          </span>
        </Link>
      </CtaButton>

      <CtaButton variant={'link'}>
        <Link href={'/contact'} className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          <span>Watch Demo</span>
        </Link>
      </CtaButton>
    </div>
  );
}
