import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>Start Learning Hanzi Contextually</h1>
            <p className='m-10 text-sm text-gray-700'>
              <ButtonLink href='/learn'>Try it Now</ButtonLink>
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://netreality.world'>
                Charles Cole
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
