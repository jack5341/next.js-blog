// Components
import { Container } from "@chakra-ui/react";

import Navbar from "../component/layout/nav-bar/navbar";
import Content from "../component/content/share-post/sharepost";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Container maxW="container.md">
        <Content />
      </Container>
    </>
  );
}
