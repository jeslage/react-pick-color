import type { Meta, StoryObj } from '@storybook/react-vite';

import { themes } from '..';
import ColorPickerPreview from './ColorPickerPreview';

const meta = {
  title: 'ColorPicker',
  component: ColorPickerPreview,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    color: { control: 'color' },
    theme: {
      control: 'object',
      defaultValue: themes.light
    },
    presets: { control: 'object' },
    combinations: { control: 'object' },
    hideAlpha: { control: 'boolean' },
    hideInputs: { control: 'boolean' }
  },
  render: ColorPickerPreview
} satisfies Meta<typeof ColorPickerPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    color: '#D80B4D',
    hideAlpha: false,
    hideInputs: false,
    theme: themes.light,
    presets: undefined
  }
};

export const Compact: Story = { args: { ...Simple.args, hideInputs: true, hideAlpha: true } };

export const HideInputs: Story = { args: { ...Simple.args, hideInputs: true } };

export const HideAlpha: Story = { args: { ...Simple.args, hideAlpha: true } };

export const WithPresets: Story = {
  args: {
    ...Simple.args,
    presets: [
      { r: 0, g: 0, b: 0, a: 0.1 },
      'red',
      'blue',
      'green',
      'yellow',
      'crimson',
      'grey',
      'lightgrey',
      'white',
      '#000',
      'purple',
      'papayawhip',
      'lightgreen',
      'pink'
    ]
  }
};

export const WithCombinations: Story = {
  args: { ...Simple.args, combinations: 'monochromatic' }
};

export const WithLightTheme: Story = {
  args: {
    ...Simple.args,
    combinations: ['analogous', 'complement', 'monochromatic'],
    presets: ['crimson', 'darkgreen', 'navy']
  }
};

export const WithDarkTheme: Story = {
  args: {
    ...Simple.args,
    theme: themes.dark,
    combinations: ['analogous', 'complement', 'monochromatic'],
    presets: ['crimson', 'darkgreen', 'navy']
  }
};

export const WithCustomTheme: Story = {
  args: {
    ...Simple.args,

    theme: {
      background: 'lightgrey',
      color: 'black',
      borderColor: 'darkgrey',
      borderRadius: '8px',
      width: '320px'
    },

    combinations: ['analogous', 'complement', 'monochromatic'],
    presets: ['crimson', 'darkgreen', 'navy'],
    color: '#30272a'
  }
};
