import MainLayout from "./components/layouts/main-layout";
import RotatingText from "./components/rotating-text";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";

const features = [
  {
    title: "Single Passport Solution",
    desc: "Users can manage their entire travel history in one secure digital passport, reducing the risk of losing physical documents",
  },
  {
    title: "Efficient Visa Processing",
    desc: "Embassies and consulates can use dPass for faster, more efficient visa processing, enhancing the overall application experience",
  },
  {
    title: "Blockchain Security",
    desc: "Utilizing the blockchain ensures that travel history is immutable, transparent, and resistant to tampering",
  },
];

function App() {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[radial-gradient(39.13%_66.21%_at_69.97%_53.55%,_#444DD4_0%,_#333AA0_100%)]">
        <div>
          <span>
            <img
              decoding="async"
              src="/images/landing/corner-1.svg"
              alt="Transpact"
              className="absolute left-0 top-0 block"
            />
          </span>
          <span>
            <img
              decoding="async"
              src="/images/landing/corner-2.svg"
              alt="Transpact"
              className="absolute bottom-0 left-[228px] block"
            />
          </span>
          <span>
            <img
              decoding="async"
              src="/images/landing/corner-3.svg"
              alt="Transpact"
              className="absolute left-[44%] top-0 block"
            />
          </span>
          <span>
            <img
              decoding="async"
              src="/images/landing/corner-4.svg"
              alt="Transpact"
              className="absolute bottom-0 left-[calc(100%_-_170px)] block"
            />
          </span>
        </div>

        <div className="relative mx-auto flex max-w-screen-xl flex-row pt-[10%]">
          <div className="container flex flex-col items-start gap-4 text-center">
            <a
              href={"/"}
              className="rounded-2xl bg-white px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              View this on GitHub
            </a>

            <h1 className="item-start font-heading text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <RotatingText
                texts={[
                  "One Life",
                  "One Passport",
                  "Zero Hassel",
                  "Full Transparency",
                ]}
                period={1000}
              />
            </h1>

            <p className="max-w-[42rem] leading-normal text-white sm:text-xl sm:leading-8 text-left">
              A Decentralised App based on React and Arweave Network. <br />
              Transparent and trustless travel history and visa services.
            </p>

            <div className="space-x-4">
              <Button size="lg" variant="default">
                For Individuals
              </Button>

              <Button variant="outline" size="lg">
                For Governments
              </Button>
            </div>
          </div>

          <div className="max-w-lg rounded-full bg-[linear-gradient(180deg,_#5A63E9_0%,_#3B42A8_100%)] px-8 pt-8">
            <img
              decoding="async"
              src="/images/landing/hero-img.png"
              alt="Hero"
              className="z-5 -mt-8 w-full"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-28 container">
        <h1 className="font-heading font-extrabold text-7xl text-center">
          Decentralised Travel Pass
        </h1>

        <Separator className="my-12" />

        <p className="text-muted-foreground text-center text-2xl font-light">
          Unlock the future of hassle-free travel with{" "}
          <strong>PermaPassport</strong> - the world's first blockchain-powered
          digital passport solution.
          {/* <br /> */} Say goodbye to lost passports, cumbersome visa
          applications, and security concerns.
          {/* <br /> */} Seamlessly manage your travel history, apply for visas,
          and experience a new era of borderless convenience.
          <br />
          <br />
          <strong>
            Secure. Streamlined. Simple. Welcome to the passport revolution.
          </strong>
        </p>
      </section>

      <section id="solution" className="py-28 bg-black">
        <div className="container">
          <h1 className="font-heading font-extrabold text-7xl text-white text-center">
            Why PermaPass?
          </h1>

          <div className="flex flex-row gap-x-4 gap-y-8 justify-evenly flex-wrap my-20">
            {features.map((feature) => (
              <Card className="bg-transparent w-[350px]">
                <CardHeader>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
