import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ChannelHeader } from './ChannelHeader';

describe('ChannelHeader', () => {
  it('renders channel name and description', () => {
    render(<ChannelHeader name="general" description="Company-wide updates" />);
    expect(screen.getByText('#general')).toBeInTheDocument();
    expect(screen.getByText('Company-wide updates')).toBeInTheDocument();
  });
});
