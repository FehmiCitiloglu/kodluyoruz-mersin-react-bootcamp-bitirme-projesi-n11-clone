import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MainPageCarousel, Props } from '../src/components/MainPageCarousel';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

const meta: Meta = {
  title: 'n11lib/MainPage',
  component: MainPageCarousel,
  subcomponents: {
    RightOutlined,
    LeftOutlined,
    Carousel,
  },
  argTypes: {
    children: {
      control: {
        type: 'image',
      },
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <MainPageCarousel {...args} />;

export const Default = Template.bind({});

Default.args = {};
