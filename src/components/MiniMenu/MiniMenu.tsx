import { Menu, Button, Portal } from "@chakra-ui/react";
export const MiniMenu = () => {
  return (
    <div>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            ≡
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content></Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};
