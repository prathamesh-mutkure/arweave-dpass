import MainLayout from "./components/layouts/main-layout";
import RotatingText from "./components/rotating-text";
import { Button } from "./components/ui/button";

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

            <h1 className="item-start font-heading text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
              Transparent and trustless travel history.
            </p>

            <div className="space-x-4">
              <Button size="lg" variant="default">
                For Individuals
              </Button>

              <Button variant="outline" size="lg">
                For Countries/Consulates
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
    </MainLayout>
  );
}

export default App;
