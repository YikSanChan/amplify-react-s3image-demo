import React, { Component } from "react";
import { S3Image } from "aws-amplify-react";

// It might contains other fields other than uploading image
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this should be a random string
      imgKey: "example.png"
    };
  }

  render() {
    const { imgKey } = this.state;
    return <S3Image picker imgKey={imgKey} level="private" />;
  }
}

export default MyForm;
