import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ImageComponent } from './image.component';

export default {
  title: 'Example/Image Component',
  component: ImageComponent,
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
  component: ImageComponent,
  props: args,
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
  figCaptionTxt: '',
  title:" "
};

export const NoImageCaption2 = Template.bind({});
NoImageCaption.args = {
  figCaptionTxt: '',
};

export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};