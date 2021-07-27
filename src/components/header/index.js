import React from "react";
import { Container, List, ListElement } from "./styles";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <Container>
      <List>
        <ListElement>Logo</ListElement>
        <ListElement>
          <BsPersonFill />
          Account
        </ListElement>
        <ListElement>
          <HiShoppingCart />
          Cart
        </ListElement>
        <ListElement>
          <BsSearch />
          Search
        </ListElement>
      </List>
    </Container>
  );
}
