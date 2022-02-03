// YourComponent.stories.js|jsx

import { NavLink } from "./NavLink";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "NavLink",
  component: NavLink,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NavLink {...args} />;

export const Basic = {
  args: {
    //👇 The args you need here will depend on your component
    to: "/",
    text: "Home",
  },
};
