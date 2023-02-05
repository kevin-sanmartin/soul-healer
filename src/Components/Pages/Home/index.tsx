import Button from "@/src/Components/Button";
import Dropdown from "@/src/Components/Dropdown";
import Layout from "@/src/Components/Layout";
import Text from "@/src/Components/Text";
import { EButtonSize, EButtonVariant } from "@/src/Entities/Button";
import { ETextTag } from "@/src/Entities/Text";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <Button variant={EButtonVariant.PRIMARY} size={EButtonSize.LARGE}>
          Button
        </Button>
        <Button variant={EButtonVariant.PRIMARY} size={EButtonSize.MEDIUM}>
          Button
        </Button>
        <Button variant={EButtonVariant.PRIMARY} size={EButtonSize.SMALL}>
          Button
        </Button>
      </div>
      <div>
        <Button variant={EButtonVariant.SECONDARY} size={EButtonSize.LARGE}>
          Button
        </Button>
        <Button variant={EButtonVariant.SECONDARY} size={EButtonSize.MEDIUM}>
          Button
        </Button>
        <Button variant={EButtonVariant.SECONDARY} size={EButtonSize.SMALL}>
          Button
        </Button>
      </div>
      <div>
        <Button variant={EButtonVariant.TERTIARY} size={EButtonSize.LARGE}>
          Button
        </Button>
        <Button variant={EButtonVariant.TERTIARY} size={EButtonSize.MEDIUM}>
          Button
        </Button>
        <Button variant={EButtonVariant.TERTIARY} size={EButtonSize.SMALL}>
          Button
        </Button>
      </div>

      <Dropdown title="Collapsible element">
        <Text tag={ETextTag.P}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem praesentium eligendi, eveniet nostrum
          reprehenderit similique temporibus excepturi numquam aperiam possimus est nulla esse sint deserunt ipsum
          quibusdam veritatis obcaecati iste?
        </Text>
      </Dropdown>
      <Dropdown title="Collapsible element">
        <Text tag={ETextTag.P}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem praesentium eligendi, eveniet nostrum
          reprehenderit similique temporibus excepturi numquam aperiam possimus est nulla esse sint deserunt ipsum
          quibusdam veritatis obcaecati iste?
        </Text>
      </Dropdown>
      <Dropdown title="Collapsible element">
        <Text tag={ETextTag.P}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem praesentium eligendi, eveniet nostrum
          reprehenderit similique temporibus excepturi numquam aperiam possimus est nulla esse sint deserunt ipsum
          quibusdam veritatis obcaecati iste?
        </Text>
      </Dropdown>
      <Dropdown title="Collapsible element">
        <Text tag={ETextTag.P}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem praesentium eligendi, eveniet nostrum
          reprehenderit similique temporibus excepturi numquam aperiam possimus est nulla esse sint deserunt ipsum
          quibusdam veritatis obcaecati iste?
        </Text>
      </Dropdown>
    </Layout>
  );
}
