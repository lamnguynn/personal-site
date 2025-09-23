import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Banner from './Banner';

describe('Banner component', () => {
  test('snapshot', () => {
    const { asFragment } = render(
      <Banner message={<p>Sample banner message</p>} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
