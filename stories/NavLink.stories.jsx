// YourComponent.stories.js|jsx

import { NavLink } from "./NavLink";

//π This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "NavLink",
  component: NavLink,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <NavLink {...args} />;

export const Basic = {
  args: {
    //π The args you need here will depend on your component
    to: "/",
    text: "Home",
  },
};
