import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { getContent } from '@/util';

import Content from './Content';

describe('Content component', () => {
  test('snapshot', () => {
    const { asFragment } = render(
      <Content sectionTitle={'Section title'} data={getContent(0).data} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
