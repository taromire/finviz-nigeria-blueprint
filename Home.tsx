import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, Zap, Shield, TrendingUp, Database, Users, Briefcase } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Financial Intelligence Platform
 * - Premium dark theme with emerald green accents
 * - Professional, sophisticated layout emphasizing data-driven insights
 * - Asymmetric hero with image on right, content on left
 * - Clear information hierarchy with card-based sections
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FN</span>
            </div>
            <span className="font-bold text-lg">Finviz Nigeria</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition">Architecture</a>
            <a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  The Finviz of Nigeria
                </h1>
                <p className="text-xl text-muted-foreground">
                  Strategic Blueprint for Financial Data Aggregation in the Nigerian Capital Market
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A comprehensive platform unifying equity metrics from NGX, macroeconomic data from CBN, and corporate filings—enabling institutional investors, asset managers, and retail traders to explore data more intuitively, understand trends better, and easily save or share insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/FINVIZ_NIGERIA_BLUEPRINT.pdf" download>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    View Full Blueprint <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="/FINVIZ_NIGERIA_BLUEPRINT.pdf" download>
                  <Button size="lg" variant="outline">
                    Download PDF
                  </Button>
                </a>
              </div>
              <div className="flex gap-8 pt-8 text-sm">
                <div>
                  <p className="font-semibold text-emerald-400">₦38.5M</p>
                  <p className="text-muted-foreground">Development Cost</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">6 Months</p>
                  <p className="text-muted-foreground">To Launch</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">₦37M</p>
                  <p className="text-muted-foreground">Year 1 Revenue</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/0k5baBNPB9Mgnu5njcK811/sandbox/b1MHPkPIeYfBniYKq82XXh-img-1_1771962726000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMGs1YmFCTlBCOU1nbnU1bmpjSzgxMS9zYW5kYm94L2IxTUhQa1BJZVlmQm5pWUtxODJYWGgtaW1nLTFfMTc3MTk2MjcyNjAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YHvhRIx725x3XQkYusWUlPO-amPLzH9F8-7NIMvpd2u4xbZCpx-f3PV47fk1Gv-~I4aQgWeDcxLaEXbtCaak-heyhMpqWQ8Uaev3zaaC2Fp5dO96IqW6fL2oYdxyXjV0odoZwad~7xCZ70BXS0WpTxOWt2-fy2hc4sbww3GK9nd3u9A5X~jxFybZISTltlA18yuUEX599DNd3q8gf07WSBaFj~diZqq3nT2s9gZOI0OFOXtr~TBH9vc3wTXIVljKIDQyW8tpZKyLK0usv2hWGFqs4BeVcqwEuWgmuRKaHd1XorIRXb1Boy-NNET5RE2cVqDdu4eSy-A-bo4YnsMiww__"
                alt="Market Data Visualization"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unified Data Sources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrating Nigeria's primary financial data sources into a single, intelligent platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/0k5baBNPB9Mgnu5njcK811/sandbox/b1MHPkPIeYfBniYKq82XXh-img-2_1771962716000_na1fn_ZGF0YS1zb3VyY2VzLWlsbHVzdHJhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMGs1YmFCTlBCOU1nbnU1bmpjSzgxMS9zYW5kYm94L2IxTUhQa1BJZVlmQm5pWUtxODJYWGgtaW1nLTJfMTc3MTk2MjcxNjAwMF9uYTFmbl9aR0YwWVMxemIzVnlZMlZ6TFdsc2JIVnpkSEpoZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QF02wXpgh4rvoVz99rQQpgRI82GuZ6r61vOch-ogCiPakMkqkPdcSA2QEn9jhv83uiQNQIVrEomOic5dI4r1J9XRq9W4qW9H9jXV~Z~qoez4es1YUz3QAALcnfXjEc-JFdT1f~2v7NuD9V3XdsFP6U2GHlsokx0ydVGELxL~fy~EZQUiL5CxvB9hJSL2rF7j5x-sKhVuyxRHdKEdMP05S54SarXsf14IMd5xZVpg0-p0DDiRR54L9MdPobPCgsK6NcXO6v6VpGuT3pbo1DyVhn35VDw8i1ndks8Lz-~driNccR9BiXAgq22iD44ukhstShigdE7ozLo9dpJngG5NkQ__"
              alt="Data Sources Architecture"
              className="w-full h-auto rounded-lg"
            />
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Four Primary Data Sources</h3>
                <p className="text-muted-foreground">Each source provides critical market intelligence through APIs, web scraping, or direct integrations.</p>
              </div>
              <div className="space-y-3 pt-4">
                {[
                  { name: "NGX", desc: "Real-time equity data via REST API and FIX protocol" },
                  { name: "CBN", desc: "Macroeconomic indicators and monetary policy data" },
                  { name: "SEC", desc: "Insider trading and regulatory compliance filings" },
                  { name: "CAC", desc: "Corporate registry and ownership structures" }
                ].map((source) => (
                  <div key={source.name} className="flex gap-3 p-3 rounded-lg bg-background border border-border">
                    <Database className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{source.name}</p>
                      <p className="text-sm text-muted-foreground">{source.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">MVP Feature Set</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core features designed to replicate Finviz's functionality for the Nigerian market
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/0k5baBNPB9Mgnu5njcK811/sandbox/b1MHPkPIeYfBniYKq82XXh-img-3_1771962732000_na1fn_ZmVhdHVyZXMtc2hvd2Nhc2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMGs1YmFCTlBCOU1nbnU1bmpjSzgxMS9zYW5kYm94L2IxTUhQa1BJZVlmQm5pWUtxODJYWGgtaW1nLTNfMTc3MTk2MjczMjAwMF9uYTFmbl9abVZoZEhWeVpYTXRjMmh2ZDJOaGMyVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I722xKo4Yf~PbSAghW9zwJSYivqAbPDMaAJZSfBCryTAexBIcwSjK0J7pPkrYghlqTa40nCiDK-CMXfvskON9gH~EKl7pRHhdR~z3F144w3d3siZ7sEARQHk0Rg8oiR43awZ7o6zdNkzLrJ8T~3Kmg29rota7dGULeJLrpEflnw3VvDmao4lR3ijzU6w256gc4wWeKY32yPO4ss~K4HcJTeZCY010GdhML5wGqrM6JK9QR9rE4mTX5dbI3U4plv6W08S831EJNfCNqzVgZ4Zld8gBc-md5N1uYNgsKthjsOvlm-raJJJ1BzMzDuD2MPd~JVee91noBezDhZcNZAoDQ__"
              alt="Platform Features"
              className="w-full h-auto rounded-lg"
            />
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: BarChart3, title: "Advanced Screener", desc: "Sector-specific filters, custom criteria, and backtesting" },
                { icon: TrendingUp, title: "Heat Maps", desc: "Visualize sector performance and market momentum" },
                { icon: Users, title: "Insider Tracking", desc: "Monitor insider buying/selling activity in real-time" },
                { icon: Briefcase, title: "Institutional Holdings", desc: "Track PFA and asset manager positions" }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="border-border bg-card hover:border-emerald-500/50 transition">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="architecture" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scalable, production-ready infrastructure for high-frequency financial data
            </p>
          </div>
          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
            <TabsContent value="backend" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Backend Stack</CardTitle>
                  <CardDescription>High-performance API and data processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Framework</p>
                      <p className="text-sm text-muted-foreground">Python FastAPI for REST APIs with automatic OpenAPI documentation</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Message Queue</p>
                      <p className="text-sm text-muted-foreground">Apache Kafka for real-time data streaming and decoupling</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Processing</p>
                      <p className="text-sm text-muted-foreground">Apache Spark for distributed batch processing</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Deployment</p>
                      <p className="text-sm text-muted-foreground">Kubernetes on AWS with auto-scaling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="database" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data Storage</CardTitle>
                  <CardDescription>Optimized for financial time-series data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Time-Series</p>
                      <p className="text-sm text-muted-foreground">TimescaleDB (PostgreSQL) for price data with SQL compatibility</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Relational</p>
                      <p className="text-sm text-muted-foreground">PostgreSQL for users, watchlists, and company metadata</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Cache</p>
                      <p className="text-sm text-muted-foreground">Redis for session management and rate limiting</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Backup</p>
                      <p className="text-sm text-muted-foreground">AWS S3 with multi-region replication</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="frontend" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Stack</CardTitle>
                  <CardDescription>Modern, responsive user interfaces</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Framework</p>
                      <p className="text-sm text-muted-foreground">React 19 with TypeScript for type safety</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Styling</p>
                      <p className="text-sm text-muted-foreground">Tailwind CSS with shadcn/ui components</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">Charts</p>
                      <p className="text-sm text-muted-foreground">D3.js and Recharts for financial visualizations</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <p className="font-semibold mb-2">State</p>
                      <p className="text-sm text-muted-foreground">TanStack Query for server state management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Monetization Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Revenue Model</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diversified monetization strategy targeting retail and institutional segments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Free",
                price: "₦0",
                desc: "Basic market data access",
                features: ["Delayed data (30min)", "Limited watchlists", "Community features"]
              },
              {
                tier: "Premium",
                price: "₦2,500-₦5,000",
                desc: "Per month for retail traders",
                features: ["Real-time data", "Advanced screener", "Insider alerts", "Portfolio tracking"],
                highlighted: true
              },
              {
                tier: "Institutional",
                price: "₦500K-₦5M",
                desc: "Per year for asset managers",
                features: ["White-label options", "API access", "Custom reporting", "Dedicated support"]
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`border-2 ${plan.highlighted ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/5 to-transparent' : 'border-border'}`}>
                <CardHeader>
                  <CardTitle>{plan.tier}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                  <p className="text-2xl font-bold text-emerald-400 pt-2">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Launch Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              12-month development and market entry strategy
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { phase: "Phase 1", timeline: "Months 1-3", title: "Foundation", items: ["Legal entity formation", "SEC pre-registration", "NDPR compliance framework"] },
              { phase: "Phase 2", timeline: "Months 3-6", title: "Development", items: ["MVP development", "Institutional beta", "SEC licensing application"] },
              { phase: "Phase 3", timeline: "Months 6-9", title: "Launch", items: ["Public launch", "SEC approval", "Marketing campaign"] },
              { phase: "Phase 4", timeline: "Months 9-12+", title: "Scaling", items: ["International expansion", "New features", "Partnership ecosystem"] }
            ].map((phase, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-border last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-emerald-400">{phase.phase}</p>
                      <h3 className="text-xl font-bold mt-1">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{phase.timeline}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Nigerian Capital Markets?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the complete strategic blueprint and technical specifications for building the Finviz of Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/FINVIZ_NIGERIA_BLUEPRINT.pdf" download>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Download Full Blueprint
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold mb-4">Finviz Nigeria</p>
              <p className="text-sm text-muted-foreground">Strategic blueprint for financial data aggregation in the Nigerian capital market.</p>
            </div>
            <div>
              <p className="font-semibold mb-4">Data Sources</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>NGX</li>
                <li>CBN</li>
                <li>SEC</li>
                <li>CAC</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Features</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Stock Screener</li>
                <li>Heat Maps</li>
                <li>Insider Tracking</li>
                <li>Portfolio Tools</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Resources</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Full Blueprint</li>
                <li>Technical Specs</li>
                <li>Regulatory Guide</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Finviz Nigeria Blueprint. Strategic framework by Manus AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
