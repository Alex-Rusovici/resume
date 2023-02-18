import Head from 'next/head';
import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { Experience } from '@/components/Experience';
import { Languages } from '@/components/Languages';
import { Education } from '@/components/Education';
import { TechStacks } from '@/components/TechStacks';
import { Passions } from '@/components/Passions';
import { Projects } from '@/components/Projects';

const sectionContainerLarge =
  'container mx-auto mb-8 p-6 lg:w-4/6 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-800 border border-zinc-800 rounded-xl b shadow-md shadow-zinc-500 flex flex-col gap-8';
const sectionContainerSmall =
  'container mx-auto mb-8 p-6 lg:w-2/6 bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-800 border border-zinc-800 rounded-xl b shadow-md shadow-zinc-500 flex flex-col gap-8';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rusovici Alexandru - Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_icon.svg" />
      </Head>

      <div className="CV container mx-auto mt-8 p-4">
        <Header></Header>

        <main className="mt-8 lg:flex lg:gap-8">
          <section className={sectionContainerLarge}>
            <Education></Education>
            <Experience></Experience>
            <Projects></Projects>
          </section>

          <section className={sectionContainerSmall}>
            <Summary></Summary>
            <TechStacks></TechStacks>
            <Passions></Passions>
            <Languages></Languages>
          </section>
        </main>
      </div>
    </>
  );
}
