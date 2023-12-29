import Button from '../src/Button'

export default {
  title: 'BasicStyle/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    title: 'button',
    type: 'lineBlue',
    onClick: () => alert('클릭!'),
  },
  argTypes: {
    type: {
      options: ['lineBlue', 'lineBlack', 'blue', 'black', 'disabled'],
      control: { type: 'radio' },
    },
  },
}
