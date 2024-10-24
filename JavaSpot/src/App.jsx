import {  Navbar, Discover, Experiences, Footer, Hero, Loyalty, Offerings, SignatureBlends, Welcome } from "./sections";

const app = () => {
  return (
    <main className="relative">
      <Navbar/>

      <section className="">
         <Hero />
      </section>

      <section className="padding-x padding-y bg-secondary">
         <SignatureBlends />
      </section>     

      <section className="padding-x padding-y bg-primary">
         <Experiences />
      </section>

      <section className="padding-x padding-y bg-secondary">
         <Offerings />
      </section>

      <section className="">
         <Welcome />
      </section>

      <section className="">
         <Discover />
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
