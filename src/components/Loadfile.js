import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Files from 'react-files';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Loadfile extends Component {
  constructor(props) {
    super(props);
    this.onFilesChange = this.onFilesChange.bind(this);
  }

  onFilesChange(files) {
    const fileReader = new FileReader();
    const self = this;
    fileReader.onload = function(e) {
      const jsonFile = JSON.parse(fileReader.result);
      self.props.dispatch(actions.loadFileAction(jsonFile));
    };
    console.log(files);
    fileReader.readAsText(files[0]);
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
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          <input type="submit" value="Choose a file or drag here" />
        </Files>
      </div>
    );
  }
}

export default connect(null)(Loadfile);
