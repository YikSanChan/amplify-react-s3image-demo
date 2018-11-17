import React, { Component } from "react";
import { Storage } from "aws-amplify";

// It might contains other fields other than uploading image
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this should be a random string
      imgKey: "example.png",
      preSignedUrl: ""
    };
    this.fetchPreSignedUrlFromS3.bind(this);
    this.handleFileChange.bind(this);
  }

  fetchPreSignedUrlFromS3 = () => {
    Storage.get(this.state.imgKey).then(preSignedUrl =>
      this.setState({ preSignedUrl })
    );
  };

  handleFileChange = event => {
    const { imgKey } = this.state;
    const file = event.target.files[0];
    Storage.put(imgKey, file, {
      contentType: "image/png"
    })
      // response.key === imgKey is ensured by Storage.put(imgKey, ...)
      .then(response => this.fetchPreSignedUrlFromS3())
      .catch(err => console.error(err));
  };

  render() {
    const { preSignedUrl } = this.state;
    return (
      <div>
        <div>
          <label>Upload an image</label>
          <input
            type="file"
            accept="image/png"
            onChange={this.handleFileChange}
          />
        </div>
        <div>
          <label>Preview the image</label>
          <img src={preSignedUrl} />
        </div>
      </div>
    );
  }
}

export default MyForm;
