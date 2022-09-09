import PricingPlans from './PricingPlans';

export default {
  title: 'PricingPlans',
  component: PricingPlans,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

// const Template = (args) => <PricingPlans {...args} />;

export const FirstStory = {
  // args: {},
};
