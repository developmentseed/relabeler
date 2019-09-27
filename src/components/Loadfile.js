import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from "./../actions/fetchDataActions";

class Loadfile extends Component {
  constructor(props) {
    super(props);
    this.onFilesChange = this.onFilesChange.bind(this);
  }

  onFilesChange(files) {
    this.props.dispatch(fetchData(files));
  }

  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message);
  }

  render() {
    return (
      <div className="files">
        <Files
          className="files-dropzone-list"
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['.geojson', '.json']}
          maxFiles={1}
          maxFileSize={1000000000}
          minFileSize={0}
          clickable
        >
          <input type="submit" value="Choose a file" />
        </Files>
      </div>
    );
  }
}

export default connect(null)(Loadfile);
