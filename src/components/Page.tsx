import { storyblokEditable } from "@storyblok/react";

const Page = ({ blok }: any) => {
  return (
    <main {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
    </main>
  );
};

export default Page;
