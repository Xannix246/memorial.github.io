import Container from "../shared/Container";
import { Text } from "../shared/Text";

const Footer = () => {
  return (
    <Container className="w-full flex justify-center h-64">
      <footer className="flex flex-col w-full place-items-center gap-8">
        <Text>Один замечательный подвал</Text>
        <div className="flex gap-2">
          <Text as="p">Github source page:</Text>
          <Text
            as="a"
            className="h-fit w-fit link"
            href="https://github.com/Xannix246/memorial.github.io"
          >
            Click
          </Text>
        </div>
        <Text 
          as="a"
          href="https://www.twitch.tv/bratishkinoff"
          className="link"
        >Братишкин, президент государства BRFF</Text>
        <Text as="p">Site by Xannix</Text>
      </footer>
    </Container>
  );
};

export default Footer;
