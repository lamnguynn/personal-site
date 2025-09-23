import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { HomeProvider } from '@/context/HomeContext';

import Modal from './Modal';

describe('Modal component', () => {
  test('snapshot', () => {
    const { asFragment } = render(
      <HomeProvider>
        <Modal />
      </HomeProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
