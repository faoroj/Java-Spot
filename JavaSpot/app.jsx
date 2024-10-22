import {  Navbar, Discover, Experiences, Footer, Hero, Loyalty, Offerings, SignatureBlends, Welcome } from "../sections/";

const app = () => {
  return (
    <main className="relative">
      <Navbar />

      <section className="">
         <Hero />
      </section>

      <section className="">
         <SignatureBlends />
      </section>

      <section className="">
         <Discover />
      </section>

      <section className="">
         <Experiences />
      </section>

      <section className="">
         <Offerings />
      </section>

      <section className="">
         <Welcome />
      </section>

      <section className="">
         <Loyalty />
      </section>

      <section className="">
         <Footer />
      </section>

    </main>
  )
}

export default app
