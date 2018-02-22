import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Testing extends Component {


  render() {
    return (
      <Container>
        <h1>This is a testing page for logins</h1>
      </Container>
    );
  }
}

export default Testing;
