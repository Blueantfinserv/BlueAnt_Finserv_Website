import { Shield, TrendingUp, Landmark, CandlestickChart } from "lucide-react";

export const servicesSummary = [
  {
    id: "wealth-creation",
    tooltip: "Personalized investment planning designed for future financial success.",
    lightBg: "bg-blue-50",
    themeColor: "text-blue-600",
    themeBg: "bg-blue-600",
    icon: TrendingUp,
    stat: "12-15% avg. returns",
    tag: "Wealth Creation",
    title: "Wealth Creation",
    description: "Accelerate your financial journey with professionally guided SIPs, diversified mutual funds, and personalized wealth-building strategies.",
    features: ["Systematic Investment Plans (SIPs)", "Mutual Fund Portfolio Planning", "Wealth Growth Strategies"],
    link: "/services/wealth-creation",
    ctaText: "Start Building Wealth →"
  },
  {
    id: "wealth-protection",
    tooltip: "Secure your life, family, and financial goals with expert insurance planning.",
    lightBg: "bg-emerald-50",
    themeColor: "text-emerald-600",
    themeBg: "bg-emerald-600",
    icon: Shield,
    stat: "98.5% claims settled",
    tag: "Wealth Protection",
    title: "Wealth Protection",
    description: "Protect your income, health, and future with comprehensive insurance planning solutions designed for complete peace of mind.",
    features: ["Term Life Insurance", "Health Insurance Plans", "Critical Illness Cover"],
    link: "/services/wealth-protection",
    ctaText: "Secure Your Future →"
  },
  {
    id: "wealth-preservation",
    tooltip: "Maintain long-term financial stability and security for your accumulated wealth.",
    lightBg: "bg-purple-50",
    themeColor: "text-purple-600",
    themeBg: "bg-purple-600",
    icon: Landmark,
    stat: "8.5% avg. interest",
    tag: "Wealth Preservation",
    title: "Wealth Preservation",
    description: "Preserve and manage your wealth through retirement-focused and low-risk financial planning strategies.",
    features: ["Retirement Planning", "Portfolio Management", "Capital Preservation"],
    link: "/services/wealth-preservation",
    ctaText: "Preserve Wealth →"
  },
  {
    id: "stock-market-services",
    tooltip: "Research-driven market insights and investment support for equity trading.",
    lightBg: "bg-orange-50",
    themeColor: "text-orange-500",
    themeBg: "bg-orange-500",
    icon: CandlestickChart,
    stat: "₹0 delivery brokerage",
    tag: "Market Services",
    title: "Stock Market Services",
    description: "Explore equity investments, trading opportunities, and portfolio guidance with professional market expertise.",
    features: ["Zero Delivery Brokerage", "Advanced Market Analysis", "Equity Research Reports"],
    link: "/services/stock-market-services",
    ctaText: "Start Trading →"
  }
];
