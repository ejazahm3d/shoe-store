import React from "react";
import { Drawer } from "baseui/drawer";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer isOpen={isOpen} autoFocus onClose={() => setIsOpen(false)}>
      <div>drawer content</div>
    </Drawer>
  );
};

export default CartDrawer;
