import * as React from 'react';
import { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import { getCards } from './api/cards';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

type Card = {
  word: string;
  target: string;
  translation: string;
  prefix?: string;
  suffix?: string;
};

export default function LearnPage() {
  const id = 'cle2vu8ln2emk0alkek38eqxq';
  const [card, setCard] = useState<Card>({
    word: '',
    target: '',
    translation: '',
  });
  useEffect(() => {
    getCards(id).then((result) => setCard(result[0]));
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Learn' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>
              <p>
                {card.prefix}
                <span className='text-green-500'>{card.word}</span>
                {card.suffix}
              </p>
            </h1>
            <p className='mt-2 text-sm text-gray-800'>{card.translation}</p>

            <input
              className='focus:shadow-outline m-2 inline-block appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              type='text'
              placeholder='Enter Pinyin'
            ></input>

            <Button className='mt-6 inline-block' variant='primary'>
              Check
            </Button>

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
