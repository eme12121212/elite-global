import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WebMobile from '@/components/WebMobile'
import BlockchainDev from '@/components/BlockchainDev'
import FintechTrading from '@/components/FintechTrading'
import AIAutomation from '@/components/AIAutomation'
import Marketplace from '@/components/Marketplace'
import Education from '@/components/Education'
import APIsWebSockets from '@/components/APIsWebSockets'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import ServicesMarquee from '@/components/ServicesMarquee'
import Capabilities from '@/components/Capabilities'
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
import WhyCTA from '@/components/WhyCTA'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

describe('Navbar', () => {
  it('renders logo and all tabs', () => {
    render(<Navbar />)
    expect(screen.getByText('ELITE')).toBeInTheDocument()
    expect(screen.getByText('Blockchain')).toBeInTheDocument()
    expect(screen.getByText('Fintech & Trading')).toBeInTheDocument()
    expect(screen.getByText('APIs & WebSockets')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('renders hero title and stats', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
  })
})

describe('WebMobile', () => {
  it('renders web & mobile development cards', () => {
    render(<WebMobile />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
  })
})

describe('BlockchainDev', () => {
  it('renders blockchain cards', () => {
    render(<BlockchainDev />)
    expect(screen.getByText('Blockchain Development')).toBeInTheDocument()
    expect(screen.getByText('DeFi Protocols')).toBeInTheDocument()
    expect(screen.getByText('NFT Marketplace')).toBeInTheDocument()
  })
})

describe('FintechTrading', () => {
  it('renders fintech cards', () => {
    render(<FintechTrading />)
    expect(screen.getByText('Forex CRM')).toBeInTheDocument()
    expect(screen.getByText('Social Trading')).toBeInTheDocument()
    expect(screen.getByText('Prop Trading Suite')).toBeInTheDocument()
  })
})

describe('AIAutomation', () => {
  it('renders AI cards', () => {
    render(<AIAutomation />)
    expect(screen.getByText('Intelligent Automation')).toBeInTheDocument()
    expect(screen.getByText('Machine Learning')).toBeInTheDocument()
  })
})

describe('Marketplace', () => {
  it('renders marketplace cards', () => {
    render(<Marketplace />)
    expect(screen.getByText('NFT Marketplace')).toBeInTheDocument()
    expect(screen.getByText('Prop Firm Store')).toBeInTheDocument()
  })
})

describe('Education', () => {
  it('renders education cards', () => {
    render(<Education />)
    expect(screen.getByText('Training Programs')).toBeInTheDocument()
    expect(screen.getByText('Educational Content')).toBeInTheDocument()
  })
})

describe('APIsWebSockets', () => {
  it('renders API cards', () => {
    render(<APIsWebSockets />)
    expect(screen.getByText('REST APIs')).toBeInTheDocument()
    expect(screen.getByText('WebSocket Services')).toBeInTheDocument()
  })
})

describe('Stats', () => {
  it('renders stat numbers', () => {
    render(<Stats />)
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/social trading platform/i)).toBeInTheDocument()
  })
})

describe('Partners', () => {
  it('renders portfolio projects', () => {
    render(<Partners />)
    expect(screen.getByText('Vertex Markets')).toBeInTheDocument()
    expect(screen.getByText('Horizon Brokers')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders company info and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/leading technology company/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Elite Global Solutions/i).length).toBeGreaterThan(0)
  })
})

describe('ServicesMarquee', () => {
  it('renders marquee services', () => {
    render(<ServicesMarquee />)
    expect(screen.getAllByText('Blockchain Development').length).toBeGreaterThan(0)
    expect(screen.getAllByText('DeFi Applications').length).toBeGreaterThan(0)
  })
})

describe('Capabilities', () => {
  it('renders capability cards', () => {
    render(<Capabilities />)
    expect(screen.getByText('Smart Contract Development')).toBeInTheDocument()
    expect(screen.getByText('DeFi Platform Development')).toBeInTheDocument()
  })
})

describe('Industries', () => {
  it('renders industry icons', () => {
    render(<Industries />)
    expect(screen.getByText('Fintech')).toBeInTheDocument()
    expect(screen.getByText('Trading')).toBeInTheDocument()
  })
})

describe('Process', () => {
  it('renders process steps', () => {
    render(<Process />)
    expect(screen.getByText('Evaluation Framework')).toBeInTheDocument()
    expect(screen.getByText('Security & Scale')).toBeInTheDocument()
  })
})

describe('TechStack', () => {
  it('renders tech names', () => {
    render(<TechStack />)
    expect(screen.getAllByText('Ethereum').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Solana').length).toBeGreaterThan(0)
  })
})

describe('WhyCTA', () => {
  it('renders why cta content', () => {
    render(<WhyCTA />)
    expect(screen.getByText(/Why Choose Elite Global/i)).toBeInTheDocument()
  })
})

describe('FAQ', () => {
  it('renders FAQ items', () => {
    render(<FAQ />)
    expect(screen.getByText(/What services does Elite Global/i)).toBeInTheDocument()
    expect(screen.getByText(/How can I get started/i)).toBeInTheDocument()
  })
})

describe('FinalCTA', () => {
  it('renders final cta', () => {
    render(<FinalCTA />)
    expect(screen.getByText(/Get Started with Your Next Digital Project/i)).toBeInTheDocument()
  })
})
