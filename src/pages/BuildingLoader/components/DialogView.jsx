import React from 'react'
import style from './DialogView.module.less'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class DialogView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dialogMode: this.props.currentLayer?'Change':'Add' 
      };
    }
  
    componentDidMount() {
    }
  
    componentDidUpdate() {
      
    }
    componentWillReceiveProps (nextProps) {
      this.setState({dialogMode: this.props.currentLayer?'Change':'Add' })
    }
  
    render() {
      return (
        <Dialog open={this.props.isDialog}>
          <DialogTitle>{this.state.dialogMode} Layer</DialogTitle>
          <DialogContent>
            <DialogContentText>
            {/*Hello*/}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Color"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Opacity"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Height Field"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{this.props.handleClose()}} color="primary">
            Cancel
            </Button>
            <Button onClick={()=>{this.props.handleClose()}} color="primary">
            {this.state.dialogMode}
            </Button>
          </DialogActions>
        </Dialog>         
      )
    }
  }
  
  export default DialogView;