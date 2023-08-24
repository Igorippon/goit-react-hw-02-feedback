import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import  { Section } from "./Section/Section.js";

export const App = () => {
  return (
    <Layout>
      <Section />
      <GlobalStyle/>
    </Layout>
    
  );
};
