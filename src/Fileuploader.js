import React from 'react';
import './Fileuploader.css';

class Fileuploader extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  }


  onClickHandler = () => {
    console.log(this.state);
}
    render() {
      return (              
        <div className="container">
            <div className="form-group files">
              <label>Upload Your File</label>
              <input type="file" className="form-control input-field" name="file" onChange={this.onChangeHandler}></input>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Upload</button>
        </div>
        

      );
  }
}
export default Fileuploader;